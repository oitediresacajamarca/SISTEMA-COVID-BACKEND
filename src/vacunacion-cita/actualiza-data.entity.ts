import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('DataPadronActualizado')
export class ActualizaDataEntity {
    @PrimaryColumn()
    numero_documento: string;

    @Column({name:'APELLIDO_PATERNO'})
    ape_paterno: string;
    @Column({name:'APELLIDO_mATERNO'})
    ape_materno: string;
    @Column({name:'NOMBRES'})
    nombres: string;
    @Column()
    PROVINCIA: string;
    @Column()
    DISTRITO: string;
    @Column()
    TIPO_VIA: string;
    @Column()
    NOMBRE_VIA: string;
    @Column({name:'NUMERO_VIA'})
    NUMERO: string;
    @Column()
    REFERENCIA: string;
    @Column()
    NOMBRE_PUNTO_VACUNACION: string;
    @Column()
    NUMERO_TELEFONO: string;
    @Column()
    CORREO_ELECTRONICO: string;
    @Column()
    TIPO_SEGURO: string;
    @Column()
    TIENE_DISCAPACIDAD: boolean;
    @Column()
    Fecha_Registro:Date;
    @Column()
    edad:number
    @Column()
    ETIQUETA:string
}
