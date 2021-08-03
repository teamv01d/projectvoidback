import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateApplicantDto {
 
  @IsString()
  userID: string;

  @IsString()
  @IsOptional()
  companyID: string;

  @IsString()
  @IsOptional()
  advertisementID: string;

  @IsInt()
  @IsOptional()
  score: number;
}
