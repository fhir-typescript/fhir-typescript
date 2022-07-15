// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/operation-kind|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Whether an operation is a normal operation or a query.
 */
export type OperationKindCodingType = {
  /**
   * operation: This operation is invoked as an operation.
   */
  Operation: CodingArgs;
  /**
   * query: This operation is a named query, invoked using the search mechanism.
   */
  Query: CodingArgs;
}

/**
 * Whether an operation is a normal operation or a query.
 */
export const OperationKindCodings:OperationKindCodingType = {
  /**
   * operation: This operation is invoked as an operation.
   */
  Operation: {
    display: "Operation",
    code: "operation",
    system: "http://hl7.org/fhir/operation-kind",
  },
  /**
   * query: This operation is a named query, invoked using the search mechanism.
   */
  Query: {
    display: "Query",
    code: "query",
    system: "http://hl7.org/fhir/operation-kind",
  },
} as const;
