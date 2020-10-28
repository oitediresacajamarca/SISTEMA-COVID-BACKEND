import { Injectable } from '@nestjs/common';
import { MedicmentosRepository } from './medicmentos.repository';

@Injectable()
export class MedicamentosService {

    constructor(private medicamentR:MedicmentosRepository){}

    async devolverMedicamentos(nro_documento:string){
   
      const respuesta=await  this.medicamentR.find({where:{numero_documento:nro_documento}})
      return respuesta
    }

    async devolverMedicamentosPorFechas(nro_documento:string,fecha:string){
   
   
    const respuesta=await  this.medicamentR.find({where:{numero_documento:nro_documento,Fecha:fecha}})
      return respuesta
    }
}
