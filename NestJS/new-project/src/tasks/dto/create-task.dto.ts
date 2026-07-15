import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTaskDto{
    // ! 让 TypeScript 不报错
    // 验证装饰器确保运行时一定有值
    @IsNotEmpty({message:'标题不能为空'})
    @IsString()
    @MaxLength(100)
    title!:string;

    @IsNotEmpty({message:'描述不能为空'})
    @IsString()
    @MaxLength(500)
    description!:string;
}