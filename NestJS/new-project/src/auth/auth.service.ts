import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayLoad } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersRepository:UsersRepository,
        private jwtService:JwtService,
    ){}

    //注册
    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void>{
        return this.usersRepository.createUser(authCredentialsDto);
    }

    //登录
    async signIn(authCredentialsDto:AuthCredentialsDto):Promise<{accessToken:string}>{
        const {username,password} = authCredentialsDto;
        const user = await this.usersRepository.findOne({
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
