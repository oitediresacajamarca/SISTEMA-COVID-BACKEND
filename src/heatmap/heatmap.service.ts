import { HttpService, Injectable } from '@nestjs/common';
import { HeatmapRepository } from './heatmap.repository';
import { BaseNotiReprository } from 'src/base-noti/base-noti.reprository';
import { UbigeosDistritosRepository } from 'src/ubigeos-distritos/ubigeos-distritos.repository';
import { Any, Not } from 'typeorm';
const request = require('request');

@Injectable()
export class HeatmapService {
    constructor(private heatmap: HeatmapRepository, private basenoty: BaseNotiReprository,
        private ubids: UbigeosDistritosRepository, private httpService: HttpService) { }
    async devolverConfirmadosRegion() {

        let resp = await this.basenoty.find({ where: { clasificacion: "CONFIRMADO" } })
        var respuesta: any[] = []

        console.log('se georeferenciara')
        /*
           await Promise.all(
               resp.map(async (not) => {
            //       let distrito = await this.ubids.findOne({ where: { COD_UBIGEO: not.ubigeo } })
                   let heatmap = await this.heatmap.findOne({ where: { id: not._id } })
                   let distancia = 0
                 
                   if (heatmap != null) {
                     
                     
                           respuesta.push(heatmap)
                       
                   }
               })
           )*/
        respuesta = await this.heatmap.find()
        console.log(respuesta)
        console.log('se termino')
        return respuesta
    }
    actualizarHeatMap() {
        
        this.httpService.get("google.com").subscribe(resultado => { console.log(resultado) })
    }
}
