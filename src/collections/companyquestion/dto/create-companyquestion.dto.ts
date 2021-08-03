import {IsOptional, IsString } from 'class-validator';

export class CreateCompanyQuestionDto {
  @IsString()
  @IsOptional()
  advertisementID: string;

  @IsString()
  @IsOptional()
  subjectID: string;

  @IsString()
  @IsOptional()
  question_typeID: string;

  @IsString()
  @IsOptional()
  question: string;
}
