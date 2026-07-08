import React from 'react'
import {RecoilRoot} from 'recoil'
import TextInput from './components/TextInput' 
import CharacterCount from './components/CharacterCount'

//根组件，存放RecoilRoot
export default function App() {
  return (
    <RecoilRoot>
        <h1>Recoil 字符统计</h1>
        <TextInput />
        <CharacterCount/>
    </RecoilRoot>
  )
}
