//引入react核心库
import React from 'react'
//引入ReactDOM
import  ReactDOM from 'react-dom'
//引入APP组件
import App from './App'

/**
 * 该版本移出了已经完全移除了 ReactDOM.render 方法
 *  @testing-library/react@16.3.2
│ ├── react-dom@19.2.7 deduped
│ └── react@19.2.7 deduped
├─┬ react-dom@19.2.7
│ └── react@19.2.7 deduped
├─┬ react-scripts@5.0.1
│ └── react@19.2.7 deduped
└── react@19.2.7
 */

//渲染APP到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App />
  </React.StrictMode>)