import { Test, TestingModule } from '@nestjs/testing';
import { EquipoCovidController } from './equipo-covid.controller';

describe('EquipoCovidController', () => {
  let controller: EquipoCovidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipoCovidController],
    }).compile();

    controller = module.get<EquipoCovidController>(EquipoCovidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
