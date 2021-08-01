import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CompanyQuestion extends Document {
  @Prop({ default: null })
  advertisementID: string;

  @Prop({ default: null })
  subjectID: string;

  @Prop({ default: null })
  question_typeID: string;

  @Prop({ default: null })
  question: string;

  
}

export const CompanyQuestionSchema = SchemaFactory.createForClass(CompanyQuestion);