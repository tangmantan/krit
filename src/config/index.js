import { Icons } from './icons';

// 自定义图标
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { ReactComponent as ParateraIcon } from '../assets/icons/paratera.svg';
import { ReactComponent as FyIcon } from '../assets/icons/fuyaogroup.svg';

// 自定义组件
import CircleButton from '../components/CircleButton/CircleButton';

// 顶部区域和页脚的通用配置
const CommonConfig = {
    // 是否开启首页通知
    addNotice: true,
    name: '谭满堂',
    tagline: 'HPC运维工程师',
    signature: {
        // SVG 的viewBox
        viewBox: '0 0 133 133',
        // 这是 SVG 中 <path> 标签的 "d" 属性路径数据，用于绘制图形
        // https://www.jyshare.com/more/svgeditor/  这是一个手绘 SVG 编辑器，你可以在其中绘制 SVG 路径数据
        // https://www.vectorpea.com/ 在线adobe illustrator
        signaturePathD: `m9.7 64.6c0 0-1.3 0.2-2.2 0-0.8-0.2-0.9-1.7 0.5-3.6 1-1.4 3.3-2.6 5.6-3.4 2.4-0.8 5.8-1.9 14.5-1.9 8.7 0 19.6-0.6 33.9-6.6 14.2-6.1 12.3-16.9 3.7-17.3-10.2-0.4-20 7.2-21.9 8.7-6.1 4.6-15.4 13.8-21.7 28.5-5.2 12.2-3.5 16.8-3.3 16.7 0 0 0.3 1.4 3.6 0.2 2.8-1 12-8 13-12.6 0.7-3.5-2.2-3.5-5-0.4-4.1 4.6-0.6 10.8 3 4.7 3.8-6.6 2.4-2.7 2.2-2.1-0.2 0.5-1.6 6.1 2.9-0.1 1.9-2.6 4.4-7.4 3.4-4.3-0.4 1.5-1.2 3.1-1.8 4.5-0.2 0.6-1.7 4.1 2-2.1 3.4-5.7 4.8-3 3.7-0.1-0.2 0.5-0.4 3.7 3.9-1.6 4.2-5.3 3.3-5.3 3.3-5.3 0 0-0.4-0.2-0.9 1.1-0.5 1.3-3.5 8.3-2.5 7.8 0.9-0.5 5.4-8.5 6.4-8.3 1 0.2-2.5 6.3-1.2 6.2 1.3 0 3.4-5.2 4.7-4.8 1.3 0.5-1.2 4.2 0.3 3.7 1.5-0.4 8.2-4.3 8.6-5.9 0.3-1.6-2.4-1.9-4.3 1.9-1.9 3.8-1.1 6.1 2.5 0.9 4-5.6-0.1 3 3.1 1.3 3.4-1.8 6.3-5.5 5.7-6.4-0.4-0.9-4.4 7.1-2.7 6.6 2.2-0.6 5.4-7.4 6.3-6.1 0.8 1.1-1.4 4.2 0 4.3 1.5 0.1 4-3.2 4-3.2 0.5-0.8 10.1-17.9 9.3-17.5-2.4 0.9-15.4 26.4-10.3 26.8 4.1 0.2 13.1-11.9 12.3-13.6-1.2-2.5-8 3.7-6 6.8 1.4 2.1 3.8-5.1 5.1-5.3 1.4-0.3-1.4 4.5 0 4.1 1.6-0.4 6.8-5.8 6.4-6.4-1.3-1.6-3.9 6-3 6 1.2 0 5.5-6.7 6.3-5.8 0.7 0.9-1.8 4.4 0.1 4.4 2.6-0.1 11.6-4.9 8.8-7-2.6-2-6.7 6.5-4.2 6.2 2.2-0.3 4.9-5.5 5.6-5.3 2.1 0.8-17.1 35.6-27.7 33-14.6-3.5 36.6-30.9 37.9-31.6 1.7-1 2.4-3.2-1.8-4.8-4.2-1.6-17.8-2.2-18.4-2.2-9.1 0.5-22.2 1.9-31 3.5-0.5 0.1-1.4 0.3-1.9 0.4-2 0.6-3 1.4-2.7 1.7 0.7 0.5 3.9 0.3 3.9 0.3`

    },
    email: 'tanmantang@foxmail.com',
    // 社交媒体账户信息
    social: [
        {
            name: 'QQ',
            link: 'https://tanmantang.oss-cn-chengdu.aliyuncs.com/public/qq.png',
            icon: Icons['qq']
        },
        {
            name: '微信',
            link: 'https://tanmantang.oss-cn-chengdu.aliyuncs.com/public/weixin.png',
            icon: Icons['weixin']
        },
        {
            name: 'GitHub',
            link: 'https://github.com/tangmantan',
        },
        {
            name: 'gitee',
            link: 'https://gitee.com/tanmantang',
        },
        {
            name: '邮箱',
            link: 'mailto:tanmantang@foxmail.com',
            icon: Icons['email']
        },
    ]
};

/** 项目部分的配置 */
const ProjectsConfig = {
    
    projects: [
        {
            name: '招商局重庆交通科研设计院有限公司',
            icon: Icons['zhaoshangju'],
            description: '重构了公司的IT系统，整合了公司的IT资源，优化IT部研发效率，提高了IT系统的效率和可靠性。',

            links: [
                {
                    tooltip: '官网地址',
                    link: 'https://www.cmct.cn/',
                    icon: Icons['link']
                },
            ]
        },
        {
            name: '重庆长安汽车股份有限公司',
            icon: Icons['changan'],
            description: '重新优化行人碰撞检测算法，提高了碰撞检测的准确性和效率，减少了碰撞事故的发生。使用HPC对流体等加速计算',
            links: [
                {
                    tooltip: '官网地址',
                    link: 'https://www.changan.com.cn/',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: '福耀集团',
            icon: <FyIcon width={80} height={30} fill='currentColor' />,
            description: '2018年福耀欧洲新厂正式投产，同期担任技术经理派往欧洲指导技术工作',
            links: [
                {
                    tooltip: '官网地址',
                    link: 'https://www.fuyaogroup.com/',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: '北京并行科技股份有限公司',
            icon: <ParateraIcon width={120} height={30} fill='currentColor' />,
            description: '一家全国数一数二的高性能计算服务供应商，在职期间曾担任运维工程师，安全高效的保障了公司千台服务器稳定运行，编写代码对高性能计算集群的精准调度以及分配，让客户沉浸在更快、更准、更稳的计算中。',
            links: [
                {
                    tooltip: '官网地址',
                    link: 'https://www.paratera.com/',
                    icon: Icons['link']
                }
            ]
        },
    ]
};

const CustomSectionsConfig = [
    {
        name: '任职经历',
        headerIcon: Icons['company'],
        // 应用样式的额外类
        // "section-reverse" 类使区域从右到左排列
        extraClass: '',
        // 如果你不希望菜单中显示，将此设置为 true
        notInMenu: false,
        content: (
            <>
                {ProjectsConfig.projects.map((project, index) => {
                    return (
                        <div key={'project-' + index}>
                            <h3 style={{ fontSize: '1.4rem' }}>{project.icon} {project.name}
                                    {project.links.map((link, linkIndex) => {
                                    return (
                                        <CircleButton className="project-link" key={'project-link-' + index + linkIndex} link={link.link} 
                                            target="_blank" tooltip={link.tooltip} size={1.4}>
                                            {link.icon}
                                        </CircleButton>
                                    );
                                })}
                            </h3>
                            <p style={{paddingBottom: '3rem'}}>{project.description}</p>
                        </div>
                    );
                })}
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
                <p> 一个资深运维工程师，专注于服务器运维管理和技术研究，喜欢动漫、游戏(最近喜欢上了户外)和研究AI技术相关内容的人儿</p>
                <h4>我会的一些技能</h4>
                <h3>{Icons['code']} 后端</h3>
                <p className="programming-icons">
                    {Icons['java']}
                    {Icons['php']}
                    {Icons['mysql']}
                    {Icons['redis']}
                    {Icons['dameng']}
                    {Icons['python']}
                </p>

                <h3>{Icons['web']} 前端</h3>
                <p className="programming-icons">
                    {Icons['javascript']}
                    {Icons['nodejs']}
                    {Icons['react']}
                    {Icons['vue']}
                    {Icons['nginx']}
                </p>
                <h3>{Icons['server']} 其他</h3>
                <p className="programming-icons">
                    {Icons['docker']}
                    {Icons['nacos']}
                    {Icons['minio']}
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
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
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
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
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
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
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

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
