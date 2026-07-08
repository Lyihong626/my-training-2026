import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

//检测redux中状态的改变，如发生改变，重新渲染App组件
// store.subscribe(() => {
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(<App />);
// })
//react-redux可以自动监测

//使用<Provider>，App中的所有容器组件都能收到store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
        <App/>
    </Provider>)
