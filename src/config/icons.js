// ICONS
import SvgIcon from '@material-ui/core/SvgIcon';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MapIcon from '@material-ui/icons/Map';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';

import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as JavaIcon } from '../assets/icons/java.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/icons/javascript-plain.svg';
import { ReactComponent as MySQLIcon } from '../assets/icons/mysql.svg';
import { ReactComponent as NodejsIcon } from '../assets/icons/nodejs-plain-wordmark.svg';
import { ReactComponent as PHPIcon } from '../assets/icons/php-plain.svg';
import { ReactComponent as ReactIconOriginal } from '../assets/icons/react-original-wordmark.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/icons/typescript-plain.svg';
import { ReactComponent as QQIcon } from '../assets/icons/qq.svg';
import { ReactComponent as WeixinIcon } from '../assets/icons/weixin.svg';  
import { ReactComponent as GiteeIcon } from '../assets/icons/gitee.svg';
import { ReactComponent as RedisIcon } from '../assets/icons/redis.svg';
import { ReactComponent as NacosIcon } from '../assets/icons/nacos.svg';
import { ReactComponent as DockerIcon } from '../assets/icons/docker.svg';
import { ReactComponent as NginxIcon } from '../assets/icons/nginx.svg';
import { ReactComponent as MinioIcon } from '../assets/icons/minio.svg';
import { ReactComponent as ServerIcon } from '../assets/icons/server.svg';
import { ReactComponent as DamengIcon } from '../assets/icons/dameng.svg';
import { ReactComponent as PowerShellIcon } from '../assets/icons/powershell.svg';
import { ReactComponent as PythonIcon } from '../assets/icons/python.svg';
import { ReactComponent as CompanyIcon } from '../assets/icons/company.svg';
import { ReactComponent as ParateraIcon } from '../assets/icons/paratera.svg';
import { ReactComponent as ChanganIcon } from '../assets/icons/changan.svg';
import { ReactComponent as CmhkIcon } from '../assets/icons/zhaoshangju.svg';
import { ReactComponent as FyIcon } from '../assets/icons/fuyao.svg';
import { ReactComponent as FyGroupIcon } from '../assets/icons/fuyaogroup.svg';
import { ReactComponent as CctvIcon } from '../assets/icons/cctv.svg';
import { ReactComponent as CctvNewsIcon } from '../assets/icons/cctv_news.svg';
import { ReactComponent as DouyinIcon } from '../assets/icons/douyin.svg';
import { ReactComponent as WeiboIcon } from '../assets/icons/weibo.svg';
import { ReactComponent as BilibiliIcon } from '../assets/icons/bilibili.svg';
import { ReactComponent as PeopleIcon } from '../assets/icons/people.svg';
import { ReactComponent as AIIcon } from '../assets/icons/ai.svg';
import { ReactComponent as AIIconFill } from '../assets/icons/ai-fill.svg';
import { ReactComponent as VueIcon } from '../assets/icons/vue.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as KubeNodeIcon } from '../assets/icons/kube_node.svg';
import { ReactComponent as K8sIcon } from '../assets/icons/k8s.svg';
import { ReactComponent as Html5Icon } from '../assets/icons/html5.svg';
import { ReactComponent as LolIcon } from '../assets/icons/lol.svg';
import { ReactComponent as YxlmIcon } from '../assets/icons/yxlm.svg';
import { ReactComponent as SteamIcon } from '../assets/icons/steam.svg';
import { ReactComponent as BadmintonRacketIcon } from '../assets/icons/badminton-racket.svg';
import { ReactComponent as BadmintonIcon } from '../assets/icons/badminton.svg';
import { ReactComponent as CanonIcon } from '../assets/icons/canon.svg';
import { ReactComponent as BicycleIcon } from '../assets/icons/bicycle.svg';
import { ReactComponent as FillBicycleIcon } from '../assets/icons/bicycle-fill.svg';
import { ReactComponent as MotorcycleIcon } from '../assets/icons/motorcycle.svg';
import { ReactComponent as NikonIcon } from '../assets/icons/nikon.svg';
import { ReactComponent as CameraNikonIcon } from '../assets/icons/camera_nikon_n.svg';
import { ReactComponent as HikingIcon } from '../assets/icons/Hiking.svg';
import { ReactComponent as TrekkingIcon } from '../assets/icons/Trekking.svg';
import { ReactComponent as TrekkingBoyIcon } from '../assets/icons/Trekking-boy.svg';



// ICONS END

/** Default icons */
const Icons = {
    email: <MailIcon />,
    projects: <ComputerIcon />,
    about: <InfoIcon />,
    java: <SvgIcon component={JavaIcon} viewBox="0 0 1024 1024" fontSize="large" title="Java" />,
    typescript: <SvgIcon component={TypeScriptIcon} viewBox="0 0 128 128" fontSize="large" title="TypeScript" />,
    javascript: <SvgIcon component={JavaScriptIcon} viewBox="0 0 1024 1024" fontSize="large" title="JavaScript" />,
    mysql: <SvgIcon component={MySQLIcon} viewBox="0 0 1024 1024" fontSize="large" title="MySQL" />,
    php: <SvgIcon component={PHPIcon} viewBox="0 0 128 128" fontSize="large" title="PHP" />,
    nodejs: <SvgIcon component={NodejsIcon} viewBox="0 0 128 128" fontSize="large" title="Node.js" />,
    ReactIconOriginal: <SvgIcon component={ReactIconOriginal} viewBox="0 0 128 128" fontSize="large" title="ReactIcon" />,
    helpoutline: <HelpOutlineIcon />,
    map: <MapIcon />,
    code: <CodeIcon />,
    kube_node: <SvgIcon component={KubeNodeIcon} viewBox="0 0 1024 1024" fontSize="large" title="KubeNodeIcon" />,
    link: <LinkIcon />,
    web: <WebIcon />,
    qq: <SvgIcon component={QQIcon} viewBox="0 0 1024 1024" title="QQ" />,
    weixin: <SvgIcon component={WeixinIcon} viewBox="0 0 1024 1024" title="微信" />,
    gitee: <SvgIcon component={GiteeIcon} viewBox="0 0 1024 1024" />,
    // github: <SvgIcon component={GitHubIcon} stroke="currentColor" strokeWidth={2} style={{ fill: 'none' }} />,
    github: <SvgIcon component={GitHubIcon} viewBox="0 0 1024 1024" />,
    redis: <SvgIcon component={RedisIcon} viewBox="0 0 1024 1024" />,
    nacos: <SvgIcon component={NacosIcon} viewBox="0 0 5120 1024" />,
    docker: <SvgIcon component={DockerIcon} viewBox="0 0 1024 1024" />,
    nginx: <SvgIcon component={NginxIcon} viewBox="0 0 1024 1024" />,
    minio: <SvgIcon component={MinioIcon} viewBox="0 0 1024 1024" />,
    server: <SvgIcon component={ServerIcon} viewBox="0 0 1024 1024" />,
    dameng: <SvgIcon component={DamengIcon} viewBox="0 0 1024 1024" />,
    powershell: <SvgIcon component={PowerShellIcon} viewBox="0 0 1024 1024" />,
    shell: <SvgIcon component={PowerShellIcon} viewBox="0 0 1024 1024" />,
    cmd: <SvgIcon component={PowerShellIcon} viewBox="0 0 1024 1024" />,
    python: <SvgIcon component={PythonIcon} viewBox="0 0 1024 1024" />,
    company: <SvgIcon component={CompanyIcon} viewBox="0 0 1024 1024" fill='currentColor' title="公司" />,
    paratera: <SvgIcon component={ParateraIcon} viewBox="0 0 8230 1024" fontSize="large" />,
    changan: <SvgIcon component={ChanganIcon} viewBox="0 0 1024 1024" />,
    cmhk: <SvgIcon component={CmhkIcon} viewBox="0 0 1024 1024" />,
    zhaoshangju: <SvgIcon component={CmhkIcon} viewBox="0 0 1024 1024" />,
    fuyao: <SvgIcon component={FyIcon} viewBox="0 0 300 300" />,
    fuyaofroup: <SvgIcon component={FyGroupIcon} viewBox="0 0 500 200" />,
    cctv: <SvgIcon component={CctvIcon} viewBox="0 0 1024 1024" />,
    cctv_news: <SvgIcon component={CctvNewsIcon} viewBox="0 0 1024 1024" />,
    douyin: <SvgIcon component={DouyinIcon} viewBox="0 0 1024 1024" />,
    weibo: <SvgIcon component={WeiboIcon} viewBox="0 0 1024 1024" />,
    bilibili: <SvgIcon component={BilibiliIcon} viewBox="0 0 2299 1024" />,
    people: <SvgIcon component={PeopleIcon} viewBox="0 0 1024 1024" />,
    ai: <SvgIcon component={AIIcon} viewBox="0 0 1024 1024" fontSize="large" title="AI" />,
    vue: <SvgIcon component={VueIcon} viewBox="0 0 1024 1024" fontSize="large" title="Vue" />,
    ai_fill: <SvgIcon component={AIIconFill} viewBox="0 0 1024 1024" fontSize="large" title="AI" />,
    react: <SvgIcon component={ReactIcon} viewBox="0 0 1024 1024" fontSize="large" title="React" />,
    k8s: <SvgIcon component={K8sIcon} viewBox="0 0 1024 1024" fontSize="large" title="K8s" />,
    html5: <SvgIcon component={Html5Icon} viewBox="0 0 1024 1024" fontSize="large" title="HTML5" />,
    yxlm: <SvgIcon component={YxlmIcon} viewBox="0 0 1024 1024" fontSize="large" title="英雄联盟" style={{ width: '3.7em' }} />,
    lol: <SvgIcon component={LolIcon} viewBox="0 0 1024 1024" fontSize="large" title="英雄联盟" />,
    steam: <SvgIcon component={SteamIcon} viewBox="0 0 1024 1024" fontSize="large" title="Steam" />,
    hiking: <SvgIcon component={HikingIcon} viewBox="0 0 1024 1024" fontSize="large" title="爬山" />,
    trekking: <SvgIcon component={TrekkingIcon} viewBox="0 0 1024 1024" fontSize="large" title="徒步" />,
    bicycle: <SvgIcon component={BicycleIcon} viewBox="0 0 1024 1024" fontSize="large" title="骑车" />,
    bicycle_fill: <SvgIcon component={FillBicycleIcon} viewBox="0 0 1024 1024" fontSize="large" title="骑车" />,
    badminton_racket: <SvgIcon component={BadmintonRacketIcon} viewBox="0 0 1055 1024" fontSize="large" title="打羽毛球" style={{ width: '3.7em', height: '3.7em',fill: 'none' }} stroke="currentColor" strokeWidth={3} />,
    badminton: <SvgIcon component={BadmintonIcon} viewBox="0 0 1024 1024" fontSize="large" title="打羽毛球" />,
    motorcycle: <SvgIcon component={MotorcycleIcon} viewBox="100 0 1024 424" fontSize="large" title="骑摩托" style={{ width: '2.7em', height: '2.7em' }} />,
    nikon: <SvgIcon component={NikonIcon} viewBox="80 0 800 700" fontSize="large" title="拍照" style={{ width: '3.7em', height: '2.7em' }} />,
    canon: <SvgIcon component={CanonIcon} viewBox="0 0 1024 1024" fontSize="large" title="拍照" />,
    camera_nikon: <SvgIcon component={CameraNikonIcon} viewBox="0 0 1024 1024" fontSize="large" title="拍照" />,
    trekking_boy: <SvgIcon component={TrekkingBoyIcon} viewBox="0 0 1024 1024" fontSize="large" title="徒步" />,
};


export { Icons };