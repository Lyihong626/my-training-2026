import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

    back=()=>{
    this.props.history.goBack();
  }
  forward=()=>{
    this.props.history.goForward();
  }
  go=()=>{
    this.props.history.go(-2);
  }

    render() {
        console.log('Header组件收到的props是',this.props);
        return (
            <div className="page-header">
              <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>GO</button>
            </div>
        )
    }
}

// withRouter用来解决在一般组件中使用路由组件API的情况
export default withRouter(Header)