import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  company_name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  photo: string;

  @IsString()
  @IsOptional()
  about: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsOptional()
  web_address: string;

  @IsString()
  @IsOptional()
  role: boolean;
}
