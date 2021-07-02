import { Column, ViewEntity } from "typeorm";
@ViewEntity('CUPOS')
export class CuposDisponiblesEntity {
    @Column()
    ORDEN_DIA: number;
    @Column()
    ORDEN_HORA: number;
    @Column()
    NOMBRE_PUNTO_VACUNACION: string;
    @Column()
    FECHA_CITA: Date;
    @Column()
    HORARIO_CITA: string;
    @Column()
    CUPOS_HORA: number;
    @Column()
    CUPOS_OCUPADOS: number;


}
