// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/supplyrequest-kind|4.0.1

/**
 * This value sets refers to a Category of supply.
 */
export const SupplyrequestKindCodes = {
  /**
   * central: Supply is stored and requested from central supply.
   */
  CentralSupply: "central",
  /**
   * nonstock: Supply is not onsite and must be requested from an outside vendor using a non-stock requisition.
   */
  NonStock: "nonstock",
} as const;

/**
 * This value sets refers to a Category of supply.
 */
export type SupplyrequestKindCodeType = typeof SupplyrequestKindCodes[keyof typeof SupplyrequestKindCodes];