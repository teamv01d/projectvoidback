import { Test, TestingModule } from '@nestjs/testing';
import { AdvertisementQuestion } from 'src/entities/advertisement-question.entity';
import { AdvertisementQuestionController } from './advertisementquestion.controller';

describe('AdvertisementQuestionController', () => {
  let controller: AdvertisementQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvertisementQuestionController],
    }).compile();

    controller = module.get<AdvertisementQuestionController>(AdvertisementQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
