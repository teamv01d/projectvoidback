import { IsEmail, IsString } from 'class-validator';


export class CreateCompanyDto {
  @IsString()
  readonly company_name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
