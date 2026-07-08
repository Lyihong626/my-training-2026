import {atom, selector} from 'recoil'

//存放atom和selector

//Atom:存储输入框的文本
export const textState = atom({
    key:'textState',
    default:'',
})

//Selector：根据文本计算字符个数
export const charCountState = selector({
    key:'charCountState',
    get:({get})=>{
        const text = get(textState);
        return text.length;
    },
})