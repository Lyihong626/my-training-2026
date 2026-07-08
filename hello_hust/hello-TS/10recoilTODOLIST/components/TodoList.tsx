import React from 'react'
import { useRecoilValue } from 'recoil'
import {filterTodoListState} from '../store/selectors'
import TodoItemCreator from './TodoItemCreator'
import TodoListFilter from './TodoListFilter'
import TodoListStates from './TodoListStates'
import '../css/index.css'

//列表容器（组装渲染左边部分）
export default function TodoList() {
  const todoList = useRecoilValue(filterTodoListState);
  return (
    <div className='left-outer'>
      <TodoItemCreator/>
      <TodoListFilter/>
      <TodoListStates/>
    </div>
  )
}
