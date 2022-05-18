import { Coding } from '../fhir/Coding.js';
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export declare const CodeSearchSupportCodings: {
    /**
     * all: The search for code on ValueSet only includes all codes based on the expansion of the value set.
     */
    readonly ImplicitCodes: Coding;
    /**
     * explicit: The search for code on ValueSet only includes codes explicitly detailed on includes or expansions.
     */
    readonly ExplicitCodes: Coding;
};
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export declare type CodeSearchSupportCodingType = typeof CodeSearchSupportCodings;
//# sourceMappingURL=CodeSearchSupportCodings.d.ts.map