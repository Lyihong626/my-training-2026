import React, { useState } from 'react'
import { Input, Button, Space } from 'antd'
import { useSetRecoilState } from 'recoil';
import { pageState } from '../store/index';
import '../css/index.css'

//登录组件
export default function Login() {
  const setPage = useSetRecoilState(pageState);

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');

  const login=()=>{
    if(!user||!pwd){
      alert('请输入账号和密码');
      return ;
    }
    //从localstorage读取用户列表
    const users = JSON.parse(localStorage.getItem('users')||'[]');
    console.log('#####users#####',users);
    const found = users.find((person:any)=>person.username===user&&person.password===pwd);
    console.log('#####found#####',found);
    if(found){
      alert('登录成功');
    }else{
      alert('账号或密码错误');
    }
  }
  return (
    <div className='login-outer'>
      <Space direction="vertical" className='space'>
        <h1>登录页面</h1>
        <div className="input-row">
          <a className='input-label'>账号：</a>
        <Input className='input1' size="large" value={user} placeholder="请输入账号" onChange={e => setUser(e.target.value.trim())} />
        </div>
        <br />
        <div className="input-row">
        <a className='input-label'>密码：</a><Input.Password className='input1' value={pwd}  onChange={e => setPwd(e.target.value.trim())} placeholder="请输入密码" />
        </div>
        <br />
        <Button type='primary' onClick={login}>登录</Button>
        {/* 路由跳转 */}
        <Button type='text' onClick={()=>setPage('register')}>没有账号？去注册</Button>
      </Space>
    </div>
  )
}
