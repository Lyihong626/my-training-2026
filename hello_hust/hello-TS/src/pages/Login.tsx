import React, { useState } from 'react'
import { Input, Button, Space, Form } from 'antd'
import '../css/index.css'
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  user: string;
  pwd: string;
}

//登录组件
export default function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handlesubmit = (values: LoginForm) => {
    const { user, pwd } = values;
    if (!user || !pwd) {
      alert('请输入账号和密码');
      return;
    }
    //从localstorage读取用户列表
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log('#####users#####', users);
    const found = users.find((person: any) => person.username === user && person.password === pwd);
    console.log('#####found#####', found);
    if (found) {
      alert('登录成功');
      navigate('/success');
    } else {
      alert('账号或密码错误');
    }
  }
  return (
    <div className='login-outer'>
      <Space direction="vertical" className='space'>
        <h1>登录页面</h1>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 24 }}
          name="login"
          onFinish={handlesubmit}
          autoComplete="off"
          layout="horizontal"
        >
          <Form.Item label="账号" name="user" >
              <Input size="large" placeholder="请输入账号" />
          </Form.Item>
          <Form.Item label="密码" name="pwd">
              <Input.Password size="large" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item className="submit-center">
            <Button type='primary' htmlType='submit'>登录</Button>
          </Form.Item>
        </Form>
        {/* 路由跳转 */}
        <Button type='text' onClick={() => navigate('/register')}>没有账号？去注册</Button>
      </Space>
    </div>
  )
}
