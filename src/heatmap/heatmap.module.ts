import { HttpModule, Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import { HeatmapController } from './heatmap.controller';
import { HeatmapRepository } from './heatmap.repository';
import { HeatmapService } from './heatmap.service';
import { UbigeosDistritosRepository } from 'src/ubigeos-distritos/ubigeos-distritos.repository';
import { BaseNotiReprository } from 'src/base-noti/base-noti.reprository';

@Module({
    imports:[ 
    TypeOrmModule.forFeature([HeatmapRepository,UbigeosDistritosRepository,BaseNotiReprository]),
    HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
      })],
    controllers: [HeatmapController],
    providers: [HeatmapService]
})
export class HeatmapModule {}
