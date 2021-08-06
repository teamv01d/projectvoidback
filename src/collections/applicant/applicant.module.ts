import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Advertisement, AdvertisementSchema } from 'src/entities/advertisement.entity';
import { Applicant, ApplicantSchema } from 'src/entities/applicant.entity';
import { Users, UsersSchema } from 'src/entities/users.entity';
import { UsersService } from '../users/users.service';
import { ApplicantController } from './applicant.controller';
import { ApplicantService } from './applicant.service';

@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: Applicant.name,
        schema: ApplicantSchema,
      }
    ]),
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema,
      }
    ])
  ],
  controllers: [ApplicantController],
  providers: [ApplicantService,UsersService],
  exports: [ApplicantService]
})
export class ApplicantModule {}
