import { Coding } from '../fhir/Coding.js';
/**
 * A code specifying the types of information being requested.
 */
export declare const EligibilityresponsePurposeCodings: {
    /**
     * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    readonly CoverageAuthRequirements: Coding;
    /**
     * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    readonly CoverageBenefits: Coding;
    /**
     * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    readonly CoverageDiscovery: Coding;
    /**
     * validation: A check that the specified coverages are in-force is requested.
     */
    readonly CoverageValidation: Coding;
};
/**
 * A code specifying the types of information being requested.
 */
export declare type EligibilityresponsePurposeCodingType = typeof EligibilityresponsePurposeCodings;
//# sourceMappingURL=EligibilityresponsePurposeCodings.d.ts.map