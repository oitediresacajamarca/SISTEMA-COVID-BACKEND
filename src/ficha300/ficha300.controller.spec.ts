import { Test, TestingModule } from '@nestjs/testing';
import { Ficha300Controller } from './ficha300.controller';

describe('Ficha300Controller', () => {
  let controller: Ficha300Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ficha300Controller],
    }).compile();

    controller = module.get<Ficha300Controller>(Ficha300Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
