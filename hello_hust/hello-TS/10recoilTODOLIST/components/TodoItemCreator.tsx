import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../store/atoms'
import { nanoid } from 'nanoid';
import { Input ,Button } from 'antd'
import '../css/index.css'

const { TextArea } = Input;


//添加待办事项
export default function TodoItemCreator() {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);//获取“写入”方法（添加待办事项只写不读）

  const addItem = () => {
    if (!titleValue.trim()) {
      alert('标题不能为空！')
      return;
    }
    setTodoList((oldList) => [...oldList, { id: nanoid(), title: titleValue, content: contentValue, isComplete: false }]);
    setTitleValue('');
    setContentValue('');
  }
  const deleteItem=()=>{
    setTitleValue('');
    setContentValue('');
  }
  return (
    <div className='itemCreator'>
      <h2>添加待办事项</h2>
      <hr />
      <div className='creator-div'>
        <Input
          placeholder="请输入标题"
          maxLength={10}
          value={titleValue}
          onChange={e => setTitleValue(e.target.value)}
          style={{width:300,height:30,marginBottom:5,fontSize:15}}
        />
        <TextArea
          placeholder="请输入内容"
          maxLength={15}
          value={contentValue}
          onChange={e => setContentValue(e.target.value)}
          autoSize={{ minRows: 3, maxRows: 5 }}
          style={{width:300,marginBottom:5,fontSize:15}}
        />
        <Button type='primary' onClick={addItem}>添加</Button>
        <Button type='primary' onClick={deleteItem}>清除</Button>
      </div>
      <hr />
    </div>
  )
}
