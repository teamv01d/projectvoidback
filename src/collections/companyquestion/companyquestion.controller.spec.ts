import { Test, TestingModule } from '@nestjs/testing';
import { CompanyQuestionController } from './companyquestion.controller';

describe('CompanyQuestionController', () => {
  let controller: CompanyQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyQuestionController],
    }).compile();

    controller = module.get<CompanyQuestionController>(CompanyQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
