// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/extension-context|3.0.2

/**
 * How an extension context is interpreted.
 */
export const ExtensionContextCodes = {
  /**
   * datatype: The context is all nodes matching a particular data type element path (root or repeating element) or all elements referencing a particular primitive data type (expressed as the datatype name).
   */
  Datatype: "datatype",
  /**
   * extension: The context is a particular extension from a particular profile, a uri that identifies the extension definition.
   */
  Extension: "extension",
  /**
   * resource: The context is all elements matching a particular resource element path.
   */
  Resource: "resource",
} as const;

/**
 * How an extension context is interpreted.
 */
export type ExtensionContextCodeType = typeof ExtensionContextCodes[keyof typeof ExtensionContextCodes];
