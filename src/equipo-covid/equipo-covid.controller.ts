import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EquipoCovidService } from './equipo-covid.service';

@Controller('covid/equipo-covid')
export class EquipoCovidController {
    constructor(private equipo_covid_service: EquipoCovidService) { }

    @Post('nuevo')
    async Nuevo(@Body() nuevo:JSON) {
  
        const respuesta = await this.equipo_covid_service.guadarEquipo(nuevo)
        return respuesta
    }
    @Get('devolverequipos/:cod_ipress')
    async DevolverEquipos(@Param('cod_ipress') cod_ipress:string) {

        const respuesta = await this.equipo_covid_service.devolverEquipos(cod_ipress)
        return respuesta
    }

}
