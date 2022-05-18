import { Coding } from '../fhir/Coding.js';
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export declare const RiskProbabilityCodings: {
    /**
     * certain: The specified outcome is effectively guaranteed.
     */
    readonly Certain: Coding;
    /**
     * high: The specified outcome is more likely to occur than not.
     */
    readonly HighLikelihood: Coding;
    /**
     * low: The specified outcome is possible but unlikely.
     */
    readonly LowLikelihood: Coding;
    /**
     * moderate: The specified outcome has a reasonable likelihood of occurrence.
     */
    readonly ModerateLikelihood: Coding;
    /**
     * negligible: The specified outcome is exceptionally unlikely.
     */
    readonly NegligibleLikelihood: Coding;
};
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export declare type RiskProbabilityCodingType = typeof RiskProbabilityCodings;
//# sourceMappingURL=RiskProbabilityCodings.d.ts.map