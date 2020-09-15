import { Injectable } from '@nestjs/common';
import { Ficha300Repository } from './ficha300.repository';

@Injectable()
export class Ficha300Service {
    constructor(private ficha300r: Ficha300Repository) { }
    async devolverTodo() {
        const respuesta = await this.ficha300r.find()
         return respuesta
    }
}
