import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('stg_siscovid_ficha_100')
export class Ficha100Entity {
   
    @Column()
    Tipo_Documento?: string;
    @PrimaryColumn()
    Nro_Documento?: string;
    @Column()
    nombres?: string;
    @Column()
    Apellido_Paterno?: string
    Apellido_Materno?: string;
    @Column()
    comun_sexo_paciente?: string;
    @Column()
    Celular?: string;
    @Column()
    Teléfono?: string;
    @Column()
    Edad?: number;
    @Column()
    domicilio_residencia?: string;
    @Column()
    Direccion?: string;
    @Column()
    Departamento?: string;
    @Column()
    Provincia?: string;
    @Column()
    Distrito?: string;
    @Column()
    Latitud?: number;
    @Column()
    Longitud?: number;
    @Column()
    Personal_Salud?: string;
    @Column()
    Comun_profesion?: string;
    @Column()
    Tiene_Sintomas?: string;
    @Column()
    Fecha_Inicio_Sintomas?: string;
    @Column()
    Sintomas_Presenta?: string;
    @Column()
    Tos?: boolean;
    @Column()
    Dolor_Garganta?: boolean;
    @Column()
    Congestion_Nasal?: boolean;
    @Column()
    Dificultad_Respiratoria?: boolean;
    @Column()
    Fiebre_Escalofrio?: boolean;
    @Column()
    Malestar_General?: boolean;
    @Column()
    Diarrea?: boolean;
    @Column()
    Nauseas_Vomito?: boolean;
    @Column()
    Presenta_Cefalea?: boolean;
    @Column()
    Irritabilidad_Confusion?: boolean;
    @Column()
    Presenta_Dolor?: boolean;
    @Column()
    Presenta_Otros?: boolean;
    @Column()
    Dolor_Presenta?: boolean;
    @Column()
    Dolor_Presenta_Muscular?: boolean;
    @Column()
    Dolor_Presenta_Abdominal?: boolean;
    @Column()
    Dolor_Presenta_Pecho?: boolean;
    @Column()
    Dolor_Presenta_Articulaciones?: boolean;
    @Column()
    Dolor_Presenta_Otros?: string;
    @Column()
    Fecha_Ejecucuion_Prueba_Rapida?: Date;
    @Column()
    Procedencia_Solicitud_Diagnostico?: string;
    @Column()
    Resultado?: string;
    @Column()
    Fotografia_Prueba_Rapida?: string;
    @Column()
    Resultado_Segunda_Prueba?: string;
    @Column()
    Fotografia_Segunda_Prueba_Rapida?: string;
    @Column()
    Clasificacion_Clinica_Severidad?: string;
    @Column()
    Riesgo?: string;
    @Column()
    Riesgo_Personal_Salud?: boolean;
    @Column()
    Riesgo_Obesidad?: boolean;
    @Column()
    Riesgo_Enf_Pulmonar_Cronica?: boolean;
    @Column()
    Riesgo_Diabetes?: boolean;
    @Column()
    Riesgo_Hipertension_Arterial?: boolean;
    @Column()
    Riesgo_Enf_Tratinmuno?: boolean;
    @Column()
    Riesgo_Cancer?: boolean;
    @Column()
    Riesgo_Embarazo?: boolean;
    @Column()
    Riesgo_Mayor_60_Anios?: boolean;
    @Column()
    Riesgo_Ninguna?: boolean;

    @Column()
    Riesgo_Asma?: boolean;
    @Column()
    Riesgo_Renal_Cronica?: boolean;
    @Column()
    Registrador?: string;
    @Column()
    Doc_Registrador?: string;
 
    
    @Column()
    Aplicara_PCR?: string;
    @Column()
    Observacion?: string;
  
    @Column()
    Resultado1?: string;
    @Column()
    Fecha_Prueba?: string;
    @Column()
    Usuario_Kobo?: string;
    @Column()
    Usuario?: string;
    @Column()
    Nombres_Usuario?: string;
    @Column()
    Apellidos_Usuario?: string;
    @Column()
    Correo_Usuario?: string;
    @Column()
    nom_reniec?: string;
    @Column()
    apep_reniec?: string;
    @Column()
    apem_reniec?: string;
    @Column()
    sexo_reniec?: string;
    @Column()
    fecha_nac_reniec?: string;
    @Column()
    dir_reniec?: string;
    @Column()
    dep_reniec?: string;
    @Column()
    prov_reniec?: string;
    @Column()
    dist_reniec?: string;
    @Column()
    ubigeo_reniec?: string;
    @Column()
    fecha_registro?: string;
    @Column()
    TipoConglomerado?: string;
    @Column()
    Conglomerado?: string;
    @Column()
    id_ubigeo?: string;
    @Column()
    cod_establecimiento?: string;
    @Column()
    etnia?: string
}
