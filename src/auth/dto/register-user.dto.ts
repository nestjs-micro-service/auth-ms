import { IsString, IsStrongPassword, IsEmail } from 'class-validator';
export class RegisterUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword()
  password: string;

  @IsString()
  name: string;
}
