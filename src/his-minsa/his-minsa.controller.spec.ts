import { Test, TestingModule } from '@nestjs/testing';
import { HisMinsaController } from './his-minsa.controller';

describe('HisMinsaController', () => {
  let controller: HisMinsaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HisMinsaController],
    }).compile();

    controller = module.get<HisMinsaController>(HisMinsaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
