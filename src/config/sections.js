import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import CircleButton from '../components/CircleButton/CircleButton';
import { Icons } from './icons';
import { ProjectsConfig } from './projects';

const CustomSectionsConfig = [
    {
        name: '任职经历',
        headerIcon: Icons['company'],
        extraClass: '',
        notInMenu: false,
        content: (
            <>
                {ProjectsConfig.projects.map((project, index) => (
                    <div key={'project-' + index}>
                        <h3 style={{ fontSize: '1.4rem' }}>
                            {project.icon} {project.name}
                            {project.links.map((link, linkIndex) => (
                                <CircleButton
                                    className="project-link"
                                    key={'project-link-' + index + linkIndex}
                                    link={link.link}
                                    target="_blank"
                                    tooltip={link.tooltip}
                                    size={1.4}
                                >
                                    {link.icon}
                                </CircleButton>
                            ))}
                        </h3>
                        <p style={{ paddingBottom: '3rem' }}>{project.description}</p>
                    </div>
                ))}
            </>
        )
    },
    {
        name: '关于我',
        headerIcon: <InfoIcon />,
        extraClass: 'about-section section-reverse',
        content: (
            <>
                <h4>这帅气小伙是谁{Icons['helpoutline']}</h4>
                <p>一个资深运维工程师，专注于服务器运维管理和技术研究，喜欢动漫、游戏(最近喜欢上了户外)和研究AI技术相关内容的人儿</p>
                <h4>我会的一些技能</h4>
                <p className="programming-icons">
                    {Icons['java']}
                    {Icons['mysql']}
                    {Icons['javascript']}
                    {Icons['vue']}
                    {Icons['nginx']}
                    {Icons['docker']}
                    {Icons['shell']}
                </p>
            </>
        )
    },
    {
        name: '评论',
        headerIcon: <RateReviewIcon />,
        content: (
            <>
                <h4 style={{ fontSize: '2em' }}>{Icons['helpoutline']} 别人怎么说?</h4>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>"</span>
                    <br />
                    谭满堂在长安汽车为我们做了出色的工作。他努力工作，编写了非常好且清晰易读的代码，并为该项目做出了宝贵的贡献。
                </p>
                <p>我们喜欢他非常积极、自我驱动，并且已经是一位经验丰富、知识渊博的编码员。</p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>朱华荣</b>
                        <br />
                        重庆长安汽车股份有限公司
                        <br />
                        董事长、党委书记
                    </i>
                </p>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>"</span>
                    <br />
                    谭满堂拥有强大的技术技能，能够快速学习新技术，他非常灵活和开放，随时准备讨论自己的观点，并以深思熟虑和收集的方式思考利弊，在做出决定时考虑到他得到的反馈，而不接受任何东西，也不拒绝任何东西。
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>张三 & 李四</b>
                        <br />
                        重庆市最牛逼集团
                        <br />
                        总裁 & 技术总监
                    </i>
                </p>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>"</span>
                    <br />
                    I have really appreciated your confidence to solve problems yourself and follow your own intuition even when it goes against what I was suggesting. I feel you were mostly right :)
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>James Knight</b>
                        <br />
                        GeNN Team
                        <br />
                        Research Fellow
                        <br />
                        The University of Sussex
                    </i>
                </p>
            </>
        )
    }
];

export { CustomSectionsConfig };
