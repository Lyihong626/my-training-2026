import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class index extends Component {
    state = {//初始化状态,数组
        users:[],
        isFirst:true,
        isLoading:false,
        err:'',
    }
    //在componentDidMount中注册订阅，在componentWillUnmount中取消订阅，避免内存泄漏。
    componentDidMount(){
        //回调函数，接收两个参数
        PubSub.subscribe('atguigu',(_,stateObj)=>{
            console.log('List组件受到消息了',stateObj);
            this.setState(stateObj);
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
    }
    render() {
        const {users,isFirst,isLoading,err}=this.state;
        // const {users,isFirst,isLoading,err}=this.props;
        return (
            <div className="row">
                {
                    isFirst?<h2>欢迎使用，输入关键字，随后点击搜素</h2>:
                    isLoading?<h2>Loading...</h2>:
                    err?<h2 style={{color:'red'}}></h2>:
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                    <img alt="head_portrait" src={userObj.avatar_url} style={{ width: ' 100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
