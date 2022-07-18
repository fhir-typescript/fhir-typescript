// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/provider-qualification|3.0.2

/**
 * This value set includes sample Provider Qualification codes.
 */
export const ProviderQualificationCodes = {
  /**
   * 311405: Dentist General Practitioner (DDS, DDM).
   */
  Dentist: "311405",
  /**
   * 604210: Optometrist.
   */
  Optometrist: "604210",
  /**
   * 604215: Ophthalmologist.
   */
  Ophthalmologist: "604215",
} as const;

/**
 * This value set includes sample Provider Qualification codes.
 */
export type ProviderQualificationCodeType = typeof ProviderQualificationCodes[keyof typeof ProviderQualificationCodes];