import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {TaskStatus} from "./tasks.module";
import { User } from "../auth/user.entity";
import { Exclude } from "class-transformer";

@Entity()
export class Task{
    @PrimaryGeneratedColumn('uuid')
    id!:string;

    @Column()
    title!:string;

    @Column()
    description!:string;

    @Column()
    status!:TaskStatus;

    @ManyToOne((type)=>User,(user)=>user.tasks,{eager:false})
    @Exclude({toPlainOnly:true})//排除用户属性
    user!:User;
}