// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/sequence-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export type SequenceTypeCodingType = {
  /**
   * aa: Amino acid sequence.
   */
  AASequence: CodingArgs;
  /**
   * dna: DNA Sequence.
   */
  DNASequence: CodingArgs;
  /**
   * rna: RNA Sequence.
   */
  RNASequence: CodingArgs;
}

/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export const SequenceTypeCodings:SequenceTypeCodingType = {
  /**
   * aa: Amino acid sequence.
   */
  AASequence: {
    display: "AA Sequence",
    code: "aa",
    system: "http://hl7.org/fhir/sequence-type",
  },
  /**
   * dna: DNA Sequence.
   */
  DNASequence: {
    display: "DNA Sequence",
    code: "dna",
    system: "http://hl7.org/fhir/sequence-type",
  },
  /**
   * rna: RNA Sequence.
   */
  RNASequence: {
    display: "RNA Sequence",
    code: "rna",
    system: "http://hl7.org/fhir/sequence-type",
  },
} as const;
