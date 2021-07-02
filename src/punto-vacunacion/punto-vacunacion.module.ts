import { Module } from '@nestjs/common';
import { PuntoVacunacionService } from './punto-vacunacion.service';
import { PuntoVacunacionController } from './punto-vacunacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PuntoVacunacionRepository } from './punto-vacunacion.repository';
import { CuposDisponiblesController } from './cupos-disponibles/cupos-disponibles.controller';
import { CuposDisponiblesRepository } from './cupos-disponibles/cupos-disponibles.repository';
import { PuntoProgramacionService } from './punto-programacion/punto-programacion.service';
import { PuntoProgramacionController } from './punto-programacion/punto-programacion.controller';
import { PuntoProgramacionRepository } from './punto-programacion/punto-programacion.repository';

import { CuposDisponiblesService } from './cupos-disponibles/cupos-disponibles.service';



@Module({
  providers: [PuntoVacunacionService, PuntoProgramacionService, CuposDisponiblesService],
  controllers: [PuntoVacunacionController, CuposDisponiblesController, PuntoProgramacionController],
  imports:[TypeOrmModule.forFeature([PuntoVacunacionRepository,CuposDisponiblesRepository,PuntoProgramacionRepository])]

})
export class PuntoVacunacionModule {}
