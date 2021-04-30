import { Column, Entity, PrimaryColumn, ViewEntity } from "typeorm";
@Entity('CITA_CABECERA')
export class VacunacionCitaEntity {
    @Column()
    PROVINCIA: String;
    @Column()
    DISTRITO: String;
    @Column()
    TIPO_VIA: String;
    @Column()
    NOMBRE_VIA: String;
    @Column()
    NUMERO: String;
    @Column()
    REFERENCIA: String;
    @Column()
    NOMBRE_PUNTO_VACUNACION: String;
    @Column()
    NUMERO_TELEFONO: String;
    @Column()
    CORREO_ELECTRONICO: String;
    @Column()
    TIPO_SEGURO: String;
    @PrimaryColumn()
    numero_documento: String;
    @Column()
    ape_paterno: String;
    @Column()
    ape_materno: String;
    @Column()
    nombres: String;
    @Column()
    FECHA_PROGRAMADA_CITA:Date;

  
  
    
    @Column()
    FECHA_REGISTRO:Date;
}
