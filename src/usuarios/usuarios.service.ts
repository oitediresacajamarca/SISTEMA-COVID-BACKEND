import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Injectable()
export class UsuariosService {
    constructor(private UsuariosRep: UsuarioRepository) {

    }

    async devolverUsuario(email: string) {
        const respuesta = await this.UsuariosRep.findOne({ where: { Email: email } })

        return respuesta;
    }
}
