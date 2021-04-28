import { Controller, Get, Param } from '@nestjs/common';
import { PuntoVacunacionService } from './punto-vacunacion.service';

@Controller('covid/punto-vacunacion')
export class PuntoVacunacionController {

    constructor(private puntos:PuntoVacunacionService){

    }


    @Get(':distrito')

    async devolver_puntos(@Param('distrito') distrito:string){
      let resp=await  this.puntos.devolver_Puntos_Por_Distrito(distrito)
      return resp
    }
}
