import { Test, TestingModule } from '@nestjs/testing';
import { HeatmapController } from './heatmap.controller';

describe('Heatmap Controller', () => {
  let controller: HeatmapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeatmapController],
    }).compile();

    controller = module.get<HeatmapController>(HeatmapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
