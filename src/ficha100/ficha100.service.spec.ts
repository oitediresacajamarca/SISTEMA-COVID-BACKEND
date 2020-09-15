import { Test, TestingModule } from '@nestjs/testing';
import { Ficha100Service } from './ficha100.service';

describe('Ficha100Service', () => {
  let service: Ficha100Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ficha100Service],
    }).compile();

    service = module.get<Ficha100Service>(Ficha100Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
