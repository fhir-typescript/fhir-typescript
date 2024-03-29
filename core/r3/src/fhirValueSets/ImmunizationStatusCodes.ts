// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-status|3.0.2

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 */
export const ImmunizationStatusCodes = {
  /**
   * completed: All actions that are implied by the administration have occurred.
   */
  Completed: "completed",
  /**
   * entered-in-error: The administration was entered in error and therefore nullified.
   */
  EnteredInError: "entered-in-error",
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 */
export type ImmunizationStatusCodeType = typeof ImmunizationStatusCodes[keyof typeof ImmunizationStatusCodes];
