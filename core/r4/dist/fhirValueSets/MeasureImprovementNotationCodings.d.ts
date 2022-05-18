import { Coding } from '../fhir/Coding.js';
/**
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 */
export declare const MeasureImprovementNotationCodings: {
    /**
     * decrease: Improvement is indicated as a decrease in the score or measurement (e.g. Lower score indicates better quality).
     */
    readonly DecreasedScoreIndicatesImprovement: Coding;
    /**
     * increase: Improvement is indicated as an increase in the score or measurement (e.g. Higher score indicates better quality).
     */
    readonly IncreasedScoreIndicatesImprovement: Coding;
};
/**
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 */
export declare type MeasureImprovementNotationCodingType = typeof MeasureImprovementNotationCodings;
//# sourceMappingURL=MeasureImprovementNotationCodings.d.ts.map