import React,{useState} from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
    const [messages] = useState([
        { id: '001', title: '消息', content: '锄禾日当午' },
        { id: '002', title: '消息', content: '汗滴禾下土' },
        { id: '003', title: '消息', content: '谁知盘中餐' },
        { id: '004', title: '消息', content: '粒粒皆辛苦' },
    ])
    return (
        <div>
            <ul>
                {
                    messages.map((msgObj) => {
                        return (
                            //路由链接
                            <li key={msgObj.id}>
                                {/* params传参 */}
                                {/* <Link to = {'detail/${msgObj.id}/${msgObj.title}/${msgObj.content}'}>{msgObj.title}</Link> */}
                                {/* search参数传参 */}
                                {/* <Link to={`detail?id=${msgObj.id}&title=${msgObj.title}&content=${msgObj.content}`}>
                                    {msgObj.title}
                                </Link> */}
                                {/* state参数传参 */}
                                <Link to="detail" state={{id:msgObj.id, title:msgObj.title, content:msgObj.content}}>
                                    {msgObj.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
