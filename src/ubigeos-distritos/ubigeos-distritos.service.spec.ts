import { Test, TestingModule } from '@nestjs/testing';
import { UbigeosDistritosService } from './ubigeos-distritos.service';

describe('UbigeosDistritosService', () => {
  let service: UbigeosDistritosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UbigeosDistritosService],
    }).compile();

    service = module.get<UbigeosDistritosService>(UbigeosDistritosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
