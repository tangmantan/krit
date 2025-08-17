import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import './TopSection.scss';

import { CommonConfig, Icons } from '../../config';

class TopSection extends React.Component {

    componentDidMount() {
        if (this.pathElement) {
            const signatureLength = this.pathElement.getTotalLength();
            this.pathElement.setAttribute('stroke-dasharray', signatureLength);
            this.pathElement.setAttribute('stroke-dashoffset', signatureLength);
            
            const viewBoxCoords = CommonConfig.signature?.viewBox.split(' ').map(val => parseInt(val));
            this.pathElement.setAttribute('stroke-width', Math.max(...viewBoxCoords) / 100);
        }
    }

    render() {
        return (
            <div className="top-section">
                <div className="intro">
                    <h1>{CommonConfig.name}</h1>
                    <p>{CommonConfig.tagline}</p>
                </div>
                <div className="signature">
                    <svg viewBox={CommonConfig.signature?.viewBox}>
                        <path ref={pathElement => {
                            this.pathElement = pathElement;
                        }} id="signature-path" stroke="var(--text-primary)" fill="none"
                            d={CommonConfig.signature?.signaturePathD} />
                    </svg>
                </div>
                <div className="social">
                    {CommonConfig.social.map((socialDetails, index) => {
                        // 检查链接是否为图片
                        const isImageLink = socialDetails.link && /\.(jpg|jpeg|png|gif|svg)$/i.test(socialDetails.link);
                        return isImageLink ? (
                            <div key={'top-section-social-' + index} className="social-icon-container">
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
                            <CircleButton key={'top-section-social-' + index} tooltip={socialDetails.name} tooltipPlacement="top"
                                link={socialDetails.link} target="_blank">
                                {socialDetails.icon ? socialDetails.icon : Icons[socialDetails.name.toLowerCase()]}
                            </CircleButton>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TopSection;