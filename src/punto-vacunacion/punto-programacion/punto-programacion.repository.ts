import { EntityRepository, Repository } from "typeorm";
import { PuntoProgramacionEntity } from "./punto-programacion.entity";

@EntityRepository(PuntoProgramacionEntity)
export class PuntoProgramacionRepository extends Repository<PuntoProgramacionEntity>{}
