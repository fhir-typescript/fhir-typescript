// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-origin|4.3.0

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export const ImmunizationOriginCodes = {
  /**
   * provider: The data for the immunization event originated with another provider.
   */
  OtherProvider: "provider",
  /**
   * recall: The data for the immunization event originated from the recollection of the patient or parent/guardian of the patient.
   */
  ParentGuardianPatientRecall: "recall",
  /**
   * record: The data for the immunization event originated with a written record for the patient.
   */
  WrittenRecord: "record",
  /**
   * school: The data for the immunization event originated with a school record for the patient.
   */
  SchoolRecord: "school",
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export type ImmunizationOriginCodeType = typeof ImmunizationOriginCodes[keyof typeof ImmunizationOriginCodes];