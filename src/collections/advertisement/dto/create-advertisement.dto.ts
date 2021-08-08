import { IsOptional, IsString } from 'class-validator';
import { ObjectId, SchemaTypes } from 'mongoose';

export class CreateAdvertisementDto {
  companyID: ObjectId;

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
  readonly city: string;
}
