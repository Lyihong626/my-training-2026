import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
    //重写 getRequest 方法，让 Passport 能从 GraphQL 上下文中获取 req
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        console.log("ctx.getContext().req", ctx.getContext().req);
        return ctx.getContext().req;
    }

    //重写 handleRequest 方法，自定义认证失败时的处理逻辑
    handleRequest(err: any, user: any, info: any) {
        if (err || !user) {
            throw err || new UnauthorizedException('请先登录');
        }
        return user;
    }
}