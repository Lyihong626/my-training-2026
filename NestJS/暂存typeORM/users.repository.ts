import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository extends Repository<User> {
    constructor(@InjectDataSource() private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password,salt);//用密码和盐生成哈希密码

        console.log('salt',salt);
        console.log('hashedPassword',hashedPassword);

        const user = this.create({ username, password:hashedPassword });
        try {
            await this.save(user);
        } catch (error) {
            const pgerror = error as any;
            console.log(pgerror.code);
            if (pgerror.code === '23505') {
                throw new ConflictException('用户名已存在');
            } else {
                throw new InternalServerErrorException();
            }
        }

    }

}
