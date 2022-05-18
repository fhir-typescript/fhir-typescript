/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export declare const CodeSearchSupportCodes: {
    /**
     * all: The search for code on ValueSet only includes all codes based on the expansion of the value set.
     */
    readonly ImplicitCodes: "all";
    /**
     * explicit: The search for code on ValueSet only includes codes explicitly detailed on includes or expansions.
     */
    readonly ExplicitCodes: "explicit";
};
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export declare type CodeSearchSupportCodeType = typeof CodeSearchSupportCodes[keyof typeof CodeSearchSupportCodes];
//# sourceMappingURL=CodeSearchSupportCodes.d.ts.map