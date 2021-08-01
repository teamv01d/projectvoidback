import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyModel } from '../entities/company.entity';

const result: CompanyModel[]=[];

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('Company') private readonly companyModel: Model<CompanyModel>,
  ) {}

  async findOne(email: string): Promise<CompanyModel | undefined> {
    return this.companyModel.findOne({ email }).exec();
  }

  findAll(): Promise<CompanyModel[]> {
    return this.companyModel.find().exec();
  }

  // async findOne(id: string): Promise<Users[]> {
  //   const user = await this.usersModel.find({ _id: id }).exec();
  //   if (!user) {
  //     throw new NotFoundException(`User ${id} not found`);
  //   }
  //   return user;
  // }

  create(createCompanyDTO: CreateCompanyDto): Promise<CompanyModel> {
    const company = new this.companyModel(createCompanyDTO);
    return company.save();
  }

  async update(id: string, updateCompanyDTO: UpdateCompanyDto): Promise<CompanyModel> {
    const existingCompany = await this.companyModel
      .findOneAndUpdate({ _id: id }, { $set: updateCompanyDTO }, { new: true })
      .exec();

    if (!existingCompany) {
      throw new NotFoundException(`user ${id} not found dude`);
    }
    return existingCompany;
  }

  async delete(id: string): Promise<CompanyModel> {
    try {
      const company = await this.companyModel.findOne({ _id: id });
      return company.deleteOne();
    } catch (error) {
      throw new NotFoundException(`User ${id} cant delete cause there is none`);
    }
  }

  async findUserByEmail(email: string): Promise<CompanyModel> {
    try {
      return this.companyModel.findOne((company: any) => company.email === email);
    } catch {
      throw new NotFoundException(`Mail sisteme kayıtlı değil.`);
    }
  }
}
