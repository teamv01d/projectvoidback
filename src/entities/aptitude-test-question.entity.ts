import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AptitudeTestQuestion extends Document {

  @Prop({ default: null })
  subjectID: string;

  @Prop({ default: null })
  question_type: string;

  @Prop({ default: null })
  
  question: string;

}

export const AptitudeTestQuestionSchema = SchemaFactory.createForClass(AptitudeTestQuestion);