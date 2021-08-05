import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AptitudeTestQuestion, AptitudeTestQuestionSchema } from 'src/entities/aptitude-test-question.entity';
import { AptitudeTestQuestionController } from './aptitudetestquestion.controller';
import { AptitudeTestQuestionService } from './aptitudetestquestion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AptitudeTestQuestion.name,
        schema: AptitudeTestQuestionSchema,
      }
    ])
  ],
  controllers: [AptitudeTestQuestionController],
  providers: [AptitudeTestQuestionService],
  exports:[AptitudeTestQuestionService]
})
export class AptitudeTestQuestionModule {}
