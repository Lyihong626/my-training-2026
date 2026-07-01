import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // user:[
        //     {id:'001',name:'tom',age:18},
        //     {id:'002',name:'jack',age:19},
        //     {id:'003',name:'peiqi',age:20},
        // ]
        user:'aaa'
    }
    render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        {
            this.state.user.map((userObj)=>{
                return <h4>{userObj.name}---{userObj.age}</h4>
            })
        }
      </div>
    )
  }
}
