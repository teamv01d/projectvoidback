import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  password: string;
}
