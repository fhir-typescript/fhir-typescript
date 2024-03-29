// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-request-intent|3.0.2

/**
 * The kind of medication order
 */
export const MedicationRequestIntentCodes = {
  /**
   * instance-order: The request represents an instance for the particular order, for example a medication administration record.
   */
  InstanceOrder: "instance-order",
  /**
   * order: The request represents a request/demand and authorization for action
   */
  Order: "order",
  /**
   * plan: The request represents an intension to ensure something occurs without providing an authorization for others to act
   */
  Plan: "plan",
  /**
   * proposal: The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act
   */
  Proposal: "proposal",
} as const;

/**
 * The kind of medication order
 */
export type MedicationRequestIntentCodeType = typeof MedicationRequestIntentCodes[keyof typeof MedicationRequestIntentCodes];
