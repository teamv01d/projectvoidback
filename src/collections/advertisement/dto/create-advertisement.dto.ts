import { IsOptional, IsString } from 'class-validator';
import { ObjectId, SchemaTypes } from 'mongoose';

export class CreateAdvertisementDto {
  companyID: ObjectId;

  @IsString()
  @IsOptional()
  readonly advertisement_name: string;

  @IsString()
  @IsOptional()
  readonly explanation: string;

  @IsString()
  @IsOptional()
  readonly start_date: string;

  @IsString()
  @IsOptional()
  readonly end_date: string;

  @IsString()
  @IsOptional()
  readonly city: string;
}
