import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Users extends Document {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  phone: string;

  @Prop()
  university: string;

  @Prop()
  degree: string;

  @Prop()
  city: string;

  @Prop()
  cv: string;

  @Prop()
  isActive: boolean;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
