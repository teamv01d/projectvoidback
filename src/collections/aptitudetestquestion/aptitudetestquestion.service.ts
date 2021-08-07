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
}
