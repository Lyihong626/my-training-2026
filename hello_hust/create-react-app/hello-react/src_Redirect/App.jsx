//创建“外壳”组件APP
import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'//Home  About 是路由组件
import Header from './components/Header'//Header是一般组件
import MyNavLink from './components/MyNavLink'

//创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中，靠a标签跳转不同页面 */}
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}
                            {/* 在React中靠路由链接实现切换组件---编写路由链接 */}
                            {/* to链接：小写并且不加点 */}
                            <MyNavLink to="/about" a="a" b="b" c="c" children="About" />
                            {/* 模糊匹配 */}
                            <MyNavLink to="/home" children="Home" />
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由---不同链接的映射关系 */}
                                <Switch>
                                    {/* Switch匹配成功之后，不再向下查找 */}
                                    {/* 精准匹配 exact={true} 或者exact*/}
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    {/* Redirect作用是兜底，当路径都没有匹配上，匹配Redirect重定向*/}
                                    <Redirect to="/about"/>
                                </Switch>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
