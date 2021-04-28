import { Injectable } from '@nestjs/common';
import { PuntoVacunacionRepository } from './punto-vacunacion.repository';

@Injectable()
export class PuntoVacunacionService {

    constructor(private punto_repository:PuntoVacunacionRepository){

    }
    async devolver_Puntos_Por_Distrito(distrito:string){
        console.log(  distrito.substring(1,6))
      
     let res= await   this.punto_repository.find({where:{UBIGEO:  distrito.substring(1,6)}})
  
     return res;
    }
}
