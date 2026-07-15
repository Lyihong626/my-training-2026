import { IsEnum, IsIn ,IsNotEmpty } from "class-validator";
import { TaskStatus } from "../task-status-enum";

export class UpdateTaskStatusDto{
    // @IsNotEmpty({message:'状态不能为空'})
    // @IsIn(['OPEN','IN_PROGRESS','DONE'],{
    //     message:'状态必须是OPEN ,IN_PROGRESS ,DONE'
    // })
    @IsEnum(TaskStatus)
    status!:TaskStatus;
}