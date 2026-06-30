import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//类式组件
// export default class Demo extends Component {
//   state = {count:0}

//   add = ()=>{
//     this.setState(state=>({count:state.count+1}))
//   }
//   unmount = ()=>{
//     if(window.root){
//       window.root.unmount();
//       window.root = null;
//     }
//   }
//   componentDidMount() {
//     this.timer = setInterval(()=>{
//       this.setState(state=>({count:state.count+1}))
//     },1000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         <h1>当前求和为：{this.state.count}</h1>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//       </div>
//     )
//   }
// }

//函数式组件
function Demo(){
  // console.log('Demo');
  //useState初始的时候使用，后续再次调用函数不会被替换
  const [count,setCount] = React.useState(0);
  const myRef = React.useRef();

  React.useEffect(()=>{
    let timer = setInterval(()=>{
      setCount(count=>count+1)
    },1000)
    return ()=>{
      clearInterval(timer);
    }
  },[])//[]空数组表示谁也不监测

  function add(){
    // setCount(count+1)
    setCount(count=>count+1)
  }

  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }
  //提示输入的回调
  function show(){
    alert(myRef.current.value);
  }
  
  return (
    <div>
      <input type="text" ref={myRef}/>
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示</button>
    </div>
  )
}

export default Demo
