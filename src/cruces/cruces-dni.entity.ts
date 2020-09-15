import { ViewEntity, Column } from "typeorm";

@ViewEntity('CRUCE_FICHAS')
export class CrucesDniEntity {
    @Column()
    Nro_Documento
    @Column()
    Apellidos_Nombres:string
    @Column()
    noti :string
    @Column()
    ficha0:string
    @Column()
    ficha100:string
    @Column()
    ficha200:string
    @Column()
    ficha300:string
    @Column()
    hospi:string
    @Column()
    sinadef:string
}
