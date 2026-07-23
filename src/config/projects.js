import { Icons } from './icons';
import { ReactComponent as ParateraIcon } from '../assets/icons/paratera.svg';
import { ReactComponent as FyIcon } from '../assets/icons/fuyaogroup.svg';

const ProjectsConfig = {
    projects: [
        {
            name: '招商局重庆交通科研设计院有限公司',
            icon: Icons['zhaoshangju'],
            description: '主导公司IT架构全面升级与资源整合，构建高效稳定的基础设施体系，显著提升研发效能与系统可用性，为业务数字化转型奠定坚实基础。',
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
            description: '担任HPC运维工程师，主导行人碰撞检测算法的性能优化，通过高性能计算集群实现流体动力学加速仿真，大幅提升碰撞检测精度与计算效率，为汽车安全研发提供强有力的技术支撑。',
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
            description: '2018年福耀欧洲新厂投产之际，作为技术经理派驻欧洲，全面负责产线技术部署与团队指导，确保海外工厂顺利投产运营，展现卓越的跨文化技术管理能力。',
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
            description: '就职于国内领先的高性能计算服务提供商，作为核心运维工程师，保障千台规模服务器集群的高可用运行，自主研发智能调度系统实现计算资源的精准分配，为客户打造极致的高性能计算体验。',
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
