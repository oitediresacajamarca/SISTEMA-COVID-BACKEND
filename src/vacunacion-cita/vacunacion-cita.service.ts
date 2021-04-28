import { Injectable } from '@nestjs/common';
import { PuntoVacunacionRepository } from 'src/punto-vacunacion/punto-vacunacion.repository';
import { VacunacionCita } from './vacunacion-cita.interface';
import { VacunacionCitaRepository } from './vacunacion-cita.repository';

@Injectable()
export class VacunacionCitaService {

    constructor(private citarepo: VacunacionCitaRepository, private PuntoVacunacionRepositor: PuntoVacunacionRepository) {

    }
    async nuevaCita(nuevacit: VacunacionCita) {

        console.log(nuevacit.NOMBRE_PUNTO_VACUNACION)

        let punto_elegidoc = await this.PuntoVacunacionRepositor.findOne({ _NOMBRE_PUNTO_VACUNACION_: nuevacit.NOMBRE_PUNTO_VACUNACION })
        console.log(punto_elegidoc)


        let resto = punto_elegidoc.CUPO_ACTUAL % punto_elegidoc._NUMERO_DE_VACUNATORIOS_
        let fecha = punto_elegidoc.FECHA_ULTIMO_CUPO

        if (resto == 0) {

            fecha.setTime(punto_elegidoc.FECHA_ULTIMO_CUPO.getTime() + 20 * 60000)
        }

        punto_elegidoc.CUPO_ACTUAL = punto_elegidoc.CUPO_ACTUAL + 1;
        punto_elegidoc.FECHA_ULTIMO_CUPO = fecha


        this.PuntoVacunacionRepositor.save(punto_elegidoc)



        console.log('la cita')
        console.log(fecha)



        let nuevo = this.citarepo.create()

        Object.assign(nuevo, nuevacit)
        nuevo.FECHA_REGISTRO = new Date()

        nuevo.FECHA_PROGRAMADA_CITA = fecha

        let nuevo_guard = await this.citarepo.save(nuevo)
        return nuevo_guard


    }
}
