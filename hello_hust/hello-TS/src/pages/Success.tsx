import React from 'react';
import { Button, Card } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  }
  return (
    <div>
      <h1>登录成功</h1>
      <Button type="primary" danger onClick={handleLogout}>
        退出登录
      </Button>
    </div>
  );
}