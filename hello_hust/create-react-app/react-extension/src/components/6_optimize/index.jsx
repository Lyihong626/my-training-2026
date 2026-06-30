import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {

    state = { carName: "奔驰" ,stus:['小张','小李','小王']}

    addStu = ()=>{
        const {stus} = this.state;
        this.setState({stus:['小刘',...stus]});
    }

    changeCar = () => {
        this.setState({ carName: "迈巴赫" });
        //无法实现，PureComponent做前对比，两者一样，不做更新
        const obj = this.state;
        obj.carName = '迈巴赫';
        this.setState(obj);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.carName === nextProps.state.carName)
            return false;
        else
            return true;
    }
    render() {
        const { carName ,stus} = this.state;
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <span>{stus}</span>
                <span>我的车的名字：{carName}</span><hr />
                <button onClick={this.changeCar}>点我换车</button>
                <button onClick={this.addStu}>添加小刘</button>
                <Child carName={carName} />
            </div>
        )
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.carName === nextProps.carName)
    //         return false;
    //     else
    //         return true;
    // }
    render() {
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>我接到的车名字是：{this.props.carName}</span>
                <Child />
            </div>
        )
    }
}
