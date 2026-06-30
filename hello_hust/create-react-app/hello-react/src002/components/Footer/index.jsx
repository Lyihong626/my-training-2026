import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  //全选checkbox的回调
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked);
  }

  //清楚所有已经完成的
  handleClearAllDone=()=>{
    this.props.clearAllDone();
  }
  render() {
    const {todos} = this.props;
    //已完成个数
    const doneCount = todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
      console.log("%%",doneCount);

      const total = todos.length;
    
    return (
      <div className="todo-footer">
        <label>
          <input onChange={this.handleCheckAll} checked={doneCount==total&&total!==0?true:false} type="checkbox"/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
