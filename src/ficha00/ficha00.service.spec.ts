import { Test, TestingModule } from '@nestjs/testing';
import { Ficha00Service } from './ficha00.service';

describe('Ficha00Service', () => {
  let service: Ficha00Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ficha00Service],
    }).compile();

    service = module.get<Ficha00Service>(Ficha00Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
