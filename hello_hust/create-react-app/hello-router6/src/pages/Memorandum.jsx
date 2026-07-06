import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { PageHeader, Button, Input, Space, Col, Row, List } from 'antd';
import { nanoid } from 'nanoid';
import '../Css/Memorandum.css'


export default function Search() {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    const initData = [
        { id: '001', content: "今天周一", state: true },
        { id: '002', content: "今天周二", state: false },
        { id: '003', content: "今天周三", state: true },
        { id: '004', content: "今天周四", state: false },
        { id: '005', content: "今天周五", state: false },
        { id: '006', content: "今天周六", state: true },
        { id: '007', content: "今天周日", state: false },
        { id: '008', content: "今天天气不错", state: false },
        { id: '009', content: "今天是晴天", state: false },
        { id: '010', content: "下雨了", state: false },
        { id: '011', content: "今天是雨天", state: true },
    ]
    const [listData, setListData] = useState(initData);
    const [inputValue, setInputValue] = useState('');
    const [searchValue,setSearchValue] = useState('');
    const [searchData,setSearchData] = useState('');
    //添加待办事项
    const addList = (value) => {
        console.log('新添加的待办事项', value);
        if (!value.trim()) {//判空
            // alert('请输入待办事项!');
            return;
        }
        const newItem = { id: nanoid(), content: value.trim(), state: false };
        setListData([newItem, ...listData]);
        setInputValue('');//每次添加之后，清空输入框

    }
    //搜索待办事项
    useEffect(()=>{
        if(!searchValue.trim()){
            setSearchData(listData);
            return;
        }
        const keyWords = searchValue.toLowerCase().trim();
        const searchData = listData.filter(item=>
            item.content.toLowerCase().includes(keyWords)
        )
        setSearchData(searchData);
    },[listData,searchValue])
    //完成操作
    const completeList = (listId) => {
        setListData(
            listData.map((item) => (//不能直接修改state原数据，React检测不到变化
                item.id === listId ? { ...item, state: !item.state } : item//复制一个item，并将state更改
            ))
        )
    }
    //删除操作
    const deleteList = (listId) => {
        setListData(
            listData.filter(item => item.id !== listId)
        )
    }
    return (
        <div className='outer'>
            <PageHeader
                className="site-page-header"
                title="备忘录"
                subTitle="管理待办事项"
            />
            <Row style={{ margin: 0, width: '100%' }}>
                <Col span={24}>
                    <Search
                        placeholder="input text"
                        allowClear
                        enterButton="添加"
                        size="middle"
                        value={inputValue}//把inputValue变成输入框的唯一数据源
                        onChange={(e) => { setInputValue(e.target.value) }}//当value发生变化，配合更新inputstate
                        //onSearch 在触发时，会自动向回调函数传入一个参数：当前输入框的值（字符串 value）。
                        onSearch={addList}//onSearch 默认会传当前输入框的值
                    />
                </Col>
            </Row>
            <Row style={{ margin: 0, width: '100%' }}>
                <Col span={24}>
                    <Search
                        placeholder="input text"
                        allowClear
                        value={searchValue}
                        onChange={(e)=>setSearchValue(e.target.value)}
                    />
                </Col>
            </Row>
            <Row style={{ margin: 0, width: '100%' }}>
                <Col span={24}>
                    <div id="scrollableDiv">
                        <List
                            dataSource={searchData}//列表数据源
                            renderItem={(item) => (
                                <List.Item key={item.id}>
                                    <List.Item.Meta
                                        title={<span style={{ textDecoration: item.state ? 'line-through' : 'none', fontSize: 16 }}>{item.content}</span>}
                                    />
                                    <div>
                                        <button onClick={() => { if (!item.state) completeList(item.id) }} type='link'>完成</button>&nbsp;&nbsp;
                                        <button onClick={() => deleteList(item.id)} type='link'>删除</button>
                                    </div>
                                </List.Item>
                            )
                            }
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
