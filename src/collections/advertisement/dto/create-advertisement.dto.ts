import { IsBoolean, IsDate, IsEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAdvertisementDto {
 
  @IsString()
  @IsOptional()
  readonly companyID: string;

  @IsString()
  @IsOptional()
  readonly advertisement_name: string;

  @IsString()
  @IsOptional()
  readonly explanation: string;

  @IsDate()
  @IsOptional()
  readonly start_date: Date;

  @IsDate()
  @IsOptional()
  readonly end_date: Date;

  @IsString()
  @IsOptional()
  readonly city: string;

  @IsBoolean()
  @IsOptional()
  readonly advertisement_type: boolean;
}
