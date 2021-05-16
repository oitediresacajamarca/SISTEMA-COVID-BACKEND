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
        console.log('consulto')
        console.log(numdoc)


        let resp = await this.padron.devolver_Vacunado(numdoc)

   

        return resp
        /*
        return res*/

    }



    @Get('vacunas/:num_doc')
    async consultarVacunas(@Param('num_doc') numdoc: string) {
        console.log('consulto')
        console.log(numdoc)


        let resp = await this.padron.devolverVacunasHis(numdoc)

      

        return resp
        /*
        return res*/

    }








}
