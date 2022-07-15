// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-class|1.0.2

/**
 * Classification of the encounter
 */
export const EncounterClassCodes = {
  /**
   * ambulatory: An encounter where the patient visits the practitioner in his/her office, e.g. a G.P. visit.
   */
  Ambulatory: "ambulatory",
  /**
   * daytime: An encounter where the patient needs more prolonged treatment or investigations than outpatients, but who do not need to stay in the hospital overnight.
   */
  Daytime: "daytime",
  /**
   * emergency: An encounter in the Emergency Care Department.
   */
  Emergency: "emergency",
  /**
   * field: An encounter taking place outside the regular environment for giving care.
   */
  Field: "field",
  /**
   * home: An encounter where the practitioner visits the patient at his/her home.
   */
  Home: "home",
  /**
   * inpatient: An encounter during which the patient is hospitalized and stays overnight.
   */
  Inpatient: "inpatient",
  /**
   * other: Any other encounter type that is not described by one of the other values. Where this is used it is expected that an implementer will include an extension value to define what the actual other type is.
   */
  Other: "other",
  /**
   * outpatient: An encounter during which the patient is not hospitalized overnight.
   */
  Outpatient: "outpatient",
  /**
   * virtual: An encounter that takes place where the patient and practitioner do not physically meet but use electronic means for contact.
   */
  Virtual: "virtual",
} as const;

/**
 * Classification of the encounter
 */
export type EncounterClassCodeType = typeof EncounterClassCodes[keyof typeof EncounterClassCodes];
