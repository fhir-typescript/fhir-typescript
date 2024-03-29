// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/vaccination-protocol-dose-status|3.0.2

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.
 */
export const VaccinationProtocolDoseStatusCodes = {
  /**
   * count: The dose counts toward fulfilling a path to immunity for a patient, providing protection against the target disease.
   */
  Counts: "count",
  /**
   * nocount: The dose does not count toward fulfilling a path to immunity for a patient.
   */
  DoesNotCount: "nocount",
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.
 */
export type VaccinationProtocolDoseStatusCodeType = typeof VaccinationProtocolDoseStatusCodes[keyof typeof VaccinationProtocolDoseStatusCodes];
