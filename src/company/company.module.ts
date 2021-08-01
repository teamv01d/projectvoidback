import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthServiceCompany } from 'src/auth-company/auth.service';
import { CompanySchema } from 'src/entities/company.entity';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: 'Company',
        schema: CompanySchema,
      }
    ])
  ],
  controllers: [CompanyController],
  providers: [CompanyService,AuthServiceCompany],

})
export class CompanyModule {}
