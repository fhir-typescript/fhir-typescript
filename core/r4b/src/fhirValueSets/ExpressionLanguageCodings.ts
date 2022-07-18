// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/expression-language|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The media type of the expression language.
 */
export type ExpressionLanguageCodingType = {
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
}

/**
 * The media type of the expression language.
 */
export const ExpressionLanguageCodings:ExpressionLanguageCodingType = {
  /**
   * application/x-fhir-query: FHIR's RESTful query syntax - typically independent of base URL.
   */
  FHIRQuery: {
    display: "FHIR Query",
    code: "application/x-fhir-query",
    system: "http://hl7.org/fhir/expression-language",
  },
  /**
   * text/cql: Clinical Quality Language.
   */
  CQL: {
    display: "CQL",
    code: "text/cql",
    system: "http://hl7.org/fhir/expression-language",
  },
  /**
   * text/cql-expression: A Clinical Quality Language expression.
   */
  CQLExpression: {
    display: "CQL Expression",
    code: "text/cql-expression",
    system: "http://hl7.org/fhir/expression-language",
  },
  /**
   * text/cql-identifier: A valid Clinical Quality Language identifier.
   */
  CQLIdentifier: {
    display: "CQL Identifier",
    code: "text/cql-identifier",
    system: "http://hl7.org/fhir/expression-language",
  },
  /**
   * text/fhirpath: FHIRPath.
   */
  FHIRPath: {
    display: "FHIRPath",
    code: "text/fhirpath",
    system: "http://hl7.org/fhir/expression-language",
  },
} as const;