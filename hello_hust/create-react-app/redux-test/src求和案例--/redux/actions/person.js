import {ADD_PERSON} from '../constant'

//创建添加一个person的action对象
export const createAddPersonAction = personObj =>({type:ADD_PERSON,data:personObj})