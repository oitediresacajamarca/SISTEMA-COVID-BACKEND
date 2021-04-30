import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PadronVacunadosRepository } from 'src/padron-vacunados/padron-vacunados.repository';
import { PuntoVacunacionRepository } from 'src/punto-vacunacion/punto-vacunacion.repository';
import { ActualizaDataEntity } from './actualiza-data.entity';
import { ActualizaDataRepository } from './actualiza-data.repository';
import { VacunacionCitaController } from './vacunacion-cita.controller';
import { VacunacionCitaRepository } from './vacunacion-cita.repository';
import { VacunacionCitaService } from './vacunacion-cita.service';


@Module({
  controllers: [VacunacionCitaController],
  providers: [VacunacionCitaService],
  imports: [TypeOrmModule.forFeature([VacunacionCitaRepository,PuntoVacunacionRepository,PadronVacunadosRepository,ActualizaDataRepository])]

})
export class VacunacionCitaModule {}
