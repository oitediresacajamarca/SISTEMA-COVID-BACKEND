import { Test, TestingModule } from '@nestjs/testing';
import { PadronVacunadosService } from './padron-vacunados.service';

describe('PadronVacunadosService', () => {
  let service: PadronVacunadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PadronVacunadosService],
    }).compile();

    service = module.get<PadronVacunadosService>(PadronVacunadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
