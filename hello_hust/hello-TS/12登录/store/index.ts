import { atom } from 'recoil';

//控制登录、注册两个子组件切换的atom
export const pageState = atom<'login' | 'register'>({
  key: 'pageState',
  default: 'login',
});