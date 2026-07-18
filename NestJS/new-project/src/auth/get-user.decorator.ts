import { createParamDecorator ,ExecutionContext} from "@nestjs/common";
// import { User } from "./user.entity";
import {user} from '../../generated/prisma/client'
type User = user;

// 自定义装饰器
export const GetUser = createParamDecorator(
    (data,ctx:ExecutionContext):User => {
    const req = ctx.switchToHttp().getRequest();//获取 HTTP 请求对象
    return req.user;
})
