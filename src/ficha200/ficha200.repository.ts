import { EntityRepository, Repository } from "typeorm";
import { Ficha200Entity } from "./ficha200.entity";

@EntityRepository(Ficha200Entity)
export class Ficha200Repository extends Repository<Ficha200Entity>{}
