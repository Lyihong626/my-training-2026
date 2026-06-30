//创建“外壳”组件APP
import './App.less';
import React, { Component } from 'react'
import {Button,DatePicker} from 'antd'
import {WechatOutlined,WeiboOutlined,SearchOutlined}  from '@ant-design/icons'
// import 'antd/dist/antd.css'
const {RangePicker} = DatePicker;

//创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                App...
                <button>点击</button>
                <Button type="primary">按钮1</Button> 
                <Button type="link">按钮2</Button>
                <Button type="primary" icon={<SearchOutlined/>}>Search</Button>
                <WechatOutlined/>
                <WeiboOutlined/>
                <DatePicker />
                <RangePicker/>
            </div>
        )
    }
}
