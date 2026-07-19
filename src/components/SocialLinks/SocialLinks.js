import React from 'react';
import CircleButton from '../CircleButton/CircleButton';
import { Icons } from '../../config/icons';
import './SocialLinks.scss';

const SocialLinks = ({ social, className = '' }) => {
    return (
        <div className={`social-links ${className}`}>
            {social.map((socialDetails, index) => {
                const isImageLink = socialDetails.link && /\.(jpg|jpeg|png|gif|svg)$/i.test(socialDetails.link);
                return isImageLink ? (
                    <div key={'social-' + index} className="social-icon-container">
                        <div className="circle-button">
                            {socialDetails.icon ? socialDetails.icon : Icons[socialDetails.name.toLowerCase()]}
                        </div>
                        <div className="image-tooltip">
                            <img src={socialDetails.link} alt={socialDetails.name} />
                        </div>
                    </div>
                ) : (
                    <CircleButton
                        key={'social-' + index}
                        tooltip={socialDetails.name}
                        tooltipPlacement="top"
                        link={socialDetails.link}
                        target="_blank"
                    >
                        {socialDetails.icon ? socialDetails.icon : Icons[socialDetails.name.toLowerCase()]}
                    </CircleButton>
                );
            })}
        </div>
    );
};

export default SocialLinks;
