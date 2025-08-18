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
import { ReactComponent as JavaIcon } from '../assets/icons/java-plain-wordmark.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/icons/javascript-plain.svg';
import { ReactComponent as MySQLIcon } from '../assets/icons/mysql-plain-wordmark.svg';
import { ReactComponent as NodejsIcon } from '../assets/icons/nodejs-plain-wordmark.svg';
import { ReactComponent as PHPIcon } from '../assets/icons/php-plain.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-original-wordmark.svg';
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
// ICONS END

/** Default icons */
const Icons = {
    email: <MailIcon />,
    projects: <ComputerIcon />,
    about: <InfoIcon />,
    java: <SvgIcon component={JavaIcon} viewBox="0 0 128 128" fontSize="large" title="Java" />,
    typescript: <SvgIcon component={TypeScriptIcon} viewBox="0 0 128 128" fontSize="large" title="TypeScript" />,
    javascript: <SvgIcon component={JavaScriptIcon} viewBox="0 0 128 128" fontSize="large" title="JavaScript" />,
    mysql: <SvgIcon component={MySQLIcon} viewBox="0 0 128 128" fontSize="large" title="MySQL" />,
    php: <SvgIcon component={PHPIcon} viewBox="0 0 128 128" fontSize="large" title="PHP" />,
    nodejs: <SvgIcon component={NodejsIcon} viewBox="0 0 128 128" fontSize="large" title="Node.js" />,
    react: <SvgIcon component={ReactIcon} viewBox="0 0 128 128" fontSize="large" title="React" />,
    helpoutline: <HelpOutlineIcon />,
    map: <MapIcon />,
    code: <CodeIcon />,
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
    company: <SvgIcon component={CompanyIcon} viewBox="0 0 1024 1024" fill='currentColor' />,
    paratera: <SvgIcon component={ParateraIcon} viewBox="0 0 8230 1024" fontSize="large" />,
    changan: <SvgIcon component={ChanganIcon} viewBox="0 0 1024 1024" />,
    cmhk: <SvgIcon component={CmhkIcon} viewBox="0 0 1024 1024" />,
    zhaoshangju: <SvgIcon component={CmhkIcon} viewBox="0 0 1024 1024" />,
    fuyao: <SvgIcon component={FyIcon} viewBox="0 0 300 300" />,
    fuyaofroup: <SvgIcon component={FyGroupIcon} viewBox="0 0 500 200" />,

};


export { Icons };