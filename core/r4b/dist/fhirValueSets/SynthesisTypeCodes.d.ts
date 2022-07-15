/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export declare const SynthesisTypeCodes: {
    /**
     * classification: An approach describing a body of evidence by categorically classifying individual studies (eg 3 studies showed beneft and 2 studied found no effect).
     */
    readonly ClassifcationOfResults: "classification";
    /**
     * combined-NMA: An composite meta-analysis derived from direct comparisons and indirect comparisons in a network meta-analysis.
     */
    readonly CombinedDirectPlusIndirectNetworkMetaAnalysis: "combined-NMA";
    /**
     * indirect-NMA: An indirect meta-analysis derived from 2 or more direct comparisons in a network meta-analysis.
     */
    readonly IndirectNetworkMetaAnalysis: "indirect-NMA";
    /**
     * IPD-MA: A meta-analysis of the individual participant data from individual studies or data sets.
     */
    readonly IndividualPatientDataMetaAnalysis: "IPD-MA";
    /**
     * NotApplicable: Not applicable because the evidence is not from a synthesis but from a single study. Used fo explicitly state that it's not a synthesis.
     */
    readonly NotApplicable: "NotApplicable";
    /**
     * range: A range of results across a body of evidence.
     */
    readonly RangeOfResults: "range";
    /**
     * std-MA: A meta-analysis of the summary data of estimates from individual studies or data sets.
     */
    readonly SummaryDataMetaAnalysis: "std-MA";
};
/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export declare type SynthesisTypeCodeType = typeof SynthesisTypeCodes[keyof typeof SynthesisTypeCodes];
//# sourceMappingURL=SynthesisTypeCodes.d.ts.map