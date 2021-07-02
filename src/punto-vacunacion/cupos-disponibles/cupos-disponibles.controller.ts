import { Controller, Get, Param } from '@nestjs/common';
import { CuposDisponiblesRepository } from './cupos-disponibles.repository';
import { CuposDisponiblesService } from './cupos-disponibles.service';

@Controller('covid/cupos-disponibles')
export class CuposDisponiblesController {
    constructor(private cupos_rep:CuposDisponiblesRepository,private cupos_service:CuposDisponiblesService){

    }

@Get('punto/:nombre_punto')
    async cuposDsiponibles(@Param('nombre_punto') nombre_punto){

 const resp=await   this.cupos_rep.find({where:{NOMBRE_PUNTO_VACUNACION:nombre_punto}})
 return resp
}

@Get('punto_fecha/:nombre_punto/:fecha')


    async cuposDsiponiblesFecha(@Param('nombre_punto') nombre_punto,@Param('fecha') fecha){
        let fecha_array = fecha.split('-')

        let fec = new Date(parseInt(fecha_array[2]), parseInt(fecha_array[1])-1, parseInt(fecha_array[0]))

        

 const resp=await   this.cupos_service.Cupos_Disponibles_Fechas(fec,nombre_punto)
 return resp
}


}
