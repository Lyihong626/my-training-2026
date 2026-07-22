import { gql } from "@apollo/client";

//登录
export const SIGNIN = gql`
  mutation Signin($username: String!, $password: String!) {
    signin(username: $username, password: $password)
  }
`;

//注册
export const SIGNUP = gql`
  mutation Signup($username: String!, $password: String!) {
    signup(username: $username, password: $password)
  }
`;