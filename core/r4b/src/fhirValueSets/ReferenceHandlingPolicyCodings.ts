// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reference-handling-policy|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A set of flags that defines how references are supported.
 */
export type ReferenceHandlingPolicyCodingType = {
  /**
   * enforced: The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.
   */
  ReferenceIntegrityEnforced: CodingArgs;
  /**
   * literal: The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see 'enforced').
   */
  LiteralReferences: CodingArgs;
  /**
   * local: The server does not support references that point to other servers.
   */
  LocalReferencesOnly: CodingArgs;
  /**
   * logical: The server allows logical references (i.e. using Reference.identifier).
   */
  LogicalReferences: CodingArgs;
  /**
   * resolves: The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).
   */
  ResolvesReferences: CodingArgs;
}

/**
 * A set of flags that defines how references are supported.
 */
export const ReferenceHandlingPolicyCodings:ReferenceHandlingPolicyCodingType = {
  /**
   * enforced: The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.
   */
  ReferenceIntegrityEnforced: {
    display: "Reference Integrity Enforced",
    code: "enforced",
    system: "http://hl7.org/fhir/reference-handling-policy",
  },
  /**
   * literal: The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see 'enforced').
   */
  LiteralReferences: {
    display: "Literal References",
    code: "literal",
    system: "http://hl7.org/fhir/reference-handling-policy",
  },
  /**
   * local: The server does not support references that point to other servers.
   */
  LocalReferencesOnly: {
    display: "Local References Only",
    code: "local",
    system: "http://hl7.org/fhir/reference-handling-policy",
  },
  /**
   * logical: The server allows logical references (i.e. using Reference.identifier).
   */
  LogicalReferences: {
    display: "Logical References",
    code: "logical",
    system: "http://hl7.org/fhir/reference-handling-policy",
  },
  /**
   * resolves: The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).
   */
  ResolvesReferences: {
    display: "Resolves References",
    code: "resolves",
    system: "http://hl7.org/fhir/reference-handling-policy",
  },
} as const;
