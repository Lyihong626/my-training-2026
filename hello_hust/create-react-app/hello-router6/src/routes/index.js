import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
import Memorandum from '../pages/Memorandum'
import { Navigate, useRoutes } from 'react-router-dom'

export default([
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/home',
      element:<Home/>,
      children:[
        {
          path:'news',
          element:<News/>
        },
        {
          path:'message',
          element:<Message/>,
          children:[
            {
              // path:'detail/:id/:title/:content',//params参数接收
              path:'detail',//search参数接收
              element:<Detail/>
            }
          ]
        },
        {
          index:true, // 表示 /home 的默认子路由
          element:<Navigate to='news'/>//没有匹配的路由，重新定向到news页面,/news表示绝对路径(不存在)
        }
      ]
    },
    {
      path:'memorandum',
      element:<Memorandum/>
    },
    {
      path:'/',
      element:<Navigate to="about"/>
    }
  ])