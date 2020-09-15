import { Test, TestingModule } from '@nestjs/testing';
import { Ficha300Service } from './ficha300.service';

describe('Ficha300Service', () => {
  let service: Ficha300Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ficha300Service],
    }).compile();

    service = module.get<Ficha300Service>(Ficha300Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
