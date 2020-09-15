import { Module } from '@nestjs/common';
import { Ficha200Service } from './ficha200.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ficha200Repository } from './ficha200.repository';
import { Ficha200Controller } from './ficha200.controller';

@Module({
  providers: [Ficha200Service],
  imports:[TypeOrmModule.forFeature([Ficha200Repository])],
  controllers: [Ficha200Controller]

})
export class Ficha200Module {}
