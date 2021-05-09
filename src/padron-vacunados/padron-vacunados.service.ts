import { Injectable } from '@nestjs/common';
import { MaestroHisPacienteRepository } from 'src/his/maestro-his-paciente.repository';
import { Stream } from 'stream';
import { Datosreniec } from './interfaces/datosreniec.interface';
import { PadronVacunadosRepository } from './padron-vacunados.repository';
const fetch = require('node-fetch');

@Injectable()
export class PadronVacunadosService {
   constructor(private padronServic: PadronVacunadosRepository, private maestroRep: MaestroHisPacienteRepository) {

   }
   async devolver_Vacunado(dni: string) {













      let resp = await this.padronServic.findOne({ Numero_de_Documento: dni })
      let dat = {}
      if (resp == undefined) {
         let pac_his = await this.maestroRep.findOne({ where: { Numero_Documento_Paciente: dni } })
         if (pac_his != undefined) {
            resp = {
               Numero_de_Documento: pac_his.Numero_Documento_Paciente,
               Apellido_Paterno: pac_his.Apellido_Paterno_Paciente, Apellido_Materno: pac_his.Apellido_Materno_Paciente
               , DIRIS: 'CAJAMARCA', Departamento: 'CAJAMARCA', Departamento_RENIEC: '', Direccion_RENIEC: pac_his.Domicilio_Reniec,
               Distrito_RENIEC: '', Distrito: '', Edad: (new Date()).getFullYear() - pac_his.Fecha_Nacimiento_Paciente.getFullYear(),
               Provincia: '', Fuente_Datos: '', Nombre_EESS: '', Nombres: pac_his.Nombres_Paciente, Provincia_RENIEC: '',
               Tipo_de_Documento: pac_his.Id_Tipo_Documento_Paciente,
               FECHA_NACIMIENTO: pac_his.Fecha_Nacimiento_Paciente
            }

            dat = { mensaje: { existeenpadron: false, existeenhis: true } }
         }
         else {

            dat = { mensaje: { existeenpadron: false, existeenhis: false } }
         }
      } else {

         dat = { mensaje: { existeenpadron: true, existeenhis: false } }
      }



      dat = { ...resp, ...dat };



      return dat;







   }







   async devolverReniecData(dni: string) {




      let resp = await fetch("https://websalud.minsa.gob.pe/hisminsa/his/paciente", {
         "headers": {
            "accept": "*/*",
            "accept-language": "es-ES,es;q=0.9,en;q=0.8",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "JSESSIONID=04665D09C8C5BCBB1DE9E3B1BE915E83; _ga_F4HY3YK7EH=GS1.1.1613481795.4.0.1613481795.0; _ga_LEDF527D3S=GS1.1.1615149485.2.0.1615149485.0; _ga_NWVQ3HSJKS=GS1.1.1616246531.42.0.1616246531.0; _ga_T513LTCYK1=GS1.1.1619054927.32.0.1619054927.0; _ga=GA1.3.1150659243.1611596987; __cfduid=d7241dd5a0233ce70e4ca2357878e69711619366672; byt=48037f88984abd5a224d1b91dec181fc748cb43f5bde60bf5d97b9a7e2b2d85700139af137d818e54303df86b12d64374e97f09f2b9f22487223cf48901919af585b8c4c7decb9e45ade041d323a916560a28ed703595fbc"
         },
         "referrer": "https://websalud.minsa.gob.pe/hisminsa/",
         "referrerPolicy": "strict-origin-when-cross-origin",
         "body": "C=PACIENTE&S=INFOGETBYIDRENIEC&idtipodoc=1&numdoc=" + dni,
         "method": "POST",
         "mode": "cors"
      })
      console.log(resp)
      let stre=resp.body



     return new Promise((resolve, reject) => {
         let data = "";

         stre.on("data", chunk => {data += chunk; console.log(1);});
         stre.on("end", () => { resolve(data); console.log('seres') });
         stre.on("error", error => reject(error));
      });







   }
}