import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyQuestionAnswer } from 'src/entities/company-question-answer.entity';
import { CreateCompanyQuestionAnswerDto } from './dto/create-companyquestion.dto';
import { UpdateCompanyQuestionAnswerDto } from './dto/update-companyquestionanswer.dto';

@Injectable()
export class CompanyQuestionAnswerService {
  constructor(
    @InjectModel(CompanyQuestionAnswer.name) private readonly companyQuestionAnswerModel: Model<CompanyQuestionAnswer>,
  ) {}


  findAll(): Promise<CompanyQuestionAnswer[]> {
    return this.companyQuestionAnswerModel.find().exec();
  }

  async findOne(id: string): Promise<CompanyQuestionAnswer[]> {
    const companyquestionanswer = await this.companyQuestionAnswerModel.find({ _id: id }).exec();
    if (!companyquestionanswer) {
      throw new NotFoundException(`Company question answer ${id} not found`);
    }
    return companyquestionanswer;
  }

  create(createCompanyQuestionAnswerDTO: CreateCompanyQuestionAnswerDto): Promise<CompanyQuestionAnswer> {
    const companyquestionanswer = new this.companyQuestionAnswerModel(createCompanyQuestionAnswerDTO);
    return companyquestionanswer.save();
  }

  async updateCompanyQuestionAnswer(id: string, updateCompanyQuestionAnswerDto: UpdateCompanyQuestionAnswerDto,): Promise<CompanyQuestionAnswer | undefined> {
    const exCompanyQuestionAnswer = await this.companyQuestionAnswerModel
      .findOneAndUpdate({ _id: id }, { $set: updateCompanyQuestionAnswerDto }, { new: true })
      .exec();
    if (!exCompanyQuestionAnswer) {
      throw new NotFoundException(`not found`);
    }
    return exCompanyQuestionAnswer;
  }

  async delete(id: string): Promise<CompanyQuestionAnswer> {
    try {
      const companyquestionanswer = await this.companyQuestionAnswerModel.findOne({ _id: id });
      return companyquestionanswer.deleteOne();
    } catch (error) {
      throw new NotFoundException(`Company question answer ${id} cant delete cause there is none`);
    }
  }
}
