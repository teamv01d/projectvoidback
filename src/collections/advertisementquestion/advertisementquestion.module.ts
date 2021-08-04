import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertisementQuestion, AdvertisementQuestionSchema } from 'src/entities/advertisement-question.entity';
import { AdvertisementQuestionController } from './advertisementquestion.controller';
import { AdvertisementQuestionService } from './advertisementquestion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AdvertisementQuestion.name,
        schema: AdvertisementQuestionSchema,
      }
    ])
  ],
  controllers: [AdvertisementQuestionController],
  providers: [AdvertisementQuestionService],
  exports:[AdvertisementQuestionService]
})
export class AdvertisementQuestionModule {}
