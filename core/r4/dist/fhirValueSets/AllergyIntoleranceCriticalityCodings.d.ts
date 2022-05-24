import { CodingArgs } from '../fhir/Coding.js';
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export declare type AllergyIntoleranceCriticalityCodingType = {
    /**
     * high: Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.
     */
    HighRisk: CodingArgs;
    /**
     * low: Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.
     */
    LowRisk: CodingArgs;
    /**
     * unable-to-assess: Unable to assess the worst case result of a future exposure.
     */
    UnableToAssessRisk: CodingArgs;
};
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export declare const AllergyIntoleranceCriticalityCodings: AllergyIntoleranceCriticalityCodingType;
//# sourceMappingURL=AllergyIntoleranceCriticalityCodings.d.ts.map