import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import './Footer.scss';

import { CommonConfig, Icons } from '../../config';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>
                    Copyright &copy; {new Date().getFullYear()} All rights reserved
                </p>
                <p>
                    {CommonConfig.social.map((socialDetails, index) => {
                        // 检查链接是否为图片
                        const isImageLink = socialDetails.link && /\.(jpg|jpeg|png|gif|svg)$/i.test(socialDetails.link);
                        return isImageLink ? (
                            <div key={'footer-social-' + index} className="social-icon-container">
                                <div className="circle-button">
                                    {/* 如果提供了社交媒体平台图标，则使用该图标，否则从默认图标中选择 */}
                                    {socialDetails.icon ? socialDetails.icon : Icons[socialDetails.name.toLowerCase()]}
                                </div>
                                <div className="image-tooltip">
                                    <img 
                                        src={socialDetails.link} 
                                        alt={socialDetails.name} 
                                    />
                                </div>
                            </div>
                        ) : (
                            <CircleButton key={'footer-social-' + index} tooltip={socialDetails.name} tooltipPlacement="top"
                                link={socialDetails.link} target="_blank">
                                {socialDetails.icon ? socialDetails.icon : Icons[socialDetails.name.toLowerCase()]}
                            </CircleButton>
                        );
                    })}
                </p>
            </div>
        );
    }
}

export default Footer;