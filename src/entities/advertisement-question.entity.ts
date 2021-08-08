import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, isValidObjectId, ObjectId } from 'mongoose';

@Schema()
export class AdvertisementQuestion extends Document {
  @Prop({ type: isValidObjectId })
  advertisementID: ObjectId;

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

  @Prop()
  subject: string;
}

export const AdvertisementQuestionSchema = SchemaFactory.createForClass(
  AdvertisementQuestion,
);
