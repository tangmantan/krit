/**
 * 字体加载器 - 优先加载远程字体，失败后切换到本地字体
 */
class FontLoader {
    constructor() {
        this.fonts = [
            {
                name: '阿里妈妈东方大楷 Regular',
                remoteUrl: 'https://tanmantang.oss-cn-chengdu.aliyuncs.com/www/font/AlimamaDongFangDaKai/AlimamaDongFangDaKai-Regular.woff2',
                localFallbackClass: 'font-local-only'
            },
            {
                name: '得意黑 斜体',
                remoteUrl: 'https://tanmantang.oss-cn-chengdu.aliyuncs.com/www/font/SmileySans/SmileySans-Oblique.woff2',
                localFallbackClass: 'font-local-only'
            }
        ];
    }

    init() {
        this.fonts.forEach(font => this.loadFont(font));
    }

    loadFont(font) {
        const testElement = document.createElement('div');
        Object.assign(testElement.style, {
            fontSize: '200px',
            position: 'absolute',
            left: '-9999px',
            top: '-9999px',
            fontFamily: font.name
        });
        testElement.textContent = '我';
        document.body.appendChild(testElement);

        const initialWidth = testElement.offsetWidth;

        const checkAndCleanup = () => {
            if (!document.body.contains(testElement)) return;

            const newWidth = testElement.offsetWidth;
            if (newWidth === initialWidth) {
                this.testRemoteFont(font);
            }
            document.body.removeChild(testElement);
        };

        setTimeout(checkAndCleanup, 1000);
    }

    testRemoteFont(font) {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', font.remoteUrl);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                setTimeout(() => {
                    document.body.classList.add(font.localFallbackClass);
                }, 1000);
            } else {
                document.body.classList.add(font.localFallbackClass);
            }
        };

        xhr.onerror = () => {
            document.body.classList.add(font.localFallbackClass);
        };

        xhr.send();
    }
}

const fontLoader = new FontLoader();
export default fontLoader;
