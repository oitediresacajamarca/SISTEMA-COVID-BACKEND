import { Module } from '@nestjs/common';
import { MaestroHisPacienteService } from './maestro-his-paciente/maestro-his-paciente.service';
import { HisController } from './his.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaestroHisPacienteRepository } from './maestro-his-paciente.repository';


@Module({
  providers: [MaestroHisPacienteService],
  controllers: [HisController],
  imports:[TypeOrmModule.forFeature([MaestroHisPacienteRepository])]
})
export class HisModule {}
