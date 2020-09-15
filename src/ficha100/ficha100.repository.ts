import { EntityRepository, Repository } from "typeorm";
import { Ficha100Entity } from "./ficha100.entity";

@EntityRepository(Ficha100Entity)
export class Ficha100Repository extends Repository<Ficha100Entity> {}
