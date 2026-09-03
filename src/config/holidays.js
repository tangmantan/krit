/**
 * 节假日配置文件
 *
 * 支持两种类型的节假日:
 * 1. 公历节假日 (solar) - 直接匹配月/日
 * 2. 农历节假日 (lunar) - 通过农历转换后匹配
 *
 * 配置说明:
 * - name: 节假日名称
 * - text: 显示的文字
 * - nextText: 下一行的文字（可选）
 * - color: 文字颜色（可选，如 '#ff0000'、'rgba(255,0,0,0.8)'）
 * - background: 背景图片（支持本地文件名或URL地址）
 *   - 本地文件名: 'gq.png'（放在 src/assets/images 目录下）
 *   - URL地址: 'https://example.com/image.jpg'
 * - type: 'solar' | 'lunar'
 * - month: 月份 (1-12)
 * - day: 日期 (1-31)
 * - days: 显示天数 (从节日当天开始算，填1就只显示当天，填3就显示3天)
 * - offset: 偏移天数 (可选, 用于计算如"中秋节后一天"这样的场景)
 * - weight: 权重 (当多个节日日期重叠时，权重高的优先显示，默认0)
 *
 * 添加新节假日只需在此数组中增加一条记录，并把对应图片放到 src/assets/images 目录即可
 */
const HolidaysConfig = [
    
    {
        name: '生日',
        text: '生日快乐',
        color: '#ff69b4', // 粉色，温馨浪漫
        background: 'sr.png',
        type: 'lunar',
        month: 8,
        day: 16,
        days: 1,
        weight: 10, // 权重高于中秋，16日优先显示生日
    },
    {
        name: '中秋节',
        text: '中秋节快乐',
        nextText: '祝您：月圆人安，岁岁团圆',
        color: '#ffa500', // 橙黄色，象征明月和团圆
        background: 'zq.png',
        type: 'lunar',
        month: 8,
        day: 15,
        days: 3,
        weight: 2,
    },
    {
        name: '国庆节',
        text: '国庆节快乐',
        nextText: '家国同庆，盛世安康',
        color: '#ff0000', // 红色，中国国旗主色
        background: 'gq.png',
        type: 'solar',
        month: 10,
        day: 1,
        days: 7,
        weight: 0,
    },
    {
        name: '春节',
        text: '新春快乐',
        nextText: '祝您：新年吉祥，好运连连',
        color: '#ff4500', // 红金色，喜庆热烈
        background: 'cj.png',
        type: 'lunar',
        month: 1,
        day: 1,
        days: 7, // 春节显示7天
    },
];

export { HolidaysConfig };
