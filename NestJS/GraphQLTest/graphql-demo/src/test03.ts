import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

//定义schema，查询语句和类型
const schema = buildSchema(`
    input AccountInput{
        name:String
        age:Int
        sex:String
        department:String
    }
    type Account{
        name:String
        age:Int
        sex:String
        department:String
    }
    type Mutation{
        createAccount(input:AccountInput):Account
        updateAccount(id:ID!,input:AccountInput):Account
    }
        type Query{
        accounts:[Account]
        }
    `)
const fakeDb = {};
//定义resolver,查询对应的处理器
const root = {
    accounts(){
        const arr = [];
        for (const key in fakeDb){
            arr.push(fakeDb[key])
        }
        return arr;
    },
    createAccount({input}){
        //相当于数据库的保存
        fakeDb[input.name]=input;
        return fakeDb[input.name];
    },
    updateAccount({id,input}){
        //相当于数据库的保存
        const updatedAccount = Object.assign({},fakeDb[id],input);
        fakeDb[id] = this.updateAccount;
        return updatedAccount;
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

