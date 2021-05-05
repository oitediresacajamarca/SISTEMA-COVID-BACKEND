import { Test, TestingModule } from '@nestjs/testing';
import { MaestroHisPacienteService } from './maestro-his-paciente.service';

describe('MaestroHisPacienteService', () => {
  let service: MaestroHisPacienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaestroHisPacienteService],
    }).compile();

    service = module.get<MaestroHisPacienteService>(MaestroHisPacienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
