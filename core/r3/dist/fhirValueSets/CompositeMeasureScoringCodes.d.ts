/**
 * The composite scoring method of the measure
 */
export declare const CompositeMeasureScoringCodes: {
    /**
     * all-or-nothing: All-or-nothing scoring includes an individual in the numerator of the composite measure if they are in the numerators of all of the component measures in which they are in the denominator
     */
    readonly AllOrNothing: "all-or-nothing";
    /**
     * linear: Linear scoring gives an individual a score based on the number of numerators in which they appear
     */
    readonly Linear: "linear";
    /**
     * opportunity: Opportunity scoring combines the scores from component measures by combining the numerators and denominators for each component
     */
    readonly Opportunity: "opportunity";
    /**
     * weighted: Weighted scoring gives an individual a score based on a weighted factor for each component numerator in which they appear
     */
    readonly Weighted: "weighted";
};
/**
 * The composite scoring method of the measure
 */
export declare type CompositeMeasureScoringCodeType = typeof CompositeMeasureScoringCodes[keyof typeof CompositeMeasureScoringCodes];
//# sourceMappingURL=CompositeMeasureScoringCodes.d.ts.map