import { IsEnum, IsOptional, IsString } from 'class-validator';
import {TaskStatus} from '../task-status-enum';
import { Field, InputType } from '@nestjs/graphql';

console.log('TaskStatus:', TaskStatus);
@InputType()
export class GetTasksFilterDto{
    @Field({ nullable: true })
    @IsOptional()
    @IsEnum(TaskStatus)
    status?:TaskStatus;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    search?:string;
}