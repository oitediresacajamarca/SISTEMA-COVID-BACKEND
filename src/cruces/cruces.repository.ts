import { EntityRepository, Repository } from "typeorm";
import { CrucesDniEntity } from "./cruces-dni.entity";

@EntityRepository(CrucesDniEntity)
export class CrucesRepository extends Repository<CrucesDniEntity>{}
