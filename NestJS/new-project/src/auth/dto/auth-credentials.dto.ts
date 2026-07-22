import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    username!:string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{
        message:'密码太弱'
    })
    password!:string;
}