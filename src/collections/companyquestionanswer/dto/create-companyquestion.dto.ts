import {IsOptional, IsString } from 'class-validator';

export class CreateCompanyQuestionAnswerDto {
  
  @IsString()
  @IsOptional()
  company_questionID: string;

  @IsString()
  @IsOptional()
  selection: string;

  @IsString()
  @IsOptional()
  answer: string;
}
