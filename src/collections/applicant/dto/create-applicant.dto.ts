import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateApplicantDto {
 
  @IsString()
  @IsOptional()
  userID: string;

  @IsString()
  @IsOptional()
  advertisementID: string;

  @IsInt()
  @IsOptional()
  score: number;
}
