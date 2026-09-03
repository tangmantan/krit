import { Solar, Lunar } from 'lunar-javascript';
import { HolidaysConfig } from '../config/holidays';

/**
 * 测试模式开关
 * 设为 true 时使用 TEST_DATE 指定的日期，设为 false 时使用服务器时间
 */
const TEST_MODE = false;
// 测试日期：手动修改这里来测试不同日期的节日显示 格式：年, 月, 日
const TEST_DATE = new Date(2026, 9, 1); // 测试 2026年10月1日，月份需要减1

/**
 * 将日期转换为时间戳（仅比较年月日）
 */
const toDateStamp = (year, month, day) => {
    return new Date(year, month - 1, day).getTime();
};

/**
 * 从服务器获取当前时间
 * 使用 worldtimeapi.org 公开API，免费无需注册
 * @returns {Promise<Date>} 服务器时间
 */
export const getServerTime = async () => {
    // 测试模式：返回指定的测试日期
    if (TEST_MODE) {
        console.log('🧪 TEST MODE: Using test date:', TEST_DATE.toLocaleDateString());
        return TEST_DATE;
    }

    // 备用方案：使用 timeapi.io
    try {
        const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=Asia/Shanghai');
        if (response.ok) {
            const data = await response.json();
            return new Date(data.year, data.month - 1, data.day, data.hour, data.minute, data.seconds);
        }
    } catch (e) {
        console.warn('Failed to fetch server time from timeapi.io:', e);
    }

    try {
        // 尝试从 worldtimeapi.org 获取北京时间
        const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Shanghai');
        if (response.ok) {
            const data = await response.json();
            return new Date(data.datetime);
        }
    } catch (e) {
        console.warn('Failed to fetch server time from worldtimeapi.org:', e);
    }
    // 最终回退到本地时间
    console.warn('All server time APIs failed, using local time');
    return new Date();
};

/**
 * 根据指定日期获取匹配的节假日信息
 * @param {Date} date 日期对象
 * @returns {Object|null} 匹配的节假日配置，如果没有匹配则返回 null
 */
const findHolidayByDate = (date) => {
    const solarYear = date.getFullYear();
    const solarMonth = date.getMonth() + 1;
    const solarDay = date.getDate();
    const todayStamp = toDateStamp(solarYear, solarMonth, solarDay);

    // 按权重降序排序（权重高的优先匹配）
    const sortedHolidays = [...HolidaysConfig].sort((a, b) => (b.weight || 0) - (a.weight || 0));

    for (const holiday of sortedHolidays) {
        const days = holiday.days || 1;

        if (holiday.type === 'solar') {
            // 公历节假日
            const startStamp = toDateStamp(solarYear, holiday.month, holiday.day);
            const endStamp = startStamp + days * 24 * 60 * 60 * 1000;

            if (todayStamp >= startStamp && todayStamp < endStamp) {
                return holiday;
            }
        } else if (holiday.type === 'lunar') {
            // 农历节假日需要转换后匹配
            try {
                // 计算当前年份农历日期对应的公历日期
                const lunarDate = Lunar.fromYmd(solarYear, holiday.month, holiday.day);
                const solarDate = lunarDate.getSolar();

                let startYear = solarDate.getYear();
                let startMonth = solarDate.getMonth();
                let startDay = solarDate.getDay();

                // 处理偏移（如"中秋节后一天"）
                if (holiday.offset) {
                    const offsetDate = Solar.fromYmd(startYear, startMonth, startDay);
                    const nextDate = offsetDate.next(holiday.offset);
                    startYear = nextDate.getYear();
                    startMonth = nextDate.getMonth();
                    startDay = nextDate.getDay();
                }

                const startStamp = toDateStamp(startYear, startMonth, startDay);
                const endStamp = startStamp + days * 24 * 60 * 60 * 1000;

                if (todayStamp >= startStamp && todayStamp < endStamp) {
                    return holiday;
                }
            } catch (e) {
                // 农历日期可能在某些年份不存在（如闰月），跳过
                console.warn(`Holiday "${holiday.name}" calculation failed for year ${solarYear}:`, e);
            }
        }
    }

    return null;
};

/**
 * 获取当前日期匹配的节假日信息（使用服务器时间）
 * 支持 days 字段（节日显示天数）和 weight 字段（权重高的优先匹配）
 * @returns {Promise<Object|null>} 匹配的节假日配置，如果没有匹配则返回 null
 */
export const getTodayHoliday = async () => {
    const serverDate = await getServerTime();
    return findHolidayByDate(serverDate);
};

/**
 * 同步版本：使用本地时间获取节假日信息（作为备用）
 * @returns {Object|null} 匹配的节假日配置
 */
export const getTodayHolidaySync = () => {
    return findHolidayByDate(new Date());
};

/**
 * 动态加载背景图片
 * @param {string} source 图片文件名或URL地址
 * @returns {string|null} 图片URL或null
 */
export const getBackgroundImage = (source) => {
    if (!source) return null;
    // 如果是URL地址，直接返回
    if (source.startsWith('http://') || source.startsWith('https://')) {
        return source;
    }
    // 否则作为本地文件名加载
    try {
        return require(`../assets/images/${source}`);
    } catch (e) {
        console.warn(`Background image not found: ${source}`);
        return null;
    }
};
