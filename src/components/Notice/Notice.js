import { Component } from 'react';
import { ChevronRight, Description, PlayArrow } from '@material-ui/icons';
import CircleButton from '../CircleButton/CircleButton';
import { Icons } from '../../config/icons';
import './Notice.scss';

class Notice extends Component {
    constructor() {
        super();
        this.state = { isHiding: false, hidden: false };
        document.body.style.setProperty('overflow', 'hidden');
    }

    render() {
        const wrapperClassNames = [
            'notice',
            this.state.isHiding && 'is-hiding'
        ].filter(className => className).join(' ');;

        if (this.state.hidden) {
            return null;
        }

        return (
            <div className={wrapperClassNames}>
                <div className="notice-content">
                    <h1><span>重要通知</span><br />这是一个</h1>
                    {/* <CircleButton link="https://tanmantang.com" tooltip="">
                        {Icons['twitter']}
                    </CircleButton>
                    <CircleButton link="https://tanmantang.com" tooltip="">
                        {Icons['facebook']}
                    </CircleButton>
                    <CircleButton link="https://tanmantang.com" tooltip="最新新闻">
                        <Description />
                    </CircleButton>
                    <CircleButton link="https://tanmantang.com" tooltip="观看视频">
                        <PlayArrow />
                    </CircleButton> */}
                </div>
                <CircleButton
                    className="to-website"
                    onClick={() => {
                        document.body.style.removeProperty('overflow');
                        this.setState({ isHiding: true });
                        setTimeout(() => this.setState({ hidden: true, isHiding: false }), 1000);
                    }}
                    size={4}
                    tooltip="回到主页"
                >
                    <ChevronRight />
                </CircleButton>
            </div>
        )
    }
}

export default Notice;