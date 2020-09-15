import { Test, TestingModule } from '@nestjs/testing';
import { Ficha100Controller } from './ficha100.controller';

describe('Ficha100Controller', () => {
  let controller: Ficha100Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ficha100Controller],
    }).compile();

    controller = module.get<Ficha100Controller>(Ficha100Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
