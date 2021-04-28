import { Body, Controller, Post } from '@nestjs/common';
import { PuntoVacunacionRepository } from 'src/punto-vacunacion/punto-vacunacion.repository';
import { VacunacionCitaService } from './vacunacion-cita.service';

@Controller('covid/vacunacion-cita')
export class VacunacionCitaController {

    constructor(private vacunacion_service: VacunacionCitaService) {

    }
    @Post('citar')
    async CitarPaciente(@Body() consulta: any) {
        let respuesta = await this.vacunacion_service.nuevaCita(consulta)
     
        return respuesta
    }

}
