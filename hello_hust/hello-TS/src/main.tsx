import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'antd/dist/antd.css';   // antd4 的全局样式
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd'
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './router';
import App from './App';

ConfigProvider.config({
    theme: { primaryColor: 'rgb(224, 170, 54)' }
})
//项目入口文件
//为了同时满足 React 18 的 API 要求和 TypeScript 的类型检查
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>

)