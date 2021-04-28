import { Controller, Get } from '@nestjs/common';
import { HeatmapRepository } from './heatmap.repository';
import { HeatmapService } from './heatmap.service';
const request = require('request');


@Controller('covid/heatmap')
export class HeatmapController {
    constructor(private heatmaprep: HeatmapService) { }
    @Get('')
    async devolverHeat() {
        let rest = await this.heatmaprep.devolverConfirmadosRegion();
        return rest
    }
    @Get('actualizar')
    async actualizar(){
        let rest = await this.heatmaprep.actualizarHeatMap();
        return rest
    }

}
