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
  replaceShow=(id,title)=>{
    //replace跳转+携带params参数
    // this.props.history.replace(`/home/messages/detail/${id}/${title}`)
    //replace跳转+携带search参数
    // this.props.history.replace(`/home/messages/detail?id=${id}&title=${title}`)
    //replace跳转+携带state参数
    this.props.history.replace(`/home/messages/detail`,{id,title})
  }
  pushShow=(id,title)=>{
    // this.props.history.push(`/home/messages/detail/${id}/${title}`)
    // this.props.history.push(`/home/messages/detail?id=${id}&title=${title}`)
    this.props.history.push(`/home/messages/detail`,{id,title})
  }

  back=()=>{
    this.props.history.goBack();
  }
  forward=()=>{
    this.props.history.goForward();
  }
  go=()=>{
    this.props.history.go(-2);
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
                 {/* replace={true}替换模式，不留下痕迹，点击回退不会返回上一个页面 */}
                 &nbsp;<button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
                 &nbsp;<button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
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

         <button onClick={this.back}>回退</button>
         <button onClick={this.forward}>前进</button>
         <button onClick={this.go}>GO</button>
      </div>
    )
  }
}
