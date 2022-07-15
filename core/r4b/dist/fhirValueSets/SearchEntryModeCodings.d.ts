import { CodingArgs } from '../fhir/Coding.js';
/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export declare type SearchEntryModeCodingType = {
    /**
     * include: This resource is returned because it is referred to from another resource in the search set.
     */
    Include: CodingArgs;
    /**
     * match: This resource matched the search specification.
     */
    Match: CodingArgs;
    /**
     * outcome: An OperationOutcome that provides additional information about the processing of a search.
     */
    Outcome: CodingArgs;
};
/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export declare const SearchEntryModeCodings: SearchEntryModeCodingType;
//# sourceMappingURL=SearchEntryModeCodings.d.ts.map