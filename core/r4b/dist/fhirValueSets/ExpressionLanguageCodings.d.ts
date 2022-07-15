import { CodingArgs } from '../fhir/Coding.js';
/**
 * The media type of the expression language.
 */
export declare type ExpressionLanguageCodingType = {
    /**
     * application/x-fhir-query: FHIR's RESTful query syntax - typically independent of base URL.
     */
    FHIRQuery: CodingArgs;
    /**
     * text/cql: Clinical Quality Language.
     */
    CQL: CodingArgs;
    /**
     * text/cql-expression: A Clinical Quality Language expression.
     */
    CQLExpression: CodingArgs;
    /**
     * text/cql-identifier: A valid Clinical Quality Language identifier.
     */
    CQLIdentifier: CodingArgs;
    /**
     * text/fhirpath: FHIRPath.
     */
    FHIRPath: CodingArgs;
};
/**
 * The media type of the expression language.
 */
export declare const ExpressionLanguageCodings: ExpressionLanguageCodingType;
//# sourceMappingURL=ExpressionLanguageCodings.d.ts.map