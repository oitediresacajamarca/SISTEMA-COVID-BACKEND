import { Get, Injectable, MethodNotAllowedException } from '@nestjs/common';
import { Console } from 'console';
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
const clien = require("twilio")('AC78e305b479db052ec298256587cc4a62', 'e3c57a30d44fe1b12a42b7205cae3405');
import * as moment from 'moment';

@Injectable()
export class VacunacionCitaService {

  constructor(private citarepo: VacunacionCitaRepository, private PuntoVacunacionRepositor: PuntoVacunacionRepository,
    private padronrep: PadronVacunadosRepository, private actuadata: ActualizaDataRepository) {

  }
  async nuevaCita(nuevacit: VacunacionCita) {
    console.log('nuevas 26')

    console.log(nuevacit)

    let punto_elegidoc = await this.PuntoVacunacionRepositor.findOne({ _NOMBRE_PUNTO_VACUNACION_: nuevacit.NOMBRE_PUNTO_VACUNACION })

    let orden = Math.trunc((punto_elegidoc.CUPO_ACTUAL % (punto_elegidoc.CUPOS_HORA * 6)) / punto_elegidoc.CUPOS_HORA)
    let orden_dia = Math.trunc(punto_elegidoc.CUPO_ACTUAL / (punto_elegidoc.CUPOS_HORA * 6))



    let nuevo = this.citarepo.create()

    let mensaje:any={}
    let fecha = punto_elegidoc.FECHA_ULTIMO_CUPO

    let fecha_respuesta = punto_elegidoc.FECHA_INICIO_PROGRAMA

    if (punto_elegidoc.FORMA_CITA = 'PPHA') {
      let adap: any = nuevacit
      orden = adap.CITA.ORDEN_HORA
      orden_dia = adap.CITA.ORDEN_DIA
    }
    if (punto_elegidoc.FORMA_CITA == 'PPH' || punto_elegidoc.FORMA_CITA == 'PPHA') {


      if (orden == 0) {
        mensaje = { intervalo: 'DE 8 A 9 AM' }

      }

      if (orden == 1) {
        mensaje = { intervalo: 'DE 9 A 10 AM' }

      }

      if (orden == 2) {
        mensaje = { intervalo: 'DE 10 A 11 AM' }

      }

      if (orden == 3) {
        mensaje = { intervalo: 'DE 11 A 12 PM' }

      }

      if (orden == 4) {
        mensaje = { intervalo: 'DE 12 PM A 1 PM' }

      }

      if (orden == 5) {
        mensaje = { intervalo: 'DE 1 A 2 PM' }

      }
      if (orden == 5) {
        mensaje = { intervalo: 'DE 2 PM A 3 PM' }

      }
console.log(fecha_respuesta.getFullYear())

      mensaje.fecha = moment([fecha_respuesta.getFullYear(), fecha_respuesta.getMonth(), fecha_respuesta.getDate()]).add('day',orden_dia).toDate()

      nuevo.FECHA_CITA = mensaje.fecha
      nuevo.HORARIO_CITA = mensaje.intervalo

      let link = "https://apitellit.aldeamo.com/SmsiWS/smsSendGet?mobile=" + nuevacit.NUMERO_TELEFONO + "&country=51&message=GORECAJ  Sr(a) " + nuevacit.ape_paterno + " " + nuevacit.ape_materno + " " + nuevacit.nombres + " con dni " + nuevacit.numero_documento + ". Su cita  para la vacunacion Anticovid es para el dia " + fecha_respuesta.getDate() + "/" + (fecha_respuesta.getMonth() + 1).toString() + "/" + fecha_respuesta.getFullYear() + mensaje.intervalo + " en el punto de vacunacion: " + punto_elegidoc._NOMBRE_PUNTO_VACUNACION_ + "  &messageFormat=1"

      if (nuevacit.NUMERO_TELEFONO == '942149115') {



      }

      nuevo.MENSAJE_SMS = link
      fetch(encodeURI(link), {
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
          "Authorization": "Basic RElSRVNBQ2FqYW1hcmNhOkRpcmVzYXNtcyQ="
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
      }).then((data) => {

      })








    } else {


      let resto = punto_elegidoc.CUPO_ACTUAL / punto_elegidoc._NUMERO_DE_VACUNATORIOS_
      let fecha = punto_elegidoc.FECHA_ULTIMO_CUPO


      if (resto == 0) {


        fecha.setTime(punto_elegidoc.FECHA_ULTIMO_CUPO.getTime() + 20 * 60000)

      }
    }
    punto_elegidoc.CUPO_ACTUAL = punto_elegidoc.CUPO_ACTUAL + 1;
    punto_elegidoc.FECHA_ULTIMO_CUPO = fecha


    this.PuntoVacunacionRepositor.save(punto_elegidoc)



    Object.assign(nuevo, nuevacit)
    nuevo.FECHA_REGISTRO = new Date()


    nuevo.FECHA_PROGRAMADA_CITA = fecha


    let vacunacion_adap: any = nuevo
    if (vacunacion_adap.FECHA_NACIMIENTO.day != undefined) {
      vacunacion_adap.FECHA_NACIMIENTO = moment([vacunacion_adap.FECHA_NACIMIENTO.year, vacunacion_adap.FECHA_NACIMIENTO.month-1, vacunacion_adap.FECHA_NACIMIENTO.day]).add(1,'day').toDate()

    }
    vacunacion_adap.FECHA_CITA = moment([nuevo.FECHA_CITA.getFullYear(), nuevo.FECHA_CITA.getMonth(), nuevo.FECHA_CITA.getDate()]).add(1, 'day').toDate()

    vacunacion_adap.EDAD = vacunacion_adap.edad

    vacunacion_adap.ORDEN_DIA = vacunacion_adap.CITA.ORDEN_DIA
    vacunacion_adap.ORDEN_HORA = vacunacion_adap.CITA.ORDEN_HORA
    console.log('lineaa 169')

    console.log(vacunacion_adap)

    let nuevo_guard = await this.citarepo.save(vacunacion_adap)


    console.log('nueva cita:' + nuevo_guard.numero_documento)
    return { ...nuevo_guard, mensaje: mensaje }


  }




  async actualizar_data(data: FormularioReqInterface) {

    let fecha_actual = new Date();

    data.Fecha_Registro = new Date()
    data.ETIQUETA = "CARGADO POR EL SISTEMA"
    let resp


    let padron = await this.padronrep.findOne({ Numero_de_Documento: data.numero_documento })



    if (padron != undefined) {


      data.edad = padron.Edad



      resp = await this.actuadata.save(data)



      if (padron.Edad >= 80) {


      } else {

      }





      console.log('actualizo data:' + resp.numero_documento)

    }
    else {




      data.edad = moment([fecha_actual.getFullYear(), fecha_actual.getMonth(), fecha_actual.getDate()]).diff(data.FECHA_NACIMIENTO, 'years')
      console.log(data)


      resp = await this.actuadata.save(data)


      console.log('actualizo data: no esta en padron: ' + resp.numero_documento)



    }

    const resp_punto = await this.PuntoVacunacionRepositor.findOne({ where: { _NOMBRE_PUNTO_VACUNACION_: data.NOMBRE_PUNTO_VACUNACION } })





    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      //  secure: false, // true for 465, false for other ports
      auth: {
        user: 'oite.diresa.cajamarca@gmail.com', // generated ethereal user
        pass: 'Nomeolvido1', // generated ethereal password
      },
      tls: { rejectUnauthorized: false }
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


if(resp_punto!= undefined){


    if (!(resp_punto.CITAR_HABILITADO == 'HABILITADO' && data.edad >= resp_punto.EDAD_CITA)) {




      fetch("https://apitellit.aldeamo.com/SmsiWS/smsSendGet?mobile=" + data.NUMERO_TELEFONO + "&country=51&message=GORECAJ Su registro se ha guardado correctamente. Pronto se le comunicara la fecha y la hora de su cita. 'NO SE ATENDERA SIN PREVIA CITA'&messageFormat=1", {
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
          "Authorization": "Basic RElSRVNBQ2FqYW1hcmNhOkRpcmVzYXNtcyQ="
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
      }).then((data) => {

      })





    }



    if (data.edad < resp_punto.EDAD_CITA) {

      fetch("https://apitellit.aldeamo.com/SmsiWS/smsSendGet?mobile=" + data.NUMERO_TELEFONO +
        "&country=51&message=GORECAJ Su registro se ha guardado correctamente. El grupo de edad priorizado actual es mayor a " + resp_punto.EDAD_CITA + " años. 'Se le informara el momento cuando se encuentre dentro de la edad priorisada'&messageFormat=1", {
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
          "Authorization": "Basic RElSRVNBQ2FqYW1hcmNhOkRpcmVzYXNtcyQ="
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
      }).then((data) => {

      })




    }

  }


    return { ...resp, punto: resp_punto }
  };










}
