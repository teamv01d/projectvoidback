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
  photo: string;

  @Prop({ default: ' ' })
  birthdate: string;

  @Prop({ default: ' ' })
  city: string;

  @Prop({ default: ' ' })
  about: string;

  @Prop({ default: ' ' })
  university: string;

  @Prop({ default: ' ' })
  faculty: string;

  @Prop({ default: ' ' })
  phone: string;

  @Prop({ default: ' ' })
  cv: string;

  @Prop({ default: true })
  isActive: boolean;
}
export const UsersSchema = SchemaFactory.createForClass(Users);
