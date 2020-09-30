import { EntityRepository, Repository } from "typeorm";
import { Ficha200Entity } from "src/ficha200/ficha200.entity";
import { Ficha300Entity } from "./ficha300.entity";

@EntityRepository(Ficha300Entity)
export class Ficha300Repository extends Repository<Ficha300Entity>{}
