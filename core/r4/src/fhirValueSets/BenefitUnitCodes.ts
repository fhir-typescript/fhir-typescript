// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/benefit-unit|4.0.1

/**
 * This value set includes a smattering of Unit type codes.
 */
export const BenefitUnitCodes = {
  /**
   * family: A family, typically includes self, spouse(s) and children to a defined age
   */
  Family: "family",
  /**
   * individual: A single individual
   */
  Individual: "individual",
} as const;

/**
 * This value set includes a smattering of Unit type codes.
 */
export type BenefitUnitCodeType = typeof BenefitUnitCodes[keyof typeof BenefitUnitCodes];
