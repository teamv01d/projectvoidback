import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AptitudeTestAnswer extends Document {
  @Prop({ default: null })
  questionID: string;

  @Prop({ default: null })
  selection: string;

  @Prop({ default: null })
  answer: string;


}

export const AptitudeTestAnswerSchema = SchemaFactory.createForClass(AptitudeTestAnswer);