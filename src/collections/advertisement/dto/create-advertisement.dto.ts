import { IsBoolean, IsDate, IsEmpty, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateAdvertisementDto {
 
  @IsOptional()
  readonly companyID: ObjectId;

  @IsString()
  readonly advertisement_name: string;

  @IsString()
  readonly explanation: string;

  @IsString()
  @IsOptional()
  readonly start_date: string;

  @IsString()
  readonly end_date: string;

  @IsString()
  @IsOptional()
  readonly city: string;

}
