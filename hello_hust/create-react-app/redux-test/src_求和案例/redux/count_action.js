/*
该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from './constant'

//表达式返回一个对象用小括号包裹
//同步action，action的值为Object类型的一般对象
export const createIncrementAction=data=>({type:INCREMENT,data})
export const createDecrementAction=data=>({type:DECREMENT,data})
//异步action，action的值为函数.异步action中一般都会调用同步action,异步action不是必须的
export const createIncrementAsynAction=(data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}