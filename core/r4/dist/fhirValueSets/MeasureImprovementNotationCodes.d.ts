/**
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 */
export declare const MeasureImprovementNotationCodes: {
    /**
     * decrease: Improvement is indicated as a decrease in the score or measurement (e.g. Lower score indicates better quality).
     */
    readonly DecreasedScoreIndicatesImprovement: "decrease";
    /**
     * increase: Improvement is indicated as an increase in the score or measurement (e.g. Higher score indicates better quality).
     */
    readonly IncreasedScoreIndicatesImprovement: "increase";
};
/**
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 */
export declare type MeasureImprovementNotationCodeType = typeof MeasureImprovementNotationCodes[keyof typeof MeasureImprovementNotationCodes];
//# sourceMappingURL=MeasureImprovementNotationCodes.d.ts.map