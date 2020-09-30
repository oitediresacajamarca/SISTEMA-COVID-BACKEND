import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';



@Module({
    imports:[UsuariosModule,PassportModule, JwtModule.register({
        secret: 'secreto',
        signOptions: { expiresIn: '60s' },
      })
    ],
    providers: [AuthService,LocalStrategy,JwtStrategy],
    controllers: [AuthController],

})
export class AuthModule {}
