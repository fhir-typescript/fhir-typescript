/**
 * The scoring type of the measure.
 */
export declare const MeasureScoringCodes: {
    /**
     * cohort: The measure is a cohort definition.
     */
    readonly Cohort: "cohort";
    /**
     * continuous-variable: The score is defined by a calculation of some quantity.
     */
    readonly ContinuousVariable: "continuous-variable";
    /**
     * proportion: The measure score is defined using a proportion.
     */
    readonly Proportion: "proportion";
    /**
     * ratio: The measure score is defined using a ratio.
     */
    readonly Ratio: "ratio";
};
/**
 * The scoring type of the measure.
 */
export declare type MeasureScoringCodeType = typeof MeasureScoringCodes[keyof typeof MeasureScoringCodes];
//# sourceMappingURL=MeasureScoringCodes.d.ts.map