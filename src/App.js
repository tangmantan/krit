import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import TopSection from './sections/TopSection/TopSection';
import CustomSections from './sections/CustomSections/CustomSections';
import Footer from './sections/Footer/Footer';
import Notice from './components/Notice/Notice';
import { CustomSectionsConfig, CommonConfig } from './config';
import { getTodayHolidaySync, getBackgroundImage } from './utils/holiday';

const App = () => {
    // 自动检测：有节日时显示 Notice，无节日时显示 Navbar
    const holiday = getTodayHolidaySync();
    const [noticeVisible, setNoticeVisible] = useState(() => holiday !== null);

    const handleNoticeClose = useCallback(() => {
        setNoticeVisible(false);
    }, []);

    const sectionRefs = useMemo(() => {
        const refs = {};
        CustomSectionsConfig.forEach((section) => {
            refs[section.name] = React.createRef();
        });
        return refs;
    }, []);

    // 设置body背景图片（节假日时显示淡淡的背景）
    useEffect(() => {
        if (holiday?.background) {
            const imageUrl = getBackgroundImage(holiday.background);
            if (imageUrl) {
                document.body.style.backgroundImage = `url(${imageUrl})`;
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundAttachment = 'fixed';
                // document.body.style.backgroundColor = 'rgba(255,255,255,0.85)';
                document.body.style.backgroundBlendMode = 'overlay';
            }
        }
        return () => {
            // 清理背景样式
            document.body.style.backgroundImage = '';
            document.body.style.backgroundPosition = '';
            document.body.style.backgroundRepeat = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundAttachment = '';
            // document.body.style.backgroundColor = '';
            document.body.style.backgroundBlendMode = '';
        };
    }, [holiday]);

    useEffect(() => {
        document.title = `${CommonConfig.name} - ${CommonConfig.tagline}`;

        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else if (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark-mode');
        }
    }, []);

    return (
        <>
            {noticeVisible && <Notice onClose={handleNoticeClose} />}
            {!noticeVisible && <Navbar sectionRefs={sectionRefs} />}
            <TopSection />
            <CustomSections sectionRefs={sectionRefs} />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default App;
