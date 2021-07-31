import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Advertisement } from './advertisement.entity';

@Schema()
export class AdvertisementQuestion extends Document {
  @Prop()
  advertisementID: Advertisement;

  @Prop()
  questionID: string;

  @Prop()
  company_questionID: string;

}

export const AdvertisementQuestionSchema = SchemaFactory.createForClass(AdvertisementQuestion);