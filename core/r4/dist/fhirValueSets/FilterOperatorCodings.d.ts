import { CodingArgs } from '../fhir/Coding.js';
/**
 * The kind of operation to perform as a part of a property based filter.
 */
export declare type FilterOperatorCodingType = {
    /**
     * =: The specified property of the code equals the provided value.
     */
    Equals: CodingArgs;
    /**
     * descendent-of: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself i.e. include descendant codes only).
     */
    DescendentOfBySubsumption: CodingArgs;
    /**
     * exists: The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values).
     */
    Exists: CodingArgs;
    /**
     * generalizes: Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (i.e. include ancestor codes and self).
     */
    GeneralizesBySubsumption: CodingArgs;
    /**
     * in: The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).
     */
    InSet: CodingArgs;
    /**
     * is-a: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (include descendant codes and self).
     */
    IsABySubsumption: CodingArgs;
    /**
     * is-not-a: The specified property of the code does not have an is-a relationship with the provided value.
     */
    NotIsABySubsumption: CodingArgs;
    /**
     * not-in: The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).
     */
    NotInSet: CodingArgs;
    /**
     * regex: The specified property of the code  matches the regex specified in the provided value.
     */
    RegularExpression: CodingArgs;
};
/**
 * The kind of operation to perform as a part of a property based filter.
 */
export declare const FilterOperatorCodings: FilterOperatorCodingType;
//# sourceMappingURL=FilterOperatorCodings.d.ts.map