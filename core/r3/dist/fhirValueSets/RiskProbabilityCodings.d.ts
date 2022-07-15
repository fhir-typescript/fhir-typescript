import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export declare type RiskProbabilityCodingType = {
    /**
     * certain: The specified outcome is effectively guaranteed.
     */
    Certain: CodingArgs;
    /**
     * high: The specified outcome is more likely to occur than not.
     */
    HighLikelihood: CodingArgs;
    /**
     * low: The specified outcome is possible but unlikely.
     */
    LowLikelihood: CodingArgs;
    /**
     * moderate: The specified outcome has a reasonable likelihood of occurrence.
     */
    ModerateLikelihood: CodingArgs;
    /**
     * negligible: The specified outcome is exceptionally unlikely.
     */
    NegligibleLikelihood: CodingArgs;
};
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export declare const RiskProbabilityCodings: RiskProbabilityCodingType;
//# sourceMappingURL=RiskProbabilityCodings.d.ts.map