import { EntityRepository, Repository } from "typeorm";
import { UbigeosDistritosEntity } from "./ubigeos-distritos.entity";


@EntityRepository(UbigeosDistritosEntity)
export class UbigeosDistritosRepository extends Repository<UbigeosDistritosEntity>{}
