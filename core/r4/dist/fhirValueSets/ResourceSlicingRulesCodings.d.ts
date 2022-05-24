import { CodingArgs } from '../fhir/Coding.js';
/**
 * How slices are interpreted when evaluating an instance.
 */
export declare type ResourceSlicingRulesCodingType = {
    /**
     * closed: No additional content is allowed other than that described by the slices in this profile.
     */
    Closed: CodingArgs;
    /**
     * open: Additional content is allowed anywhere in the list.
     */
    Open: CodingArgs;
    /**
     * openAtEnd: Additional content is allowed, but only at the end of the list. Note that using this requires that the slices be ordered, which makes it hard to share uses. This should only be done where absolutely required.
     */
    OpenAtEnd: CodingArgs;
};
/**
 * How slices are interpreted when evaluating an instance.
 */
export declare const ResourceSlicingRulesCodings: ResourceSlicingRulesCodingType;
//# sourceMappingURL=ResourceSlicingRulesCodings.d.ts.map