import { Column, Entity, ViewEntity } from "typeorm";

@ViewEntity('stg_siscovid_ficha_200')
export class Ficha200Entity {
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
    Ficha_200_28_fecha_notificacion: string;
    @Column()
    Ficha_200_29_numero_dni_personal_llena_ficha: string;
    @Column()
    Ficha_200_30_nombres_apellidos_personal_llena_ficha: string;
    @Column()
    Ficha_200_31_fecha_nacimiento_paciente: string;
    @Column()
    Ficha_200_32_edad: string;
    @Column()
    Ficha_200_33_sexo_biologico: string;
    @Column()
    Ficha_200_34_tipo_seguro: string;
    @Column()
    Ficha_200_35_ingrese_tipo_seguro: string;
    @Column()
    Ficha_200_36_correo: string;
    @Column()
    Ficha_200_37_profesion_ocupacion: string;
    @Column()
    Ficha_200_tomaron_prueba_rapida: string;
    @Column()
    Ficha_200_resultado_prueba_rapida: string;
    @Column()
    Ficha_200_fecha_prueba_rapida: string;
    @Column()
    Ficha_200_resultado_segunda_prueba_rapida: string;
    @Column()
    Ficha_200_38_hospitalizado: string;
    @Column()
    Ficha_200_39_fecha_hospitalizacion: string;
    @Column()
    Ficha_200_40_tiene_algun_signo: string;
    @Column()
    Ficha_200_41_temeratura_paciente: string;
    @Column()
    Ficha_200_42_marque_signos_presenta: string;
    @Column()
    Ficha_200_42_marque_signos_presenta_exudadoFaringeo: string;
    @Column()
    Ficha_200_42_marque_signos_presenta_inteccionConjuntival: string;
    @Column()
    Ficha_200_42_marque_signos_presenta_convulsion: string;
    @Column()
    Ficha_200_42_marque_signos_presenta_coma: string;
    @Column()
    Ficha_200_42_marque_signos_presenta_disnea_taquipnea: string;
    @Column()
    Ficha_200_42_marque_signos_presenta_otros: string;
    @Column()
    Ficha_200_otros_especificar: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_embarazo_puerperio: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_comorbilidad_cardiovascula: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_diabetes: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_enfermedadHepatica: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_enfCronicaNeurologica: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_posparto_6semanas: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_inmunodeficiencia_vih: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_enfRenal: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_danoHepatico: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_enfPulmonarCronica: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_cancer: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_otros: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_mayor60anios: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_hipertensionArterial: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_obesidad: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_asma: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_insRenalCronica: string;
    @Column()
    Ficha_200_43_condiciones_comorbilidad_enf_tratInmunos: string;
    @Column()
    Ficha_200_embarazo_trimestre: string;
    @Column()
    Ficha_200_otros_especificar_2: string;
    @Column()
    Ficha_200_44_antecedente_viaje_14_diasfi_sintomas: string;
    @Column()
    Ficha_200_pais: string;
    @Column()
    Ficha_200_ciudad: string;
    @Column()
    Ficha_200_pais1: string;
    @Column()
    Ficha_200_ciudad1: string;
    @Column()
    Ficha_200_pais2: string;
    @Column()
    Ficha_200_ciudad2: string;
    @Column()
    Ficha_200_45_contacto_caso_confirmado_probable_14diasfi_sintomas: string;
    @Column()
    Ficha_200_46_fecha_obtencion_muestra: string;
    @Column()
    Ficha_200_47_obtencion_muestra_rt_pcr: string;
    @Column()
    Ficha_200_47_obtencion_muestra_rt_pcr_hisopado_nasalfaringeo: string;
    @Column()
    Ficha_200_47_obtencion_muestra_rt_pcr_aspirado_traqueal: string;
    @Column()
    Ficha_200_47_obtencion_muestra_rt_pcr_aspirado_broncoalve: string;
    @Column()
    Ficha_200_47_obtencion_muestra_rt_pcr_lavado_broncoalve: string;
    @Column()
    Ficha_200_47_obtencion_muestra_rt_pcr_tejido_pulmonar: string;
    @Column()
    Ficha_200_48_numero_contactos_consignar: string;
    @Column()
    Ficha_200_apellidos_nombres_01: string;
    @Column()
    Ficha_200_numero_dni_01: string;
    @Column()
    Ficha_200_numero_celular_01: string;
    @Column()
    Ficha_200_factores_riesgo_01: string;
    @Column()
    Ficha_200_factores_riesgo_asma_01: string;
    @Column()
    Ficha_200_factores_riesgo_enf_PulmonarCronica_01: string;
    @Column()
    Ficha_200_factores_riesgo_ins_Renal_Cronica_01: string;
    @Column()
    Ficha_200_factores_riesgo_obesidad_01: string;
    @Column()
    Ficha_200_factores_riesgo_personalSalud_01: string;
    @Column()
    Ficha_200_factores_riesgo_enfCardiovasculares_01: string;
    @Column()
    Ficha_200_factores_riesgo_Diabetes_01: string;
    @Column()
    Ficha_200_factores_riesgo_enf_tratamiento_Inmuno_01: string;
    @Column()
    Ficha_200_factores_riesgo_hipertensionArterial_01: string;
    @Column()
    Ficha_200_factores_riesgo_mayor60anios_01: string;
    @Column()
    Ficha_200_factores_riesgo_tuberculosis_01: string;
    @Column()
    Ficha_200_factores_riesgo_cancer_01: string;
    @Column()
    Ficha_200_factores_riesgo_embarazo_puerperio_01: string;
    @Column()
    Ficha_200_parentesco_01: string;
    @Column()
    Ficha_200_observacion_ficha_200: string;
    @Column()
    Ficha_200_procedera_llenar_ficha_seguimiento: string;
    @Column()
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
    id_ubigeo: string;
    @Column()
    cod_establecimiento: string
}
