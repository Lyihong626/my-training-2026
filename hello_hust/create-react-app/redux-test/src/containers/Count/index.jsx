//容器组件作为桥梁，连接UI组件和redux
import React, { Component } from 'react'
import Person from '../Person'

import { createIncrementAction, createDecrementAction, createIncrementAsynAction } from '../../redux/actions/count'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//定义UI组件
class Count extends Component {

//   state = { count: 0 }

  //加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value*1);
  }
  //减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value*1);
  }
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if(this.props.count%2!==0){
      this.props.jia(value*1);
    }
  }
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(value*1,500);
  }

  render() {
    console.log('UI组件接收到的props是',this.props);
    console.log('count的值是',this.props.count);
    return (
      <div>
        <h1>当前求和为：{this.props.count},下方组件总人数为：{this.props.renshu}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}

//映射状态
const mapStateToProps = state => ({ count: state.he,renshu:state.rens.length })

//mapDispatchToProps简写
const mapDispatchToProps={
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsynAction,
}

//使用connect（）（）创建并暴露一个Count的容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count);
export default CountContainer;
