// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/consent-action|3.0.2

/**
 * This value set includes sample Consent Action codes.
 */
export const ConsentActionCodes = {
  /**
   * access: Provide an entity access to information to achieve a stated purpose
   */
  Access: "access",
  /**
   * collect: Gather/acquire information by an entity to achieve a stated purpose
   */
  Collect: "collect",
  /**
   * correct: Allowing an entity to correct a patient's information
   */
  AccessAndCorrect: "correct",
  /**
   * disclose: Release / transfer of information to an entity 
   */
  Disclose: "disclose",
  /**
   * use: Use of stored information by an entity fo the stated purpose
   */
  Use: "use",
} as const;

/**
 * This value set includes sample Consent Action codes.
 */
export type ConsentActionCodeType = typeof ConsentActionCodes[keyof typeof ConsentActionCodes];
