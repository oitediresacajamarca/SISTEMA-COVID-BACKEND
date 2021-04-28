import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, ViewEntity } from "typeorm";
@ViewEntity('heatmap_ajustado_confirmado')
export class Heatmap {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    lat: number;
    @Column()
    lng: number
}
