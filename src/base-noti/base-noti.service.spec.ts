import { Test, TestingModule } from '@nestjs/testing';
import { BaseNotiService } from './base-noti.service';

describe('BaseNotiService', () => {
  let service: BaseNotiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseNotiService],
    }).compile();

    service = module.get<BaseNotiService>(BaseNotiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
