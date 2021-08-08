import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateAptitudeTestQuestionDto {
  @IsString()
  subject: string;

  @IsString()
  question: string;

  @IsString()
  optionA: string;

  @IsString()
  optionB: string;

  @IsString()
  optionC: string;

  @IsString()
  optionD: string;

  @IsString()
  answer: string;
}
