import { Module } from '@nestjs/common';
import { PadronVacunadosService } from './padron-vacunados.service';
import { PadronVacunadosController } from './padron-vacunados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PadronVacunadosRepository } from './padron-vacunados.repository';
import { MaestroHisPacienteRepository } from 'src/his/maestro-his-paciente.repository';
import { VacunacionCitaRepository } from 'src/vacunacion-cita/vacunacion-cita.repository';
import { ActualizaDataRepository } from 'src/vacunacion-cita/actualiza-data.repository';

@Module({
  providers: [PadronVacunadosService],
  controllers: [PadronVacunadosController],
  imports:[TypeOrmModule.forFeature([PadronVacunadosRepository,MaestroHisPacienteRepository,VacunacionCitaRepository,ActualizaDataRepository])]
})
export class PadronVacunadosModule {}
