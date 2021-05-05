import { Module } from '@nestjs/common';
import { PadronVacunadosService } from './padron-vacunados.service';
import { PadronVacunadosController } from './padron-vacunados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PadronVacunadosRepository } from './padron-vacunados.repository';
import { MaestroHisPacienteRepository } from 'src/his/maestro-his-paciente.repository';

@Module({
  providers: [PadronVacunadosService],
  controllers: [PadronVacunadosController],
  imports:[TypeOrmModule.forFeature([PadronVacunadosRepository,MaestroHisPacienteRepository])]
})
export class PadronVacunadosModule {}
