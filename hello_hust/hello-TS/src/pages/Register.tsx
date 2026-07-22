import React, { useState } from 'react'
import { Input, Button, Space, Form } from 'antd'
import '../css/index.css';
import { useNavigate } from 'react-router-dom';

interface RegisterForm {
    Auser: string;
    Apwd1: string;
    Apwd2: string;
}

//登录组件
export default function Register() {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const handlesubmit = (values: RegisterForm) => {
        const { Auser, Apwd1 } = values;
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
        form.resetFields();
        navigate('/login');//切换到登录页面
    }
    return (
        <div className='register-outer'>
            <Space direction="vertical" className='space'>
                <h1>注册页面</h1>
                <Form
                    className="register-form"
                    form={form}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 24 }}
                    name="register"
                    onFinish={handlesubmit}
                    autoComplete="off"
                    layout="horizontal"
                // className="input-row"
                // className='input1' 
                >
                    <Form.Item label="账号" name="Auser" rules={[{ required: true, message: '请输入账号' }]}>
                        <Input size='large' placeholder="请输入账号" />
                    </Form.Item>
                    <Form.Item label="登录密码" name="Apwd1" rules={[{ required: true, message: '请输入密码' }, { min: 6, message: '密码至少6位' },]}>
                        <Input.Password size='large' placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item label="确认密码" name="Apwd2" rules={[{ required: true, message: '再次输入密码' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (getFieldValue('Apwd1') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('两次输入的密码不一致'));
                        },
                    }),
                    ]}>
                        <Input.Password size='large' placeholder="再次输入密码" />
                    </Form.Item>
                    <Form.Item className="submit-center">
                        <Button type='primary' htmlType='submit'>注册</Button>
                    </Form.Item>
                </Form>
                <Button type="text" onClick={() => navigate('/login')}>已有账号！去登录</Button>
            </Space>
        </div>
    )
}
