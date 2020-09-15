import { Test, TestingModule } from '@nestjs/testing';
import { Ficha00Controller } from './ficha00.controller';

describe('Ficha00Controller', () => {
  let controller: Ficha00Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ficha00Controller],
    }).compile();

    controller = module.get<Ficha00Controller>(Ficha00Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
