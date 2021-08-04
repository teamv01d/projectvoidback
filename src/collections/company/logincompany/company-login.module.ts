import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from 'src/entities/company.entity';
import { CompanyService } from '../company.service';
import { CompanyLoginService } from './company-login.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Company.name,
        schema: CompanySchema,
      },
    ]),
  ],
  controllers: [],
  providers: [CompanyLoginService, CompanyService],
  exports: [CompanyLoginService],
})
export class LoginModule {}
