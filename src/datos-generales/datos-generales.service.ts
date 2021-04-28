import { Injectable } from '@nestjs/common';
import { BaseNotiRepository } from 'src/base-noti/base-noti.repository';
import { Ficha100Repository } from 'src/ficha100/ficha100.repository';
import { Ficha100Service } from 'src/ficha100/ficha100.service';
import { Ficha300Repository } from 'src/ficha300/ficha300.repository';
import { Ficha300Service } from 'src/ficha300/ficha300.service';
import { UbigeosDistritosRepository } from 'src/ubigeos-distritos/ubigeos-distritos.repository';
import { Like, Not } from 'typeorm';

@Injectable()
export class DatosGeneralesService {

  constructor(private basenoti: BaseNotiRepository, private ficha300: Ficha300Repository, private ubigeos: UbigeosDistritosRepository) { }

  async devolverEstadoActual(nro_documento: string) {
    let result: any = await this.ficha300.findOne({ where: { Nro_Documento: nro_documento }, order: { fecha_registro: "DESC" } })

    if (result == undefined) {

      result = await this.basenoti.findOne({ where: { dni: nro_documento }, order: { fecha_reg: "DESC" } })

      if (result == undefined) {

      } else {
        result = result.evolucion
      }
    }
    else {
      result = result.Ficha_300_evolucion
    }

    return { evolucion: result };
  }


  async devolverUbigeoPersona(nro_documento: string) {

    let respuesta;
    let ubigeo
    let  noti:any = await this.basenoti.findOne({ where: { dni: nro_documento } })

    if (noti != null) {
      ubigeo = await this.ubigeos.findOne({ where: { COD_UBIGEO: Like('%' + noti.ubigeo) } })


    } else {
      ubigeo = {
        "DEPARTAMENTO": "",
        "PROVINCIA": "",
        "DISTRITO": "",
      }
      noti={edad:""}
    }

    return {...ubigeo,...{edad:noti.edad}};

  }
  async devolverEdad(nro_documento: string) {

 
    const noti = await this.basenoti.findOne({ where: { dni: nro_documento } })


    return {edad:noti.edad};

  }

}
