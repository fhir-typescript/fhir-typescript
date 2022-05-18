// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-admit-source|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export const EncounterAdmitSourceCodings = {
  /**
   * born: The patient is a newborn and the encounter will track the baby related activities (as opposed to the Mothers encounter - that may be associated using the newborn encounters partof property)
   */
  BornInHospital: new Coding({
    display: "Born in hospital",
    code: "born",
    system: "http://terminology.hl7.org/CodeSystem/admit-source",
  }),
  /**
   * emd: The patient has been transferred from the emergency department within the hospital. This is typically used in the transition to an inpatient encounter
   */
  FromAccidentEmergencyDepartment: new Coding({
    display: "From accident/emergency department",
    code: "emd",
    system: "http://terminology.hl7.org/CodeSystem/admit-source",
  }),
  /**
   * gp: The patient has been admitted due to a referred from a General Practitioner.
   */
  GeneralPractitionerReferral: new Coding({
    display: "General Practitioner referral",
    code: "gp",
    system: "http://terminology.hl7.org/CodeSystem/admit-source",
  }),
  /**
   * hosp-trans: The Patient has been transferred from another hospital for this encounter.
   */
  TransferredFromOtherHospital: new Coding({
    display: "Transferred from other hospital",
    code: "hosp-trans",
    system: "http://terminology.hl7.org/CodeSystem/admit-source",
  }),
  /**
   * mp: The patient has been admitted due to a referred from a Specialist (as opposed to a General Practitioner).
   */
  MedicalPractitionerPhysicianReferral: new Coding({
    display: "Medical Practitioner/physician referral",
    code: "mp",
    system: "http://terminology.hl7.org/CodeSystem/admit-source",
  }),
  /**
   * nursing: The patient has been transferred from a nursing home.
   */
  FromNursingHome: new Coding({
    display: "From nursing home",
    code: "nursing",
    system: "http://terminology.hl7.org/CodeSystem/admit-source",
  }),
  /**
   * other: The patient has been admitted from a source otherwise not specified here.
   */
  Other: new Coding({
    display: "Other",
    code: "other",
    system: "http://terminology.hl7.org/CodeSystem/admit-source",
  }),
  /**
   * outp: The patient has been transferred from an outpatient department within the hospital.
   */
  FromOutpatientDepartment: new Coding({
    display: "From outpatient department",
    code: "outp",
    system: "http://terminology.hl7.org/CodeSystem/admit-source",
  }),
  /**
   * psych: The patient has been transferred from a psychiatric facility.
   */
  FromPsychiatricHospital: new Coding({
    display: "From psychiatric hospital",
    code: "psych",
    system: "http://terminology.hl7.org/CodeSystem/admit-source",
  }),
  /**
   * rehab: The patient has been transferred from a rehabilitation facility or clinic.
   */
  FromRehabilitationFacility: new Coding({
    display: "From rehabilitation facility",
    code: "rehab",
    system: "http://terminology.hl7.org/CodeSystem/admit-source",
  }),
} as const;

/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export type EncounterAdmitSourceCodingType = typeof EncounterAdmitSourceCodings;