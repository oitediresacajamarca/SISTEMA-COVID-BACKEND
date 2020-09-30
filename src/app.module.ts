import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseNotiModule } from './base-noti/base-noti.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Ficha00Module } from './ficha00/ficha00.module';
import { Ficha100Module } from './ficha100/ficha100.module';
import { Ficha200Module } from './ficha200/ficha200.module';
import { Ficha300Module } from './ficha300/ficha300.module';
import { CrucesModule } from './cruces/cruces.module';
import { DatosGeneralesModule } from './datos-generales/datos-generales.module';
import { DniCrucesModule } from './dni-cruces/dni-cruces.module';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { EquipoCovidModule } from './equipo-covid/equipo-covid.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';


@Module({
  imports: [BaseNotiModule, DatabaseModule,TypeOrmModule.forRoot(), 
    Ficha00Module, Ficha100Module, Ficha200Module, 
    Ficha300Module, CrucesModule, DatosGeneralesModule, DniCrucesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'seguimiento'),
    }),
    EquipoCovidModule,
    AuthModule,
    UsuariosModule,],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
