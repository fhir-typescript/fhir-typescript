import { Coding } from '../fhir/Coding.js';
/**
 * The type of contributor.
 */
export declare const ContributorTypeCodings: {
    /**
     * author: An author of the content of the module.
     */
    readonly Author: Coding;
    /**
     * editor: An editor of the content of the module.
     */
    readonly Editor: Coding;
    /**
     * endorser: An endorser of the content of the module.
     */
    readonly Endorser: Coding;
    /**
     * reviewer: A reviewer of the content of the module.
     */
    readonly Reviewer: Coding;
};
/**
 * The type of contributor.
 */
export declare type ContributorTypeCodingType = typeof ContributorTypeCodings;
//# sourceMappingURL=ContributorTypeCodings.d.ts.map