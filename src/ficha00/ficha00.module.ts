import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ficha00Repository } from './ficha00.repository';
import { Ficha00Service } from './ficha00.service';
import { Ficha00Controller } from './ficha00.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Ficha00Repository])],
    providers: [Ficha00Service],
    controllers: [Ficha00Controller]
})
export class Ficha00Module {}
