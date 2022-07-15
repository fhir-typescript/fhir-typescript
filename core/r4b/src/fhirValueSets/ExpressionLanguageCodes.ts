// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/expression-language|4.3.0

/**
 * The media type of the expression language.
 */
export const ExpressionLanguageCodes = {
  /**
   * application/x-fhir-query: FHIR's RESTful query syntax - typically independent of base URL.
   */
  FHIRQuery: "application/x-fhir-query",
  /**
   * text/cql: Clinical Quality Language.
   */
  CQL: "text/cql",
  /**
   * text/cql-expression: A Clinical Quality Language expression.
   */
  CQLExpression: "text/cql-expression",
  /**
   * text/cql-identifier: A valid Clinical Quality Language identifier.
   */
  CQLIdentifier: "text/cql-identifier",
  /**
   * text/fhirpath: FHIRPath.
   */
  FHIRPath: "text/fhirpath",
} as const;

/**
 * The media type of the expression language.
 */
export type ExpressionLanguageCodeType = typeof ExpressionLanguageCodes[keyof typeof ExpressionLanguageCodes];
