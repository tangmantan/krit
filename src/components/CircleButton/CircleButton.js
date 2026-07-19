import React from 'react';
import { Tooltip } from '@material-ui/core';
import './CircleButton.scss';

const CircleButton = ({
    link,
    target,
    onClick,
    className = '',
    size = 1,
    style = {},
    tooltip,
    tooltipPlacement,
    children
}) => {
    const ButtonTag = link ? 'a' : 'button';
    return (
        <Tooltip title={tooltip ?? ''} placement={tooltipPlacement}>
            <ButtonTag
                href={link}
                target={target}
                onClick={onClick}
                className={`circle-button ${className}`.trim()}
                style={{ width: `${size}rem`, height: `${size}rem`, ...style }}
            >
                {children}
            </ButtonTag>
        </Tooltip>
    );
};

export default CircleButton;
