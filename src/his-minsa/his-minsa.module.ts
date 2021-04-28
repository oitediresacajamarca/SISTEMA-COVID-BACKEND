import { Module } from '@nestjs/common';
import { HisMinsaService } from './his-minsa.service';
import { HisMinsaController } from './his-minsa.controller';


@Module({
  providers: [HisMinsaService],
  controllers: [HisMinsaController]
})
export class HisMinsaModule {}
