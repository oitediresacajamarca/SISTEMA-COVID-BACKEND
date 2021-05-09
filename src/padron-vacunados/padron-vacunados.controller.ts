import { Controller, Get, Param, Response } from '@nestjs/common';
import { PadronVacunadosService } from './padron-vacunados.service';

@Controller('vacunados/padron-vacunados')
export class PadronVacunadosController {

    constructor(private padron: PadronVacunadosService) {

    }
    @Get(':num_doc')
    async devolverVacunado(@Param('num_doc') numdoc: string, @Response() respi: any) {
        console.log(numdoc)
        let resp: any = await this.padron.devolver_Vacunado(numdoc);
        resp.pipe(respi);
    }

}
