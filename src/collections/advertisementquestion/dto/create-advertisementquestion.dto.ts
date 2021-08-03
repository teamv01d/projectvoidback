import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';


export class CreateAdvertisementQuestionDto {
  @IsString()
  @IsOptional()
  advertisementID: string;

  @IsString()
  @IsOptional()
  questionID: string;

  @IsString()
  @IsOptional()
  company_questionID: string;

}
