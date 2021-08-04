import { Test, TestingModule } from '@nestjs/testing';
import { CompanyQuestionAnswerController } from './companyquestionanswer.controller';

describe('CompanyQuestionController', () => {
  let controller: CompanyQuestionAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyQuestionAnswerController],
    }).compile();

    controller = module.get<CompanyQuestionAnswerController>(CompanyQuestionAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
