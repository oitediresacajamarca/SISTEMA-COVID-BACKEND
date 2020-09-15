import { EntityRepository, Repository } from "typeorm";
import { Ficha00Entity } from "./ficha00.entity";

@EntityRepository(Ficha00Entity)
export class Ficha00Repository extends Repository<Ficha00Entity> {}
