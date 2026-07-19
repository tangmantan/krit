import React, { useState, useMemo, useCallback } from 'react';
import MenuToggle from './MenuToggle/MenuToggle';
import MenuItem from './MenuItem/MenuItem';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { ReactComponent as PeopleIcon } from '../../assets/icons/people.svg';
import { CustomSectionsConfig } from '../../config';
import './Menu.scss';

const Menu = ({ sectionRefs }) => {
    const [menuActive, setMenuActive] = useState(false);

    const isMobile = useMemo(() => window.matchMedia('(max-width: 768px)').matches, []);

    const scrollToSection = useCallback((sectionName) => {
        const element = sectionRefs[sectionName]?.current;
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        }
    }, [sectionRefs]);

    const menuItems = useMemo(() => {
        const baseItems = [
            {
                icon: <ArrowUpwardIcon />,
                tooltip: '回到顶部',
                action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
            },
            {
                icon: <PeopleIcon width={25} height={25} />,
                tooltip: '项目开源地址',
                action: () => window.open('https://github.com/9inpachi/krit')
            },
            {
                icon: <NightsStayIcon />,
                tooltip: '切换深色/浅色主题',
                action: () => {
                    document.body.classList.toggle('dark-mode');
                    localStorage.setItem(
                        'theme',
                        document.body.classList.contains('dark-mode') ? 'dark' : 'light'
                    );
                }
            }
        ];

        const sectionItems = CustomSectionsConfig
            .filter(section => !section.notInMenu)
            .map(section => ({
                icon: section.headerIcon,
                tooltip: section.name,
                action: () => scrollToSection(section.name)
            }));

        return [...baseItems, ...sectionItems].map((item, index) => ({
            ...item,
            key: `menu-item-${index}`,
            icon: React.cloneElement(item.icon, { classes: { root: 'menu-item-icon' } })
        }));
    }, [scrollToSection]);

    const toggleMenu = useCallback(() => {
        setMenuActive(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuActive(false);
    }, []);

    const startAngle = isMobile ? 0 : 90;
    const rotationAngle = isMobile ? 90 : 180;
    const increment = menuItems.length > 1
        ? Math.round(rotationAngle / (menuItems.length - 1))
        : 0;

    return (
        <div className={menuActive ? 'menu menu-active' : 'menu'}>
            <div className="menu-backdrop" onClick={closeMenu}></div>
            <div className="menu-data">
                <MenuToggle isMobile={isMobile} toggleMenu={toggleMenu}>
                    菜<br />单
                </MenuToggle>
                {menuItems.map((menuItem, index) => (
                    <MenuItem
                        key={menuItem.key}
                        icon={menuItem.icon}
                        tooltip={menuItem.tooltip}
                        action={menuItem.action}
                        tooltipPlacement="right"
                        menuActive={menuActive}
                        isMobile={isMobile}
                        rotationAngle={startAngle + index * increment}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
