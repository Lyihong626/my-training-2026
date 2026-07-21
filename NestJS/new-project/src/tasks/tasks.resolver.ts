import { Args, Query, Context, Resolver, Mutation } from "@nestjs/graphql";
import { TaskPrismaService } from "./tasks-prisma.service";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "@prisma/client";
import { Task } from "./task.type";
import { PrismaService } from "../prisma/prisma.service";
import { GqlAuthGuard } from "../auth/gql-auth.guard";

const JWT_SECRET = 'topSecret51';

@Resolver('Task')
export class TasksResolver {
    constructor(private taskService: TaskPrismaService,private prisma: PrismaService) { }

    // // 从请求头提取并验证 JWT，返回用户信息
    // private async getCurrentUser(context: any) {
    //     const req = context.req;
    //     const authHeader = req?.headers?.authorization;
        
    //     if (!authHeader) {
    //         throw new UnauthorizedException('未提供认证 Token');
    //     }

    //     const token = authHeader.replace('Bearer ', '');
    //     try {
    //         const payload = jwt.verify(token, JWT_SECRET) as { username: string };
    //         const user = await this.prisma.user.findUnique({
    //             where: { username: payload.username },
    //         });
    //         if (!user) {
    //             throw new UnauthorizedException('用户不存在');
    //         }
    //         return user;
    //     } catch (error) {
    //         throw new UnauthorizedException('Token 无效或已过期');
    //     }
    // }

    //根据条件查询
    @Query(() => [Task])
    @UseGuards(GqlAuthGuard)
    async getTasks(
        @Args('filter') filterDto: GetTasksFilterDto,
        //@Context()携带HTTP请求里的信息,比如JWT Token、IP地址
        @Context() context: any,) {
        const user = context.req.user;
        return this.taskService.getTasks(filterDto, user);
    }

    //根据ID查询
    @Query(() => Task)
    @UseGuards(GqlAuthGuard)
    async getTaskById(
        @Args('id') is: string,
        @Context() context: any,
    ) {
        const user = context.req.user;
        return this.taskService.getTaskById(is, user);
    }

    //创建
    @Mutation(() => Task)
    @UseGuards(GqlAuthGuard)
    async createTask(
        @Args('createTaskInput') createTaskDto: CreateTaskDto,
        @Context() context: any,
    ) {
        const user = context.req.user;
        return this.taskService.createTask(createTaskDto, user);
    }

    //修改
    @Mutation(() => Task)
    @UseGuards(GqlAuthGuard)
    async updateTaskStatus(
        @Args('id') id: string,
        @Args('status') status: TaskStatus,
        @Context() context: any,
    ) {
        const user = context.req.user;
        return this.taskService.updateTaskStatus(id, status, user);
    }

    //删除
    @Mutation(() => Boolean)
    @UseGuards(GqlAuthGuard)
    async deleteTask(
        @Args('id') id: string,
        @Context() context: any,
    ) {
        const user = context.req.user;
        await this.taskService.deleteTask(id, user);
        return true;
    }
}