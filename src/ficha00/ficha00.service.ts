import { Injectable } from '@nestjs/common';
import { Ficha00Repository } from './ficha00.repository';

@Injectable()
export class Ficha00Service {

    constructor(private ficha00:Ficha00Repository){

    }

    async devolverTodo(){
      const respuesta=await  this.ficha00.find()
      return respuesta;
    }
}
