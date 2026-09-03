import React, { useState, useCallback } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DescriptionIcon from '@material-ui/icons/Description';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as GitHubIcon } from '../../assets/icons/github.svg';
import './Navbar.scss';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => document.body.classList.contains('dark-mode'));

    const toggleTheme = useCallback(() => {
        document.body.classList.toggle('dark-mode');
        const newIsDark = document.body.classList.contains('dark-mode');
        setIsDarkMode(newIsDark);
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
        // 更新节假日背景颜色（如果有背景图片的话）
        if (document.body.style.backgroundImage) {
            document.body.style.backgroundColor = newIsDark
                ? 'rgba(25,25,25,0.85)'
                : 'rgba(255,255,255,0.85)';
        }
    }, []);

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => !prev);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </div>

                <div className={`navbar-menu ${menuOpen ? 'navbar-menu-open' : ''}`}>
                    <div className="navbar-actions">
                        <div className="navbar-dropdown">
                            <button className="navbar-dropdown-trigger">
                                <span>友情链接</span>
                                <ExpandMoreIcon className="dropdown-arrow" />
                            </button>
                            <div className="navbar-dropdown-menu">
                                <a
                                    className="navbar-dropdown-item"
                                    href="https://oreo.tanmantang.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <PhotoLibraryIcon className="dropdown-item-icon" />
                                    <span>旅行相册</span>
                                </a>
                                <a
                                    className="navbar-dropdown-item"
                                    href="https://car.tanmantang.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <DirectionsCarIcon className="dropdown-item-icon" />
                                    <span>用车成本</span>
                                </a>
                                <a
                                    className="navbar-dropdown-item"
                                    href="https://docs.tanmantang.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <DescriptionIcon className="dropdown-item-icon" />
                                    <span>文档中心</span>
                                </a>
                            </div>
                        </div>

                        <div className="theme-switch" onClick={toggleTheme} title="切换主题">
                            <div className={`theme-switch-track ${isDarkMode ? 'dark' : 'light'}`}>
                                <span className="theme-switch-text">
                                    {isDarkMode ? '深色' : '浅色'}
                                </span>
                                <div className="theme-switch-thumb" />
                            </div>
                        </div>
                        <a
                            className="navbar-github-btn"
                            href="https://github.com/tangmantan/krit"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="项目开源地址"
                        >
                            <SvgIcon component={GitHubIcon} viewBox="0 0 1024 1024" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
