import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from 'src/entities/company.entity';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyLoginService } from './logincompany/company-login.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Company.name,
        schema: CompanySchema,
      },
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService, CompanyLoginService],
  exports: [CompanyService],
})
export class CompanyModule {}
