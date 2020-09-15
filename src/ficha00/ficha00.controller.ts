import { Controller, Get } from '@nestjs/common';
import { Ficha00Repository } from './ficha00.repository';
import { Ficha00Service } from './ficha00.service';

@Controller('covid/ficha00')
export class Ficha00Controller {
    constructor(private ficha00: Ficha00Service) {

    }
    @Get('')
    async devolverTodos() {
        const respuesta = await this.ficha00.devolverTodo()
        return respuesta
    }

}
