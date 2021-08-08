import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, isValidObjectId, ObjectId } from 'mongoose';

@Schema()
export class Advertisement extends Document {
  @Prop()
  advertisement_name: string;

  @Prop()
  explanation: string;

  @Prop({ default: null })
  start_date: string;

  @Prop()
  end_date: string;

  @Prop({ default: null })
  city: string;

}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement);
