/**
 * A code specifying the types of information being requested.
 */
export declare const EligibilityresponsePurposeCodes: {
    /**
     * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    readonly CoverageAuthRequirements: "auth-requirements";
    /**
     * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    readonly CoverageBenefits: "benefits";
    /**
     * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    readonly CoverageDiscovery: "discovery";
    /**
     * validation: A check that the specified coverages are in-force is requested.
     */
    readonly CoverageValidation: "validation";
};
/**
 * A code specifying the types of information being requested.
 */
export declare type EligibilityresponsePurposeCodeType = typeof EligibilityresponsePurposeCodes[keyof typeof EligibilityresponsePurposeCodes];
//# sourceMappingURL=EligibilityresponsePurposeCodes.d.ts.map