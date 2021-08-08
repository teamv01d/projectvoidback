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

  findAll() {
    try {
      const allAdv = this.advertisementModel.aggregate([
        {
          $lookup: {
            from: 'users',
            localField: 'companyID',
            foreignField: '_id',
            as: 'profile',
          },
        },
      ]);
      return allAdv;
    } catch (error) {
      throw new NotFoundException('there is none what u looking for');
    }
  }

  async findOne(id: string): Promise<Advertisement[]> {
    const advertisement = await this.advertisementModel
      .find({ _id: id })
      .exec();
    if (!advertisement) {
      throw new NotFoundException(`Advertisement ${id} not found`);
    }
    return advertisement;
  }

  async create(
    createAdvertisementDTO: CreateAdvertisementDto,
  ): Promise<Advertisement> {
    const createadvertisement = new this.advertisementModel(
      createAdvertisementDTO,
    );
    return await createadvertisement.save();
  }
}
