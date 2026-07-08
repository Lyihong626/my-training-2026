import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatesState } from '../store/selectors'
import {Row,Col,Card,Statistic} from 'antd'

//统计信息（总数/完成数/百分比）
export default function TodoListStates() {
  const {totalNum,totalCompletedNum,totalUncompletedNum,percentNum}=useRecoilValue(todoListStatesState);

  return (
    <div>
      {/* 栅格自动换行 */}
      <Row gutter={[10,10]} justify="space-evenly" style={{padding:'0 10px'}}>
        <Col span={12}>
          <Card title="总数" size='small'>
            <h3>{totalNum}</h3>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="已完成" size='small'>
            <h3>{totalCompletedNum}</h3>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="未完成" size='small'>
            <h3>{totalUncompletedNum}</h3>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="完成率" size='small'>
            <h3>{Math.round(percentNum)+'%'}</h3>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
