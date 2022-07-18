// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reference-handling-policy|3.0.2

/**
 * A set of flags that defines how references are supported.
 */
export const ReferenceHandlingPolicyCodes = {
  /**
   * enforced: The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems
   */
  ReferenceIntegrityEnforced: "enforced",
  /**
   * literal: The server supports and populates Literal references where they are known (this code does not guarantee that all references are literal; see 'enforced')
   */
  LiteralReferences: "literal",
  /**
   * local: The server does not support references that point to other servers
   */
  LocalReferencesOnly: "local",
  /**
   * logical: The server allows logical references
   */
  LogicalReferences: "logical",
  /**
   * resolves: The server will attempt to resolve logical references to literal references (if resolution fails, the server may still accept resources; see logical)
   */
  ResolvesReferences: "resolves",
} as const;

/**
 * A set of flags that defines how references are supported.
 */
export type ReferenceHandlingPolicyCodeType = typeof ReferenceHandlingPolicyCodes[keyof typeof ReferenceHandlingPolicyCodes];