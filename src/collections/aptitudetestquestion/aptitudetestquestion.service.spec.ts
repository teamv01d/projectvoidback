import { Test, TestingModule } from '@nestjs/testing';
import { AptitudeTestQuestionService } from './aptitudetestquestion.service';

describe('AdvertisementQuestionService', () => {
  let service: AptitudeTestQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AptitudeTestQuestionService],
    }).compile();

    service = module.get<AptitudeTestQuestionService>(AptitudeTestQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
