import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AptitudeTestQuestion,
  AptitudeTestQuestionSchema,
} from 'src/entities/aptitude-test-question.entity';
import { AptitudeTestController } from './aptitude-test.controller';
import { AptitudeTestService } from './aptitude-test.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AptitudeTestQuestion.name,
        schema: AptitudeTestQuestionSchema,
      },
    ]),
  ],
  controllers: [AptitudeTestController],
  providers: [AptitudeTestService, AptitudeTestController],
})
export class AptitudeTestModule {}
