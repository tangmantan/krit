import React, { useEffect, useMemo } from 'react';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import TopSection from './sections/TopSection/TopSection';
import CustomSections from './sections/CustomSections/CustomSections';
import Footer from './sections/Footer/Footer';
import Notice from './components/Notice/Notice';
import { CustomSectionsConfig, CommonConfig } from './config';

const App = () => {
    const sectionRefs = useMemo(() => {
        const refs = {};
        CustomSectionsConfig.forEach((section) => {
            refs[section.name] = React.createRef();
        });
        return refs;
    }, []);

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
            {CommonConfig.addNotice && <Notice />}
            <Navbar sectionRefs={sectionRefs} />
            <TopSection />
            <CustomSections sectionRefs={sectionRefs} />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default App;
