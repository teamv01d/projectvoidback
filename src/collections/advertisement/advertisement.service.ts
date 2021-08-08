import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Advertisement } from 'src/entities/advertisement.entity';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';

@Injectable()
export class AdvertisementService {
  constructor(
    @InjectModel(Advertisement.name) private readonly advertisementModel: Model<Advertisement>,
  ) {}

  findAll(): Promise<Advertisement[]> {
    return this.advertisementModel.find().populate('companyID').exec();
  }

  async findOne(id: string): Promise<Advertisement[]> {
    const advertisement = await this.advertisementModel.find({ _id: id }).populate('companyID').exec();
    if (!advertisement) {
      throw new NotFoundException(`Advertisement ${id} not found`);
    }
    return advertisement;
  }

  async create(createAdvertisementDTO: CreateAdvertisementDto): Promise<Advertisement> {
   const createadvertisement = new this.advertisementModel(createAdvertisementDTO); 
    return await createadvertisement.save();
  }

  async updateAdvertisement(id: string, updateAdvertisementDto: UpdateAdvertisementDto,): Promise<Advertisement | undefined> {
    const exAdvertisement = await this.advertisementModel
      .findOneAndUpdate({ _id: id }, { $set: updateAdvertisementDto }, { new: true })
      .exec();
    if (!exAdvertisement) {
      throw new NotFoundException(`not found`);
    }
    return exAdvertisement;
  }

  async delete(id: string): Promise<Advertisement> {
    try {
      const advertisement = await this.advertisementModel.findOne({ _id: id });
      return advertisement.deleteOne();
    } catch (error) {
      throw new NotFoundException(`Advertisement ${id} cant delete cause there is none`);
    }
  }
}
