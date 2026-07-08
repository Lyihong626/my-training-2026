import React from 'react'
import {useRecoilValue} from 'recoil'
import { charCountState } from '../store'

//显示字符数组件
export default function CharacterCount() {
    const count = useRecoilValue(charCountState);
  return (
    <span>Character Count:{count}</span>
  )
}
