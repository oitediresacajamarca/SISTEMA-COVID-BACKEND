import { Injectable } from '@nestjs/common';
import { UbigeosDistritosRepository } from './ubigeos-distritos.repository';

@Injectable()
export class UbigeosDistritosService {
    constructor(private usr: UbigeosDistritosRepository) { }
    async devolverUbigeoDist(COD_DISTRITO: string) {
        const resp = await this.usr.findOne({ where: { COD_UBIGEO: COD_DISTRITO } })
        return resp;
    }

    async devolver_distritos(NONMBRE_PROVINCIA) {

        const resp = await this.usr.find({ where: { PROVINCIA: NONMBRE_PROVINCIA } })
        return resp;
    }
}
