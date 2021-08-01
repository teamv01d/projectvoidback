import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AdvertisementQuestion extends Document {
  @Prop({ default: null })
  advertisementID: string;

  @Prop({ default: null })
  questionID: string;

  @Prop({ default: null })
  company_questionID: string;

}

export const AdvertisementQuestionSchema = SchemaFactory.createForClass(AdvertisementQuestion);