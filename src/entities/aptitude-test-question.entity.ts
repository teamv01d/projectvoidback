import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { QuestionType } from './question-type.entity';
import { SubjectClass } from './subject.entity';

@Schema()
export class AptitudeTestQuestion extends Document {
  @Prop()
  subjectID: SubjectClass;

  @Prop()
  question_type: QuestionType;

  @Prop()
  question: string;
}

export const AptitudeTestQuestionSchema =
  SchemaFactory.createForClass(AptitudeTestQuestion);
