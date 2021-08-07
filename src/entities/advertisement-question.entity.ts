import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AdvertisementQuestion extends Document {
  @Prop()
  question: string;

  @Prop()
  optionA: string;

  @Prop()
  optionB: string;

  @Prop()
  optionC: string;

  @Prop()
  optionD: string;

  @Prop()
  answer: string;
}

export const AdvertisementQuestionSchema = SchemaFactory.createForClass(
  AdvertisementQuestion,
);
