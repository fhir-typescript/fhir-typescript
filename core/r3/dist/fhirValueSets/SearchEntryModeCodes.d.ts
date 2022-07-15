/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement.
 */
export declare const SearchEntryModeCodes: {
    /**
     * include: This resource is returned because it is referred to from another resource in the search set.
     */
    readonly Include: "include";
    /**
     * match: This resource matched the search specification.
     */
    readonly Match: "match";
    /**
     * outcome: An OperationOutcome that provides additional information about the processing of a search.
     */
    readonly Outcome: "outcome";
};
/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement.
 */
export declare type SearchEntryModeCodeType = typeof SearchEntryModeCodes[keyof typeof SearchEntryModeCodes];
//# sourceMappingURL=SearchEntryModeCodes.d.ts.map