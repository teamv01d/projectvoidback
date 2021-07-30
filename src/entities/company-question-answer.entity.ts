import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CompanyQuestion } from './company-question.entity';

@Schema()
export class Users extends Document {
  @Prop()
  company_questionID: CompanyQuestion;

  @Prop()
  selection: string;

  @Prop()
  answer: string;

}

export const UsersSchema = SchemaFactory.createForClass(Users);