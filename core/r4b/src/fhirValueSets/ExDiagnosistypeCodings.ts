// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ex-diagnosistype|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes example Diagnosis Type codes.
 */
export type ExDiagnosistypeCodingType = {
  /**
   * admitting: The diagnosis given as the reason why the patient was admitted to the hospital.
   */
  AdmittingDiagnosis: CodingArgs;
  /**
   * clinical: A diagnosis made on the basis of medical signs and patient-reported symptoms, rather than diagnostic tests.
   */
  ClinicalDiagnosis: CodingArgs;
  /**
   * differential: One of a set of the possible diagnoses that could be connected to the signs, symptoms, and lab findings.
   */
  DifferentialDiagnosis: CodingArgs;
  /**
   * discharge: The diagnosis given when the patient is discharged from the hospital.
   */
  DischargeDiagnosis: CodingArgs;
  /**
   * laboratory: A diagnosis based significantly on laboratory reports or test results, rather than the physical examination of the patient.
   */
  LaboratoryDiagnosis: CodingArgs;
  /**
   * nursing: A diagnosis which identifies people's responses to situations in their lives, such as a readiness to change or a willingness to accept assistance.
   */
  NursingDiagnosis: CodingArgs;
  /**
   * prenatal: A diagnosis determined prior to birth.
   */
  PrenatalDiagnosis: CodingArgs;
  /**
   * principal: The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment.
   */
  PrincipalDiagnosis: CodingArgs;
  /**
   * radiology: A diagnosis based primarily on the results from medical imaging studies.
   */
  RadiologyDiagnosis: CodingArgs;
  /**
   * remote: A diagnosis determined using telemedicine techniques.
   */
  RemoteDiagnosis: CodingArgs;
  /**
   * retrospective: The labeling of an illness in a specific historical event using modern knowledge, methods and disease classifications.
   */
  RetrospectiveDiagnosis: CodingArgs;
  /**
   * self: A diagnosis determined by the patient.
   */
  SelfDiagnosis: CodingArgs;
}

/**
 * This value set includes example Diagnosis Type codes.
 */
export const ExDiagnosistypeCodings:ExDiagnosistypeCodingType = {
  /**
   * admitting: The diagnosis given as the reason why the patient was admitted to the hospital.
   */
  AdmittingDiagnosis: {
    display: "Admitting Diagnosis",
    code: "admitting",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * clinical: A diagnosis made on the basis of medical signs and patient-reported symptoms, rather than diagnostic tests.
   */
  ClinicalDiagnosis: {
    display: "Clinical Diagnosis",
    code: "clinical",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * differential: One of a set of the possible diagnoses that could be connected to the signs, symptoms, and lab findings.
   */
  DifferentialDiagnosis: {
    display: "Differential Diagnosis",
    code: "differential",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * discharge: The diagnosis given when the patient is discharged from the hospital.
   */
  DischargeDiagnosis: {
    display: "Discharge Diagnosis",
    code: "discharge",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * laboratory: A diagnosis based significantly on laboratory reports or test results, rather than the physical examination of the patient.
   */
  LaboratoryDiagnosis: {
    display: "Laboratory Diagnosis",
    code: "laboratory",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * nursing: A diagnosis which identifies people's responses to situations in their lives, such as a readiness to change or a willingness to accept assistance.
   */
  NursingDiagnosis: {
    display: "Nursing Diagnosis",
    code: "nursing",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * prenatal: A diagnosis determined prior to birth.
   */
  PrenatalDiagnosis: {
    display: "Prenatal Diagnosis",
    code: "prenatal",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * principal: The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment.
   */
  PrincipalDiagnosis: {
    display: "Principal Diagnosis",
    code: "principal",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * radiology: A diagnosis based primarily on the results from medical imaging studies.
   */
  RadiologyDiagnosis: {
    display: "Radiology Diagnosis",
    code: "radiology",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * remote: A diagnosis determined using telemedicine techniques.
   */
  RemoteDiagnosis: {
    display: "Remote Diagnosis",
    code: "remote",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * retrospective: The labeling of an illness in a specific historical event using modern knowledge, methods and disease classifications.
   */
  RetrospectiveDiagnosis: {
    display: "Retrospective Diagnosis",
    code: "retrospective",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
  /**
   * self: A diagnosis determined by the patient.
   */
  SelfDiagnosis: {
    display: "Self Diagnosis",
    code: "self",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  },
} as const;
