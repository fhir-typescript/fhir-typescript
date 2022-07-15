/**
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 */
export declare const ContractContentDerivativeCodes: {
    /**
     * Code: registration
     */
    readonly ContentRegistration: "registration";
    /**
     * Code: retrieval
     */
    readonly ContentRetrieval: "retrieval";
    /**
     * Code: shareable
     */
    readonly ShareableContent: "shareable";
    /**
     * Code: statement
     */
    readonly ContentStatement: "statement";
};
/**
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 */
export declare type ContractContentDerivativeCodeType = typeof ContractContentDerivativeCodes[keyof typeof ContractContentDerivativeCodes];
//# sourceMappingURL=ContractContentDerivativeCodes.d.ts.map