import { IsEmail, IsString } from 'class-validator';


export class CreateCompanyDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly surname: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
