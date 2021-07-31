import { IsBoolean, IsEmail, IsString } from 'class-validator';


export class CreateCompanyDto {
  @IsString()
  readonly company_name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly about: string;

  @IsString()
  readonly web_address: string;

  @IsBoolean()
  readonly isActive: boolean;
}
