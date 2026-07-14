import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Messages extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ]
  }
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/messages/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                  {/* 传递search参数 */}
                  {/* <Link to={`/home/messages/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                 {/* 传递state参数 */}
                  <Link to={{pathname:'/home/messages/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp;
                 
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 携带参数的方式 */}
        {/* 声明接受params参数 */}
        {/* <Route path="/home/messages/detail/:id/:title" component={Detail}/> */}
        {/* search参数无需声明接受,正常注册路由即可 */}
         {/* <Route path="/home/messages/detail" component={Detail}/> */}
          {/* state参数无需声明接受,正常注册路由即可 */}
         <Route path="/home/messages/detail" component={Detail}/>
      </div>
    )
  }
}
