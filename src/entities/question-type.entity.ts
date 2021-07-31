import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class QuestionType extends Document {
  @Prop()
  question_type: string;
}

export const QuestionTypeSchema = SchemaFactory.createForClass(QuestionType);