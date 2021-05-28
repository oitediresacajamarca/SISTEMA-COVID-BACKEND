import { Injectable } from '@nestjs/common';

import { MaestroHisPacienteRepository } from 'src/his/maestro-his-paciente.repository';
import { VacunacionCitaRepository } from 'src/vacunacion-cita/vacunacion-cita.repository';

import { Datosreniec } from './interfaces/datosreniec.interface';
import { PadronVacunadosEntity } from './padron-vacunados.entity';
import { PadronVacunadosRepository } from './padron-vacunados.repository';
const fetch = require('node-fetch');
import * as moment from 'moment';
import { ActualizaDataRepository } from 'src/vacunacion-cita/actualiza-data.repository';
import { getDefaultSettings } from 'http2';

@Injectable()
export class PadronVacunadosService {
   constructor(private padronServic: PadronVacunadosRepository, private maestroRep: MaestroHisPacienteRepository,
      private cita_servicio: VacunacionCitaRepository, private padron_actual: ActualizaDataRepository) {

   }
   async devolver_Vacunado(dni: string) {



      let daatos: PadronVacunadosEntity = this.padronServic.create()
      let datos_reniec: any
      let dat: any = {}



      let resp = await this.padronServic.findOne({ Numero_de_Documento: dni })
      dat = { mensaje: { existeenpadron: false, existeenhis: true, datos_erroneos: false } }
      if (resp == undefined) {
         /* let pac_his = await this.maestroRep.findOne({ where: { Numero_Documento_Paciente: dni } })
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
          }*/
      } else {

         dat = { mensaje: { existeenpadron: true, existeenhis: true, datos_erroneos: false } }

      }

      datos_reniec = await this.devolverReniecData(dni)
      let edad_descripcion: any = {}

      datos_reniec = JSON.parse(datos_reniec)
      if (datos_reniec.fechnacpac != undefined) {

         let fechaarray = datos_reniec.fechnacpac.split('/')
         let fec_nac_reniec = new Date(parseInt(fechaarray[2]), parseInt(fechaarray[1]) - 1, parseInt(fechaarray[0]))
         let fecha_actual = new Date()


         var a = moment([parseInt(fechaarray[2]), parseInt(fechaarray[1]) - 1, parseInt(fechaarray[0])]);
         var b = moment([fecha_actual.getFullYear(), fecha_actual.getMonth(), fecha_actual.getDate()]);

         var diffDuration = moment.duration(b.diff(a));


         daatos = {
            Numero_de_Documento: datos_reniec.numdoc,
            Apellido_Paterno: datos_reniec.apelpatpac, Apellido_Materno: datos_reniec.apelmatpac
            , DIRIS: 'CAJAMARCA', Departamento: 'CAJAMARCA', Departamento_RENIEC: '', Direccion_RENIEC: datos_reniec.direccion,
            Distrito_RENIEC: '', Distrito: '', Edad: diffDuration.years(),
            Provincia: '', Fuente_Datos: 'reniec', Nombre_EESS: '', Nombres: datos_reniec.nombpac, Provincia_RENIEC: '',
            Tipo_de_Documento: 1,
            FECHA_NACIMIENTO: fec_nac_reniec,

         }

         edad_descripcion.anios = diffDuration.years()
         edad_descripcion.meses = diffDuration.months()
         edad_descripcion.dias = diffDuration.days()
      } else {

         dat = { mensaje: { existeenpadron: false, existeenhis: true, datos_erroneos: true } }
      }

      let datos_padron_actual = await this.padron_actual.findOne({ where: { numero_documento: dni } })
     
      if (datos_padron_actual != undefined) {
         dat.mensaje.en_padron_actual = true
      } else {
         dat.mensaje.en_padron_actual = false
      }
      let datos_cita = await this.devolverCitasPendientes(dni)
      let datos_vacunas = await this.devolverVacunasHis(dni)




      dat = { ...daatos, ...dat, citas: datos_cita, vacunas: datos_vacunas, edad_descripcion };



      return dat;







   }


   async devolverCitas(num_doc: string) {

      let datos_cita = await this.cita_servicio.find({ where: { numero_documento: num_doc } })
      return datos_cita

   }

   async devolverCitasPendientes(num_doc: string) {

   let fecha_actual=   new Date()
      let datos_cita = await this.cita_servicio.find({ where: { numero_documento: num_doc } })

   let citas_pendientes=   datos_cita.filter(cita=>{
  
         return  moment(fecha_actual).isSameOrBefore(moment(cita.FECHA_CITA),'day')

     
      })


      return citas_pendientes

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

      let stre = resp.body



      return new Promise((resolve, reject) => {
         let data = "";

         stre.on("data", chunk => { data += chunk; });
         stre.on("end", () => { resolve(data); });
         stre.on("error", error => reject(error));
      });



   }



   async devolverVacunasHis(dni: string) {




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
            "cookie": "JSESSIONID=DF3B76B333D4B19E84D30A3E0DDA892B; _ga_F4HY3YK7EH=GS1.1.1613481795.4.0.1613481795.0; _ga_LEDF527D3S=GS1.1.1615149485.2.0.1615149485.0; _ga_NWVQ3HSJKS=GS1.1.1616246531.42.0.1616246531.0; _ga_T513LTCYK1=GS1.1.1619054927.32.0.1619054927.0; _ga=GA1.3.1150659243.1611596987; __cfduid=d7241dd5a0233ce70e4ca2357878e69711619366672; rxVisitor=1620748251286V94U3C0F8IB7NJ25VP07IBFEVBL5SUSA; dtSa=-; dtLatC=1; byt=46ba10221b7e9964f6dc68ee91493c1d748cb43f5bde60bf8cc8f1ac9baf496bc68a96c302c1e93a03127a5b5148acc810f9ac8de8cc380a16519e3cc29e5640836a95b477d7c8446d05827a84ae1c35925e8294a505acb83897a65dbc5d02d4; dtPC=2$193877590_701h-vNEHICKPPEMKMIEFFAPPCJBGIHIDKCCCI; dtCookie=2$D25913E75A2BA5371D6010301A2D0311|HISMINSA|1|RUM+Default+Application|1; rxvt=1621395681873|1621392815862"
         },
         "referrer": "https://websalud.minsa.gob.pe/hisminsa/",
         "referrerPolicy": "strict-origin-when-cross-origin",
         "body": "C=PACIENTE&S=INFOGETBYID&idtipodoc=1&numdoc=" + dni,
         "method": "POST",
         "mode": "cors"
      });

      let respuesta1 = resp.body








      let idpersona: any = await new Promise((resolve, reject) => {
         let data = "";

         respuesta1.on("data", chunk => { data += chunk; });
         respuesta1.on("end", () => { resolve(data); });
         respuesta1.on("error", error => reject(error));
      });


      let person = JSON.parse(idpersona)


      let primero = await fetch("https://websalud.minsa.gob.pe/hisminsa/his/his?_dc=1621393955744&confighistorialpacid=1&idtipodoc=1&numdoc=" + dni + "&idpersona=" + person.idpaciente + "&paciente=SANDRA%20TALIA%20ROJAS%20GARRO&fecnacimiento=07%2F10%2F1993&edadactual=27%20a%C3%B1o(s)%207%20mes(es)%2011%20d%C3%ADa(s)&C=HISTORIALATENCIONES&S=SEARCH&page=1&start=0&limit=25", {
         "headers": {
            "accept": "*/*",
            "accept-language": "es-ES,es;q=0.9,en;q=0.8",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "JSESSIONID=DF3B76B333D4B19E84D30A3E0DDA892B; _ga_F4HY3YK7EH=GS1.1.1613481795.4.0.1613481795.0; _ga_LEDF527D3S=GS1.1.1615149485.2.0.1615149485.0; _ga_NWVQ3HSJKS=GS1.1.1616246531.42.0.1616246531.0; _ga_T513LTCYK1=GS1.1.1619054927.32.0.1619054927.0; _ga=GA1.3.1150659243.1611596987; __cfduid=d7241dd5a0233ce70e4ca2357878e69711619366672; rxVisitor=1620748251286V94U3C0F8IB7NJ25VP07IBFEVBL5SUSA; dtSa=-; dtLatC=1; byt=46ba10221b7e9964f6dc68ee91493c1d748cb43f5bde60bf8cc8f1ac9baf496bc68a96c302c1e93a03127a5b5148acc810f9ac8de8cc380a16519e3cc29e5640836a95b477d7c8446d05827a84ae1c35925e8294a505acb83897a65dbc5d02d4; dtPC=2$193877590_701h-vNEHICKPPEMKMIEFFAPPCJBGIHIDKCCCI; dtCookie=2$D25913E75A2BA5371D6010301A2D0311|HISMINSA|1|RUM+Default+Application|1; rxvt=1621395681873|1621392815862"
         },
         "referrer": "https://websalud.minsa.gob.pe/hisminsa/",
         "referrerPolicy": "strict-origin-when-cross-origin",
         "body": null,
         "method": "GET",
         "mode": "cors"
      });




      let stre = primero.body







      let vacunas: any = await new Promise((resolve, reject) => {
         let data = "";

         stre.on("data", chunk => { data += chunk; });
         stre.on("end", () => { resolve(data); });
         stre.on("error", error => reject(error));
      });


      let vacunas_array: any[] = JSON.parse(vacunas).items
      let respuesta: any = {}
      if (vacunas_array.length > 0) {
         respuesta.tiene_dosis = true
      }


      respuesta.dosis_programar = 1
      let solo_dosis = vacunas_array.filter((v) => {




         return v.coditem == "90749.01"
      })



      let primera_dosis = solo_dosis.findIndex((dosis) => { return dosis.valorlab == 1 || dosis.valorlab == 'D1' })

      let segunda_dosis = solo_dosis.findIndex((dosis) => { return dosis.valorlab == 2 || dosis.valorlab == 'D2' })

      if (primera_dosis >= 0 && segunda_dosis < 0) {


         respuesta.dosis_programar = 2
         let fecha_1dosis = this.parcearFecha(solo_dosis[primera_dosis].periodo)


         respuesta.fecha_dosis_siguiente = moment([fecha_1dosis.getFullYear(), fecha_1dosis.getMonth(), fecha_1dosis.getDate()]).add(21, 'days').toDate()


      }




      if (primera_dosis < 0 && segunda_dosis < 0) {

         respuesta.dosis_programar = 1
      }

      if (primera_dosis >= 0 && segunda_dosis >= 0) {

         respuesta.dosis_programar = 'ninguna'
      }






      respuesta.dosis = solo_dosis



      return respuesta


   }

   async devolver_vac() {






   }

   parcearFecha(fecha: string) {


      let fechaarray = fecha.split('/')
      let fec_nac_reniec = new Date(parseInt(fechaarray[2]), parseInt(fechaarray[1]) - 1, parseInt(fechaarray[0]))
      return fec_nac_reniec

   }



}