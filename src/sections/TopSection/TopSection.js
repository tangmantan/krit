import React, { useEffect, useRef } from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { CommonConfig } from '../../config';
import './TopSection.scss';

const TopSection = () => {
    const pathRef = useRef(null);

    useEffect(() => {
        if (pathRef.current) {
            const signatureLength = pathRef.current.getTotalLength();
            pathRef.current.setAttribute('stroke-dasharray', signatureLength);
            pathRef.current.setAttribute('stroke-dashoffset', signatureLength);

            const viewBoxCoords = CommonConfig.signature?.viewBox.split(' ').map(val => parseInt(val));
            pathRef.current.setAttribute('stroke-width', Math.max(...viewBoxCoords) / 100);
        }
    }, []);

    return (
        <div className="top-section">
            <div className="intro">
                <h1>{CommonConfig.name}</h1>
                <p>{CommonConfig.tagline}</p>
            </div>
            <div className="signature">
                <svg viewBox={CommonConfig.signature?.viewBox}>
                    <path
                        ref={pathRef}
                        id="signature-path"
                        stroke="var(--text-primary)"
                        fill="none"
                        d={CommonConfig.signature?.signaturePathD}
                    />
                </svg>
            </div>
            <SocialLinks social={CommonConfig.social} className="top-section-social" />
        </div>
    );
};

export default TopSection;
