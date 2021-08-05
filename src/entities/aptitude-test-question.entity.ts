import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AptitudeTestQuestion extends Document {

  @Prop({ default: null })
  question: string;

  @Prop({ default: null })
  A: string;

  @Prop({ default: null })
  B: string;

  @Prop({ default: null })
  C: string;

  @Prop({ default: null })
  D: string;

  @Prop({ default: null })
  answer: string;

}

export const AptitudeTestQuestionSchema = SchemaFactory.createForClass(AptitudeTestQuestion);