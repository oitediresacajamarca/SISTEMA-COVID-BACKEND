import { Test, TestingModule } from '@nestjs/testing';
import { UbigeosDistritosController } from './ubigeos-distritos.controller';

describe('UbigeosDistritos Controller', () => {
  let controller: UbigeosDistritosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UbigeosDistritosController],
    }).compile();

    controller = module.get<UbigeosDistritosController>(UbigeosDistritosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
