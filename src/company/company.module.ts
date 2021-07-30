import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from 'src/auth/auth.service';
import { Company, CompanySchema } from '../entities/company.entity';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: Company.name,
        schema: CompanySchema,
      }
    ])
  ],
  controllers: [CompanyController],
  providers: [CompanyService,AuthService],
  exports: [CompanyService]
})
export class CompanyModule {}
