// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/substance-grade|4.3.0

/**
 * The quality standard, established benchmark, to which a substance complies.
 */
export const SubstanceGradeCodes = {
  /**
   * Code: BP
   */
  BritishPharmacopoeia: "BP",
  /**
   * Code: CompanyStandard
   */
  CompanyStandard: "CompanyStandard",
  /**
   * Code: JP
   */
  JapanesePharmacopoeia: "JP",
  /**
   * Code: Ph.Eur
   */
  EuropeanPharmacopoeia: "Ph.Eur",
  /**
   * Code: USP-NF
   */
  USPNFUnitedStatesPharmacopeiaUSPAndTheNationalFormularyNF: "USP-NF",
} as const;

/**
 * The quality standard, established benchmark, to which a substance complies.
 */
export type SubstanceGradeCodeType = typeof SubstanceGradeCodes[keyof typeof SubstanceGradeCodes];
