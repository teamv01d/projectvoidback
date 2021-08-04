import { Test, TestingModule } from '@nestjs/testing';
import { CompanyQuestionService } from './companyquestion.service';

describe('CompanyQuestionService', () => {
  let service: CompanyQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyQuestionService],
    }).compile();

    service = module.get<CompanyQuestionService>(CompanyQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
