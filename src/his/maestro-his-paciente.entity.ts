import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('MAESTRO_PACIENTE')
export class MaestroHisPacienteEntity {
    @PrimaryColumn()
    Id_Paciente: string;
    @Column()
    Id_Tipo_Documento_Paciente: number;
    @Column()
    Numero_Documento_Paciente: string;
    @Column()
    Apellido_Paterno_Paciente: string;
    @Column()
    Apellido_Materno_Paciente: string;
    @Column()
    Nombres_Paciente: string;
    @Column()
    Fecha_Nacimiento_Paciente: Date;
    @Column()
    Genero: string;
    @Column()
    Id_Etnia: string;
    @Column()
    Historia_Clinica: string;
    @Column()
    Ficha_Familiar: string;
    @Column()
    Ubigeo_Nacimiento: string;
    @Column()
    Ubigeo_Reniec: string;
    @Column()
    Domicilio_Reniec: string;
    @Column()
    Ubigeo_Declarado: string;
    @Column()
    Domicilio_Declarado: string;
    @Column()
    Referencia_Domicilio: string;
    @Column()
    Id_Pais: string;
    @Column()
    Id_Establecimiento: number;
    @Column()
    Fecha_Alta: Date;
    @Column()
    Fecha_Modificacion: Date;

}
