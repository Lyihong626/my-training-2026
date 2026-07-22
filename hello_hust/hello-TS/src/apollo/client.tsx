import { InMemoryCache } from "@apollo/client";
import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//连接后端graphql服务
const httpLink = createHttpLink({
    uri:'http://localhost:3000/graphql',//后端地址
});

//登录之后，自动携带token
const authLink = setContext((_,{headers})=>{
    const token = localStorage.getItem('accessToken');
    return{
        //添加Token到请求头
        headers:{
            ...headers,
            authorization:token?`Bearer ${token}`:'',
        }
    }
});

//创建Apollo Client
export const client = new ApolloClient({
    link:authLink.concat(httpLink),//把两个链路连接起来,相当于管道串联
    cache:new InMemoryCache(),
});

