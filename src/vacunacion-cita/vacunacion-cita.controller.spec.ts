import { Test, TestingModule } from '@nestjs/testing';
import { VacunacionCitaController } from './vacunacion-cita.controller';

describe('VacunacionCitaController', () => {
  let controller: VacunacionCitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VacunacionCitaController],
    }).compile();

    controller = module.get<VacunacionCitaController>(VacunacionCitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
