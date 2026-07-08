import {atom} from 'recoil';

export interface TodoItem {
  id: string;
  title: string;
  content: string;
  isComplete: boolean;
}

const initList = [
    {id:'001',title:'你好1',content:'天气真好。测试1',isComplete:false},
    {id:'002',title:'你好2',content:'天气真好。测试2',isComplete:true},
    {id:'003',title:'你好3',content:'天气真好。测试3',isComplete:false},
    {id:'004',title:'你好4',content:'天气真好。测试4',isComplete:true},
    {id:'005',title:'你好5',content:'天气真好。测试5',isComplete:false},
    {id:'006',title:'你好6',content:'天气真好。测试6',isComplete:false},
    {id:'007',title:'你好7',content:'天气真好。测试7',isComplete:true},
    {id:'008',title:'你好8',content:'天气真好。测试8',isComplete:false},
    {id:'009',title:'你好9',content:'天气真好。测试9',isComplete:true},
    {id:'010',title:'你好10',content:'天气真好。测试10',isComplete:true},
    {id:'011',title:'你好11',content:'天气真好。测试11',isComplete:false},
    {id:'012',title:'你好12',content:'天气真好。测试12',isComplete:false},
    {id:'013',title:'你好13',content:'天气真好。测试13',isComplete:true},
    {id:'014',title:'你好14',content:'天气真好。测试14',isComplete:false},
]

//需要提供参数类型,TypeScript 会尝试从 default 推断类型，但 [] 被推断为 never[]（因为数组为空且没有元素类型）
//定义待办列表的atom
export const todoListState = atom<TodoItem[]>({
    key:'todoListState',
    default:initList,
})

//定义筛选条件的atom
export const todoListFilterState = atom<string>({
    key:'todoListFilterState',
    default:'Show All',
})