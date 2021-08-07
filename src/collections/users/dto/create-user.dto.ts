import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly surname: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  readonly birthdate: string;

  @IsString()
  @IsOptional()
  readonly city: string;

  @IsString()
  @IsOptional()
  readonly about: string;

  @IsString()
  @IsOptional()
  readonly university: string;

  @IsString()
  @IsOptional()
  readonly faculty: string;

  @IsString()
  @IsOptional()
  readonly phone: string;

  @IsString()
  @IsOptional()
  readonly cv: string;

  @IsBoolean()
  @IsOptional()
  role: boolean;

  @IsString()
  @IsOptional()
  photo: string;
}
