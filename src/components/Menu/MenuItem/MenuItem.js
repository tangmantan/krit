import React, { useMemo } from 'react';
import CircleButton from '../../CircleButton/CircleButton';
import './MenuItem.scss';

const MenuItem = ({ tooltip, action, tooltipPlacement, size, isMobile, menuActive, rotationAngle, icon }) => {
    const activeTransformStyle = useMemo(() => {
        if (!menuActive) return {};
        return {
            transform: `
                translateY(${!isMobile ? '-50%' : '0'})
                rotate(${rotationAngle}deg)
                translate(${isMobile ? 7 : 6}rem)
                rotate(${-rotationAngle}deg)
            `
        };
    }, [menuActive, rotationAngle, isMobile]);

    return (
        <CircleButton
            className="menu-item"
            tooltip={tooltip}
            onClick={action}
            tooltipPlacement={tooltipPlacement}
            size={isMobile ? 2.3 : 3.6}
            style={activeTransformStyle}
        >
            {icon}
        </CircleButton>
    );
};

export default MenuItem;
