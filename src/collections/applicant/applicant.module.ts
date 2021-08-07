import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Applicant, ApplicantSchema } from 'src/entities/applicant.entity';
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
    ])
  ],
  controllers: [ApplicantController],
  providers: [ApplicantService],
  exports: [ApplicantService]
})
export class ApplicantModule {}
