import { EntityRepository, Repository } from "typeorm";
import { ActualizaDataEntity } from "./actualiza-data.entity";

@EntityRepository(ActualizaDataEntity)
export class ActualizaDataRepository extends  Repository<ActualizaDataEntity>{


}
