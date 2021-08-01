import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Users extends Document {
  @Prop({ default: null })
  company_questionID: string;

  @Prop({ default: null })
  selection: string;

  @Prop({ default: null })
  answer: string;

}

export const CompanyQuestionAnswerSchema = SchemaFactory.createForClass(Users);