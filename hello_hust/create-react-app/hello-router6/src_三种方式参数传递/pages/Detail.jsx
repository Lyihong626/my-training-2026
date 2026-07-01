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
    return (
        <ul>
            <li>ID: {state.id}</li>
            <li>Title: {state.title}</li>
            <li>Content: {state.content}</li>
        </ul>
    )
}


