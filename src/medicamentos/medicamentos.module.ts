import { Module } from '@nestjs/common';
import { MedicamentosService } from './medicamentos.service';
import { MedicamentosController } from './medicamentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicmentosRepository } from './medicmentos.repository';

@Module({
  providers: [MedicamentosService],
  imports:[TypeOrmModule.forFeature([MedicmentosRepository])],
  controllers: [MedicamentosController]
})
export class MedicamentosModule {}
