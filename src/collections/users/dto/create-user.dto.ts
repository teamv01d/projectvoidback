import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly surname: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsDate()
  @IsOptional()
  readonly birthdate: Date;

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
}
