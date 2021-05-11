import { Get, Injectable, MethodNotAllowedException } from '@nestjs/common';
import { getMaxListeners } from 'process';
import { databaseProviders } from 'src/database.providers';
import { PadronVacunadosRepository } from 'src/padron-vacunados/padron-vacunados.repository';
import { PuntoVacunacionRepository } from 'src/punto-vacunacion/punto-vacunacion.repository';
import { ActualizaDataRepository } from './actualiza-data.repository';
import { FormularioReqInterface } from './formulario-req.interface';
import { VacunacionCita } from './vacunacion-cita.interface';
import { VacunacionCitaRepository } from './vacunacion-cita.repository';
var json2xls = require('json2xls');
const fetch = require('node-fetch');
var fs = require('file-system');
const nodemailer = require("nodemailer");
const clien = require("twilio")('AC78e305b479db052ec298256587cc4a62','e3c57a30d44fe1b12a42b7205cae3405');

@Injectable()
export class VacunacionCitaService {

    constructor(private citarepo: VacunacionCitaRepository, private PuntoVacunacionRepositor: PuntoVacunacionRepository,
        private padronrep: PadronVacunadosRepository, private actuadata: ActualizaDataRepository) {

    }
    async nuevaCita(nuevacit: VacunacionCita) {

        

        let punto_elegidoc = await this.PuntoVacunacionRepositor.findOne({ _NOMBRE_PUNTO_VACUNACION_: nuevacit.NOMBRE_PUNTO_VACUNACION })
      


        let resto = punto_elegidoc.CUPO_ACTUAL % punto_elegidoc._NUMERO_DE_VACUNATORIOS_
        let fecha = punto_elegidoc.FECHA_ULTIMO_CUPO
    

        if (resto == 0) {

            fecha.setTime(punto_elegidoc.FECHA_ULTIMO_CUPO.getTime() + 20 * 60000)
            console.log(fecha.getTime())
        }

        punto_elegidoc.CUPO_ACTUAL = punto_elegidoc.CUPO_ACTUAL + 1;
        punto_elegidoc.FECHA_ULTIMO_CUPO = fecha


        this.PuntoVacunacionRepositor.save(punto_elegidoc)


        let nuevo = this.citarepo.create()

        Object.assign(nuevo, nuevacit)
        nuevo.FECHA_REGISTRO = new Date()

        nuevo.FECHA_PROGRAMADA_CITA = fecha

        let nuevo_guard = await this.citarepo.save(nuevo)
        console.log('nueva cita:'+nuevo_guard.numero_documento)
        return nuevo_guard


    }

    async consultar_cita() {

        let JSON1 = await this.citarepo.find();
        JSON.stringify(JSON1)

        var xls = json2xls(JSON1);

        return xls;


        // fs.writeFileSync('data.xlsx', xls, 'binary');

    }


    async actualizar_data(data: FormularioReqInterface) {

        data.Fecha_Registro = new Date()
        data.ETIQUETA="CARGADO POR EL SISTEMA"
        let resp
   
            
        let padron = await this.padronrep.findOne({ Numero_de_Documento: data.numero_documento })
      
   
        if(padron!=undefined){
     
     
        data.edad=padron.Edad
  
     
      
         resp = await this.actuadata.save(data)

  
        
        if(padron.Edad>=80){
         

        }else{
          /*  console.log("menor 80")
            console.log(resp)*/
        }


        
      

        console.log('actualizo data:'+resp.numero_documento)
      
    }
    else
    {

     
             data.edad=(new Date()).getFullYear()-(data.FECHA_NACIMIENTO).getFullYear()
             console.log(data.edad)
      
         resp = await this.actuadata.save(data)


        console.log('actualizo data: no esta en padron: '+resp.numero_documento)

     

    }



    let transporter = nodemailer.createTransport({
     service:'Gmail',
      //  secure: false, // true for 465, false for other ports
        auth: {
          user: 'oite.diresa.cajamarca@gmail.com', // generated ethereal user
          pass: 'Nomeolvido1', // generated ethereal password
        },
        tls : { rejectUnauthorized: false }
      });
    
      // send mail with defined transport object
     /* let info = await transporter.sendMail({
        from: 'oite.diresa.cajamarca@gmail.com', // sender address
        to: "alex.arana.r.e@gmail.com",
        subject: "DIRESA CAJAMARCA", // Subject line
        text: "SUS DATOS HAN SIDO CORRECTAMENTE ACTUALIZADOS", // plain text body
        html: "<b>Pronto nos comunicaremos con usted </b>", // html body
        
      });

      clien.messages.create({
          to:'+51942149115',
          from:process.env.CUENTA_TWILIO_PHONE_NUMBER_FROM,
          body:'DIRESA CAJAMARCA le Informa sus datos han sido actualizados correctamente pronto nuestro personal se comunicara con usted'
      }).then(message=>console.log(message))*/


      
      fetch("https://apitellit.aldeamo.com/SmsiWS/smsSendGet?mobile="+data.NUMERO_TELEFONO+"&country=51&message='Su registro se ha guardado correctamente pronto se le comunicara la fecha y la hora de su cita. NO SE ATENDERA SIN PREVIA CITA'&messageFormat=1", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "es-ES,es;q=0.9,en;q=0.8",
          "cache-control": "no-cache",
          "pragma": "no-cache",
          "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "none",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          "cookie": "_ga=GA1.2.794645600.1620680365; _gid=GA1.2.1384613325.1620680365",
          "Authorization":"Basic RElSRVNBQ2FqYW1hcmNhOkRpcmVzYXNtcyQ="
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
      }).then((data)=>{

      })



     
    return resp;



    }



}
