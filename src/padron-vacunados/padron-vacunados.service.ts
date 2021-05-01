import { Injectable } from '@nestjs/common';
import { PadronVacunadosRepository } from './padron-vacunados.repository';

@Injectable()
export class PadronVacunadosService {
    constructor(private padronServic:PadronVacunadosRepository){

    }
    async devolver_Vacunado(dni:string){
   let resp=await     this.padronServic.findOne({Numero_de_Documento:dni})
   let dat={}
   if(resp==undefined){
dat={mensaje:'no existe en padron'}
   }else {
dat={...resp,mensaje:''};
   }

   return dat;

    }

    

    devolver_


}
