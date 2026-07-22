import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'antd/dist/antd.css';   // antd4 的全局样式
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd'
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import 'antd/dist/antd.variable.min.css';
import App from './App';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './apollo/client';

ConfigProvider.config({
    theme: { primaryColor: 'rgb(224, 170, 54)' }
})
//项目入口文件
//为了同时满足 React 18 的 API 要求和 TypeScript 的类型检查
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>

)