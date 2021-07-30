import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AptitudeTestQuestion } from './aptitude-test-question.entity';

@Schema()
export class AptitudeTestAnswer extends Document {
  @Prop()
  questionID: AptitudeTestQuestion;

  @Prop()
  selection: string;

  @Prop()
  answer: string;


}

export const AptitudeTestAnswerSchema = SchemaFactory.createForClass(AptitudeTestAnswer);