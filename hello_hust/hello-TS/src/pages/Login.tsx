import React, { useState } from 'react'
import { Input, Button, Space, Form, message } from 'antd'
import '../css/index.css'
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client/react';
import { SIGNIN } from '../graphql/auth';
import Password from 'antd/lib/input/Password';

// interface LoginForm {
//   user: string;
//   pwd: string;
// }

interface SigninResponse {
  signin: string;  // 后端返回的是Token字符串
}

//登录组件
export default function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [signin, { loading }] = useMutation<SigninResponse>(SIGNIN);

  const handlesubmit = async (values: { username: string, password: string }) => {
    try {
      const { username, password } = values;
      if (!username || !password) {
        message.warning('请输入账号和密码');
        return;
      }
      console.log('login发送的数据:', values);
      const { data } = await signin({
        variables: {
          username,
          password,
        }
      });
      const token = data?.signin;
      if (token) {
        localStorage.setItem('accessToken', token);
        message.success('登录成功');
        navigate('/success');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '注册失败，请稍后重试';
      message.error(errorMessage || '登录失败');
      console.log('#####登录失败#####', error);
    }
  };

  // const handlesubmit = (values: LoginForm) => {
  //   const { user, pwd } = values;
  //   if (!user || !pwd) {
  //     alert('请输入账号和密码');
  //     return;
  //   }
  //   //从localstorage读取用户列表
  //   const users = JSON.parse(localStorage.getItem('users') || '[]');
  //   console.log('#####users#####', users);
  //   const found = users.find((person: any) => person.username === user && person.password === pwd);
  //   console.log('#####found#####', found);
  //   if (found) {
  //     alert('登录成功');
  //     navigate('/success');
  //   } else {
  //     alert('账号或密码错误');
  //   }
  // }
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
          <Form.Item label="账号" name="username" >
            <Input size="large" placeholder="请输入账号" />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password size="large" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item className="submit-center">
            <Button type='primary' htmlType='submit' loading={loading}>登录</Button>
          </Form.Item>
        </Form>
        {/* 路由跳转 */}
        <Button type='text' onClick={() => navigate('/register')}>没有账号？去注册</Button>
      </Space>
    </div>
  )
}
