// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActIncidentCode|2.0.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Set of codes indicating the type of incident or accident.
 */
export type V3ActIncidentCodingType = {
  /**
   * Code: _ActPatientSafetyIncidentCode
   */
  ActPatientSafetyIncidentCode: CodingArgs;
  /**
   * Code: MVA
   */
  MotorVehicleAccident: CodingArgs;
  /**
   * Code: SCHOOL
   */
  SchoolAccident: CodingArgs;
  /**
   * Code: SPT
   */
  SportingAccident: CodingArgs;
  /**
   * Code: WPA
   */
  WorkplaceAccident: CodingArgs;
}

/**
 * Set of codes indicating the type of incident or accident.
 */
export const V3ActIncidentCodings:V3ActIncidentCodingType = {
  /**
   * Code: _ActPatientSafetyIncidentCode
   */
  ActPatientSafetyIncidentCode: {
    display: "ActPatientSafetyIncidentCode",
    code: "_ActPatientSafetyIncidentCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: MVA
   */
  MotorVehicleAccident: {
    display: "Motor vehicle accident",
    code: "MVA",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: SCHOOL
   */
  SchoolAccident: {
    display: "School Accident",
    code: "SCHOOL",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: SPT
   */
  SportingAccident: {
    display: "Sporting Accident",
    code: "SPT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: WPA
   */
  WorkplaceAccident: {
    display: "Workplace accident",
    code: "WPA",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
} as const;
