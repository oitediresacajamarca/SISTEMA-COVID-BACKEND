import { Controller, Get, Param } from '@nestjs/common';
import { MedicamentosService } from './medicamentos.service';

@Controller('covid/medicamentos')
export class MedicamentosController {

    constructor(private medicamentoser: MedicamentosService) { }

    @Get(':nro_documento')
    async devolverMedicamento(@Param('nro_documento') nro_documento: string) {

        const respuesta = await this.medicamentoser.devolverMedicamentos(nro_documento)
        return respuesta
    }


    @Get(':nro_documento/:fecha')
    async devolverMedicamentoPorFecha(@Param('nro_documento') nro_documento: string, @Param('fecha') fecha: string) {
        let respuest: any
        if (fecha == 'Todos') {
            respuest = await this.medicamentoser.devolverMedicamentos(nro_documento)

        }else{
      
        let fecha_despacho = new Date(fecha)
        let fec = ((fecha_despacho.getDate() + 1) + 100).toString().slice(1, 3) + '/' + (fecha_despacho.getMonth() + 1) + '/' + fecha_despacho.getFullYear()
         respuest = await this.medicamentoser.devolverMedicamentosPorFechas(nro_documento, fec)
        }
        return respuest
    }
}
