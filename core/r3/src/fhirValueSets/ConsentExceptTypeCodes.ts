// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/consent-except-type|3.0.2

/**
 * How an exception statement is applied, such as adding additional consent or removing consent
 */
export const ConsentExceptTypeCodes = {
  /**
   * deny: Consent is denied for actions meeting these rules
   */
  OptOut: "deny",
  /**
   * permit: Consent is provided for actions meeting these rules
   */
  OptIn: "permit",
} as const;

/**
 * How an exception statement is applied, such as adding additional consent or removing consent
 */
export type ConsentExceptTypeCodeType = typeof ConsentExceptTypeCodes[keyof typeof ConsentExceptTypeCodes];
