import { EntityRepository, Repository } from "typeorm";
import { MedicamentosEntity } from "./medicamentos.entity";


@EntityRepository(MedicamentosEntity)
export class MedicmentosRepository  extends Repository<MedicamentosEntity>{


}
