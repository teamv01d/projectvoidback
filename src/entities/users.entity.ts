import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Users extends Document {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  photo: string;

  @Prop({ default: null })
  birthdate: string;

  @Prop({ default: null })
  city: string;

  @Prop({ default: null })
  about: string;

  @Prop({ default: null })
  university: string;

  @Prop({ default: null })
  faculty: string;

  @Prop({ default: null })
  phone: string;

  @Prop({ default: null })
  cvUrl: string;

  @Prop({ default: true })
  role: boolean;

  @Prop()
  company_name: string;

  @Prop({ default: null })
  web_address: string;
}
export const UsersSchema = SchemaFactory.createForClass(Users);
