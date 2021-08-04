import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyQuestion, CompanyQuestionSchema } from 'src/entities/company-question.entity';
import { CompanyQuestionController } from './companyquestion.controller';
import { CompanyQuestionService } from './companyquestion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CompanyQuestion.name,
        schema: CompanyQuestionSchema,
      }
    ])
  ],
  controllers: [CompanyQuestionController],
  providers: [CompanyQuestionService],
  exports: [CompanyQuestionService]
})
export class CompanyQuestionModule {}
