import { Test, TestingModule } from '@nestjs/testing';
import { AptitudeTestController } from './aptitude-test.controller';

describe('AptitudeTestController', () => {
  let controller: AptitudeTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AptitudeTestController],
    }).compile();

    controller = module.get<AptitudeTestController>(AptitudeTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
