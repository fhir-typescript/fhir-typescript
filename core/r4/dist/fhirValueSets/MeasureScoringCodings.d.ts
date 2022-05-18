import { Coding } from '../fhir/Coding.js';
/**
 * The scoring type of the measure.
 */
export declare const MeasureScoringCodings: {
    /**
     * cohort: The measure is a cohort definition.
     */
    readonly Cohort: Coding;
    /**
     * continuous-variable: The score is defined by a calculation of some quantity.
     */
    readonly ContinuousVariable: Coding;
    /**
     * proportion: The measure score is defined using a proportion.
     */
    readonly Proportion: Coding;
    /**
     * ratio: The measure score is defined using a ratio.
     */
    readonly Ratio: Coding;
};
/**
 * The scoring type of the measure.
 */
export declare type MeasureScoringCodingType = typeof MeasureScoringCodings;
//# sourceMappingURL=MeasureScoringCodings.d.ts.map