// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/sequence-type|4.0.1

/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export const SequenceTypeCodes = {
  /**
   * aa: Amino acid sequence.
   */
  AASequence: "aa",
  /**
   * dna: DNA Sequence.
   */
  DNASequence: "dna",
  /**
   * rna: RNA Sequence.
   */
  RNASequence: "rna",
} as const;

/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export type SequenceTypeCodeType = typeof SequenceTypeCodes[keyof typeof SequenceTypeCodes];
