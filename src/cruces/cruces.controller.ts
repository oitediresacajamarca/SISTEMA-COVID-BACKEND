import { Controller, Get } from '@nestjs/common';
import { CrucesService } from './cruces.service';


@Controller('cruces')
export class CrucesController {
    constructor(private cruces: CrucesService) {

    }
    @Get('noti/100')
    async devolverNoti100() {
        const respuesta = await this.cruces.devolverCruceNoti100()
        return respuesta
    }
    @Get('dnis')
    async devolverCruces() {
        const respuesta = await this.cruces.devolverDnisCrusados()
        return respuesta
    }


}
