import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
// import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayLoad } from './jwt-payload.interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma:PrismaService,
        private jwtService:JwtService,
    ){}

    //注册
    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void>{
        const { username, password } = authCredentialsDto;
        //加密密码
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password,salt);//用密码和盐生成哈希密码

        //创建用户
        try {
            await this.prisma.user.create({
                data:{username,password:hashedPassword},
            });
        } catch (error) {
            const pgerror = error as any;
            console.log(pgerror.code);
            if (pgerror.code === '23505'||pgerror.code==='P2002') {
                throw new ConflictException('用户名已存在');
            } else {
                throw new InternalServerErrorException('注册失败');
            }
        }
    }

    //登录
    async signIn(authCredentialsDto:AuthCredentialsDto):Promise<{accessToken:string}>{
        const {username,password} = authCredentialsDto;
        const user = await this.prisma.user.findUnique({
            where:{username}
        });
        if(user&&(await bcrypt.compare(password,user.password))){
            // 准备要放入 JWT 的数据
            // Payload = 你想要放在 JWT 里的信息
            const payload:JwtPayLoad = {username};
            // 用 JWT 服务把数据加密成令牌
            const accessToken:string = await this.jwtService.sign(payload);
            // 把令牌返回给客户端
            return {accessToken};
        }else{
            throw new UnauthorizedException('请检查用户名或密码');
        }
    }
}
