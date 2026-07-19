import React from 'react';
import './Section.scss';

const Section = React.forwardRef(({ headerIcon, sectionHeader, extraClass = '', children }, ref) => {
    return (
        <div className="section-wrapper" ref={ref}>
            <div className={`section ${extraClass}`.trim()}>
                <h2 className="section-header">
                    {React.cloneElement(headerIcon, { classes: { root: 'section-header-icon' } })}
                    {sectionHeader}
                </h2>
                <div className="section-content">
                    {children}
                </div>
            </div>
        </div>
    );
});

Section.displayName = 'Section';

export default Section;
