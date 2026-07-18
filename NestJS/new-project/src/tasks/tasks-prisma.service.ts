import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
// import { User } from "../auth/user.entity";
// import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
// import { TaskStatus } from "./task-status-enum";
import { TaskStatus } from "../../generated/prisma/enums";
import {task,user} from '../../generated/prisma/client'

type Task = task;
type User = user;

@Injectable()
export class TaskPrismaService {
    constructor(private prisma: PrismaService) { }

    //根据status和search条件查找tasks
    async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
        console.log('根据status和search条件查找tasks');
        const { status, search } = filterDto;
        const where: any = {
            userId: user.id,
        };
        // 只有status有值时才添加
        if (status) {
            where.status = status;
        }
        // 只有search有值时才添加
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },//忽略大小写insensitive
                { description: { contains: search, mode: 'insensitive' } },
            ];
        }
        const tasks = await this.prisma.task.findMany({ where });
        return tasks;
    }

    //查根据id查找task
    async getTaskById(id: string, user: User): Promise<Task> {
        const tasks = await this.prisma.task.findFirst({
            where: { userId: user.id, id, }
        });
        if (!tasks) {
            throw new NotFoundException(`没有查找到ID为"${id}"的task`);
        }
        return tasks;
    }

    //创建task
    async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
        const { title, description } = createTaskDto;
        const data = {
            title, description, status: TaskStatus.OPEN, userId: user.id,
        }
        const task = await this.prisma.task.create({ data });
        //await this.prisma.task.save(task);//prisma没有save方法
        return task;
    }

    //根据id删除task
    //Prisma 的 delete 会检查存在性,要保证存在
    async deleteTask(id: string, user: User): Promise<void> {
        //检查是否存在
        await this.getTaskById(id, user);
        const result = await this.prisma.task.delete({
            where: {id},//Prisma 的 delete 只支持唯一字段（id）,不能写成userId: user.id, id: 'xxx' 
        });
        console.log("删除task:", result);
    }

    //修改task
    async updateTaskStatus(id: string, status: TaskStatus, user: User): Promise<Task> {
        await this.getTaskById(id, user);
        const newTask = await this.prisma.task.update({
            where: { id },//Prisma 的update只支持唯一字段（id）
            data: {
                status,
            }
        });
        console.log(`修改ID为"${id}"的task:, ${newTask}`);
        return newTask;
    }

}