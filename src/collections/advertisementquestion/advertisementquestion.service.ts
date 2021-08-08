import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdvertisementQuestion } from 'src/entities/advertisement-question.entity';
import { CreateAdvertisementQuestionDto } from './dto/create-advertisementquestion.dto';
import { UpdateAdvertisementQuestionDto } from './dto/update-advertisementquestion.dto';

@Injectable()
export class AdvertisementQuestionService {
  constructor(
    @InjectModel(AdvertisementQuestion.name)
    private readonly advertisementQuestionModel: Model<AdvertisementQuestion>,
  ) {}

  findAll(): Promise<AdvertisementQuestion[]> {
    return this.advertisementQuestionModel.find().exec();
  }

  async findOne(id: string): Promise<AdvertisementQuestion[]> {
    const advertisementq = await this.advertisementQuestionModel
      .find({ _id: id })
      .exec();
    if (!advertisementq) {
      throw new NotFoundException(`Advertisement question ${id} not found`);
    }
    return advertisementq;
  }

  async create(
    createAdvertisementQuestionDTO: CreateAdvertisementQuestionDto,
  ): Promise<AdvertisementQuestion> {
    const createadvertisementq = new this.advertisementQuestionModel(
      createAdvertisementQuestionDTO,
    );
    return await createadvertisementq.save();
  }

  async updateAdvertisementQuestion(
    id: string,
    updateAdvertisementQuestionDto: UpdateAdvertisementQuestionDto,
  ): Promise<AdvertisementQuestion | undefined> {
    const exAdvertisementQuestion = await this.advertisementQuestionModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updateAdvertisementQuestionDto },
        { new: true },
      )
      .exec();
    if (!exAdvertisementQuestion) {
      throw new NotFoundException(`not found`);
    }
    return exAdvertisementQuestion;
  }
}
