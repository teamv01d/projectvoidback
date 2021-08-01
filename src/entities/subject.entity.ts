import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SubjectClass extends Document {
  @Prop({ default: null })
  subject: string;
}

export const SubjectSchema = SchemaFactory.createForClass(SubjectClass);