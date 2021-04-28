import { Test, TestingModule } from '@nestjs/testing';
import { PuntoVacunacionService } from './punto-vacunacion.service';

describe('PuntoVacunacionService', () => {
  let service: PuntoVacunacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuntoVacunacionService],
    }).compile();

    service = module.get<PuntoVacunacionService>(PuntoVacunacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
