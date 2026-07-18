import { Repository } from "typeorm";
import { Task } from "./task.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { DataSource } from "typeorm/browser";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status-enum";
import { InjectDataSource } from "@nestjs/typeorm";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { User } from "../auth/user.entity";

@Injectable()
export class TasksRepository extends Repository<Task> {
    // DataSource 需要用 @InjectDataSource() 装饰器来注入。
    constructor(@InjectDataSource() private dataSource: DataSource) {
        super(Task,dataSource.createEntityManager());
    }

    //根据条件获取tasks
    async getTasks(filterDto:GetTasksFilterDto,user:User):Promise<Task[]>{
        console.log('getTasks中的user',user);
        const {status,search} = filterDto;
        const query = this.createQueryBuilder('task');//创建查询构建器,'task'给表起个别名
        query.where({user});
        if(status){
            query.andWhere('task.status= :status',{status});//{status}的值映射到:status,:status 是参数占位符
        }
        if(search){
            query.andWhere(
                //LOWER()转换小写
                // SQL 会强制先执行括号内的 OR 逻辑
                '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))',
                {search:`%${search}%`},//用模板字符串查找，包含${search}字符串
            )
        }
        const tasks = await query.getMany();//执行查询，返回多条结果
        return tasks;
    }

    //创建task
    async createTask(createTaskDto: CreateTaskDto,user:User) :Promise<Task>{
        const { title, description } = createTaskDto;
        //创建task
        const task = this.create({
            title,
            description,
            status: TaskStatus.OPEN,
            user,
        });
        await this.save(task);//保存到数据库表
        return task;
    }

    //根据id查找
    async getTaskById(id: string,user:User) :Promise<Task>{
        const found = await this.findOne({
            //getTaskById 报错 500 是因为 where 条件中的 user 对象包含了 tasks 数组
            where: { id ,user:{id:user.id}}//需要精确匹配user的字段结构
        });
        if (!found) {
            throw new NotFoundException(`没有查找到ID为"${id}"的task`);
        }
        return found;
    }

    //根据id删除task
    async deleteTask(id:string,user:User):Promise<void>{
        const result = await this.delete({id,user:{id:user.id}});
        console.log("删除task:",result);
    }

    //更新task
    async updateTaskStatus(id:string,status:TaskStatus,user:User):Promise<Task>{
        const newTask = await this.getTaskById(id,user);
        newTask.status = status;
        await this.save(newTask);
        return newTask;
    }
        
}