import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbigeosDistritosRepository } from './ubigeos-distritos.repository';
import { UbigeosDistritosService } from './ubigeos-distritos.service';
import { UbigeosDistritosController } from './ubigeos-distritos.controller';

@Module({
    imports:[TypeOrmModule.forFeature([UbigeosDistritosRepository])],
    providers: [UbigeosDistritosService],
    controllers: [UbigeosDistritosController]
})
export class UbigeosDistritosModule {}
