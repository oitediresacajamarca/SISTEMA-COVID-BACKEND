import { EntityRepository, Repository } from "typeorm";
import { PadronVacunadosEntity } from "./padron-vacunados.entity";

@EntityRepository(PadronVacunadosEntity)
export class PadronVacunadosRepository  extends Repository<PadronVacunadosEntity>{}
