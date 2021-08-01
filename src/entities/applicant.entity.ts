import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Applicant extends Document {
  @Prop({ default: null })
  userID: string;

  @Prop({ default: null })
  companyID: string;

  @Prop({ default: null })
  advertisement: string;

  @Prop({ default: null })
  score: number;
}

export const ApplicantSchema = SchemaFactory.createForClass(Applicant);