import { Test, TestingModule } from '@nestjs/testing';
import { Ficha200Controller } from './ficha200.controller';

describe('Ficha200Controller', () => {
  let controller: Ficha200Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ficha200Controller],
    }).compile();

    controller = module.get<Ficha200Controller>(Ficha200Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
