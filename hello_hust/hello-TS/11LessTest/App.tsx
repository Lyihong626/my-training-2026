import React from 'react'
import './less/01.less'

//根组件，存放RecoilRoot
export default function App() {
  return (
    <div>
      <div className="test">
        <div className='test2'></div>
        <span className='div-span'>HAHAHAHA</span>
      </div>
      <div id="wrap">
        <div className="inner"></div>
      </div>
      <div className='test3'>HAHAHAHAHAHA</div>
      <div className='test4'>HAHAHAHAHAHA
        <button>按钮</button>
      </div>
    </div>
  )
}
