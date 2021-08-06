import { Injectable, NotFoundException } from '@nestjs/common';
import { Controller } from '@nestjs/common/interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Console } from 'console';
import express, { Router } from 'express';
import { Model } from 'mongoose';
import { Applicant } from 'src/entities/applicant.entity';
import { Users } from 'src/entities/users.entity';
import { UsersService } from '../users/users.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';



@Injectable()
export class ApplicantService {

  public path = '/applicantuser';
  public router = Router();
  public id = null;
  private readonly usersService: Model<UsersService>;

  constructor(
    @InjectModel(Applicant.name) private readonly applicantModel: Model<Applicant>,
  ) {}

  findAll(): Promise<Applicant[]> {
    return this.applicantModel.find().exec();
  }

  async findAll2(id:string){
    this.id = id;

    const applicant = this.generateReport;
    return applicant;
    }


  private generateReport = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const applicant = await this.applicantModel.aggregate(
      [
        {
          $match:{
            _id:'this.id',
          },
          $group: {
            applicantss: {
              $push:{
                score:'$score',
                _id:'$_id',
                userID:'$userID',
              }
            },
          },
          $lookup:{
            from:'users',
            localfield:'applicants.userID',
            foreignField: '_id',
            as:'applicantsu'
          }
        },
      ]
    );
    response.send({
      applicant
    });
  }
 

  async findOne(id: string): Promise<Applicant[]> {
    const applicant = await this.applicantModel.find({ _id: id }).exec();
    if (!applicant) {
      throw new NotFoundException(`Applicant ${id} not found`);
    }
    return applicant;
  }
  async findUser(id:string,i: number): Promise<String[]> {
    const applicant = await this.applicantModel.find({ advertisementID: id }).exec();
    let userss;
    for(i=0; i<applicant.length; i++){
      userss= applicant[i].userID;
    }
    
    //users = this.usersService.findOne({ _id: userss })
   // const users = await this.usersService.findOne({ _id: userss }).exec();
    if (!applicant) {
      throw new NotFoundException(`Applicant ${id} not found`);
    }
    return userss;
  }

  async create(createAdvertisementDTO: CreateApplicantDto): Promise<Applicant> {
   const createapplicant = new this.applicantModel(createAdvertisementDTO); 
    return await createapplicant.save();
  }

  async updateApplicant(id: string, updateApplicantDto: UpdateApplicantDto,): Promise<Applicant | undefined> {
    const exApplicant = await this.applicantModel
      .findOneAndUpdate({ _id: id }, { $set: updateApplicantDto }, { new: true })
      .exec();
    if (!exApplicant) {
      throw new NotFoundException(`not found`);
    }
    return exApplicant;
  }

  async delete(id: string): Promise<Applicant> {
    try {
      const applicant = await this.applicantModel.findOne({ _id: id });
      return applicant.deleteOne();
    } catch (error) {
      throw new NotFoundException(`Applicant ${id} cant delete cause there is none`);
    }
  }

}
