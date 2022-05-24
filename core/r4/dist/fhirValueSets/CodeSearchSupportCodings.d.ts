import { CodingArgs } from '../fhir/Coding.js';
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export declare type CodeSearchSupportCodingType = {
    /**
     * all: The search for code on ValueSet only includes all codes based on the expansion of the value set.
     */
    ImplicitCodes: CodingArgs;
    /**
     * explicit: The search for code on ValueSet only includes codes explicitly detailed on includes or expansions.
     */
    ExplicitCodes: CodingArgs;
};
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export declare const CodeSearchSupportCodings: CodeSearchSupportCodingType;
//# sourceMappingURL=CodeSearchSupportCodings.d.ts.map