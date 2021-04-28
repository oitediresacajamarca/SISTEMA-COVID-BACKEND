import { Module } from '@nestjs/common';
import { PuntoVacunacionService } from './punto-vacunacion.service';
import { PuntoVacunacionController } from './punto-vacunacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PuntoVacunacionRepository } from './punto-vacunacion.repository';

@Module({
  providers: [PuntoVacunacionService],
  controllers: [PuntoVacunacionController],
  imports:[TypeOrmModule.forFeature([PuntoVacunacionRepository])]

})
export class PuntoVacunacionModule {}
