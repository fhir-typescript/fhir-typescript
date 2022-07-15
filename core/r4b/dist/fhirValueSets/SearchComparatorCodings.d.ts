import { CodingArgs } from '../fhir/Coding.js';
/**
 * What Search Comparator Codes are supported in search.
 */
export declare type SearchComparatorCodingType = {
    /**
     * ap: the value for the parameter in the resource is approximately the same to the provided value.
     */
    Approximately: CodingArgs;
    /**
     * eb: the value for the parameter in the resource ends before the provided value.
     */
    EndsBefore: CodingArgs;
    /**
     * eq: the value for the parameter in the resource is equal to the provided value.
     */
    Equals: CodingArgs;
    /**
     * ge: the value for the parameter in the resource is greater or equal to the provided value.
     */
    GreaterOrEquals: CodingArgs;
    /**
     * gt: the value for the parameter in the resource is greater than the provided value.
     */
    GreaterThan: CodingArgs;
    /**
     * le: the value for the parameter in the resource is less or equal to the provided value.
     */
    LessOfEqual: CodingArgs;
    /**
     * lt: the value for the parameter in the resource is less than the provided value.
     */
    LessThan: CodingArgs;
    /**
     * ne: the value for the parameter in the resource is not equal to the provided value.
     */
    NotEquals: CodingArgs;
    /**
     * sa: the value for the parameter in the resource starts after the provided value.
     */
    StartsAfter: CodingArgs;
};
/**
 * What Search Comparator Codes are supported in search.
 */
export declare const SearchComparatorCodings: SearchComparatorCodingType;
//# sourceMappingURL=SearchComparatorCodings.d.ts.map