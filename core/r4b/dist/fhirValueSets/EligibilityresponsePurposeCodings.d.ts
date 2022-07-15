import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code specifying the types of information being requested.
 */
export declare type EligibilityresponsePurposeCodingType = {
    /**
     * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    CoverageAuthRequirements: CodingArgs;
    /**
     * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    CoverageBenefits: CodingArgs;
    /**
     * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    CoverageDiscovery: CodingArgs;
    /**
     * validation: A check that the specified coverages are in-force is requested.
     */
    CoverageValidation: CodingArgs;
};
/**
 * A code specifying the types of information being requested.
 */
export declare const EligibilityresponsePurposeCodings: EligibilityresponsePurposeCodingType;
//# sourceMappingURL=EligibilityresponsePurposeCodings.d.ts.map