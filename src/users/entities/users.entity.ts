import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Users extends Document {
  @Prop()
  name: string;

  @Prop()
  static surname: string;

  @Prop()
  static email: string;

  @Prop({ nullable: true })
  static password: string;

  @Prop()
  static phone: string;

  @Prop()
  static university: string;

  @Prop()
  static degree: string;

  @Prop()
  static city: string;

  @Prop()
  static cv: string;

  @Prop()
  static isActive: boolean;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
