import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsuariosService
      ,  private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.devolverUsuario(username);
        console.log(user)
        if (user && user.PasswordHash === pass) {
          const { PasswordHash, ...result } = user;
          return result;
        }
        return null;
      }

      async login(user: any) {
        const payload = { username: user.Email, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
