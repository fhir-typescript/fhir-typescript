import { Coding } from '../fhir/Coding.js';
/**
 * Criterion for rejection of the specimen by laboratory.
 */
export declare const RejectionCriteriaCodings: {
    /**
     * broken: specimen container broken.
     */
    readonly BrokenSpecimenContainer: Coding;
    /**
     * clotted: specimen clotted.
     */
    readonly SpecimenClotted: Coding;
    /**
     * hemolized: blood specimen hemolized.
     */
    readonly HemolizedSpecimen: Coding;
    /**
     * insufficient: insufficient quantity of specimen.
     */
    readonly InsufficientSpecimenVolume: Coding;
    /**
     * wrong-temperature: specimen temperature inappropriate.
     */
    readonly SpecimenTemperatureInappropriate: Coding;
};
/**
 * Criterion for rejection of the specimen by laboratory.
 */
export declare type RejectionCriteriaCodingType = typeof RejectionCriteriaCodings;
//# sourceMappingURL=RejectionCriteriaCodings.d.ts.map