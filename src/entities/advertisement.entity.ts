import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, isValidObjectId, ObjectId } from 'mongoose';

@Schema()
export class Advertisement extends Document {
  @Prop({ default: null, type: isValidObjectId })
  companyID: ObjectId;

  @Prop({ default: null })
  advertisement_name: string;

  @Prop({ default: null })
  explanation: string;

  @Prop({ default: new Date() })
  start_date: string;

  @Prop({ default: new Date() })
  end_date: string;

  @Prop({ default: null })
  city: string;

  @Prop({ default: true })
  advertisement_type: boolean;
}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement);
