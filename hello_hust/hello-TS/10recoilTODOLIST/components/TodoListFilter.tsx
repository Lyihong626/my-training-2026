import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../store/atoms'
import { Select } from 'antd'
import '../css/index.css'

//筛选下拉菜单（全部/已完成/未完成）
export default function TodoListFilter() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  return (
    <div className='filter-div'>
      <h2>筛选：</h2>
      <Select
        className='select'
        defaultValue="Show All"
        value={filter}
        onChange={value => setFilter(value)}
        options={[
          { value: 'Show All', label: '全部', },
          { value: 'Show Completed', label: '已完成', },
          { value: 'Show Uncompleted', label: '未完成', },
        ]}
      >
      </Select>
    </div>
  )
}
