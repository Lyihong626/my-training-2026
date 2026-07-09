import React ,{useState}from 'react'
import Login from './components/Login';
import Register from './components/Register'
import { useRecoilValue } from 'recoil';
import { pageState } from './store/index'

//条件渲染，父子组件传递数据
//两个页面的切换
export default function App() {
  //用来在两个子组件之间切换
  const page = useRecoilValue(pageState);
  return (
    <div>
      {page === 'login' ? <Login/> : <Register/>}
    </div>
    // <div>
    //   <Login/>
    //   <Register/>
    // </div>
  )
}
