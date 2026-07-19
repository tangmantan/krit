import React from 'react';
import Section from '../Section/Section';
import { CustomSectionsConfig } from '../../config';
import './CustomSections.scss';

const CustomSections = ({ sectionRefs }) => {
    return (
        <>
            {CustomSectionsConfig.map((section, index) => (
                <Section
                    key={'section-' + index}
                    ref={sectionRefs[section.name]}
                    sectionHeader={section.name}
                    headerIcon={section.headerIcon}
                    extraClass={section.extraClass || ''}
                >
                    {section.content}
                </Section>
            ))}
        </>
    );
};

export default CustomSections;
