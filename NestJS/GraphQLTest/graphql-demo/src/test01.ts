import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

//定义schema，查询语句和类型
const schema = buildSchema(`
    type Account{
    name:String
    age:Int
    sex:String
    department:String
    }
    type Query{
    hello:String
    accountName:String
    age:Int
    account:Account
    }
    `)

//定义resolver,查询对应的处理器
const root = {
    hello: () => {
        return 'hello world';
    },
    accountName: () => {
        return '张三';
    },
    age: () => {
        return 18;
    },
    account:()=>{
        return{
            name:'李四',
            age:20,
            sex:'男',
            department:'科学院',
        }
    }
}

//创建Express应用
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,//浏览器端可视化交互式测试工具
}))
app.listen(5000);

