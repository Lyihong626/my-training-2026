import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
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
        }
      ]
    },
    {
      path:'/',
      element:<Navigate to="/about"/>
    }
  ])