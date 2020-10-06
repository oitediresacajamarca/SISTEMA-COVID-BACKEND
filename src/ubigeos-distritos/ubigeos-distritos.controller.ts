import { Controller, Get, Param } from '@nestjs/common';
import { UbigeosDistritosService } from './ubigeos-distritos.service';
import { response } from 'express';

@Controller('covid/ubigeos-distritos')
export class UbigeosDistritosController {
    constructor(private ubigeos: UbigeosDistritosService) {

    }

    @Get(':COD_DISTRITO')
    async devolverUbigeo(@Param('COD_DISTRITO') COD_DISTRITO: string) {
        console.log('holas')
        const resp = await this.ubigeos.devolverUbigeoDist(COD_DISTRITO);
        return resp;
    }
}
