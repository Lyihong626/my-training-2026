import React from 'react'
// import {useParams,useMatch} from 'react-router-dom'
// import {useSearchParams} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

export default function Detail() {
    // const {id, title, content} = useParams()
    // const x= useMatch('/home/message/detail/:id/:title/:content')
    // console.log(x)
    // const [searchParams,setSearchParams] = useSearchParams()//接受search参数
    const {state} = useLocation()//接受state参数
    if (!state) {
        return <div>请从消息列表进入详情页</div>;
    }
    const { id, title, content } = state;
    return (
        <ul>
            <li>ID: {id}</li>
            <li>Title: {title}</li>
            <li>Content: {content}</li>
        </ul>
    )
}


