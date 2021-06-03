import { Injectable } from '@nestjs/common';
import { PuntoVacunacionRepository } from './punto-vacunacion.repository';

@Injectable()
export class PuntoVacunacionService {

    constructor(private punto_repository: PuntoVacunacionRepository) {

    }
    async devolver_Puntos_Por_Distrito(distrito: string) {


        let res = await this.punto_repository.find({ where: { UBIGEO: distrito.substring(1, 6), ESTADO: 'ACTIVO' } })

        return res;
    }


    async devolver_Punto(punto: string) {


        let res = await this.punto_repository.findOne({ where: { _NOMBRE_PUNTO_VACUNACION_: punto } })
        this.calcula_horario_actual(res)

        return res;
    }


    calcula_horario_actual(res: any) {


        let orden = Math.trunc(res.CUPO_ACTUAL / res.CUPOS_HORA)

        if (orden == 0) {
            res.HORARIO_DISPONIBLE_ACTUAL =  'DE 8 A 9 AM' 
    
          }
    
          if (orden == 1) {
            res.HORARIO_DISPONIBLE_ACTUAL =  'DE 9 A 10 AM'       
    
          }
    
          if (orden == 2) {
            res.HORARIO_DISPONIBLE_ACTUAL =  'DE 10 A 11 AM'    
    
          }
    
          if (orden == 3) {
            res.HORARIO_DISPONIBLE_ACTUAL =  'DE 11AM A 12 PM'    
    
          }
    
          if (orden == 4) {
            res.HORARIO_DISPONIBLE_ACTUAL =  'DE 12PM A 1 PM' 
    
          }
    
          if (orden == 5) {
            res.HORARIO_DISPONIBLE_ACTUAL =  'DE 1PM A 2 PM' 
    
          }
          if (orden == 6) {
            res.HORARIO_DISPONIBLE_ACTUAL =  'DE 2PM A 3 PM' 
    
          }

          if (orden == 7) {
            res.HORARIO_DISPONIBLE_ACTUAL =  'DE 3PM A 4 PM' 
    
          }
    
    }




}
