import { EntityRepository, Repository } from "typeorm";
import { EquipoCovidEntity } from "./equipo-covid.entity";

@EntityRepository(EquipoCovidEntity)
export class EquipoCovidRepository extends Repository<EquipoCovidEntity>{}
