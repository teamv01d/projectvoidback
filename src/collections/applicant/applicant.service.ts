import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Applicant } from 'src/entities/applicant.entity';
import { CreateApplicantDto } from './dto/create-applicant.dto';

@Injectable()
export class ApplicantService {
  constructor(
    @InjectModel(Applicant.name)
    private readonly applicantModel: Model<Applicant>,
  ) {}

  findUsersByApp() {
    try {
      const usersprofiles = this.applicantModel.aggregate([
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

  create(createApplicantDto: CreateApplicantDto): Promise<Applicant> {
    const createapplicant = new this.applicantModel(createApplicantDto);
    return createapplicant.save();
  }
}
