// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/quality-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Type for quality report
 */
export type QualityTypeCodingType = {
  /**
   * indel: INDEL Comparison
   */
  INDELComparison: CodingArgs;
  /**
   * snp: SNP Comparison
   */
  SNPComparison: CodingArgs;
  /**
   * unknown: UNKNOWN Comparison
   */
  UNKNOWNComparison: CodingArgs;
}

/**
 * Type for quality report
 */
export const QualityTypeCodings:QualityTypeCodingType = {
  /**
   * indel: INDEL Comparison
   */
  INDELComparison: {
    display: "INDEL Comparison",
    code: "indel",
    system: "http://hl7.org/fhir/quality-type",
  },
  /**
   * snp: SNP Comparison
   */
  SNPComparison: {
    display: "SNP Comparison",
    code: "snp",
    system: "http://hl7.org/fhir/quality-type",
  },
  /**
   * unknown: UNKNOWN Comparison
   */
  UNKNOWNComparison: {
    display: "UNKNOWN Comparison",
    code: "unknown",
    system: "http://hl7.org/fhir/quality-type",
  },
} as const;
