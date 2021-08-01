import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdvertisementModel } from 'src/entities/advertisement.entity';
import { CompanyModel } from 'src/entities/company.entity';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';

const result: AdvertisementModel[] = [];
@Injectable()
export class AdvertisementService {
  constructor(
    @InjectModel("Advertisement") private readonly advertisementModel: Model<AdvertisementModel>,
  ) {}

  findAll(): Promise<AdvertisementModel[]> {
    return this.advertisementModel.find().exec();
  }

  async findOne(id: string): Promise<AdvertisementModel[]> {
    const advertisement = await this.advertisementModel.find({ _id: id }).exec();
    if (!advertisement) {
      throw new NotFoundException(`Advertisement ${id} not found`);
    }
    return advertisement;
  }

  async create(createAdvertisementDTO: CreateAdvertisementDto): Promise<AdvertisementModel> {
    const company = new CompanyModel();
    company.company_id="sasafdbf";

   const createadvertisement = new this.advertisementModel({...createAdvertisementDTO,...company}); 
    return await createadvertisement.save();
  }

  async updateAdvertisement(id: string, updateUserDto: UpdateAdvertisementDto,): Promise<AdvertisementModel | undefined> {
    const exAdvertisement = await this.advertisementModel
      .findOneAndUpdate({ _id: id }, { $set: UpdateAdvertisementDto }, { new: true })
      .exec();
    if (!exAdvertisement) {
      throw new NotFoundException(`not found`);
    }
    return exAdvertisement;
  }

  async delete(id: string): Promise<AdvertisementModel> {
    try {
      const advertisement = await this.advertisementModel.findOne({ _id: id });
      return advertisement.deleteOne();
    } catch (error) {
      throw new NotFoundException(`Advertisement ${id} cant delete cause there is none`);
    }
  }
}
