import { Module } from '@nestjs/common';
import { EquipoCovidService } from './equipo-covid.service';
import { EquipoCovidController } from './equipo-covid.controller';
import { EquipoCovidRepository } from './equipo-covid.repository';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports:[TypeOrmModule.forFeature([EquipoCovidRepository])],
  providers: [EquipoCovidService],
  controllers: [EquipoCovidController]
})
export class EquipoCovidModule {}
