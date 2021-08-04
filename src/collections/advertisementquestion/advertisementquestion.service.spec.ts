import { Test, TestingModule } from '@nestjs/testing';
import { AdvertisementQuestionService } from './advertisementquestion.service';

describe('AdvertisementQuestionService', () => {
  let service: AdvertisementQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdvertisementQuestionService],
    }).compile();

    service = module.get<AdvertisementQuestionService>(AdvertisementQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
