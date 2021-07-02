import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity('PUNTO_PROGRAMAS_FECHAS')
export class PuntoProgramacionEntity {
    @PrimaryColumn()
    NOMBRE_PUNTO_VACUNACION: string
    @Column()
    ID_HORARIO: number
    @PrimaryColumn()
    FECHA_PROGRAMACION: Date
    @Column()
    ESTADO: string
}
