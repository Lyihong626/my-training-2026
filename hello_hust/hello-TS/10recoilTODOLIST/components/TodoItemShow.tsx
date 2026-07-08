import React, { useState ,useEffect} from 'react'
import { Card, Row, Col, Button, Pagination, Checkbox } from 'antd'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todoListState } from '../store/atoms'
import { filterTodoListState } from '../store/selectors'
import { TodoItem } from '../store/atoms'
import '../css/index.css'


//展示清单项，组装渲染
export default function TodoItemShow() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const filterList = useRecoilValue(filterTodoListState);
  const [current, setCurrent] = useState(1);

  //当前页数据
  const start = (current - 1) * 9;
  const end = start + 9;
  const currentData = filterList.slice(start, end);

  //当该页数据清空，如果还有数据则返回上一页，没有则返回第一页
  useEffect(()=>{
    //总数据为0 
    if(todoList.length===0){
      setCurrent(1);
      return;
    }
    //该页清空数据，且有其他数据
    if(currentData.length===0&&current>1){
      setCurrent(current-1);
    }
  },[currentData])//这个地方监听currentData，

  //切换状态
  const changeItem = (item: TodoItem) => {
    const index = todoList.findIndex((i) => i.id === item.id);
    if (index === -1) return;//防止没有数据的情况
    const newList: TodoItem[] = [...todoList.slice(0, index), { ...item, isComplete: !item.isComplete }, ...todoList.slice(index + 1),];
    setTodoList(newList);
  }
  //删除
  const deleteItem = (item: TodoItem) => {
    const index = todoList.findIndex((i) => i.id === item.id);
    if (index === -1) return;
    const newList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
    setTodoList(newList);
  }


  return (
    <div className='show-div'>
      <div className='card-wapper'>
        <Row gutter={[16, 16]}>
          {currentData.map((item) => (
            <Col key={item.id} span={8}>
              <Card
                title={item.title}
                extra={//extra卡片右上角的操作区域
                  <Checkbox
                    checked={item.isComplete}
                    onChange={() => changeItem(item)}//修改待办事项
                  >
                    已完成
                  </Checkbox>
                }
                actions={[//卡片操作组，位置在卡片底部
                  <Button danger size="small" onClick={() => deleteItem(item)}>
                    删除
                  </Button>,
                ]}
              >
                {/* 自动换行 */}
                <span>{item.content}</span>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        {/* 只有数据超过 9 条时才显示分页 */}
        {/* 固定在底部不移动 */}
        {filterList.length > 9 && (
          <Pagination
            current={current}
            pageSize={9}//每页条数
            total={filterList.length}//组件内部自动计算页数
            onChange={(page) => setCurrent(page)}//自带参数page
            style={{ marginTop: 20, textAlign: 'center' }}
          />
        )}
      </div>
    </div>
  )
}


