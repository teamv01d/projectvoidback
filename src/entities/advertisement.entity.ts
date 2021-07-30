import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Company } from './company.entity';

@Schema()
export class Advertisement extends Document {
  @Prop()
  companyID: Company;

  @Prop()
  advertisement_name: string;

  @Prop()
  explanation: string;

  @Prop()
  start_date: string;

  @Prop()
  end_date: string;

  @Prop()
  city: string;

  @Prop()
  advertisement_type: string;
}

export const UsersSchema = SchemaFactory.createForClass(Advertisement);