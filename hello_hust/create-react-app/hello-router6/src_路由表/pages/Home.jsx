import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'

export default function Home() {
  const [sum,setSum]=useState(1);
  return (
    <div>
      <h3>我是home，当前值为：{sum}</h3>
      {sum ===2?<Navigate to="/about" replace={true}/>:<h4>当前值为：{sum}</h4>}
      <button onClick={()=>setSum(2)}>点我变成2</button>
    </div>
    
  )
}
