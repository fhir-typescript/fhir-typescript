// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/no-immunization-reason|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 */
export type NoImmunizationReasonCodingType = {
  /**
   * Code: 171257003
   */
  NoConsentTetanusLowDoseDiphtheriaVaccine: CodingArgs;
  /**
   * Code: 171265000
   */
  PertussisVaccineRefused: CodingArgs;
  /**
   * Code: 171266004
   */
  NoConsentDiphtheriaImmunization: CodingArgs;
  /**
   * Code: 171267008
   */
  NoConsentTetanusImmunization: CodingArgs;
  /**
   * Code: 171268003
   */
  PolioImmunizationRefused: CodingArgs;
  /**
   * Code: 171269006
   */
  NoConsentMeaslesImmunization: CodingArgs;
  /**
   * Code: 171270007
   */
  NoConsentRubellaImmunization: CodingArgs;
  /**
   * Code: 171271006
   */
  NoConsentBCG: CodingArgs;
  /**
   * Code: 171272004
   */
  NoConsentInfluenzaImmunization: CodingArgs;
  /**
   * Code: 171280006
   */
  NoConsentForMMR: CodingArgs;
  /**
   * Code: 171283008
   */
  NoConsentForAnyPrimaryImmunization: CodingArgs;
  /**
   * Code: 171285001
   */
  NoConsentPreSchoolVaccinations: CodingArgs;
  /**
   * Code: 171286000
   */
  NoConsentSchoolExitVaccinations: CodingArgs;
  /**
   * Code: 171291004
   */
  NoConsentHaemophilusInfluenzaeTypeBImmunization: CodingArgs;
  /**
   * Code: 171292006
   */
  NoConsentPneumococcalImmunization: CodingArgs;
  /**
   * Code: 171293001
   */
  NoConsentForMRMeaslesRubellaVaccine: CodingArgs;
  /**
   * Code: 268559007
   */
  NoConsentForAnyImmunization: CodingArgs;
  /**
   * Code: 310839003
   */
  NoConsentForMMR1: CodingArgs;
  /**
   * Code: 310840001
   */
  NoConsentForMeaslesMumpsRubellaTwo: CodingArgs;
  /**
   * Code: 314768003
   */
  NoConsentDTPImmunization: CodingArgs;
  /**
   * Code: 314769006
   */
  NoConsentDTImmunization: CodingArgs;
  /**
   * Code: 314936001
   */
  NoConsentForMeningitisCImmunization: CodingArgs;
  /**
   * Code: 407598009
   */
  NoConsentFor3rdHIBBooster: CodingArgs;
  /**
   * IMMUNE: Definition:Testing has shown that the patient already has immunity to the agent targeted by the immunization.
   */
  Immunity: CodingArgs;
  /**
   * MEDPREC: Definition:The patient currently has a medical condition for which the vaccine is contraindicated or for which precaution is warranted.
   */
  MedicalPrecaution: CodingArgs;
  /**
   * OSTOCK: Definition:There was no supply of the product on hand to perform the service.
   */
  ProductOutOfStock: CodingArgs;
  /**
   * PATOBJ: Definition:The patient or their guardian objects to receiving the vaccine.
   */
  PatientObjection: CodingArgs;
}

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 */
export const NoImmunizationReasonCodings:NoImmunizationReasonCodingType = {
  /**
   * Code: 171257003
   */
  NoConsentTetanusLowDoseDiphtheriaVaccine: {
    display: "No consent - Tetanus/low dose diphtheria vaccine",
    code: "171257003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171265000
   */
  PertussisVaccineRefused: {
    display: "Pertussis vaccine refused",
    code: "171265000",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171266004
   */
  NoConsentDiphtheriaImmunization: {
    display: "No consent - diphtheria immunization",
    code: "171266004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171267008
   */
  NoConsentTetanusImmunization: {
    display: "No consent - tetanus immunization",
    code: "171267008",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171268003
   */
  PolioImmunizationRefused: {
    display: "Polio immunization refused",
    code: "171268003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171269006
   */
  NoConsentMeaslesImmunization: {
    display: "No consent - measles immunization",
    code: "171269006",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171270007
   */
  NoConsentRubellaImmunization: {
    display: "No consent - rubella immunization",
    code: "171270007",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171271006
   */
  NoConsentBCG: {
    display: "No consent - BCG",
    code: "171271006",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171272004
   */
  NoConsentInfluenzaImmunization: {
    display: "No consent - influenza immunization",
    code: "171272004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171280006
   */
  NoConsentForMMR: {
    display: "No consent for MMR",
    code: "171280006",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171283008
   */
  NoConsentForAnyPrimaryImmunization: {
    display: "No consent for any primary immunization",
    code: "171283008",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171285001
   */
  NoConsentPreSchoolVaccinations: {
    display: "No consent - pre-school vaccinations",
    code: "171285001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171286000
   */
  NoConsentSchoolExitVaccinations: {
    display: "No consent - school exit vaccinations",
    code: "171286000",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171291004
   */
  NoConsentHaemophilusInfluenzaeTypeBImmunization: {
    display: "No consent - Haemophilus influenzae type B immunization",
    code: "171291004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171292006
   */
  NoConsentPneumococcalImmunization: {
    display: "No consent pneumococcal immunization",
    code: "171292006",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 171293001
   */
  NoConsentForMRMeaslesRubellaVaccine: {
    display: "No consent for MR - Measles/rubella vaccine",
    code: "171293001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 268559007
   */
  NoConsentForAnyImmunization: {
    display: "No consent for any immunization",
    code: "268559007",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 310839003
   */
  NoConsentForMMR1: {
    display: "No consent for MMR1",
    code: "310839003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 310840001
   */
  NoConsentForMeaslesMumpsRubellaTwo: {
    display: "No consent for measles/mumps/rubella two",
    code: "310840001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 314768003
   */
  NoConsentDTPImmunization: {
    display: "No consent DTP immunization",
    code: "314768003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 314769006
   */
  NoConsentDTImmunization: {
    display: "No consent DT immunization",
    code: "314769006",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 314936001
   */
  NoConsentForMeningitisCImmunization: {
    display: "No consent for meningitis C immunization",
    code: "314936001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 407598009
   */
  NoConsentFor3rdHIBBooster: {
    display: "No consent for 3rd HIB booster",
    code: "407598009",
    system: "http://snomed.info/sct",
  },
  /**
   * IMMUNE: Definition:Testing has shown that the patient already has immunity to the agent targeted by the immunization.
   */
  Immunity: {
    display: "immunity",
    code: "IMMUNE",
    system: "http://hl7.org/fhir/v3/ActReason",
  },
  /**
   * MEDPREC: Definition:The patient currently has a medical condition for which the vaccine is contraindicated or for which precaution is warranted.
   */
  MedicalPrecaution: {
    display: "medical precaution",
    code: "MEDPREC",
    system: "http://hl7.org/fhir/v3/ActReason",
  },
  /**
   * OSTOCK: Definition:There was no supply of the product on hand to perform the service.
   */
  ProductOutOfStock: {
    display: "product out of stock",
    code: "OSTOCK",
    system: "http://hl7.org/fhir/v3/ActReason",
  },
  /**
   * PATOBJ: Definition:The patient or their guardian objects to receiving the vaccine.
   */
  PatientObjection: {
    display: "patient objection",
    code: "PATOBJ",
    system: "http://hl7.org/fhir/v3/ActReason",
  },
} as const;
