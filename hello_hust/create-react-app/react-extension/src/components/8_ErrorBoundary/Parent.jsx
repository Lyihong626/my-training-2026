import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {

  state = {
    hasError:""
  }

  //错误边界：将错误控制在一定范围内，不会导致整个程序无法运行
  //当Parent的子组件出现报错，会触发这个调用，并携带错误信息
  static getDerivedStateFromError(error){
    console.log(error);
    return {hasError:error};
  }

  componentDidCatch(){
    console.log('渲染组件时出错')
  }
  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError?<h2>当前网络不稳定，请稍后再试</h2>:<Child/>}
      </div>
    )
  }
}
