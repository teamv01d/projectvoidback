import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Company extends Document {
  @Prop()
  company_name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  about: string;

  @Prop()
  web_address: string;

  @Prop()
  isActive: boolean;
}

export const CompanySchema = SchemaFactory.createForClass(Company);