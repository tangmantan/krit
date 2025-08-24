import React from 'react';
import ReactDOM from 'react-dom';
import MenuToggle from './MenuToggle/MenuToggle';
import MenuItem from './MenuItem/MenuItem';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './Menu.scss';

import { CustomSectionsConfig } from '../../config';

class Menu extends React.Component {

    // Properties

    menuItems = [
        {
            icon: <ArrowUpwardIcon />,
            tooltip: '回到顶部',
            action: () => {
                window.scrollTo({
                    top: 0, behavior: 'smooth'
                });
            }
        },
        {
            icon: <NightsStayIcon />,
            tooltip: '切换深色/浅色主题',
            action: () => {
                document.body.classList.toggle('dark-mode');
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            }
        },
        {
            icon: <ComputerIcon />,
            tooltip: '项目开源地址',
            action: () => {
                window.open('https://github.com/9inpachi/krit');
            }
        },
    ]

    // Functions

    constructor(props) {
        super(props);
        this.state = { menuActive: false };

        // 菜单部分
        const sectionsInMenu = CustomSectionsConfig.map((section) => {
            if (!section.notInMenu) {
                return {
                    icon: section.headerIcon,
                    tooltip: section.name,
                    action: () => {
                        this.scrollToSection(section.name);
                    }
                }
            } else {
                return false;
            }
        }).filter(section => section);

        this.menuItems = this.menuItems.concat(sectionsInMenu);

        // 更多变通方法
        this.menuItems = this.menuItems.map((menuItem) => {
            menuItem.key = 'menu-item-' + Math.round(Math.random() * 10000);
            // 调整图标大小
            menuItem.icon = React.cloneElement(menuItem.icon, { classes: { root: 'menu-item-icon' } });
            return menuItem;
        });
    }

    toggleMenu = () => {
        this.setState({ menuActive: !this.state.menuActive });
    }

    scrollToSection = (sectionName) => {
        const element = ReactDOM.findDOMNode(this.props.sectionRefs[sectionName].current);
        window.scrollTo({
            top: element.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }

    closeMenu = () => {
        this.setState({ menuActive: false });
    }

    render() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches ? true : false;
        const startAngle = isMobile ? 0 : 90;
        const rotationAngle = isMobile ? 90 : 180;
        // console.log(isMobile);
        return (
            // "menu-active" 类也被 MenuToggle 和 MenuItem(s) 使用
            // 我们可以向每个组件传递一个 prop，但在这里使用 CSS 可以避免额外开销
            // 因为我们的用例很简单
            <div className={this.state.menuActive ? 'menu menu-active' : 'menu'}>
                <div className="menu-backdrop" onClick={this.closeMenu}></div>
                <div className="menu-data">
                    <MenuToggle isMobile={isMobile} toggleMenu={this.toggleMenu}>
                        菜<br />单
                    </MenuToggle>
                    {this.menuItems.map((menuItem, index) => {
                        let angle = startAngle;
                        let increment = 0;
                        if (this.menuItems.length > 1) {
                            // We want to cover 180deg on the right side so using that
                            increment = Math.round(rotationAngle / (this.menuItems.length - 1));
                        }
                        angle += index * increment;

                        return (
                            <MenuItem {...menuItem} tooltipPlacement="right"
                                menuActive={this.state.menuActive}
                                isMobile={isMobile}
                                rotationAngle={angle} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Menu;
