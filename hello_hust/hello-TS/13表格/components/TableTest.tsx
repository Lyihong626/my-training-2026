import {useRecoilValue} from 'recoil';
import {stuListState,student} from '../store';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Table } from 'antd';
import React from 'react'
import '../less/index.less'

export default function TableTest() {
  const studentList = useRecoilValue(stuListState);
  //定义table的列
  //将筛选控件嵌入表头
  const columns:ColumnsType<student> = [
    {title:'姓名',dataIndex:'name',},
    {
      title:'年龄',
      dataIndex:'age',
      defaultSortOrder:'descend',
      sorter:(a:student,b:student)=>a.age-b.age,
    },
    {
      title:'性别',
      dataIndex:'sex',
      //下拉筛选框
      filters:[
        {text:'男',value:'男'},
        {text:'女',value:'女'},
      ],
      onFilter:(value,record)=>record.sex===value,
    },
    {
      title:'专业',
      dataIndex:'major',
      filters:[
        {text:'计算机科学与技术',value:'计算机科学与技术'},
        {text:'物联网工程',value:'物联网工程'},
        {text:'软件工程',value:'软件工程'},
      ],
      onFilter:(value,record)=>record.major===value,
    },
  ]
  return (
    <div className='outer'>
      <Table 
      className='table'
        bordered={true}
        columns={columns}
        dataSource={studentList}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        />
    </div>
  )
}
