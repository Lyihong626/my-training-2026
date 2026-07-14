import React, { Component } from 'react'
import qs from 'qs'

// qs.stringify()转为字符串格式
//qs.parse()解析字符串，转为js对象

const DetailData = [
    { id: '01', content: '你好，中国。' },
    { id: '02', content: '你好，尚硅谷。' },
    { id: '03', content: '你好，未来。' },
]

export default class Detail extends Component {
    render() {
        console.log(this.props);
        //接受params参数
        // const {id,title}=this.props.match.params;

        // 接受search参数
        // const { search } = this.props.location;
        // const {id,title} = qs.parse(search.slice(1));

        //接受state参数
        const {id,title}=this.props.location.state||{};

        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id===id
        })||{}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
