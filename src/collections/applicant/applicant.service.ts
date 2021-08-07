import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Applicant } from 'src/entities/applicant.entity';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';

@Injectable()
export class ApplicantService {
  constructor(
    @InjectModel(Applicant.name)
    private readonly applicantModel: Model<Applicant>,
  ) {}

  findAll(): Promise<Applicant[]> {
    return this.applicantModel.find().exec();
  }

  findUsersByApp() {
    try {
      const usersprofiles = this.applicantModel.aggregate([
        {
          $match: {},
        },
        {
          $lookup: {
            from: 'users',
            localField: 'userID',
            foreignField: '_id',
            as: 'usersprofile',
          },
        },
      ]);
      return usersprofiles;
    } catch (error) {
      throw new NotFoundException('there is none what u looking for');
    }
  }

  async findOne(id: string): Promise<Applicant[]> {
    const applicant = await this.applicantModel.find({ _id: id }).exec();
    if (!applicant) {
      throw new NotFoundException(`Applicant ${id} not found`);
    }
    return applicant;
  }

  create(createApplicantDto: CreateApplicantDto): Promise<Applicant> {
    const createapplicant = new this.applicantModel(createApplicantDto);
    return createapplicant.save();
  }

  async updateApplicant(
    id: string,
    updateApplicantDto: UpdateApplicantDto,
  ): Promise<Applicant | undefined> {
    const exApplicant = await this.applicantModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updateApplicantDto },
        { new: true },
      )
      .exec();
    if (!exApplicant) {
      throw new NotFoundException(`not found`);
    }
    return exApplicant;
  }
}
