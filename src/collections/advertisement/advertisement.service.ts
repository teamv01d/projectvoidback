import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Advertisement } from 'src/entities/advertisement.entity';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';

@Injectable()
export class AdvertisementService {
  constructor(
    @InjectModel(Advertisement.name)
    private readonly advertisementModel: Model<Advertisement>,
  ) {}

  findAll(): Promise<Advertisement[]> {
    return this.advertisementModel.find().populate('companyID').exec();
  }

  async findOne(id: string) {
    const advertisement = await this.advertisementModel
      .find({ _id: id })
      .populate('companyID')
      .exec();
    if (!advertisement) {
      throw new NotFoundException(`Advertisement ${id} not found`);
    }
    return advertisement;
  }

  async create(@Body() body: CreateAdvertisementDto): Promise<Advertisement> {
    const createAdvertisement = new this.advertisementModel(body).populate(
      'companyID',
    );
    return await createAdvertisement.save();
  }
}
