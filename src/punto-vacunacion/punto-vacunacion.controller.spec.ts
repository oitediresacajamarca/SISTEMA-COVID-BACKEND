import { Test, TestingModule } from '@nestjs/testing';
import { PuntoVacunacionController } from './punto-vacunacion.controller';

describe('PuntoVacunacionController', () => {
  let controller: PuntoVacunacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuntoVacunacionController],
    }).compile();

    controller = module.get<PuntoVacunacionController>(PuntoVacunacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
