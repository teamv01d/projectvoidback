import { IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateAdvertisementQuestionDto {
  @IsOptional()
  readonly advertisementID: ObjectId;

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
