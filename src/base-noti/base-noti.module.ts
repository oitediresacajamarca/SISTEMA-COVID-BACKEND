import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseNotiRepository } from './base-noti.repository';
import { BaseNotiController } from './base-noti.controller';
import { BaseNotiService } from './base-noti.service';

@Module({
imports:[TypeOrmModule.forFeature([BaseNotiRepository])],
controllers: [BaseNotiController],
providers: [BaseNotiService],
exports:[BaseNotiService]


})
export class BaseNotiModule {}
