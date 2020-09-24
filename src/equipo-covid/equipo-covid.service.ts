import { Injectable } from '@nestjs/common';
import { EquipoCovidRepository } from './equipo-covid.repository';

@Injectable()
export class EquipoCovidService {
  constructor(private equipo_cov_rep: EquipoCovidRepository) { }
  async guadarEquipo(equipo: any) {

   
console.log(equipo.cod_equipo)
    const respuesta = await this.equipo_cov_rep.save(equipo)
    return respuesta
  }

  async devolverEquipos(cod_ipress: string) {

    let nuevo = await this.equipo_cov_rep.find({ cod_establecimiento: cod_ipress })
    return nuevo;
  }
}
