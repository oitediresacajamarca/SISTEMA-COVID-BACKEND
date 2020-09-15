import { Injectable } from '@nestjs/common';
import { Ficha100Repository } from './ficha100.repository';

@Injectable()
export class Ficha100Service {
    constructor(private ficha100R: Ficha100Repository) { }
    async devolverTodos() {
        const respuesta = await this.ficha100R.find()
     
        return respuesta
    }
}
