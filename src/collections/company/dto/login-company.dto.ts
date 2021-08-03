import { IsEmail, IsString } from 'class-validator';

export class CompanyLoginDto {
  @IsEmail()
  readonly email: string;

  @IsString()
   password: string;
}
