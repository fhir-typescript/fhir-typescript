/**
 * Criterion for rejection of the specimen by laboratory.
 */
export declare const RejectionCriteriaCodes: {
    /**
     * broken: specimen container broken.
     */
    readonly BrokenSpecimenContainer: "broken";
    /**
     * clotted: specimen clotted.
     */
    readonly SpecimenClotted: "clotted";
    /**
     * hemolized: blood specimen hemolized.
     */
    readonly HemolizedSpecimen: "hemolized";
    /**
     * insufficient: insufficient quantity of specimen.
     */
    readonly InsufficientSpecimenVolume: "insufficient";
    /**
     * wrong-temperature: specimen temperature inappropriate.
     */
    readonly SpecimenTemperatureInappropriate: "wrong-temperature";
};
/**
 * Criterion for rejection of the specimen by laboratory.
 */
export declare type RejectionCriteriaCodeType = typeof RejectionCriteriaCodes[keyof typeof RejectionCriteriaCodes];
//# sourceMappingURL=RejectionCriteriaCodes.d.ts.map