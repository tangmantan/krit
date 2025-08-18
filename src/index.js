import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
// 导入字体加载器
import fontLoader from './utils/font-loader';

ReactDOM.render(
    <div className="body-wrapper">
        <App />
    </div>, document.getElementById('root')
);

// 初始化字体加载器
fontLoader.init();