/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence
 */
export declare const SequenceTypeCodes: {
    /**
     * aa: Amino acid sequence
     */
    readonly AASequence: "aa";
    /**
     * dna: DNA Sequence
     */
    readonly DNASequence: "dna";
    /**
     * rna: RNA Sequence
     */
    readonly RNASequence: "rna";
};
/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence
 */
export declare type SequenceTypeCodeType = typeof SequenceTypeCodes[keyof typeof SequenceTypeCodes];
//# sourceMappingURL=SequenceTypeCodes.d.ts.map