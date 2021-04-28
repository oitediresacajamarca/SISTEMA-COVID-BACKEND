import { Controller, Get, Param } from '@nestjs/common';
import { PadronVacunadosService } from './padron-vacunados.service';

@Controller('vacunados/padron-vacunados')
export class PadronVacunadosController {

    constructor(private padron:PadronVacunadosService){

    }
@Get(':num_doc')
    async devolverVacunado(@Param('num_doc') numdoc:string){
        console.log(numdoc)
let resp = await this.padron.devolver_Vacunado(numdoc);
return resp;

    }

}
