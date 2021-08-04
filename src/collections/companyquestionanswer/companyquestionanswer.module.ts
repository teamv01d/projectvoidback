import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyQuestionAnswer, CompanyQuestionAnswerSchema } from 'src/entities/company-question-answer.entity';
import { CompanyQuestionAnswerController } from './companyquestionanswer.controller';
import { CompanyQuestionAnswerService } from './companyquestionanswer.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CompanyQuestionAnswer.name,
        schema: CompanyQuestionAnswerSchema,
      }
    ])
  ],
  controllers: [CompanyQuestionAnswerController],
  providers: [CompanyQuestionAnswerService],
  exports: [CompanyQuestionAnswerService]
})
export class CompanyQuestionAnswerModule {}
