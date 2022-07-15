import { CodingArgs } from '../fhir/Coding.js';
/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export declare type SynthesisTypeCodingType = {
    /**
     * classification: An approach describing a body of evidence by categorically classifying individual studies (eg 3 studies showed beneft and 2 studied found no effect).
     */
    ClassifcationOfResults: CodingArgs;
    /**
     * combined-NMA: An composite meta-analysis derived from direct comparisons and indirect comparisons in a network meta-analysis.
     */
    CombinedDirectPlusIndirectNetworkMetaAnalysis: CodingArgs;
    /**
     * indirect-NMA: An indirect meta-analysis derived from 2 or more direct comparisons in a network meta-analysis.
     */
    IndirectNetworkMetaAnalysis: CodingArgs;
    /**
     * IPD-MA: A meta-analysis of the individual participant data from individual studies or data sets.
     */
    IndividualPatientDataMetaAnalysis: CodingArgs;
    /**
     * NotApplicable: Not applicable because the evidence is not from a synthesis but from a single study. Used fo explicitly state that it's not a synthesis.
     */
    NotApplicable: CodingArgs;
    /**
     * range: A range of results across a body of evidence.
     */
    RangeOfResults: CodingArgs;
    /**
     * std-MA: A meta-analysis of the summary data of estimates from individual studies or data sets.
     */
    SummaryDataMetaAnalysis: CodingArgs;
};
/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export declare const SynthesisTypeCodings: SynthesisTypeCodingType;
//# sourceMappingURL=SynthesisTypeCodings.d.ts.map