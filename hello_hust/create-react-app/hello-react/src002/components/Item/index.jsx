import React, { Component } from 'react'
import './index.css'

export default class index extends Component {

  state = { mouse: false };
  //鼠标移入移出问题
  handleMouse = (flag) => {
    return () => {
      console.log(flag);
      this.setState({ mouse: flag })
    }
  }
  //勾选 取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      console.log(id, event.target.value);
      this.props.updateTodo(id, event.target.checked);
    }
  }

  //删除一个todo的回调
  handleDelete = (id) => {
    if (window.confirm('确定删除吗？')) {
      console.log('通知：删除一个todo', id);
      this.props.deleteTodo(id);
      console.log('删除成功!')
    }

  }
  render() {

    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input onChange={this.handleCheck(id)} type="checkbox" checked={done} />
          <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
