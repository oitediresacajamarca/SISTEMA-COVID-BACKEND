import { EntityRepository, Repository } from "typeorm";
import { BaseNotiEntity } from "./base-noti.entity";


@EntityRepository(BaseNotiEntity)
export class BaseNotiReprository extends Repository<BaseNotiEntity> {


}
