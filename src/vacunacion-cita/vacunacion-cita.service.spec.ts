import { Test, TestingModule } from '@nestjs/testing';
import { VacunacionCitaService } from './vacunacion-cita.service';

describe('VacunacionCitaService', () => {
  let service: VacunacionCitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VacunacionCitaService],
    }).compile();

    service = module.get<VacunacionCitaService>(VacunacionCitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
