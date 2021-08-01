import { Test, TestingModule } from '@nestjs/testing';
import { AptitudeTestService } from './aptitude-test.service';

describe('AptitudeTestService', () => {
  let service: AptitudeTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AptitudeTestService],
    }).compile();

    service = module.get<AptitudeTestService>(AptitudeTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
