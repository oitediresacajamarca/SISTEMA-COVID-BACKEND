import { Test, TestingModule } from '@nestjs/testing';
import { HisMinsaService } from './his-minsa.service';

describe('HisMinsaService', () => {
  let service: HisMinsaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HisMinsaService],
    }).compile();

    service = module.get<HisMinsaService>(HisMinsaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
