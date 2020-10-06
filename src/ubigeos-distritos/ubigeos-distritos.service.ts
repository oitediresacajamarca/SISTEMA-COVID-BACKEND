import { Injectable } from '@nestjs/common';
import { UbigeosDistritosRepository } from './ubigeos-distritos.repository';

@Injectable()
export class UbigeosDistritosService {
    constructor(private usr: UbigeosDistritosRepository) { }
    async devolverUbigeoDist(COD_DISTRITO: string) {
        const resp = await this.usr.findOne({ where: { COD_UBIGEO: COD_DISTRITO } })
        return resp;
    }
}
