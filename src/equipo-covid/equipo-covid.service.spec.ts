import { Test, TestingModule } from '@nestjs/testing';
import { EquipoCovidService } from './equipo-covid.service';

describe('EquipoCovidService', () => {
  let service: EquipoCovidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipoCovidService],
    }).compile();

    service = module.get<EquipoCovidService>(EquipoCovidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
