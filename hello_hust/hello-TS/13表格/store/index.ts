import {atom,selector} from 'recoil'
const initList = [
    {id:'01',name:'tom1',age:20,sex:'男',major:'计算机科学与技术'},
    {id:'02',name:'tom2',age:18,sex:'女',major:'物联网工程'},
    {id:'03',name:'tom3',age:19,sex:'男',major:'软件工程'},
    {id:'04',name:'tom4',age:21,sex:'女',major:'计算机科学与技术'},
    {id:'05',name:'tom5',age:22,sex:'男',major:'软件工程'},
    {id:'06',name:'tom6',age:23,sex:'男',major:'物联网工程'},
]
//学生列表atom
export const stuListState = atom({
    key:'stuListState',
    default:initList,
})
//筛选条件atom
export const filterState = atom({
    key:'filterState',
    default:'全部',
})

//筛选学生列表
export const filterListState = selector({
    key:'filterListState',
    get:({get})=>{
        const list = get(stuListState);
        const state = get(filterState);
        
    },
})
