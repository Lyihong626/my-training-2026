import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "../tasks/task.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id!:string;

    @Column({unique:true})
    username!:string;

    @Column()
    password!:string;

    @OneToMany(type=>Task,(task)=>task.user,{eager:true})
    //第二个参数关联另一个实体
    tasks:Task[];

}