import React, { useState } from 'react'
import { Input, Button, Space } from 'antd'
import { useSetRecoilState } from 'recoil';
import { pageState } from '../store/index';
import '../css/index.css'


//登录组件
export default function Register() {
    const setPage = useSetRecoilState(pageState);//只写不读
    const [Auser, setAuser] = useState('');
    const [Apwd1, setApwd1] = useState('');
    const [Apwd2, setApwd2] = useState('');
    const register = () => {
        if (!Auser || !Apwd1 || !Apwd2) {
            alert('请输入账号密码');
            return;
        }
        if (Apwd1 !== Apwd2) {
            alert('两次密码不一致');
            return;
        }
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        //判断账号已存在
        const found = users.find((person: any) => person.username === Auser);
        if (found) {
            alert('该账号已存在');
            return;
        }
        users.push({ username: Auser, password: Apwd1 });
        localStorage.setItem('users', JSON.stringify(users));
        alert('注册成功，前往登录');
        setAuser('');
        setApwd1('');
        setApwd2('');
        setPage('login');//切换到登录页面
    }
    return (
        <div className='register-outer'>
            <Space direction="vertical" className='space'>
                <h1>注册页面</h1>
                <div className="input-row">
                    <a className='input-label'>账号：</a><Input size='large' className='input1' value={Auser} onChange={e => setAuser(e.target.value.trim())} placeholder="请输入账号" />
                </div>
                <br />
                <div className="input-row">
                    <a className='input-label'>登录密码：</a><Input.Password className='input1' value={Apwd1} onChange={e => setApwd1(e.target.value.trim())} placeholder="请输入密码" />
                </div>
                <br />
                <div className="input-row">
                    <a className='input-label'>确认密码：</a><Input.Password className='input1' value={Apwd2} onChange={e => setApwd2(e.target.value.trim())} placeholder="再次输入密码" />
                </div>
                <br />
                <Button type='primary' onClick={register}>注册</Button>
                <Button type="text" onClick={()=>setPage('login')}>已有账号！去登录</Button>
            </Space>
        </div>
    )
}
