import { Column, ViewEntity } from "typeorm";
@ViewEntity('stg_siscovid_ficha_300')
export class Ficha300Entity {
    @Column()
    Tipo_Documento: string;
    @Column()
    Nro_Documento: string;
    @Column()
    Nombres: string;
    @Column()
    Apellido_Paterno: string;
    @Column()
    Apellido_Materno: string;
    @Column()
    comun_sexo_paciente: string;
    @Column()
    Celular: string;
    @Column()
    Telefono: string;
    @Column()
    Edad: string;
    @Column()
    domicilio_residencia: string;
    @Column()
    Direccion: string;
    @Column()
    Departamento: string;
    @Column()
    Provincia: string;
    @Column()
    Distrito: string;
    @Column()
    Latitud: string;
    @Column()
    Longitud: string;
    @Column()
    Personal_Salud: string;
    @Column()
    Comun_profesion: string;
    @Column()
    Tiene_Sintomas: string;
    @Column()
    Fecha_Inicio_Sintomas: string;
    @Column()
    Sintomas_Presenta: string;
    @Column()
    Tos: string;
    @Column()
    Dolor_Garganta: string;
    @Column()
    Congestion_Nasal: string;
    @Column()
    Dificultad_Respiratoria: string;
    @Column()
    Fiebre_Escalofrio: string;
    @Column()
    Malestar_General: string;
    @Column()
    Diarrea: string;
    @Column()
    Nauseas_Vomito: string;
    @Column()
    Presenta_Cefalea: string;
    @Column()
    Irritabilidad_Confusion: string;
    @Column()
    Presenta_Dolor: string;
    @Column()
    Presenta_Otros: string;
    @Column()
    Dolor_Presenta: string;
    @Column()
    Dolor_Presenta_Muscular: string;
    @Column()
    Dolor_Presenta_Abdominal: string;
    @Column()
    Dolor_Presenta_Pecho: string;
    @Column()
    Dolor_Presenta_Articulaciones: string;
    @Column()
    Dolor_Presenta_Otros: string;
    @Column()
    Ficha_300_fecha_inicio_sintomas: string;
    @Column()
    Ficha_300_fecha_toma_muestra: string;
    @Column()
    Ficha_300_fecha_resultado: string;
    @Column()
    Ficha_300_numero_dia_seguimiento: string;
    @Column()
    Ficha_300_fecha_del_seguimiento: string;
    @Column()
    Ficha_300_tipo_de_monitoreo: string;
    @Column()
    Ficha_300_presion_arterial: string;
    @Column()
    Ficha_300_frecuencia_cardiaca: string;
    @Column()
    Ficha_300_frecuencia_respiratoria: string;
    @Column()
    Ficha_300_temperatura: string;
    @Column()
    Ficha_300_presenta_sintoma: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta_tos: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta_dolor_garganta: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta_congestion_nasal: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta_fiebre: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta_malestar_general: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta_dif_respiatoria: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta_diarrea: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta_vomito: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta_cefalea: string;
    @Column()
    Ficha_300_marque_sintomas_que_presenta_otro: string;
    @Column()
    Ficha_300_sintoma_otro_especificar: string;
    @Column()
    Ficha_300_marque_signos_alarma_que_presenta: string;
    @Column()
    Ficha_300_marque_signos_alarma_que_presenta_disnea: string;
    @Column()
    Ficha_300_marque_signos_alarma_que_presenta_taquipnea: string;
    @Column()
    Ficha_300_marque_signos_alarma_que_presenta_saturacion: string;
    @Column()
    Ficha_300_marque_signos_alarma_que_presenta_alter_conciencia: string;
    @Column()
    Ficha_300_marque_signos_alarma_que_presenta_ninguno: string;
    @Column()
    Ficha_300_marque_signos_alarma_que_presenta_otros: string;
    @Column()
    Ficha_300_signo_alarma_otro_especificar: string;
    @Column()
    Ficha_300_evolucion: string;
    @Column()
    id_registro: string
    Ficha_Resultado_prueba_rapida: string;
    @Column()
    Ficha_fecha_prueba_rapida: string;
    @Column()
    Comun_documento_paciente: string;
    @Column()
    Ficha_dni_registrador: string;
    @Column()
    Ficha_nombres_apellidos_registrador: string;
    @Column()
    Procedencia_Resultado_prueba_rapida: string;
    @Column()
    fecha_registro: string;
    @Column()
    Ficha_300_egreso: string;
    @Column()
    Ficha_300_condicion_egreso: string;
    @Column()
    id_ubigeo: string;
    @Column()
    cod_establecimiento: string
}
