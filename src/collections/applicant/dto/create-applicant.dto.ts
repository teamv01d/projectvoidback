import { IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateApplicantDto {
  @IsString()
  userID: ObjectId;

  @IsString()
  advertisementID: ObjectId;

  @IsString()
  score: string;
}
