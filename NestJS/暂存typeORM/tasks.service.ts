import { Injectable, NotFoundException, Search } from '@nestjs/common';
import { TaskStatus } from './tasks.module';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
// import { Task } from './task.entity';
// import { TasksRepository } from './tasks.repository';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from '../auth/user.entity';
import {task,user} from '../../generated/prisma/client'

type Task = task;
type User = user;

@Injectable()
export class TasksService {
    constructor(
        private tasksRepository: TasksRepository,
    ) {}

    //根据status和search条件查找tasks
    async getTasks(filterDto:GetTasksFilterDto,user:User):Promise<Task[]>{
        return this.tasksRepository.getTasks(filterDto,user);
    }
    
    //根据id查找task
    async getTaskById(id: string,user:User): Promise<Task> {
        return this.tasksRepository.getTaskById(id,user);
    }
   
    //创建
    async createTask(createTaskDto:CreateTaskDto,user:User):Promise<Task>{
        return this.tasksRepository.createTask(createTaskDto,user);
    }

    //删除
    async deleteTask(id:string,user:User):Promise<void>{
        return this.tasksRepository.deleteTask(id,user);
    }

    //更新
    async updateTaskStatus(id:string,status:TaskStatus,user:User):Promise<Task>{
        return this.tasksRepository.updateTaskStatus(id,status,user);
    }

}
