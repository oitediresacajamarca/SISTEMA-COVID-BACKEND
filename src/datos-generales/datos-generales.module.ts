import { Module } from '@nestjs/common';
import { DatosGeneralesController } from './datos-generales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseNotiRepository } from 'src/base-noti/base-noti.repository';
import { DatosGeneralesService } from './datos-generales.service';
import { BaseNotiModule } from 'src/base-noti/base-noti.module';
import { Ficha100Module } from 'src/ficha100/ficha100.module';
import { Ficha300Module } from 'src/ficha300/ficha300.module';
import { Ficha300Repository } from 'src/ficha300/ficha300.repository';

@Module({
  controllers: [DatosGeneralesController],
  imports:[TypeOrmModule.forFeature([BaseNotiRepository,Ficha300Repository]),BaseNotiModule,Ficha300Module],
  providers: [DatosGeneralesService]
  
})
export class DatosGeneralesModule {}
