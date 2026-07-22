import React, { useState } from 'react'
import { Input, Button, Space, Form, message } from 'antd'
import '../css/index.css';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client/react';
import { SIGNUP } from '../graphql/auth';
import { loadErrorMessages } from '@apollo/client/dev';

// interface RegisterForm {
//     Auser: string;
//     Apwd1: string;
//     Apwd2: string;
// }

//注册组件
export default function Register() {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const [signup, { loading }] = useMutation(SIGNUP);

    const handlesubmit = async (values: { username: string; password: string }) => {
        try {
            const { username, password } = values;
            console.log(`register发送的数据: username:${username}, password:${password}`);
            const { data } = await signup({
                variables: {
                    username,
                    password,
                }
            });
            console.log('data', data);
            if (data) {
                message.success('注册成功');
                form.resetFields();
                navigate('/login');
            }
        } catch (error) {
            //显示后端返回的错误信息
            const errorMessage = error instanceof Error ? error.message : '注册失败，请稍后重试';
            message.error(errorMessage || '注册失败');
            console.log('#####注册失败#####', error);
        }
    };

    // const handlesubmit = (values: RegisterForm) => {
    //     const { Auser, Apwd1 } = values;
    //     const users = JSON.parse(localStorage.getItem('users') || '[]');
    //     //判断账号已存在
    //     const found = users.find((person: any) => person.username === Auser);
    //     if (found) {
    //         alert('该账号已存在');
    //         return;
    //     }
    //     users.push({ username: Auser, password: Apwd1 });
    //     localStorage.setItem('users', JSON.stringify(users));
    //     alert('注册成功，前往登录');
    //     form.resetFields();
    //     navigate('/login');//切换到登录页面
    // }
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
                >
                    <Form.Item label="账号" name="username" rules={[
                        { required: true, message: '请输入账号' },
                        { min: 2, message: '账号至少2位' },
                        { max: 20, message: '账号最多20位' },
                    ]}>
                        <Input size='large' placeholder="请输入账号" />
                    </Form.Item>
                    <Form.Item label="登录密码" name="password" rules={[
                        { required: true, message: '请输入密码' },
                        { min: 6, message: '密码至少6位' },
                        { max: 32, message: '密码最多32位' },
                        { pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, message: '密码需包含大小写字母、数字或特殊字符' },
                    ]}>
                        <Input.Password size='large' placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item label="确认密码" name="password2" rules={[{ required: true, message: '再次输入密码' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('两次输入的密码不一致'));
                        },
                    }),
                    ]}>
                        <Input.Password size='large' placeholder="再次输入密码" />
                    </Form.Item>
                    <Form.Item className="submit-center">
                        <Button type='primary' htmlType='submit' loading={loading}>注册</Button>
                    </Form.Item>
                </Form>
                <Button type="text" onClick={() => navigate('/login')}>已有账号！去登录</Button>
            </Space>
        </div>
    )
}
