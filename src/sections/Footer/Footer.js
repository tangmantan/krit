import React from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { CommonConfig } from '../../config';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <SocialLinks social={CommonConfig.social} />
            <a href="https://beian.miit.gov.cn" style={{ fontSize: '0.8rem' }}>
                渝ICP备18004584号
            </a>
            <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
    );
};

export default Footer;
