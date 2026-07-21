import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@ObjectType()
export class Task {
    //Filed 定义 GraphQL 类型中的字段
  @Field(() => ID)
  @IsNotEmpty()
  id!: string;

  @Field()
  @IsNotEmpty()
  title!: string;

  @Field({ nullable: true , defaultValue: ''})//GraphQL允许为空
  @IsOptional()
  description: string='';

  @Field()
  @IsNotEmpty()
  status!: string;

  @Field()
  @IsNotEmpty()
  userId!: string;
}