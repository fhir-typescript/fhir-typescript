// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/specimen-processing-procedure|3.0.2

/**
 * The technique that is used to perform the process or preserve the specimen.
 */
export const SpecimenProcessingProcedureCodes = {
  /**
   * Code: ACID
   */
  Acidification: "ACID",
  /**
   * Code: ALK
   */
  Alkalization: "ALK",
  /**
   * Code: DEFB
   */
  Defibrination: "DEFB",
  /**
   * Code: FILT
   */
  Filtration: "FILT",
  /**
   * Code: LDLP
   */
  LDLPrecipitation: "LDLP",
  /**
   * Code: NEUT
   */
  Neutralization: "NEUT",
  /**
   * Code: RECA
   */
  Recalification: "RECA",
  /**
   * Code: UFIL
   */
  Ultrafiltration: "UFIL",
} as const;

/**
 * The technique that is used to perform the process or preserve the specimen.
 */
export type SpecimenProcessingProcedureCodeType = typeof SpecimenProcessingProcedureCodes[keyof typeof SpecimenProcessingProcedureCodes];
