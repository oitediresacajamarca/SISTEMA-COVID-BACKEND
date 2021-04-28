import { Body, Controller, Post } from '@nestjs/common';
import { HisMinsaService } from './his-minsa.service';

@Controller('his-minsa')
export class HisMinsaController {

    constructor(private HisMinsaServic: HisMinsaService) {

    }

    @Post('validar-dni')
    async validar_dni(@Body('numero_documento') numero_documento: string, @Body('fecha_nacimiento') fecha_nacimiento: string) {

        const resp = await this.HisMinsaServic.validar_dni(numero_documento)
        return resp

    }
}
