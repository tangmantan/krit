import React, { useEffect, useRef } from 'react';
import './StickerSlap.scss';

/**
 * StickerSlap 组件 - 点击屏幕放置 emoji 贴纸效果
 * 基于原始 Sticker slapper 项目移植
 */
const StickerSlap = () => {
    const stageRef = useRef(null);

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const slapper = new StickerSlapClass(stage);

        const palette = [
            "🎉", "🔥", "🤣", "😍", "🦖", "🍕","🐮",
            "🌈", "👾", "🍩", "✨", "💩", "🍠"
        ];

        // 放置贴纸的函数（使用页面坐标）
        const placeSticker = (pageX, pageY) => {
            const glyph = palette[Math.floor(Math.random() * palette.length)];
            slapper.slap(emojiToImage(glyph), {
                pageX: pageX,
                pageY: pageY,
            });
        };

        // 检查是否为交互元素
        const isInteractiveElement = (target) => {
            return target.closest('a, button, input, textarea, select, [role="button"]');
        };

        // 检查是否在 Notice 公告页或导航栏内（这些区域禁用贴纸）
        const isInNotice = (target) => {
            return target.closest('.notice, .navbar');
        };

        // 鼠标点击事件（仅处理非触摸设备）
        const handlePointerDown = (e) => {
            // 如果是触摸事件，跳过（由 touchend 处理）
            if (e.pointerType === 'touch') return;
            if (isInteractiveElement(e.target)) return;
            if (isInNotice(e.target)) return;
            placeSticker(e.pageX, e.pageY);
        };

        // 触摸事件 - 区分滑动和点击
        let touchStartX = 0;
        let touchStartY = 0;
        const TOUCH_THRESHOLD = 10; // 触摸移动阈值

        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            touchStartX = touch.pageX;
            touchStartY = touch.pageY;
        };

        const handleTouchEnd = (e) => {
            if (isInteractiveElement(e.target)) return;
            if (isInNotice(e.target)) return;
            
            const touch = e.changedTouches[0];
            const deltaX = Math.abs(touch.pageX - touchStartX);
            const deltaY = Math.abs(touch.pageY - touchStartY);
            
            // 只有移动距离小于阈值时才认为是点击
            if (deltaX < TOUCH_THRESHOLD && deltaY < TOUCH_THRESHOLD) {
                placeSticker(touch.pageX, touch.pageY);
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("touchstart", handleTouchStart, { passive: true });
        document.addEventListener("touchend", handleTouchEnd);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
            // 清理 slapper 的事件监听器
            slapper.destroy();
        };
    }, []);

    return (
        <div ref={stageRef} id="sticker-stage" className="sticker-stage" />
    );
};

// ========== 贴纸效果核心逻辑 ==========

/**
 * 获取适合当前屏幕的贴纸尺寸范围
 * @returns {Array} [最小尺寸, 最大尺寸]
 */
function getStickerSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
        return [30, 100]; // 手机小屏
    } else if (screenWidth <= 768) {
        return [40, 180]; // 手机/小平板
    } else {
        return [50, 500]; // 桌面端
    }
}

/** 贴纸配置常量 */
const SETTINGS = {
    size: getStickerSize, // 动态获取尺寸范围
    x: null,
    y: null,
    rotation: null,
    curlAngle: null,
    startCurl: 0.15, // 初始展开程度
    duration: 1100, // 展开动画时长(毫秒)
    onLand: null, // 贴纸落地回调
};

/** 创建带类名的 div 层 */
function layer(cls) {
    const node = document.createElement("div");
    node.className = `sticker__layer ${cls}`;
    return node;
}

/** 设置 CSS 自定义属性 */
function setVars(node, vars) {
    for (const k in vars) node.style.setProperty(k, String(vars[k]));
}

/** 安全取消动画 */
function cancelSafe(anim) {
    try { anim.cancel(); } catch (_) {}
}

/** 数值限制在指定范围内 */
function clamp(v, lo, hi) {
    return Math.min(hi, Math.max(lo, v));
}

/** 数值限制在 0-1 范围内 */
function clamp01(v) {
    return clamp(v, 0, 1);
}

/** 生成指定范围的随机数 */
function rand(lo, hi) {
    return lo + Math.random() * (hi - lo);
}

/**
 * 解析尺寸配置
 * @param {Array|Function} size - 尺寸范围或获取尺寸的函数
 * @returns {number} 解析后的尺寸值
 */
function resolveSize(size) {
    const sizeRange = typeof size === 'function' ? size() : size;
    return Array.isArray(sizeRange) ? Math.round(rand(sizeRange[0], sizeRange[1])) : sizeRange;
}

/** emoji 正则匹配 */
const EMOJI_RE = /\p{Extended_Pictographic}/u;

/** 检测是否为 emoji */
function isEmoji(str) {
    return (
        typeof str === "string" &&
        EMOJI_RE.test(str) &&
        !/^https?:|^data:|\.(png|svg|webp|jpe?g|gif)$/i.test(str)
    );
}

/** 将贴纸源转换为 URL 字符串 */
function toImageSrc(source) {
    if (typeof source === "string") return source;
    if (source instanceof HTMLImageElement) return source.currentSrc || source.src;
    if (source instanceof HTMLCanvasElement) return source.toDataURL("image/png");
    throw new Error("StickerSlap.slap expects image data (URL/data-URL string) or an image element.");
}

/** emoji 图片缓存 */
const emojiImageCache = new Map();

/**
 * 将 emoji 渲染为 PNG data URL
 * @param {string} emoji - emoji 字符
 * @param {Object} options - 渲染选项
 * @returns {string} data URL
 */
function emojiToImage(emoji, { size = 256, padding = 0.12, paper = true } = {}) {
    const key = `${emoji}@${size}|${padding}|${paper}`;
    if (emojiImageCache.has(key)) return emojiImageCache.get(key);

    const dpr = Math.max(2, window.devicePixelRatio || 1);
    const px = Math.round(size * dpr);
    const canvas = document.createElement("canvas");
    canvas.width = px;
    canvas.height = px;
    const ctx = canvas.getContext("2d");

    const border = paper ? Math.max(1, size * 0.022) * dpr : 0;
    const pad = size * padding * dpr + border;
    const fontPx = Math.round(px - pad * 2);
    const font = `${fontPx}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
    const cx = px / 2;
    const cy = px / 2 + fontPx * 0.04;

    ctx.font = font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (border > 0) {
        const mark = document.createElement("canvas");
        mark.width = px;
        mark.height = px;
        const mctx = mark.getContext("2d");
        mctx.font = font;
        mctx.textAlign = "center";
        mctx.textBaseline = "middle";
        mctx.fillText(emoji, cx, cy);
        mctx.globalCompositeOperation = "source-in";
        mctx.fillStyle = "#fff";
        mctx.fillRect(0, 0, px, px);

        const steps = 24;
        for (let i = 0; i < steps; i++) {
            const a = (i / steps) * Math.PI * 2;
            ctx.drawImage(mark, Math.cos(a) * border, Math.sin(a) * border);
        }
    }

    ctx.fillText(emoji, cx, cy);

    const url = canvas.toDataURL("image/png");
    emojiImageCache.set(key, url);
    return url;
}

/** 贴纸唯一 ID 计数器 */
let uid = 0;

/**
 * StickerSlap 核心类 - 管理贴纸的创建和动画
 */
class StickerSlapClass {
    /**
     * @param {HTMLElement} stage - 贴纸容器元素
     * @param {Object} options - 配置选项
     */
    constructor(stage, options = {}) {
        if (!stage) throw new Error("StickerSlap requires a stage element.");
        this.stage = stage;
        this.defaults = { ...SETTINGS, ...options };
        this.stickers = [];
        this.maxStickers = 50; // 最大贴纸数量
        this.stageRect = null; // 缓存 stage 位置
        this._updateStageRect();

        const cs = getComputedStyle(stage);
        if (cs.position === "static") stage.style.position = "relative";

        // 监听滚动和 resize 更新缓存
        this._handleUpdate = () => this._updateStageRect();
        window.addEventListener('scroll', this._handleUpdate, { passive: true });
        window.addEventListener('resize', this._handleUpdate, { passive: true });
    }

    /** 更新 stage 位置缓存 */
    _updateStageRect() {
        this.stageRect = this.stage.getBoundingClientRect();
    }

    /**
     * 放置一个贴纸
     * @param {string} source - 图片源(URL/data-URL)
     * @param {Object} opts - 放置选项
     * @returns {Promise<HTMLElement>} 贴纸元素
     */
    async slap(source, opts = {}) {
        const o = { ...this.defaults, ...opts };
        o.size = resolveSize(o.size);

        // 限制贴纸数量，移除最旧的
        while (this.stickers.length >= this.maxStickers) {
            const old = this.stickers.shift();
            old.remove();
        }

        const el = this._createSticker(toImageSrc(source), o);
        this.stage.appendChild(el);
        this.stickers.push(el);

        await this._animateIn(el, o);
        if (typeof o.onLand === "function") o.onLand(el);
        return el;
    }

    /** 清除所有贴纸 */
    clear() {
        this.stickers.forEach((s) => s.remove());
        this.stickers = [];
    }

    /** 销毁实例，清理事件监听器 */
    destroy() {
        window.removeEventListener('scroll', this._handleUpdate);
        window.removeEventListener('resize', this._handleUpdate);
        this.clear();
    }

    /** 简化贴纸元素，移除动画相关属性 */
    _settle(el) {
        const flat = el.querySelector(".sticker__flat");
        const vars = ["--src", "--u0", "--u1", "--w0", "--w1", "--minp",
            "--span", "--big", "--s", "--ca", "--a", "--b", "--d", "--p"];
        for (const name of vars) el.style.removeProperty(name);
        el.replaceChildren(flat);
        // 保持 translate3d 位置
        const currentTransform = el.style.transform;
        const translateMatch = currentTransform.match(/translate3d\([^)]*\)/);
        const translate = translateMatch ? translateMatch[0] : '';
        el.style.transform = `${translate} rotate(${el._restRotation}deg)`;
    }

    /** 创建贴纸 DOM 元素 */
    _createSticker(src, o) {
        const S = o.size;

        // 使用页面坐标或随机位置
        let left, top;
        if (o.pageX !== undefined && o.pageY !== undefined) {
            // 使用缓存的 stage 位置
            const stagePageX = this.stageRect.left + window.scrollX;
            const stagePageY = this.stageRect.top + window.scrollY;
            left = o.pageX - stagePageX - S / 2;
            top = o.pageY - stagePageY - S / 2;
        } else {
            // 随机位置（备用）
            const fx = o.x == null ? Math.random() : clamp01(o.x);
            const fy = o.y == null ? Math.random() : clamp01(o.y);
            const half = S / 2;
            left = clamp(fx * this.stageRect.width, half, this.stageRect.width - half) - half;
            top = clamp(fy * this.stageRect.height, half, this.stageRect.height - half) - half;
        }

        const rest = o.rotation == null ? rand(-12, 12) : o.rotation;
        const angle =
            (o.curlAngle == null ? rand(0, 360) : o.curlAngle) * (Math.PI / 180);

        const u = [Math.cos(angle), Math.sin(angle)];
        const w = [-Math.sin(angle), Math.cos(angle)];
        const projs = [
            [0, 0], [S, 0], [S, S], [0, S],
        ].map((c) => c[0] * u[0] + c[1] * u[1]);
        const minP = Math.min(...projs);
        const span = Math.max(...projs) - minP;
        const p0 = clamp01(o.startCurl);

        const el = document.createElement("div");
        el.className = "sticker";
        el.dataset.id = `sticker-${++uid}`;
        // 使用 transform 定位，利用 GPU 加速
        Object.assign(el.style, {
            position: 'absolute',
            left: '0',
            top: '0',
            width: `${S}px`,
            height: `${S}px`,
            transform: `translate3d(${left}px, ${top}px, 0)`,
        });

        setVars(el, {
            "--src": `url("${src}")`,
            "--u0": u[0],
            "--u1": u[1],
            "--w0": w[0],
            "--w1": w[1],
            "--minp": minP,
            "--span": span,
            "--big": S * 6,
            "--s": S,
            "--ca": 90 + (angle * 180) / Math.PI,
            "--a": 1 - 2 * u[0] * u[0],
            "--b": -2 * u[0] * u[1],
            "--d": 1 - 2 * u[1] * u[1],
            "--p": p0,
        });

        const flat = layer("sticker__flat");
        const img = document.createElement("img");
        img.className = "sticker__img";
        img.src = src;
        img.draggable = false;
        flat.appendChild(img);

        const flapShadow = layer("sticker__flap-shadow");
        const flapClip = layer("sticker__flap-clip");
        const flapInner = layer("sticker__flap-inner");
        const flapFill = layer("sticker__flap-fill");
        flapInner.appendChild(flapFill);
        flapClip.appendChild(flapInner);
        flapShadow.appendChild(flapClip);

        el.append(flat, flapShadow);

        el._restRotation = rest;
        el._startCurl = p0;
        return el;
    }

    /** 执行贴纸入场动画 */
    _animateIn(el, o) {
        const rest = el._restRotation;
        // 保持 translate3d 位置
        const baseTransform = el.style.transform.replace(/rotate\([^)]*\)/, '').trim();

        const entrance = el.animate(
            [
                { offset: 0, transform: `${baseTransform} rotate(${rest}deg) scale(1.06)`, opacity: 0 },
                { offset: 0.2, transform: `${baseTransform} rotate(${rest}deg) scale(1.0)`, opacity: 1 },
                { offset: 1, transform: `${baseTransform} rotate(${rest}deg) scale(1.0)`, opacity: 1 },
            ],
            { duration: o.duration, easing: "ease-out", fill: "both" },
        );

        const unroll = el.animate(
            [{ "--p": el._startCurl }, { "--p": 1 }],
            { duration: o.duration, easing: "ease-in-out", fill: "both" },
        );

        return Promise.all([entrance.finished, unroll.finished]).then(() => {
            el.style.setProperty("--p", "1");
            el.style.transform = `${baseTransform} rotate(${rest}deg)`;
            cancelSafe(entrance);
            cancelSafe(unroll);
            this._settle(el);
            return el;
        });
    }
}

export default StickerSlap;