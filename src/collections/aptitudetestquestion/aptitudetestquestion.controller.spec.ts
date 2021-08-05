import { Test, TestingModule } from '@nestjs/testing';
import { AptitudeTestQuestionController } from './aptitudetestquestion.controller';

describe('AptitudeTestQuestionController', () => {
  let controller: AptitudeTestQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AptitudeTestQuestionController],
    }).compile();

    controller = module.get<AptitudeTestQuestionController>(AptitudeTestQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
