// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/diagnosis-role|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export type DiagnosisRoleCodingType = {
  /**
   * Code: AD
   */
  AdmissionDiagnosis: CodingArgs;
  /**
   * Code: billing
   */
  Billing: CodingArgs;
  /**
   * Code: CC
   */
  ChiefComplaint: CodingArgs;
  /**
   * Code: CM
   */
  ComorbidityDiagnosis: CodingArgs;
  /**
   * Code: DD
   */
  DischargeDiagnosis: CodingArgs;
  /**
   * Code: post-op
   */
  PostOpDiagnosis: CodingArgs;
  /**
   * Code: pre-op
   */
  PreOpDiagnosis: CodingArgs;
}

/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export const DiagnosisRoleCodings:DiagnosisRoleCodingType = {
  /**
   * Code: AD
   */
  AdmissionDiagnosis: {
    display: "Admission diagnosis",
    code: "AD",
    system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
  },
  /**
   * Code: billing
   */
  Billing: {
    display: "Billing",
    code: "billing",
    system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
  },
  /**
   * Code: CC
   */
  ChiefComplaint: {
    display: "Chief complaint",
    code: "CC",
    system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
  },
  /**
   * Code: CM
   */
  ComorbidityDiagnosis: {
    display: "Comorbidity diagnosis",
    code: "CM",
    system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
  },
  /**
   * Code: DD
   */
  DischargeDiagnosis: {
    display: "Discharge diagnosis",
    code: "DD",
    system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
  },
  /**
   * Code: post-op
   */
  PostOpDiagnosis: {
    display: "post-op diagnosis",
    code: "post-op",
    system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
  },
  /**
   * Code: pre-op
   */
  PreOpDiagnosis: {
    display: "pre-op diagnosis",
    code: "pre-op",
    system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
  },
} as const;
