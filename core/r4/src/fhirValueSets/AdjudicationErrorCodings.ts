// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication-error|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of adjudication codes.
 */
export const AdjudicationErrorCodings = {
  /**
   * a001: Missing Identifier
   */
  MissingIdentifier: new Coding({
    display: "Missing Identifier",
    code: "a001",
    system: "http://terminology.hl7.org/CodeSystem/adjudication-error",
  }),
  /**
   * a002: Missing Creation Date
   */
  MissingCreationDate: new Coding({
    display: "Missing Creation Date",
    code: "a002",
    system: "http://terminology.hl7.org/CodeSystem/adjudication-error",
  }),
} as const;

/**
 * This value set includes a smattering of adjudication codes.
 */
export type AdjudicationErrorCodingType = typeof AdjudicationErrorCodings;