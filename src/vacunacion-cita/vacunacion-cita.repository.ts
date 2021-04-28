import { EntityRepository, Repository } from "typeorm";
import { VacunacionCitaEntity } from "./vacunacion-cita.entity";
import { VacunacionCita } from "./vacunacion-cita.interface";

@EntityRepository(VacunacionCitaEntity)
export class VacunacionCitaRepository extends Repository< VacunacionCitaEntity> {
    


}
