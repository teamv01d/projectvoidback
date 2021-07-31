import { IsBoolean, IsEmail, IsString } from 'class-validator';


export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly surname: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly university: string;

  @IsString()
  readonly degree: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly cv: string;

  @IsBoolean()
  readonly isActive: boolean;

}
