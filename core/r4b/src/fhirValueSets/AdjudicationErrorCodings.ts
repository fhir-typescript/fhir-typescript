// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication-error|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of adjudication codes.
 */
export type AdjudicationErrorCodingType = {
  /**
   * a001: Missing Identifier
   */
  MissingIdentifier: CodingArgs;
  /**
   * a002: Missing Creation Date
   */
  MissingCreationDate: CodingArgs;
}

/**
 * This value set includes a smattering of adjudication codes.
 */
export const AdjudicationErrorCodings:AdjudicationErrorCodingType = {
  /**
   * a001: Missing Identifier
   */
  MissingIdentifier: {
    display: "Missing Identifier",
    code: "a001",
    system: "http://terminology.hl7.org/CodeSystem/adjudication-error",
  },
  /**
   * a002: Missing Creation Date
   */
  MissingCreationDate: {
    display: "Missing Creation Date",
    code: "a002",
    system: "http://terminology.hl7.org/CodeSystem/adjudication-error",
  },
} as const;