// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-status-reason|4.0.1

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 */
export const ImmunizationStatusReasonCodes = {
  /**
   * Code: 171257003
   */
  NoConsentTetanusLowDoseDiphtheriaVaccine: "171257003",
  /**
   * Code: 171265000
   */
  PertussisVaccineRefused: "171265000",
  /**
   * Code: 171266004
   */
  NoConsentDiphtheriaImmunization: "171266004",
  /**
   * Code: 171267008
   */
  NoConsentTetanusImmunization: "171267008",
  /**
   * Code: 171268003
   */
  PolioImmunizationRefused: "171268003",
  /**
   * Code: 171269006
   */
  NoConsentMeaslesImmunization: "171269006",
  /**
   * Code: 171270007
   */
  NoConsentRubellaImmunization: "171270007",
  /**
   * Code: 171271006
   */
  NoConsentBCG: "171271006",
  /**
   * Code: 171272004
   */
  NoConsentInfluenzaImmunization: "171272004",
  /**
   * Code: 171280006
   */
  NoConsentForMMR: "171280006",
  /**
   * Code: 171283008
   */
  NoConsentForAnyPrimaryImmunization: "171283008",
  /**
   * Code: 171285001
   */
  NoConsentPreSchoolVaccinations: "171285001",
  /**
   * Code: 171286000
   */
  NoConsentSchoolExitVaccinations: "171286000",
  /**
   * Code: 171291004
   */
  NoConsentHaemophilusInfluenzaeTypeBImmunization: "171291004",
  /**
   * Code: 171292006
   */
  NoConsentPneumococcalImmunization: "171292006",
  /**
   * Code: 171293001
   */
  NoConsentForMRMeaslesRubellaVaccine: "171293001",
  /**
   * Code: 268559007
   */
  NoConsentForAnyImmunization: "268559007",
  /**
   * Code: 310839003
   */
  NoConsentForMMR1: "310839003",
  /**
   * Code: 310840001
   */
  NoConsentForSecondMeaslesMumpsAndRubellaVaccine: "310840001",
  /**
   * Code: 314768003
   */
  NoConsentDiphtheriaTetanusPertussisImmunization: "314768003",
  /**
   * Code: 314769006
   */
  NoConsentTetanusPlusDiphtheriaImmunization: "314769006",
  /**
   * Code: 314936001
   */
  NoConsentForMeningitisCImmunization: "314936001",
  /**
   * Code: 407598009
   */
  NoConsentFor3rdHIBBooster: "407598009",
  /**
   * IMMUNE: Definition:Testing has shown that the patient already has immunity to the agent targeted by the immunization.
   */
  Immunity: "IMMUNE",
  /**
   * MEDPREC: Definition:The patient currently has a medical condition for which the vaccine is contraindicated or for which precaution is warranted.
   */
  MedicalPrecaution: "MEDPREC",
  /**
   * OSTOCK: Definition:There was no supply of the product on hand to perform the service.
   */
  ProductOutOfStock: "OSTOCK",
  /**
   * PATOBJ: Definition:The patient or their guardian objects to receiving the vaccine.
   */
  PatientObjection: "PATOBJ",
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 */
export type ImmunizationStatusReasonCodeType = typeof ImmunizationStatusReasonCodes[keyof typeof ImmunizationStatusReasonCodes];
