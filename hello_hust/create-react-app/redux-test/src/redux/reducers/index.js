/**
 * 该文件用于汇总所有的reducer为一个总reducer
 */
//专门用于创建redux中最核心的store对象
import {combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer from '../reducers/count'
//引入为Person组件服务的reducer
import personReducer from '../reducers/person'

//汇总所有的reducer变为一个reducer
export default combineReducers({
    he:countReducer,
    rens:personReducer
})