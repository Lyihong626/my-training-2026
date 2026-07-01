import About from '../pages/About'
import Home from '../pages/Home'
import { Navigate, useRoutes } from 'react-router-dom'

export default([
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/',
      element:<Navigate to="/about"/>
    }
  ])