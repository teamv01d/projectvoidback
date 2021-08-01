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

  @Prop({ default: null })
  about: string;

  @Prop({ default: null })
  web_address: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
