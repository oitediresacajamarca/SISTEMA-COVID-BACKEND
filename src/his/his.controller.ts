import { Controller, Get, Param } from '@nestjs/common';
import { MaestroHisPacienteRepository } from './maestro-his-paciente.repository';
import { MaestroHisPacienteService } from './maestro-his-paciente/maestro-his-paciente.service';

@Controller('his')
export class HisController {
    constructor(private maestro_his_paciente: MaestroHisPacienteService) {

    }
    @Get('paciente/:numero_documento')
    async devolverDatosPaciente(@Param('numero_documento') numero_documento: string) {
        let resp = await this.maestro_his_paciente.devolverPaciente(numero_documento)
        return resp

    }

}
