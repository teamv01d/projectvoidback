import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AdvertisementModel } from './advertisement.entity';
import { QuestionType } from './question-type.entity';
import { SubjectClass } from './subject.entity';

@Schema()
export class CompanyQuestion extends Document {
  @Prop()
  advertisementID: AdvertisementModel;

  @Prop()
  subjectID: SubjectClass;

  @Prop()
  question_typeID: QuestionType;

  @Prop()
  question: string;

  
}

export const CompanyQuestionSchema = SchemaFactory.createForClass(CompanyQuestion);