import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Company } from './company.entity';

@Schema()
export class Advertisement extends Document {
  @Prop()
  companyID: Company;

  @Prop({ default: null })
  advertisement_name: string;

  @Prop({ default: null })
  explanation: string;

  @Prop({ default: new Date()})
  start_date: Date;

  @Prop({ default: new Date()})
  end_date: Date;

  @Prop({ default: null })
  city: string;

  @Prop()
  advertisement_type: boolean;
}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement);