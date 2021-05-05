import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { PuntoVacunacionRepository } from 'src/punto-vacunacion/punto-vacunacion.repository';
import { FormularioReqInterface } from './formulario-req.interface';
import { VacunacionCitaService } from './vacunacion-cita.service';

@Controller('covid/vacunacion-cita')
export class VacunacionCitaController {

    constructor(private vacunacion_service: VacunacionCitaService) {

    }
    @Post('citar')
    async CitarPaciente(@Body() consulta: any) {
        
        console.log('la consulta es')
        console.log(consulta)
        console.log(new Date())


      
        let respuesta = await this.vacunacion_service.nuevaCita(consulta)

        return respuesta
    }
    @Get('reporte')
    async descargar(@Res() res) {
        //res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        res.header('Content-Type', 'pplication/vnd.ms-excel');
        res.header('Content-Disposition', 'attachment;filename=\"' + encodeURIComponent('dtos.xlsx') + '\"');

        let resp = await this.vacunacion_service.consultar_cita()


        res.end(resp)


    }


    @Post('actualizar-data')
    async actualizarData(@Body() body:any) {
        //res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        let bodys:FormularioReqInterface=body

        bodys.FECHA_NACIMIENTO=new Date( body.FECHA_NACIMIENTO.year,body.FECHA_NACIMIENTO.month,body.FECHA_NACIMIENTO.day)

 
    const resp= await this.vacunacion_service.actualizar_data(bodys)

      return resp;


    }




}
