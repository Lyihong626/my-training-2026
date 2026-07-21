import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [ 
    TasksModule,
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,  // 让ConfigService在整个应用中都可用
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,//使用Apollo GraphQL
      autoSchemaFile:true,//自动生成schema.gql文件
      playground:true,//开启网页版GraphQL调试工具
      context: ({ req }) => ({ req }),
    })
  ],
})
export class AppModule {}
