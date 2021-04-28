import { EntityRepository, Repository } from "typeorm";
import { PuntoVacunacionEntity } from "./punto-vacunacion.entity";

@EntityRepository(PuntoVacunacionEntity)
export class PuntoVacunacionRepository extends Repository<PuntoVacunacionEntity>{}
