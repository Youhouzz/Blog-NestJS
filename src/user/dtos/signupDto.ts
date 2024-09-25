import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
export class SignupDto {
    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    readonly username: string;


    @IsNotEmpty()
    @IsEmail()
    readonly email: string;


    @IsNotEmpty()
    @IsString()
    @Length(8, 50)
    readonly password: string;
}