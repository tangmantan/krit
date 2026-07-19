import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight } from '@material-ui/icons';
import CircleButton from '../CircleButton/CircleButton';
import { Icons } from '../../config/icons';
import './Notice.scss';

const Notice = () => {
    const [isHiding, setIsHiding] = useState(false);
    const [hidden, setHidden] = useState(false);

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
        }, 1000);
    }, []);

    if (hidden) return null;

    const wrapperClassNames = ['notice', isHiding && 'is-hiding'].filter(Boolean).join(' ');

    return (
        <div className={wrapperClassNames}>
            <div className="notice-content">
                <h1>
                    <span>重要通知</span>
                    <br />
                    这是一个
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
            <CircleButton className="to-website" onClick={handleClose} size={4} tooltip="回到主页">
                <ChevronRight />
            </CircleButton>
        </div>
    );
};

export default Notice;
