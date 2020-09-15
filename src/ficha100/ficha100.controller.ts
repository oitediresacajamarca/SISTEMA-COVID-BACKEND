import { Controller, Get } from '@nestjs/common';
import { Ficha100Service } from './ficha100.service';

@Controller('ficha100')
export class Ficha100Controller {

    constructor(private ficha100s:Ficha100Service){}
    @Get('')
    async getTodos(){
        const respuesta =await this.ficha100s.devolverTodos()
        return respuesta
    }
}
