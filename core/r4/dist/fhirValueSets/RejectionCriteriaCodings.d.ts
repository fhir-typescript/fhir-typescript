import { CodingArgs } from '../fhir/Coding.js';
/**
 * Criterion for rejection of the specimen by laboratory.
 */
export declare type RejectionCriteriaCodingType = {
    /**
     * broken: specimen container broken.
     */
    BrokenSpecimenContainer: CodingArgs;
    /**
     * clotted: specimen clotted.
     */
    SpecimenClotted: CodingArgs;
    /**
     * hemolized: blood specimen hemolized.
     */
    HemolizedSpecimen: CodingArgs;
    /**
     * insufficient: insufficient quantity of specimen.
     */
    InsufficientSpecimenVolume: CodingArgs;
    /**
     * wrong-temperature: specimen temperature inappropriate.
     */
    SpecimenTemperatureInappropriate: CodingArgs;
};
/**
 * Criterion for rejection of the specimen by laboratory.
 */
export declare const RejectionCriteriaCodings: RejectionCriteriaCodingType;
//# sourceMappingURL=RejectionCriteriaCodings.d.ts.map