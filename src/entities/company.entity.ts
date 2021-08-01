import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, mongo, Mongoose } from 'mongoose';
import * as mongoose from "mongoose";

export class CompanyModel{

  company_id: string;
  company_name: string;
  email: string;
  password:string;
  about: string;
  web_address: string;
  isActive: boolean;

}

export const CompanySchema = new mongoose.Schema({

  company_name: String,
  email: String,
  password: String,
  about: String,
  web_address: String,
  isActive: Boolean

});