/**
 * The media type of the expression language.
 */
export declare const ExpressionLanguageCodes: {
    /**
     * application/x-fhir-query: FHIR's RESTful query syntax - typically independent of base URL.
     */
    readonly FHIRQuery: "application/x-fhir-query";
    /**
     * text/cql: Clinical Quality Language.
     */
    readonly CQL: "text/cql";
    /**
     * text/fhirpath: FHIRPath.
     */
    readonly FHIRPath: "text/fhirpath";
};
/**
 * The media type of the expression language.
 */
export declare type ExpressionLanguageCodeType = typeof ExpressionLanguageCodes[keyof typeof ExpressionLanguageCodes];
//# sourceMappingURL=ExpressionLanguageCodes.d.ts.map