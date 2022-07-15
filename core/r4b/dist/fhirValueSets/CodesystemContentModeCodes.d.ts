/**
 * The extent of the content of the code system (the concepts and codes it defines) are represented in a code system resource.
 */
export declare const CodesystemContentModeCodes: {
    /**
     * complete: All the concepts defined by the code system are included in the code system resource.
     */
    readonly Complete: "complete";
    /**
     * example: A few representative concepts are included in the code system resource. There is no useful intent in the subset choice and there's no process to make it workable: it's not intended to be workable.
     */
    readonly Example: "example";
    /**
     * fragment: A subset of the code system concepts are included in the code system resource. This is a curated subset released for a specific purpose under the governance of the code system steward, and that the intent, bounds and consequences of the fragmentation are clearly defined in the fragment or the code system documentation. Fragments are also known as partitions.
     */
    readonly Fragment: "fragment";
    /**
     * not-present: None of the concepts defined by the code system are included in the code system resource.
     */
    readonly NotPresent: "not-present";
    /**
     * supplement: The resource doesn't define any new concepts; it just provides additional designations and properties to another code system.
     */
    readonly Supplement: "supplement";
};
/**
 * The extent of the content of the code system (the concepts and codes it defines) are represented in a code system resource.
 */
export declare type CodesystemContentModeCodeType = typeof CodesystemContentModeCodes[keyof typeof CodesystemContentModeCodes];
//# sourceMappingURL=CodesystemContentModeCodes.d.ts.map