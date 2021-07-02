import { Test, TestingModule } from '@nestjs/testing';
import { CuposDisponiblesService } from './cupos-disponibles.service';

describe('CuposDisponiblesService', () => {
  let service: CuposDisponiblesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuposDisponiblesService],
    }).compile();

    service = module.get<CuposDisponiblesService>(CuposDisponiblesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
