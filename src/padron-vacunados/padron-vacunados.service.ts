import { Injectable } from '@nestjs/common';
import { MaestroHisPacienteRepository } from 'src/his/maestro-his-paciente.repository';
import { Stream } from 'stream';
import { Datosreniec } from './interfaces/datosreniec.interface';
import { PadronVacunadosEntity } from './padron-vacunados.entity';
import { PadronVacunadosRepository } from './padron-vacunados.repository';
const fetch = require('node-fetch');

@Injectable()
export class PadronVacunadosService {
   constructor(private padronServic: PadronVacunadosRepository, private maestroRep: MaestroHisPacienteRepository) {

   }
   async devolver_Vacunado(dni: string) {


      let daatos: PadronVacunadosEntity = this.padronServic.create()
      let datos_reniec: any
let dat={}



let resp = await this.padronServic.findOne({ Numero_de_Documento: dni })
dat = { mensaje: { existeenpadron: false, existeenhis: true ,datos_erroneos:false} }
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

  dat = { mensaje: { existeenpadron: true, existeenhis: true ,datos_erroneos:false} }
  
}

      datos_reniec = await this.devolverReniecData(dni)
     
      datos_reniec=JSON.parse(datos_reniec)
      if(datos_reniec.fechnacpac!=undefined){

      let fechaarray = datos_reniec.fechnacpac.split('/')
      let fec_nac_reniec = new Date(parseInt(fechaarray[2]), parseInt(fechaarray[1])-1, parseInt(fechaarray[0]))

      daatos = {
         Numero_de_Documento: datos_reniec.numdoc,
         Apellido_Paterno: datos_reniec.apelpatpac, Apellido_Materno: datos_reniec.apelmatpac
         , DIRIS: 'CAJAMARCA', Departamento: 'CAJAMARCA', Departamento_RENIEC: '', Direccion_RENIEC: datos_reniec.direccion,
         Distrito_RENIEC: '', Distrito: '', Edad: (new Date()).getFullYear() - fec_nac_reniec.getFullYear(),
         Provincia: '', Fuente_Datos: 'reniec', Nombre_EESS: '', Nombres: datos_reniec.nombpac, Provincia_RENIEC: '',
         Tipo_de_Documento: 1,
         FECHA_NACIMIENTO: fec_nac_reniec
      }
   }else{
    
      dat = { mensaje: { existeenpadron: false, existeenhis: true ,datos_erroneos:true} }
   }
    


 



      dat = { ...daatos, ...dat };



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

      let stre = resp.body



      return new Promise((resolve, reject) => {
         let data = "";

         stre.on("data", chunk => { data += chunk; });
         stre.on("end", () => { resolve(data); console.log('seres') });
         stre.on("error", error => reject(error));
      });



   }



   async devolverVacunasHis(dni: string) {




      let resp = await fetch("https://websalud.minsa.gob.pe/appInmunizacion/view/consultas/consultavacunados/Consultas", {
         "headers": {
           "accept": "application/json, text/javascript, */*; q=0.01",
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
           "cookie": "JSESSIONID=574EDEE96EFD4A268EF8DBC9168AC42C; _ga_F4HY3YK7EH=GS1.1.1613481795.4.0.1613481795.0; _ga_LEDF527D3S=GS1.1.1615149485.2.0.1615149485.0; _ga_NWVQ3HSJKS=GS1.1.1616246531.42.0.1616246531.0; _ga_T513LTCYK1=GS1.1.1619054927.32.0.1619054927.0; _ga=GA1.3.1150659243.1611596987; __cfduid=d7241dd5a0233ce70e4ca2357878e69711619366672; rxVisitor=1620539318320BFA2FV5SIPF98E24NOURI0CNGFS7G57L; byt=4026e19faf33ddc14db0551d41a41a2b6c89c39fc4313aa2e5b036f65b8aac2d96865f172f10b65eaca5d51c0008664f075a8f6e11cdc6b9a36e717aabec36cbcca69b6b52bd1a9e3897a65dbc5d02d4; dtSa=-; dtPC=3$539444204_889h-vKDLLAIPJDMNKHDMCDODSLIWOCJMELJOP; dtCookie=3$C59C5C6B24F862B03C0C89FE08E2A9CD|RUM+Default+Application|1|HISMINSA|1; rxvt=1620541248640|1620539318322; dtLatC=1"
         },
         "referrer": "https://websalud.minsa.gob.pe/appInmunizacion/view/consultas/consultavacunados/consultavacunados.jsp",
         "referrerPolicy": "strict-origin-when-cross-origin",
         "body": "accion=PAGS&col=per.num_doc&txt=47936051&rangoedad=&fechainicio=07%2F02%2F2021&fechafin=31%2F12%2F2021&idactividad=127&iddiresa=7&idred=&idestablecimiento=",
         "method": "POST",
         "mode": "cors"
       });

      let stre = resp.body



      return new Promise((resolve, reject) => {
         let data = "";

         stre.on("data", chunk => { data += chunk; });
         stre.on("end", () => { resolve(data); console.log('seres') });
         stre.on("error", error => reject(error));
      });



   }



}