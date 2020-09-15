import { Module } from '@nestjs/common';
import { CrucesService } from './cruces.service';
import { Ficha00Repository } from 'src/ficha00/ficha00.repository';
import { Ficha100Repository } from 'src/ficha100/ficha100.repository';
import { Ficha200Repository } from 'src/ficha200/ficha200.repository';
import { Ficha300Repository } from 'src/ficha300/ficha300.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseNotiRepository } from 'src/base-noti/base-noti.repository';
import { CrucesController } from './cruces.controller';
import { CrucesRepository } from './cruces.repository';

@Module({
  providers: [CrucesService],
  imports:[TypeOrmModule.forFeature([Ficha00Repository,Ficha100Repository,Ficha200Repository,Ficha300Repository,BaseNotiRepository,CrucesRepository])],
  controllers: [CrucesController]
})
export class CrucesModule {
    constructor(){}
}
