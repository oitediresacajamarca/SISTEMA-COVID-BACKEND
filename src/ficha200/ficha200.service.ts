import { Injectable } from '@nestjs/common';
import { Ficha200Repository } from './ficha200.repository';

@Injectable()
export class Ficha200Service {
    constructor(private ficha200s: Ficha200Repository) { }
    async devolverTodo() {
        const respuesta = await this.ficha200s.find()
        return respuesta
    }
}
