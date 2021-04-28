import { Column, ViewEntity } from "typeorm";


@ViewEntity('UBIGEOS_DISTRITOS')
export class UbigeosDistritosEntity {
    @Column()
    "COD_UBIGEO":string;
    @Column()
    "DEPARTAMENTO":string;
    @Column()
    "PROVINCIA":string;
    @Column()
    "DISTRITO":string;
    @Column()
    "LONG":number;
    @Column()
    "LAT":number
}
