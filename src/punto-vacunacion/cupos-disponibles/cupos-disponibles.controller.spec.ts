import { Test, TestingModule } from '@nestjs/testing';
import { CuposDisponiblesController } from './cupos-disponibles.controller';

describe('CuposDisponiblesController', () => {
  let controller: CuposDisponiblesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuposDisponiblesController],
    }).compile();

    controller = module.get<CuposDisponiblesController>(CuposDisponiblesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
