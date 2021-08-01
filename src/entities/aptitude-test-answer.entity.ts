import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AptitudeTestAnswer extends Document {
  @Prop({ default: true })
  questionID: string;

  @Prop({ default: true })
  selection: string;

  @Prop({ default: true })
  answer: string;


}

export const AptitudeTestAnswerSchema = SchemaFactory.createForClass(AptitudeTestAnswer);