import { Test, TestingModule } from '@nestjs/testing';
import { PuntoProgramacionService } from './punto-programacion.service';

describe('PuntoProgramacionService', () => {
  let service: PuntoProgramacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuntoProgramacionService],
    }).compile();

    service = module.get<PuntoProgramacionService>(PuntoProgramacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
