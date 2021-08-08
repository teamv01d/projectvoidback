import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, isValidObjectId, ObjectId, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Advertisement extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Users' })
  userID: ObjectId;

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

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Users' })
  companyID: ObjectId;

}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement);
