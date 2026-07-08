import React from 'react'
import { RecoilRoot } from 'recoil'
import { Col, Layout, Row } from 'antd';
import TodoList from './components/TodoList'
import TodoItemShow from './components/TodoItemShow'
import './css/index.css'

const { Header, Content, Footer, Sider } = Layout;

//根组件，存放RecoilRoot
export default function App() {
  return (
    <RecoilRoot>
      <Layout className='outer'>
        <Header className='header'><h1>TO DO LIST</h1></Header>
        {/* 因为内部放了一个 Sider（侧边栏），Antd会自动把这一层 Layout 变成水平的 Flex 容器 */}
        {/* Sider 必须作为 Layout 的“直接子元素”才能生效 */}
        <Layout className='middle'>
          <Sider width='30%' className='sider'><TodoList/></Sider>
          <Layout className='middle-content'>
            <Content className='content'><TodoItemShow/></Content>
          </Layout>
        </Layout>
        <Footer className='footer'>
          <span>底部</span></Footer>
      </Layout>
    </RecoilRoot>
  )
}
