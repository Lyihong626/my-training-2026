//创建“外壳”组件APP
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

//创建并暴露App组件
export default class App extends Component {

    //初始化状态
    state = {
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'打代码',done:false},
            
        ]
    }
    //父组件传递给子组件head一个函数
    //head调用父组件的函数，向父组件传递值
    addTodo = (todoObj)=>{
        //获取原todos
        const {todos} = this.state;
        //追加一个todo
        console.log('App',todoObj);
        const newTodos = [todoObj,...todos];
        //更新状态
        this.setState({todos:newTodos});
    }

    //更新勾选框
    updateTodo = (id,done)=>{
        //获取状态中的todos
        const {todos} = this.state;
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id===id) return {...todoObj,done}//覆盖原对象中的 done 属性
            else return todoObj
        })
        this.setState({todos:newTodos}) 
    }

    //deleteTodo用于删除一个todo对象
    deleteTodo = (id)=>{
        //获取原来的todos
        const {todos} = this.state;
        //删除指定id的todo
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id!==id;
        })
        //更新状态
        this.setState({todos:newTodos});

    }

    //checkAllTodo用于全选
    checkAllTodo = (done)=>{
        //获取原来的todo
        const {todos} = this.state;
        //加工数据
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done:done};
        })
        //更新状态
        this.setState({todos:newTodos})
    }

    //清除所有已经完成的
    clearAllDone = ()=>{
        //获取原来的todos
        const {todos} = this.state;
        //过滤数据
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done;
        })
        //变更状态
        this.setState({todos:newTodos});
    }
    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo}/>
                </div>
            </div>
        )
    }
}
