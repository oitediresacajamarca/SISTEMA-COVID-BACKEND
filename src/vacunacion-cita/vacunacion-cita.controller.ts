import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Console } from 'console';
import { PuntoVacunacionRepository } from 'src/punto-vacunacion/punto-vacunacion.repository';
import { FormularioReqInterface } from './formulario-req.interface';
import { VacunacionCitaService } from './vacunacion-cita.service';

@Controller('covid/vacunacion-cita')
export class VacunacionCitaController {

    constructor(private vacunacion_service: VacunacionCitaService) {

    }
    @Post('citar')
    async CitarPaciente(@Body() consulta: any) {
        
        console.log('la cita es')
        console.log(consulta.numero_documento)
      


      
        let respuesta = await this.vacunacion_service.nuevaCita(consulta)

        return respuesta
    }
    @Get('reporte')
    async descargar(@Res() res) {
        //res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        res.header('Content-Type', 'pplication/vnd.ms-excel');
        res.header('Content-Disposition', 'attachment;filename=\"' + encodeURIComponent('dtos.xlsx') + '\"');

  

 


    }
    readonly DELIMITER = '-';

    @Post('actualizar-data')
    async actualizarData(@Body() body:any) {
        //res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        let bodys:FormularioReqInterface=body
  
    



        if (body.FECHA_NACIMIENTO.day==undefined) {
            let date = body.FECHA_NACIMIENTO.split(this.DELIMITER);
            body.FECHA_NACIMIENTO= {
              day : parseInt(date[0], 10),
              month : parseInt(date[1], 10),
              year : parseInt(date[2], 10)
            };
          }

       
        bodys.FECHA_NACIMIENTO=new Date( body.FECHA_NACIMIENTO.year,body.FECHA_NACIMIENTO.month-1,body.FECHA_NACIMIENTO.day+1,0,0,0)

    
     

 
    const resp= await this.vacunacion_service.actualizar_data(bodys)
    const resp_punt_vac={}


      return resp;


    }




}
