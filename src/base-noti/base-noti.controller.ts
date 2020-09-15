import { Controller, Get } from '@nestjs/common';
import { BaseNotiService } from './base-noti.service';

@Controller('covid/base-noti')
export class BaseNotiController {
    constructor(private basenotis: BaseNotiService) {

    }
    @Get('')
    async devolverTodos() {
        const resp = await this.basenotis.devolverTodos()
        return resp
    }
    @Get('todos')
    async devolverDnis(){
        const resp= await this.basenotis.devolverDnis()
        return resp;
    }


} 
