import React ,{useState}from 'react'
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './pages/Success';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  console.log('App 渲染了');
  return (
    <div className="kyzr-container">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}
