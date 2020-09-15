import { Controller, Get } from '@nestjs/common';
import { Ficha00Repository } from 'src/ficha00/ficha00.repository';
import { Ficha300Service } from './ficha300.service';

@Controller('ficha300')
export class Ficha300Controller {
    constructor(private ficha300s: Ficha300Service) { }
    @Get('')
    async devolverTodo() {
        const resultado = await this.ficha300s.devolverTodo()
        return resultado
    }
}
