import { Controller, Get, Param } from '@nestjs/common';

import { DatosGeneralesService } from './datos-generales.service';

@Controller('covid/datos-generales')
export class DatosGeneralesController {

    constructor(private datosgs: DatosGeneralesService) {

    }
    @Get('evolucion/:nro_documento')
    async devolver_evolucion(@Param('nro_documento') nro_documento: string) {
       
        const result = await this.datosgs.devolverEstadoActual(nro_documento)
        return result
    }
    @Get(':nro_documento')
    async devolver_ubigeo(@Param('nro_documento') nro_documento: string) {
     
       
        const result = await this.datosgs.devolverUbigeoPersona(nro_documento)
        return result
    }
}
