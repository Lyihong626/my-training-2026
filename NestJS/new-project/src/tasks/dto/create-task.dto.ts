import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
//GraphQL 需要知道 CreateTaskDto 的结构，所以必须加 @InputType()
export class CreateTaskDto{
    // ! 让 TypeScript 不报错
    // 验证装饰器确保运行时一定有值
    @Field()
    @IsNotEmpty({message:'标题不能为空'})
    @IsString()
    @MaxLength(100)
    title!:string;

    @Field({nullable:true, defaultValue: ''})
    @IsString()
    @MaxLength(500)
    description:string='';
}