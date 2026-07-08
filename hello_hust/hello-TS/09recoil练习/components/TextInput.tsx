import React from 'react'
import {useRecoilState} from 'recoil'
import {textState} from '../store'

//输入框组件

export default function TextInput() {
    const [text,setText] = useRecoilState(textState);
    //事件类型+<HTMLInputElement>（事件目标元素类型）
    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setText(event.target.value);
    };
  return (
    <div>
        <input type='text' value={text} onChange={onChange}/>
        <br />
        <span>Echo:{text}</span>
    </div>
  )
}

