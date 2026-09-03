import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight } from '@material-ui/icons';
import CircleButton from '../CircleButton/CircleButton';
import { Icons } from '../../config/icons';
import { getTodayHoliday, getTodayHolidaySync, getBackgroundImage } from '../../utils/holiday';
import './Notice.scss';

const Notice = ({ onClose }) => {
    const [isHiding, setIsHiding] = useState(false);
    const [hidden, setHidden] = useState(false);
    // 先使用同步版本获取本地时间的节日信息（立即显示）
    const [holiday, setHoliday] = useState(() => getTodayHolidaySync());

    // 异步获取服务器时间的节日信息（刷新页面时更新）
    useEffect(() => {
        const fetchHoliday = async () => {
            try {
                const serverHoliday = await getTodayHoliday();
                setHoliday(serverHoliday);
                // 如果服务器时间确认没有节日，直接关闭
                if (!serverHoliday) {
                    onClose && onClose();
                }
            } catch (e) {
                console.warn('Failed to fetch holiday from server time:', e);
                // 保持使用本地时间的结果
            }
        };
        fetchHoliday();
    }, [onClose]);

    // 默认文字（非节假日时显示）
    const displayText = holiday ? holiday.text : '欢迎访问';
    const displayNextText = holiday ? holiday.nextText : 'tanmantang';

    useEffect(() => {
        document.body.style.setProperty('overflow', 'hidden');
        return () => {
            document.body.style.removeProperty('overflow');
        };
    }, []);

    const handleClose = useCallback(() => {
        document.body.style.removeProperty('overflow');
        setIsHiding(true);
        setTimeout(() => {
            setHidden(true);
            setIsHiding(false);
            onClose && onClose();
        }, 1000);
    }, [onClose]);

    if (hidden) return null;

    const wrapperClassNames = ['notice', isHiding && 'is-hiding'].filter(Boolean).join(' ');

    // 动态获取背景图片
    const backgroundImage = holiday ? getBackgroundImage(holiday.background) : null;
    const backgroundStyle = backgroundImage
        ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            // backgroundPosition: 'center',
        }
        : {};

    return (
        <div className={wrapperClassNames} style={backgroundStyle}>
            <div className="notice-content">
                <h1 style={holiday?.color ? { color: holiday.color } : {}}>
                    <span>{displayText}</span>
                    <br />
                    {displayNextText}
                </h1>
                
                <CircleButton link="https://news.cctv.com/" tooltip="央视新闻">
                    {Icons['cctv_news']}
                </CircleButton>
                <CircleButton link="https://www.douyin.com/" tooltip="抖音观看">
                    {Icons['douyin']}
                </CircleButton>
                <CircleButton link="https://weibo.com" tooltip="微博新闻">
                    {Icons['weibo']}
                </CircleButton>
                <CircleButton link="https://www.bilibili.com/video/BV1Au4y1N7Pe?t=6.1" tooltip="观看视频">
                    {Icons['bilibili']}
                </CircleButton>
            </div>
            <CircleButton className="to-website" onClick={handleClose} size={4} tooltip="回到主页" style={{ border: 'none' }}>
                <ChevronRight />
            </CircleButton>
        </div>
    );
};

export default Notice;
