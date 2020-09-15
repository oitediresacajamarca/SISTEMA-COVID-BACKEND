import { Module } from '@nestjs/common';
import { Ficha100Service } from './ficha100.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ficha100Repository } from './ficha100.repository';
import { Ficha100Controller } from './ficha100.controller';

@Module({
  providers: [Ficha100Service],
  imports:[TypeOrmModule.forFeature([Ficha100Repository])],
  controllers: [Ficha100Controller]
})
export class Ficha100Module {}
