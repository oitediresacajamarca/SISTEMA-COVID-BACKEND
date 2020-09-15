import { EntityRepository, Repository } from "typeorm";
import { BaseNotiEntity } from "./base-noti.entity";

@EntityRepository(BaseNotiEntity)
export class BaseNotiRepository  extends Repository<BaseNotiEntity>{}
