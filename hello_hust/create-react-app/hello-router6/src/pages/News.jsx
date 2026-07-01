import React from 'react'
import  {useNavigationType,useOutlet} from 'react-router-dom'

export default function News() {
    console.log(useNavigationType())
    console.log(useOutlet())
    return (
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    )
}
