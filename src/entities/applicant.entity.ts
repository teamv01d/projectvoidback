import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AdvertisementModel } from './advertisement.entity';
import { Users } from './users.entity';

@Schema()
export class Company extends Document {
  @Prop()
  userID: Users;

  @Prop()
  companyID: Company;

  @Prop()
  advertisement: AdvertisementModel;

  @Prop()
  score: number;
}

export const ApplicantSchema = SchemaFactory.createForClass(Company);