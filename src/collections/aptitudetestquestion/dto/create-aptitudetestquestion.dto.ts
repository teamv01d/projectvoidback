import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';


export class CreateAptitudeTestQuestionDto {
  

  @IsString()
  @IsOptional()
  question: string;

  @IsString()
  @IsOptional()
  A: string;

  @IsString()
  @IsOptional()
  B: string;

  @IsString()
  @IsOptional()
  C: string;

  @IsString()
  @IsOptional()
  D: string;

  @IsString()
  @IsOptional()
  answer: string;

}
