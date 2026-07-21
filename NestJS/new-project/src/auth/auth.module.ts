import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersRepository } from './users.repository';
// import { User } from './user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' ,session: false}),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    PrismaModule,
    // TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, JwtStrategy,AuthResolver],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule,],
})
export class AuthModule { }
