import React, { Component } from 'react'
// import Count from './components/Count'
import Count from './containers/Count'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      // 容器组件的store要从这里传入
      <div><Count store={store}/></div>
    )
  }
}
