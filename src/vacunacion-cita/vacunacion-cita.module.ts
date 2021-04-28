import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PuntoVacunacionRepository } from 'src/punto-vacunacion/punto-vacunacion.repository';
import { VacunacionCitaController } from './vacunacion-cita.controller';
import { VacunacionCitaRepository } from './vacunacion-cita.repository';
import { VacunacionCitaService } from './vacunacion-cita.service';


@Module({
  controllers: [VacunacionCitaController],
  providers: [VacunacionCitaService],
  imports: [TypeOrmModule.forFeature([VacunacionCitaRepository,PuntoVacunacionRepository])]

})
export class VacunacionCitaModule {}
