import { Controller, Get } from '@nestjs/common';
import { Ficha200Service } from './ficha200.service';

@Controller('covid/ficha200')
export class Ficha200Controller {
    constructor(private ficha200s: Ficha200Service) { }
    @Get('')
    async devolverTodos() {
        const respuesta = await this.ficha200s.devolverTodo()
        return respuesta
    }
}
