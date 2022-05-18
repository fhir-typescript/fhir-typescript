import { Coding } from '../fhir/Coding.js';
/**
 * The media type of the expression language.
 */
export declare const ExpressionLanguageCodings: {
    /**
     * application/x-fhir-query: FHIR's RESTful query syntax - typically independent of base URL.
     */
    readonly FHIRQuery: Coding;
    /**
     * text/cql: Clinical Quality Language.
     */
    readonly CQL: Coding;
    /**
     * text/fhirpath: FHIRPath.
     */
    readonly FHIRPath: Coding;
};
/**
 * The media type of the expression language.
 */
export declare type ExpressionLanguageCodingType = typeof ExpressionLanguageCodings;
//# sourceMappingURL=ExpressionLanguageCodings.d.ts.map