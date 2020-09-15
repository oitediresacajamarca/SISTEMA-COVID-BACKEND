import { Module } from '@nestjs/common';
import { DatosGeneralesController } from './datos-generales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseNotiRepository } from 'src/base-noti/base-noti.repository';

@Module({
  controllers: [DatosGeneralesController],
  imports:[TypeOrmModule.forFeature([BaseNotiRepository])]
  
})
export class DatosGeneralesModule {}
