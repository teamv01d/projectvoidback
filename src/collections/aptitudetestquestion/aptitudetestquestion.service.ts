import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AptitudeTestQuestion } from 'src/entities/aptitude-test-question.entity';
import { CreateAptitudeTestQuestionDto } from './dto/create-aptitudetestquestion.dto';
import { UpdateAptitudeTestQuestionDto } from './dto/update-aptitudetestquestion.dto';

@Injectable()
export class AptitudeTestQuestionService {
  constructor(
    @InjectModel(AptitudeTestQuestion.name) private readonly aptitudeTestQuestionModel: Model<AptitudeTestQuestion>,
  ) {}

  findAll(): Promise<AptitudeTestQuestion[]> {
    return this.aptitudeTestQuestionModel.find().exec();
  }

  async findOne(id: string): Promise<AptitudeTestQuestion[]> {
    const aptitudeq = await this.aptitudeTestQuestionModel.find({ _id: id }).exec();
    if (!aptitudeq) {
      throw new NotFoundException(`Aptitude test question ${id} not found`);
    }
    return aptitudeq;
  }

  async create(createAptitudeTestQuestionDTO: CreateAptitudeTestQuestionDto): Promise<AptitudeTestQuestion> {
   const createaptitudeq = new this.aptitudeTestQuestionModel(createAptitudeTestQuestionDTO); 
    return await createaptitudeq.save();
  }

  async updateAptitudeTestQuestion(id: string, updateAptitudeTestQuestionDto: UpdateAptitudeTestQuestionDto,): Promise<AptitudeTestQuestion | undefined> {
    const exAptitudeTestQuestion = await this.aptitudeTestQuestionModel
      .findOneAndUpdate({ _id: id }, { $set: updateAptitudeTestQuestionDto }, { new: true })
      .exec();
    if (!exAptitudeTestQuestion) {
      throw new NotFoundException(`not found`);
    }
    return exAptitudeTestQuestion;
  }
}
