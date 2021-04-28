import { Test, TestingModule } from '@nestjs/testing';
import { PadronVacunadosController } from './padron-vacunados.controller';

describe('PadronVacunadosController', () => {
  let controller: PadronVacunadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PadronVacunadosController],
    }).compile();

    controller = module.get<PadronVacunadosController>(PadronVacunadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
