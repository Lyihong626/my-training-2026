import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class index extends Component {

    search = async() => {
        //await 只能在 async 函数内部使用
        // 获取用户输入
        const { keyWordElement: { value: keyWord } } = this;
        // 发送请求前，通知List更新状态
        PubSub.publish('atguigu', { isFirst: false, isLoading: true });
        //用#region发送网络请求---使用axios发送。
        //发送网络请求，使用fetch发送（未优化）
        /*
        fetch(`/search/users2?q=${keyWord}`).then(
            response=>{
                console.log('联系服务器成功了');
                return response.json();
            },
            error=>{console.log('联系服务器失败了',error);
                return new Promise(()=>{})
            }
        ).then(
            response=>{console.log('获取数据成功了',response);},
            error=>{console.log('获取数据失败了',error);}
        ).catch(
            (error)=>{console.log(error);}
        )
            */

        //发送网络请求，使用fetch发送（优化）
        try {
            const response = await fetch(`/search/users2?q=${keyWord}`)
            const data = await response.json();
            console.log(data);
            PubSub.publish('atguigu', { isLoading: false,users:data.items });
        }catch(error){
            console.log('请求出错',error);
            PubSub.publish('atguigu', { isLoading: false,err:error.message });
        }
    }
    
    search=()=>{
        // console.log('Search组件发布消息了');
        // PubSub.publish('atguigu',{name:'tom',age:20});
        // 获取用户输入
        const {keyWordElement:{value:keyWord}} = this;
        PubSub.publish('atguigu',{isFirst:false,isLoading:true});
        axios.get(`/search/users2?q=${keyWord}`).then(
            Response=>{
                PubSub.publish('atguigu',{isLoading:false,users:Response.data.items});
            },
            error=>{
                PubSub.publish('atguigu',{isLoading:false,err:error.message});
            }
        )
    }
        
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
