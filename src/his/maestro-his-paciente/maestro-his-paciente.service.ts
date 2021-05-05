import { Injectable } from '@nestjs/common';
import { MaestroHisPacienteRepository } from '../maestro-his-paciente.repository';

@Injectable()
export class MaestroHisPacienteService {
    constructor(private maestro_paciente: MaestroHisPacienteRepository) { }

    async devolverPaciente(Numero_Documento_Paciente: string) {
        let resp = await this.maestro_paciente.findOne({Numero_Documento_Paciente:Numero_Documento_Paciente})
       
        return resp
           
    }
}
