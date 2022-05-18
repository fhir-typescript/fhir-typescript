import { Coding } from '../fhir/Coding.js';
/**
 * What Search Comparator Codes are supported in search.
 */
export declare const SearchComparatorCodings: {
    /**
     * ap: the value for the parameter in the resource is approximately the same to the provided value.
     */
    readonly Approximately: Coding;
    /**
     * eb: the value for the parameter in the resource ends before the provided value.
     */
    readonly EndsBefore: Coding;
    /**
     * eq: the value for the parameter in the resource is equal to the provided value.
     */
    readonly Equals: Coding;
    /**
     * ge: the value for the parameter in the resource is greater or equal to the provided value.
     */
    readonly GreaterOrEquals: Coding;
    /**
     * gt: the value for the parameter in the resource is greater than the provided value.
     */
    readonly GreaterThan: Coding;
    /**
     * le: the value for the parameter in the resource is less or equal to the provided value.
     */
    readonly LessOfEqual: Coding;
    /**
     * lt: the value for the parameter in the resource is less than the provided value.
     */
    readonly LessThan: Coding;
    /**
     * ne: the value for the parameter in the resource is not equal to the provided value.
     */
    readonly NotEquals: Coding;
    /**
     * sa: the value for the parameter in the resource starts after the provided value.
     */
    readonly StartsAfter: Coding;
};
/**
 * What Search Comparator Codes are supported in search.
 */
export declare type SearchComparatorCodingType = typeof SearchComparatorCodings;
//# sourceMappingURL=SearchComparatorCodings.d.ts.map