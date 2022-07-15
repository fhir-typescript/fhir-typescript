/**
 * How much of the content of the code system - the concepts and codes it defines - are represented in a code system resource
 */
export declare const CodesystemContentModeCodes: {
    /**
     * complete: All the concepts defined by the code system are included in the code system resource
     */
    readonly Complete: "complete";
    /**
     * example: A few representative concepts are included in the code system resource
     */
    readonly Example: "example";
    /**
     * fragment: A subset of the code system concepts are included in the code system resource
     */
    readonly Fragment: "fragment";
    /**
     * not-present: None of the concepts defined by the code system are included in the code system resource
     */
    readonly NotPresent: "not-present";
};
/**
 * How much of the content of the code system - the concepts and codes it defines - are represented in a code system resource
 */
export declare type CodesystemContentModeCodeType = typeof CodesystemContentModeCodes[keyof typeof CodesystemContentModeCodes];
//# sourceMappingURL=CodesystemContentModeCodes.d.ts.map