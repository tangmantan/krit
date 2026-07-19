import { Icons } from './icons';
import { ReactComponent as ParateraIcon } from '../assets/icons/paratera.svg';
import { ReactComponent as FyIcon } from '../assets/icons/fuyaogroup.svg';

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
                }
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
            icon: <FyIcon width={80} height={30} fill="currentColor" />,
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
            icon: <ParateraIcon width={120} height={30} fill="currentColor" />,
            description: '一家全国数一数二的高性能计算服务供应商，在职期间曾担任运维工程师，安全高效的保障了公司千台服务器稳定运行，编写代码对高性能计算集群的精准调度以及分配，让客户沉浸在更快、更准、更稳的计算中。',
            links: [
                {
                    tooltip: '官网地址',
                    link: 'https://www.paratera.com/',
                    icon: Icons['link']
                }
            ]
        }
    ]
};

export { ProjectsConfig };
