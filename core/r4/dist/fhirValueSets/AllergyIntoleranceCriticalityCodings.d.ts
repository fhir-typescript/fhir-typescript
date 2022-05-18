import { Coding } from '../fhir/Coding.js';
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export declare const AllergyIntoleranceCriticalityCodings: {
    /**
     * high: Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.
     */
    readonly HighRisk: Coding;
    /**
     * low: Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.
     */
    readonly LowRisk: Coding;
    /**
     * unable-to-assess: Unable to assess the worst case result of a future exposure.
     */
    readonly UnableToAssessRisk: Coding;
};
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export declare type AllergyIntoleranceCriticalityCodingType = typeof AllergyIntoleranceCriticalityCodings;
//# sourceMappingURL=AllergyIntoleranceCriticalityCodings.d.ts.map