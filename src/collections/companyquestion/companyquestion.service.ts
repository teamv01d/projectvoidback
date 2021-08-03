import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyQuestion } from 'src/entities/company-question.entity';
import { CreateCompanyQuestionDto } from './dto/create-companyquestion.dto';
import { UpdateCompanyQuestionDto } from './dto/update-companyquestion.dto';

@Injectable()
export class CompanyQuestionService {
  constructor(
    @InjectModel(CompanyQuestion.name) private readonly companyQuestionModel: Model<CompanyQuestion>,
  ) {}


  findAll(): Promise<CompanyQuestion[]> {
    return this.companyQuestionModel.find().exec();
  }

  async findOne(id: string): Promise<CompanyQuestion[]> {
    const companyquestion = await this.companyQuestionModel.find({ _id: id }).exec();
    if (!companyquestion) {
      throw new NotFoundException(`Company Question ${id} not found`);
    }
    return companyquestion;
  }

  create(createCompanyQuestionDTO: CreateCompanyQuestionDto): Promise<CompanyQuestion> {
    const companyquestion = new this.companyQuestionModel(createCompanyQuestionDTO);
    return companyquestion.save();
  }

  async updateCompanyQuestion(id: string, updateCompanyQuestionDto: UpdateCompanyQuestionDto,): Promise<CompanyQuestion | undefined> {
    const exCompanyQuestion = await this.companyQuestionModel
      .findOneAndUpdate({ _id: id }, { $set: updateCompanyQuestionDto }, { new: true })
      .exec();
    if (!exCompanyQuestion) {
      throw new NotFoundException(`not found`);
    }
    return exCompanyQuestion;
  }

  async delete(id: string): Promise<CompanyQuestion> {
    try {
      const companyquestion = await this.companyQuestionModel.findOne({ _id: id });
      return companyquestion.deleteOne();
    } catch (error) {
      throw new NotFoundException(`User ${id} cant delete cause there is none`);
    }
  }
}
