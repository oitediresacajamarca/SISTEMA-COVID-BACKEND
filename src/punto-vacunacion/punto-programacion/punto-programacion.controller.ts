import { Controller, Get, Param } from '@nestjs/common';
import { PuntoVacunacionService } from '../punto-vacunacion.service';
import { PuntoProgramacionService } from './punto-programacion.service';

@Controller('covid/punto-programacion')
export class PuntoProgramacionController {
    constructor(private programacion: PuntoProgramacionService) {

    }

    @Get('programacion/:fecha/:nombre_punto')
    async devolver_programacion(@Param('fecha') fecha: string, @Param('nombre_punto') nombre_punto) {
        let fecha_array = fecha.split('-')

        let fec = new Date(parseInt(fecha_array[2]), parseInt(fecha_array[1])-1, parseInt(fecha_array[0]))

        let resp = await this.programacion.devolver_programados(fec, nombre_punto);
        return resp

    }

    @Get('punto/:nombre_punto')
    async devolver_programacion_punto( @Param('nombre_punto') nombre_punto) {
 

     
        let resp = await this.programacion.devolver_programados_punto(nombre_punto);
        return resp

    }

}
