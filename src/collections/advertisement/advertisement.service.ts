import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

  async findOne(id: string): Promise<Advertisement | undefined> {
    const advertisement = await this.advertisementModel.findById(id).populate('companyID').exec();
    if (!advertisement) {
      throw new NotFoundException(`Advertisement ${id} not found`);
    }
    return advertisement;
  }

  async create(
    createAdvertisementDTO: CreateAdvertisementDto,
  ): Promise<Advertisement> {
    const createAdvertisement = new this.advertisementModel(
      createAdvertisementDTO,
    );
    return await createAdvertisement.save();
  }
}
