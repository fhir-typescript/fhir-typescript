// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-subpotent-reason|4.0.1

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 */
export const ImmunizationSubpotentReasonCodes = {
  /**
   * coldchainbreak: The vaccine experienced a cold chain break.
   */
  ColdChainBreak: "coldchainbreak",
  /**
   * partial: The full volume of the dose was not administered to the patient.
   */
  PartialDose: "partial",
  /**
   * recall: The vaccine was recalled by the manufacturer.
   */
  ManufacturerRecall: "recall",
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 */
export type ImmunizationSubpotentReasonCodeType = typeof ImmunizationSubpotentReasonCodes[keyof typeof ImmunizationSubpotentReasonCodes];
