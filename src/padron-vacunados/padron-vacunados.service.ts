import { Injectable } from '@nestjs/common';
import { MaestroHisPacienteRepository } from 'src/his/maestro-his-paciente.repository';
import { PadronVacunadosRepository } from './padron-vacunados.repository';

@Injectable()
export class PadronVacunadosService {
   constructor(private padronServic: PadronVacunadosRepository, private maestroRep: MaestroHisPacienteRepository) {

   }
   async devolver_Vacunado(dni: string) {
  
      let resp = await this.padronServic.findOne({ Numero_de_Documento: dni })
      let dat = {}
      if (resp == undefined) {
         let pac_his = await this.maestroRep.findOne({ where: { Numero_Documento_Paciente: dni } })
         if(pac_his!=undefined){
         resp = {
            Numero_de_Documento: pac_his.Numero_Documento_Paciente,
            Apellido_Paterno: pac_his.Apellido_Paterno_Paciente, Apellido_Materno: pac_his.Apellido_Materno_Paciente
            , DIRIS: 'CAJAMARCA', Departamento: 'CAJAMARCA', Departamento_RENIEC: '', Direccion_RENIEC: pac_his.Domicilio_Reniec,
            Distrito_RENIEC: '', Distrito: '', Edad:(new Date()).getFullYear()- pac_his.Fecha_Nacimiento_Paciente.getFullYear() ,
            Provincia: '', Fuente_Datos: '', Nombre_EESS: '', Nombres: pac_his.Nombres_Paciente, Provincia_RENIEC: '', 
            Tipo_de_Documento: pac_his.Id_Tipo_Documento_Paciente,
            FECHA_NACIMIENTO:pac_his.Fecha_Nacimiento_Paciente
         }

         dat = { mensaje: {existeenpadron:false,existeenhis:true}}
      }
         else{

            dat = { mensaje: {existeenpadron:false,existeenhis:false}}
         }
      } else {
    
         dat = { mensaje: {existeenpadron:true,existeenhis:false}}
      }



      dat = { ...resp, ...dat };
      console.log(dat)


      return dat;

   }





}
