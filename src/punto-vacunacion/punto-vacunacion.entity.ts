import { Column, Entity, PrimaryColumn, ViewEntity } from "typeorm";

@Entity('PUNTO_VACUNACION')
export class PuntoVacunacionEntity {
    @Column()
    _Marca_temporal_: string;
    @Column()
    _PROVINCIA_: string;
    @Column()
    _DISTRITO_: string;
    @PrimaryColumn()
    _NOMBRE_PUNTO_VACUNACION_: string;
    @Column()
    _DIRECCION_DE_PUNTO_DE_VACUNACION_: string;
    @Column()
    _NUMERO_DE_VACUNATORIOS_: number;
    @Column()
    _CUPOS_POR_VACUNATORIO_: number;
    @Column()
    Column7: string;
    @Column()
    CUPO_ACTUAL:number;
    @Column()
    FECHA_ULTIMO_CUPO:Date;
}
