// 该文件专门用于暴露一个store对象，整个应用只有一个store对象
//专门用于创建redux中最核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Person组件服务的reducer
import personReducer from './reducers/person'
//引入redux-thunk,用于支持异步action
import {thunk} from 'redux-thunk'
//暴露store
//createStore(reducer, preloadedState, enhancer) 是 Redux 最核心的 API
//它的作用是创建一个全局唯一的状态树（State Tree）。
/**
 * 第一个参数 countReducer：告诉管家“状态该怎么变”。
 * Reducer 是一个纯函数，接收当前状态和 Action，返回新状态。
 */
//汇总所有的reducer变为一个reducer
const allReducers = combineReducers({
    he:countReducer,
    rens:personReducer
})
export default createStore(allReducers,applyMiddleware(thunk))
