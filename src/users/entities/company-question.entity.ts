import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Advertisement } from './advertisement.entity';
import { QuestionType } from './question-type.entity';
import { SubjectClass } from './subject.entity';

@Schema()
export class CompanyQuestion extends Document {
  @Prop()
  advertisementID: Advertisement;

  @Prop()
  subjectID: SubjectClass;

  @Prop()
  question_typeID: QuestionType;

  @Prop()
  question: string;

  
}

export const UsersSchema = SchemaFactory.createForClass(CompanyQuestion);