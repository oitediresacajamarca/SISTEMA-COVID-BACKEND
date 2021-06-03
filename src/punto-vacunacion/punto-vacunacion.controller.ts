import { Controller, Get, Param } from '@nestjs/common';
import { PuntoVacunacionService } from './punto-vacunacion.service';

@Controller('covid/punto-vacunacion')
export class PuntoVacunacionController {

    constructor(private puntos:PuntoVacunacionService){

    }    @Get(':distrito')
    async devolver_puntos(@Param('distrito') distrito:string){
      let resp=await  this.puntos.devolver_Puntos_Por_Distrito(distrito)
      return resp
    }

    @Get('punto/:nombre_punto')
    async devolver_punto(@Param('nombre_punto') nombre_punto:string){
    
      let resp=await  this.puntos.devolver_Punto(nombre_punto)
      return resp
    }
    
}
