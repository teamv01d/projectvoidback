import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, isValidObjectId, ObjectId } from 'mongoose';

@Schema()
export class Applicant extends Document {
  @Prop({ default: null, type: isValidObjectId })
  userID: ObjectId;

  @Prop({ default: null, type: isValidObjectId })
  advertisementID: ObjectId;

  @Prop({ default: null })
  score: string;
}

export const ApplicantSchema = SchemaFactory.createForClass(Applicant);
