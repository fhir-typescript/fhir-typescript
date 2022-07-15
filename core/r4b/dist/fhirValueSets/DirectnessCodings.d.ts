import { CodingArgs } from '../fhir/Coding.js';
/**
 * The quality of how direct the match is.
 */
export declare type DirectnessCodingType = {
    /**
     * exact: Exact matching quality between observed and intended variable, so no concern for indirectness in evidence interpretation.
     */
    ExactMatchBetweenObservedAndIntendedVariable: CodingArgs;
    /**
     * high: High matching quality between observed and intended variable, so little concern for indirectness in evidence interpretation.
     */
    HighQualityMatchBetweenObservedAndIntendedVariable: CodingArgs;
    /**
     * low: Low matching quality between observed and intended variable, so very serious concern for indirectness in evidence interpretation.
     */
    LowQualityMatchBetweenObservedAndIntendedVariable: CodingArgs;
    /**
     * moderate: Moderate matching quality between observed and intended variable, so serious concern for indirectness in evidence interpretation.
     */
    ModerateQualityMatchBetweenObservedAndIntendedVariable: CodingArgs;
};
/**
 * The quality of how direct the match is.
 */
export declare const DirectnessCodings: DirectnessCodingType;
//# sourceMappingURL=DirectnessCodings.d.ts.map