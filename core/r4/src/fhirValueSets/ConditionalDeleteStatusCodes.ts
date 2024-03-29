// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/conditional-delete-status|4.0.1

/**
 * A code that indicates how the server supports conditional delete.
 */
export const ConditionalDeleteStatusCodes = {
  /**
   * multiple: Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
   */
  MultipleDeletesSupported: "multiple",
  /**
   * not-supported: No support for conditional deletes.
   */
  NotSupported: "not-supported",
  /**
   * single: Conditional deletes are supported, but only single resources at a time.
   */
  SingleDeletesSupported: "single",
} as const;

/**
 * A code that indicates how the server supports conditional delete.
 */
export type ConditionalDeleteStatusCodeType = typeof ConditionalDeleteStatusCodes[keyof typeof ConditionalDeleteStatusCodes];
