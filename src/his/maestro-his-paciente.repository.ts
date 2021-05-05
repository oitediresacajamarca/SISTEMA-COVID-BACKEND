import { EntityRepository, Repository } from "typeorm";
import { MaestroHisPacienteEntity } from "./maestro-his-paciente.entity";

@EntityRepository(MaestroHisPacienteEntity)
export class MaestroHisPacienteRepository extends Repository<MaestroHisPacienteEntity>{}
