import { Body, Controller, Get, Param, Post, Response } from '@nestjs/common';
import { rejects } from 'assert';
import { resolve } from 'path';
import { PadronVacunadosService } from './padron-vacunados.service';
const fetch = require('node-fetch');

@Controller('vacunados/padron-vacunados')
export class PadronVacunadosController {

    constructor(private padron: PadronVacunadosService) {

    }

    @Post('reniec')
    async devolverReniec(@Body() body: any) {
        console.log(body)



        let resp = await this.padron.devolver_datos_reniec(body.tip_doc, body.num_doc)

     

        return resp


    }
    @Post(':num_doc')
    async devolverVacunado(@Param('num_doc') numdoc: string) {
        console.log('consulto')
        console.log(numdoc)


        let resp = await this.padron.devolver_Vacunado(numdoc)



        return resp


    }








    @Get('vacunas/:num_doc')
    async consultarVacunas(@Param('num_doc') numdoc: string) {


        let resp = await this.padron.devolverVacunasHis(numdoc)



        return resp
        /*
        return res*/

    }








}
