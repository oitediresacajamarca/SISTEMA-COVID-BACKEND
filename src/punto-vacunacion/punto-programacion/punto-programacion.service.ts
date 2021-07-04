import { Injectable } from '@nestjs/common';
import { CuposDisponiblesRepository } from '../cupos-disponibles/cupos-disponibles.repository';
import { PuntoProgramacionRepository } from './punto-programacion.repository';

@Injectable()
export class PuntoProgramacionService {

    constructor(private punto_program:PuntoProgramacionRepository,private cuposrep:CuposDisponiblesRepository){

    }

    async devolver_programados(fecha_cita:Date,nombre_punto:string){
        let resp=await this.punto_program.find({where:[{
       // FECHA_PROGRAMACION:fecha_cita ,
            NOMBRE_PUNTO_VACUNACION:nombre_punto}]})

      resp=      resp.filter(resp=>{

            return    resp.FECHA_PROGRAMACION.getFullYear()==fecha_cita.getFullYear() &&
            resp.FECHA_PROGRAMACION.getMonth()==fecha_cita.getMonth()&&
            resp.FECHA_PROGRAMACION.getDate()==fecha_cita.getDate() 

            })

        return resp;
    }


    async devolver_programados_punto(nombre_punto:string){

        let resp=await this.punto_program.find({
       // FECHA_PROGRAMACION:fecha_cita ,
            NOMBRE_PUNTO_VACUNACION:nombre_punto})

      
        return resp;
    }

    async devolver_programados_punto_fecha(nombre_punto:string,fecha:any){

        console.log(fecha)
        let fechas=new Date(fecha.year,fecha.month-1,fecha.day)
  

        let resp=await this.cuposrep.find({
  
        NOMBRE_PUNTO_VACUNACION    :nombre_punto,
        FECHA_CITA:fechas.getFullYear().toString()+'-'+(fechas.getMonth()+1).toString()+'-'+fechas.getDate().toString()})

      
        return resp;
    }
}
