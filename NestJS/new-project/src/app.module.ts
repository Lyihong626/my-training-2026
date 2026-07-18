import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ TasksModule,AuthModule,PrismaModule,
    /*
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'123456',
      database:'task-management',
      autoLoadEntities:true,//TypeORM 会自动找到所有实体
      synchronize:true,//自动根据实体定义更新数据库表结构（建表、加字段、改类型）
    }),
    */
  ],
})
export class AppModule {}
