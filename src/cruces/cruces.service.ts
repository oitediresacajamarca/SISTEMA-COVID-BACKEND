import { Injectable } from '@nestjs/common';
import { BaseNotiRepository } from 'src/base-noti/base-noti.repository';
import { Ficha100Repository } from 'src/ficha100/ficha100.repository';
import { Any } from 'typeorm';
import { CrucesRepository } from './cruces.repository';

@Injectable()
export class CrucesService {

    constructor(private basenotir: BaseNotiRepository, private ficha100: Ficha100Repository, private crucesdni: CrucesRepository) {


    }
    async devolverCruceNoti100() {
        const respuestasNoti: any[] = await this.basenotir.find({ select: ["dni"] })
        let respuesta
        respuesta = await Promise.all(respuestasNoti.map(async (noti) => {
            let cruce: any
            let resp: { Existe: boolean; NRO_DOCUMENTO: string; Fuente: string; }


            cruce = await this.ficha100.findOne({ select: ["Nro_Documento"], where: { Nro_Documento: noti.dni } })
            if (cruce != undefined) {
                resp = {
                    Existe: true,
                    NRO_DOCUMENTO: cruce.Nro_Documento,
                    Fuente: 'Ficha100'

                }
            } else {
                resp = {
                    Existe: false,
                    NRO_DOCUMENTO: '',
                    Fuente: 'Ficha100'
                }
            }

            return resp

        }))

        return respuesta
    }

    async devolverDnisCrusados() {
        const respuesta = await this.crucesdni.find({take:10000})
        const resp = respuesta.map((datos, index) => {

            let fichadef = { existe: false, clase: 'bg-danger' }



            let objeto: any = {
                Nro_Documento:'',
                numero: index,
                ficha0: {},
                ficha100: {},
                ficha200: {},
                ficha300: {}
            }
            objeto.Nro_Documento=datos.Nro_Documento
            objeto.Apellidos_Nombres = datos.Apellidos_Nombres

            if (datos.ficha0 != null) {
                objeto.ficha0.existe = true
                objeto.ficha0.clase = 'bg-info'
            } else {
                objeto.ficha0.existe = false
                objeto.ficha0.clase = 'bg-danger'
            }

            if (datos.ficha100 != null) {
                objeto.ficha100.existe = true
                objeto.ficha100.clase = 'bg-info'

            } else {
                objeto.ficha100.existe = false
                objeto.ficha100.clase = 'bg-danger'
            }
          
            if (datos.ficha200 != null) {
                objeto.ficha200.existe = true
                objeto.ficha200.clase = 'bg-info'

            } else {
                objeto.ficha200.existe = false
                objeto.ficha0.clase = 'bg-danger'
            }
            if (datos.ficha300 != null) {
                objeto.ficha300.existe = true
                objeto.ficha300.clase = 'bg-info'

            } else {
                objeto.ficha300.existe = false
                objeto.ficha300.clase = 'bg-danger'
            }
           
            return objeto;


        })
        return resp
    }


}
