import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AptitudeTestQuestion } from 'src/entities/aptitude-test-question.entity';
import { CreateAptitudeTestDto } from './dto/create-aptitude-test.dto';
import { SubjectClass } from 'src/entities/subject.entity';

@Injectable()
export class AptitudeTestService {
  constructor(
    @InjectModel(AptitudeTestQuestion.name)
    private readonly aptitudeTestQuestionModel: Model<AptitudeTestQuestion>,
    private readonly subjectModel: Model<SubjectClass>,
  ) {}

  findAll(): Promise<AptitudeTestQuestion[] | undefined> {
    return this.aptitudeTestQuestionModel.find().exec();
  }

  async findSubject(subject: string): Promise<SubjectClass | undefined> {
    return this.subjectModel.findOne({ subject });
  }

  async createAptitudeQuestion(createAptitudeTestDto: CreateAptitudeTestDto) {}

  // createAptitudeQuestion(createAptitudeTestDto: CreateAptitudeTestDto) {
  //   const question = new this.AptitudeTestQuestionModel(createAptitudeTestDto);
  //   return question.save();
  // }
}
