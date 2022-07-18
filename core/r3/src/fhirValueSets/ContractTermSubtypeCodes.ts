// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-term-subtype|3.0.2

/**
 * This value set includes sample Contract Term SubType codes.
 */
export const ContractTermSubtypeCodes = {
  /**
   * condition: Terms that go to the very root of a contract.
   */
  Condition: "condition",
  /**
   * innominate: Breach of which may or may not go to the root of the contract depending upon the nature of the breach
   */
  Innominate: "innominate",
  /**
   * warranty: Less imperative than a condition, so the contract will survive a breach
   */
  Warranty: "warranty",
} as const;

/**
 * This value set includes sample Contract Term SubType codes.
 */
export type ContractTermSubtypeCodeType = typeof ContractTermSubtypeCodes[keyof typeof ContractTermSubtypeCodes];