import { Test, TestingModule } from '@nestjs/testing';
import { PuntoProgramacionController } from './punto-programacion.controller';

describe('PuntoProgramacionController', () => {
  let controller: PuntoProgramacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuntoProgramacionController],
    }).compile();

    controller = module.get<PuntoProgramacionController>(PuntoProgramacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
