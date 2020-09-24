import { Column, Entity, PrimaryColumn, ViewEntity } from "typeorm";

@Entity('equipo')
export class EquipoCovidEntity {
    @PrimaryColumn({name:'cod_equipo'})
    cod_equipo:string
    @PrimaryColumn({name:'cod_establecimiento'})
    cod_establecimiento:string
    @Column({name:'nro_integrantes'})
    nro_integrantes:number
    @Column({name:'seguimientos_realizados'})
    seguimientos_realizados:number
    @Column({name:'estado'})
    estado:string
    @Column({name:'nombre_equipo'})
    nombre_equipo:string
}
