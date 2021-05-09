import { Controller, Get, Param, Response } from '@nestjs/common';
import { rejects } from 'assert';
import { resolve } from 'path';
import { PadronVacunadosService } from './padron-vacunados.service';
const fetch = require('node-fetch');

@Controller('vacunados/padron-vacunados')
export class PadronVacunadosController {

    constructor(private padron: PadronVacunadosService) {

    }
    @Get(':num_doc')
    async devolverVacunado(@Param('num_doc') numdoc: string) {
        console.log(numdoc)


        let resp = await this.padron.devolverReniecData(numdoc)

        console.log(resp)

        return resp
        /*
        return res*/

    }






}
