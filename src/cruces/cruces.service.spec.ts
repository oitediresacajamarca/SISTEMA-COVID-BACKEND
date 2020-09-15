import { Test, TestingModule } from '@nestjs/testing';
import { CrucesService } from './cruces.service';

describe('CrucesService', () => {
  let service: CrucesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrucesService],
    }).compile();

    service = module.get<CrucesService>(CrucesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
