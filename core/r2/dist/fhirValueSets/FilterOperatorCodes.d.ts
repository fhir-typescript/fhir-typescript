/**
 * The kind of operation to perform as a part of a property based filter.
 */
export declare const FilterOperatorCodes: {
    /**
     * =: The specified property of the code equals the provided value.
     */
    readonly Equals: "=";
    /**
     * in: The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).
     */
    readonly InSet: "in";
    /**
     * is-a: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself.
     */
    readonly IsABySubsumption: "is-a";
    /**
     * is-not-a: The specified property of the code does not have an is-a relationship with the provided value.
     */
    readonly NotIsABySubsumption: "is-not-a";
    /**
     * not-in: The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).
     */
    readonly NotInSet: "not-in";
    /**
     * regex: The specified property of the code  matches the regex specified in the provided value.
     */
    readonly RegularExpression: "regex";
};
/**
 * The kind of operation to perform as a part of a property based filter.
 */
export declare type FilterOperatorCodeType = typeof FilterOperatorCodes[keyof typeof FilterOperatorCodes];
//# sourceMappingURL=FilterOperatorCodes.d.ts.map