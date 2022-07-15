import { CodingArgs } from '../fhir/Coding.js';
/**
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 */
export declare type ContractContentDerivativeCodingType = {
    /**
     * Code: registration
     */
    ContentRegistration: CodingArgs;
    /**
     * Code: retrieval
     */
    ContentRetrieval: CodingArgs;
    /**
     * Code: shareable
     */
    ShareableContent: CodingArgs;
    /**
     * Code: statement
     */
    ContentStatement: CodingArgs;
};
/**
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 */
export declare const ContractContentDerivativeCodings: ContractContentDerivativeCodingType;
//# sourceMappingURL=ContractContentDerivativeCodings.d.ts.map