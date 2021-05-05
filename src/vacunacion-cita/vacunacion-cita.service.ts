import { Get, Injectable } from '@nestjs/common';
import { databaseProviders } from 'src/database.providers';
import { PadronVacunadosRepository } from 'src/padron-vacunados/padron-vacunados.repository';
import { PuntoVacunacionRepository } from 'src/punto-vacunacion/punto-vacunacion.repository';
import { ActualizaDataRepository } from './actualiza-data.repository';
import { FormularioReqInterface } from './formulario-req.interface';
import { VacunacionCita } from './vacunacion-cita.interface';
import { VacunacionCitaRepository } from './vacunacion-cita.repository';
var json2xls = require('json2xls');
var fs = require('file-system');

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
        
            
        let padron = await this.padronrep.findOne({ Numero_de_Documento: data.numero_documento })
      
   
        if(padron!=undefined){
     
     
        data.edad=padron.Edad
  
        data.FECHA_NACIMIENTO=data.FECHA_NACIMIENTO
      
        const resp = await this.actuadata.save(data)

  
        
        if(padron.Edad>=80){
            console.log(resp)

        }else{
          /*  console.log("menor 80")
            console.log(resp)*/
        }


        
      

        console.log('actulizo data:'+resp.numero_documento)
        return resp;
    }else{

       
     
        data.FECHA_NACIMIENTO=data.FECHA_NACIMIENTO
        data.edad=(new Date()).getFullYear()-(data.FECHA_NACIMIENTO).getFullYear()
      
        const resp = await this.actuadata.save(data)


        console.log('actulizo data: no esta en padron: '+resp.numero_documento)

        return resp;

    }




    }



}
