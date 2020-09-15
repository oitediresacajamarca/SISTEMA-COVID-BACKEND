import { EntityRepository, Repository } from "typeorm";
import { Ficha200Entity } from "src/ficha200/ficha200.entity";

@EntityRepository(Ficha200Entity)
export class Ficha300Repository extends Repository<Ficha200Entity>{}
