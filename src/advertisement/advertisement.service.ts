import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { Advertisement } from 'src/entities/advertisement.entity';
import { Company, CompanySchema } from 'src/entities/company.entity';

@Injectable()
export class AdvertisementService {
  constructor(
    @InjectModel(Advertisement.name) private readonly advertisementModel: Model<Advertisement>,
  ) {}

  findAll(): Promise<Advertisement[]> {
    return this.advertisementModel.find().exec();
  }

  async findOne(id: string): Promise<Advertisement[]> {
    const advertisement = await this.advertisementModel.find({ _id: id }).exec();
    if (!advertisement) {
      throw new NotFoundException(`Advertisement ${id} not found`);
    }
    return advertisement;
  }

  create(createAdvertisementDTO: CreateAdvertisementDto): Promise<Advertisement> {
    //const company = new Company();
    //company.email="email";
    //company.company_name="company_name";
    //company.about="about";
    //company.web_address="web adres";

    const advertisement = new this.advertisementModel(createAdvertisementDTO);
    return advertisement.save();
  }

  async updateAdvertisement(id: string, updateUserDto: UpdateAdvertisementDto,): Promise<Advertisement | undefined> {
    const exAdvertisement = await this.advertisementModel
      .findOneAndUpdate({ _id: id }, { $set: UpdateAdvertisementDto }, { new: true })
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
