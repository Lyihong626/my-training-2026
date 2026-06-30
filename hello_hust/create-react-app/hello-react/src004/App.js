//创建“外壳”组件APP
import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

//创建并暴露App组件
export default class App extends Component {
    // state = {//初始化状态,数组
    //     users:[],
    //     isFirst:true,
    //     isLoading:false,
    //     err:'',
    // }
    // updateAppState = (stateObj)=>{
    //     this.setState(stateObj);
    // }
    render() {
        return (
            <div className="container">
                {/* <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/> */}
                <Search/>
                <List/>
            </div>
        )
    }
}
