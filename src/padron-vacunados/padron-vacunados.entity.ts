import { Column, Entity, ViewEntity } from "typeorm";


@ViewEntity('PD')
export class PadronVacunadosEntity {
    @Column()
    DIRIS: String;
    @Column()
    Tipo_de_Documento: Number
    @Column()
    Numero_de_Documento: string;
    @Column()
    Nombres: String;
    @Column()
    Apellido_Paterno: String;
    @Column()
    Apellido_Materno: String;
    @Column()
    Nombre_EESS: String;
    @Column()
    Departamento: String;
    @Column()
    Provincia: String;
    @Column()
    Distrito: String;
    @Column()
    Fuente_Datos: String;
    @Column()
    Edad: number;
    @Column()
    Departamento_RENIEC: String;
    @Column()
    Provincia_RENIEC: String;
    @Column()
    Distrito_RENIEC: String;
    @Column()
    Direccion_RENIEC: String;
  
}
