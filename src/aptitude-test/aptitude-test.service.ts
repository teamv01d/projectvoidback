import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AptitudeTestQuestion } from 'src/entities/aptitude-test-question.entity';
import { CreateAptitudeTestDto } from './dto/create-aptitude-test.dto';

@Injectable()
export class AptitudeTestService {
  constructor(
    @InjectModel(AptitudeTestQuestion.name)
    private readonly AptitudeTestQuestionModel: Model<AptitudeTestQuestion>,
  ) {}

  findAll(): Promise<AptitudeTestQuestion[] | undefined> {
    return this.AptitudeTestQuestionModel.find().exec();
  }

  createAptitudeQuestion(createAptitudeTestDto: CreateAptitudeTestDto) {
    const question = new this.AptitudeTestQuestionModel(createAptitudeTestDto);
    return question.save();
  }
}
