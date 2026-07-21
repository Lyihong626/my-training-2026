import { Module } from '@nestjs/common'
import { TasksController } from './tasks.controller';
// import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status-enum';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Task } from './task.entity';
// import { TasksRepository } from './tasks.repository';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { TaskPrismaService } from './tasks-prisma.service';
import { TasksResolver } from './tasks.resolver';


@Module({
  imports: [
    //TypeOrmModule.forFeature([Task]),//注册实体
    AuthModule,
    PrismaModule,
  ],
  // controllers: [TasksController],
  providers: [
    // TasksService,
    //TasksRepository,
    TaskPrismaService,
    TasksResolver,
  ],
})
export class TasksModule {}

//重新导出TaskStatus
export { TaskStatus }
export { TaskStatus as default } from './task-status-enum';
