import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
// import { UsersRepository } from "./users.repository";
import { JwtPayLoad } from "./jwt-payload.interface";
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { User } from "./user.entity";
import {user} from '../../generated/prisma/client';
import { PrismaService } from "../prisma/prisma.service";
type User = user;

@Injectable()
// 将Token解码，去数据库查这个用户存不存在。
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private prisma:PrismaService,
    ){
        super({
            secretOrKey:'topSecret51',// 1. 验证签名的密钥,要和module的secret相同
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),// 2. 从请求头提取 JWT
        });
    }

    async validate(payload:JwtPayLoad):Promise<User>{// 3. 验证通过后调用
        const {username} = payload;
        const user = await this.prisma.user.findUnique({
            where:{username},
        });

        if(!user){
            throw new UnauthorizedException();
        }
        return user;// 4. 返回用户，NestJS会把这个user对象自动塞进Request（请求对象）里
    }
}