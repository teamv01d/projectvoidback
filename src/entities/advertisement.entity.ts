import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, mongo, Mongoose } from 'mongoose';
import * as mongoose from "mongoose";
import { CompanyModel } from './company.entity';

export class AdvertisementModel{

  advertisement_id: string;
  companyID: CompanyModel;
  advertisement_name: string;
  explanation: string;
  start_date: Date;
  end_date: Date;
  city: string;
  advertisement_type: boolean;

}

export const AdvertisementSchema = new mongoose.Schema({

  companyID: Object,
  advertisement_name: String,
  explanation: String,
  start_date: Date,
  end_date: Date,
  city: String,
  advertisement_type: Boolean

});
