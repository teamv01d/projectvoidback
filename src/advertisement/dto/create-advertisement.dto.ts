import { IsBoolean, IsDate, IsEmail, IsOptional, IsString } from 'class-validator';
import { CompanyModel } from 'src/entities/company.entity';

export class CreateAdvertisementDto {
 
  @IsOptional()
  readonly companyID: CompanyModel;

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
