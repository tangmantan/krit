import React from 'react';
import CircleButton from '../../CircleButton/CircleButton';
import './MenuToggle.scss';

const MenuToggle = ({ toggleMenu, children }) => {
    return (
        <CircleButton onClick={toggleMenu} size={4} className="menu-toggle">
            <span className="menu-text">{children}</span>
            <div className="menu-burger">
                <span className="menu-burger-bar"></span>
                <span className="menu-burger-bar"></span>
                <span className="menu-burger-bar"></span>
            </div>
        </CircleButton>
    );
};

export default MenuToggle;
