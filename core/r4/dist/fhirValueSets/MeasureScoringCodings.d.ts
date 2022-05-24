import { CodingArgs } from '../fhir/Coding.js';
/**
 * The scoring type of the measure.
 */
export declare type MeasureScoringCodingType = {
    /**
     * cohort: The measure is a cohort definition.
     */
    Cohort: CodingArgs;
    /**
     * continuous-variable: The score is defined by a calculation of some quantity.
     */
    ContinuousVariable: CodingArgs;
    /**
     * proportion: The measure score is defined using a proportion.
     */
    Proportion: CodingArgs;
    /**
     * ratio: The measure score is defined using a ratio.
     */
    Ratio: CodingArgs;
};
/**
 * The scoring type of the measure.
 */
export declare const MeasureScoringCodings: MeasureScoringCodingType;
//# sourceMappingURL=MeasureScoringCodings.d.ts.map