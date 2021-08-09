import { IsOptional } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateAdvertisementQuestionDto {
  advertisementID: ObjectId;

  @IsOptional()
  subject: string;

  @IsOptional()
  question: string;

  @IsOptional()
  optionA: string;

  @IsOptional()
  optionB: string;

  @IsOptional()
  optionC: string;

  @IsOptional()
  optionD: string;

  @IsOptional()
  answer: string;
}
