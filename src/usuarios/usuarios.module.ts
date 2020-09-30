import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from './usuario.repository';
import { UsuariosService } from './usuarios.service';

@Module({
  providers: [UsuariosService],

  exports:[UsuariosService],
  imports:[TypeOrmModule.forFeature([UsuarioRepository])],

})
export class UsuariosModule {}
