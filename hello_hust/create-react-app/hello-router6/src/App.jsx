import React from 'react'
import {  NavLink ,Navigate,useRoutes} from 'react-router-dom';
import routes from './routes'
import Header from './components/Header'
import 'antd/dist/antd'

export default function App() {
  function computedClassName({ isActive }) {
    return isActive ? "list-group-item atguigu" : "list-group-item";
  }

  const element = useRoutes(routes)

  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* end作用：自己路由匹配，则父路由失去高亮 */}
            {/* 路由链接 */}
            <NavLink className={computedClassName} to="/about">
              About
            </NavLink>
            <NavLink className={computedClassName} to="/home" end>
              Home
            </NavLink>
            <NavLink className={computedClassName} to="/memorandum" end>
              Memorandum
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* <Routes>
                <Route caseSensitive path="/about" element={<About />} />
                <Route caseSensitive path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/about" />} />
              </Routes> */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
