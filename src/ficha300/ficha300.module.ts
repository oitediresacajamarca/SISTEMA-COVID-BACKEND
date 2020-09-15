import { Module } from '@nestjs/common';
import { Ficha300Service } from './ficha300.service';
import { Ficha300Controller } from './ficha300.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ficha300Repository } from './ficha300.repository';

@Module({
  providers: [Ficha300Service],
  controllers: [Ficha300Controller],
  imports:[TypeOrmModule.forFeature([Ficha300Repository])]
})
export class Ficha300Module {}
