import { Test, TestingModule } from '@nestjs/testing';
import { CompanyQuestionAnswerService } from './companyquestionanswer.service';

describe('CompanyQuestionAnswerService', () => {
  let service: CompanyQuestionAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyQuestionAnswerService],
    }).compile();

    service = module.get<CompanyQuestionAnswerService>(CompanyQuestionAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
