import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';


export class CreateCompanyDto {
  @IsString()
  readonly company_name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly about: string;

  @IsString()
  @IsOptional()
  readonly web_address: string;

  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;
}
