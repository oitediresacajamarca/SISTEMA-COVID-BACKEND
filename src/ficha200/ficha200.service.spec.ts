import { Test, TestingModule } from '@nestjs/testing';
import { Ficha200Service } from './ficha200.service';

describe('Ficha200Service', () => {
  let service: Ficha200Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ficha200Service],
    }).compile();

    service = module.get<Ficha200Service>(Ficha200Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
