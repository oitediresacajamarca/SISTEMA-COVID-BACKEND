import { Injectable } from '@nestjs/common';
import { BaseNotiRepository } from './base-noti.repository';

@Injectable()
export class BaseNotiService {

    constructor(private basenotiRep: BaseNotiRepository) {

    }

    async devolverTodos() {
        const resp = await this.basenotiRep.find({take:200})
        return resp
    }

    async devolverDnis() {
        const resp = await this.basenotiRep.find({ select: ['dni'],take:400})
        let ret = resp.map(res => {
            return {dni_busc:res.dni.toString()} 
        })
        return ret
    }
}
