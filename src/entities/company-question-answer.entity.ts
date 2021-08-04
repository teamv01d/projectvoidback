import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CompanyQuestion } from './company-question.entity';

@Schema()
export class CompanyQuestionAnswer extends Document {
  @Prop({ default: null })
  company_questionID: string;

  @Prop({ default: null })
  selection: string;

  @Prop({ default: null })
  answer: string;

}

export const CompanyQuestionAnswerSchema = SchemaFactory.createForClass(CompanyQuestionAnswer);