import { Coding } from '../fhir/Coding.js';
/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export declare const SequenceTypeCodings: {
    /**
     * aa: Amino acid sequence.
     */
    readonly AASequence: Coding;
    /**
     * dna: DNA Sequence.
     */
    readonly DNASequence: Coding;
    /**
     * rna: RNA Sequence.
     */
    readonly RNASequence: Coding;
};
/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export declare type SequenceTypeCodingType = typeof SequenceTypeCodings;
//# sourceMappingURL=SequenceTypeCodings.d.ts.map