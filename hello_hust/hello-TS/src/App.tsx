import React ,{useState}from 'react'
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './pages/Success';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="kyzr-container">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seccess" element={<Success />} />
      </Routes>
    </div>
  );
}
