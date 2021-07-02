import { EntityRepository, Repository } from "typeorm";
import { CuposDisponiblesEntity } from "./cupos-disponibles.entity";

@EntityRepository(CuposDisponiblesEntity)
export class CuposDisponiblesRepository extends Repository<CuposDisponiblesEntity>{}
