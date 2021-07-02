import { Injectable } from '@nestjs/common';
import { CuposDisponiblesRepository } from './cupos-disponibles.repository';

@Injectable()
export class CuposDisponiblesService {

    constructor(private cupos_rep:CuposDisponiblesRepository){


    }
    async Cupos_Disponibles_Fechas(fecha_cita:Date,nombre_punto:string){
        let resp:any=await this.cupos_rep.find({where:[{
            // FECHA_PROGRAMACION:fecha_cita ,
                 NOMBRE_PUNTO_VACUNACION:nombre_punto}]})
     
           resp=      resp.filter(resp=>{
     
                 return    resp.FECHA_PROGRAMACION.getFullYear()==fecha_cita.getFullYear() &&
                 resp.FECHA_PROGRAMACION.getMonth()==fecha_cita.getMonth()&&
                 resp.FECHA_PROGRAMACION.getDate()==fecha_cita.getDate() 
     
                 })
     
             return resp;

    }
}
