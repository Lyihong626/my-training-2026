import {atom,selector} from 'recoil'

export interface student{
    id:string;
    name:string;
    age:number;
    sex:string;
    major:string;
}
const initList:student[] = [
    {id:'01',name:'tom1',age:20,sex:'男',major:'计算机科学与技术'},
    {id:'02',name:'tom2',age:18,sex:'女',major:'物联网工程'},
    {id:'03',name:'tom3',age:19,sex:'男',major:'软件工程'},
    {id:'04',name:'tom4',age:21,sex:'女',major:'计算机科学与技术'},
    {id:'05',name:'tom5',age:22,sex:'男',major:'软件工程'},
    {id:'06',name:'tom6',age:23,sex:'男',major:'物联网工程'},
    {id:'07',name:'tom7',age:20,sex:'男',major:'计算机科学与技术'},
    {id:'08',name:'tom8',age:18,sex:'女',major:'物联网工程'},
    {id:'09',name:'tom9',age:19,sex:'男',major:'软件工程'},
    {id:'10',name:'tom10',age:26,sex:'女',major:'软件工程'},
    {id:'11',name:'tom11',age:25,sex:'男',major:'软件工程'},
    {id:'12',name:'tom12',age:24,sex:'男',major:'物联网工程'},
]
//学生列表atom
export const stuListState = atom({
    key:'stuListState',
    default:initList,
})
// 筛选条件atom
// 多维度筛选，筛选sex和major
// export const filterState = atom({
//     key:'filterState',
//     default:{ sex: null, major: null } as { sex: string | null; major: string | null },//类型断言，编译时的类型强制转换
// })

// //筛选学生列表
// export const filterListState = selector({
//     key:'filterListState',
//     get:({get})=>{
//         const list = get(stuListState);
//         const state = get(filterState);
//         const filterList = list.filter((item)=>{
//             //多维度筛选
//             //判断性别（专业)是否为空，如果非空则需要和item的性别作比较和筛选；如果性别为空则不作为筛选条件，直接返回true
//             const sexFilter = state.sex?state.sex===item.sex:true;
//             const majorFilter = state.major?state.major===item.major:true;
//             //需要同时满足两个条件为true，才能返回该item
//             return sexFilter&&majorFilter;
//         })
//         return filterList;
//     },
// })
