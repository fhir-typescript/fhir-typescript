// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/extension-context|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * How an extension context is interpreted.
 */
export type ExtensionContextCodingType = {
  /**
   * datatype: The context is all nodes matching a particular data type element path (root or repeating element) or all elements referencing a particular primitive data type (expressed as the datatype name).
   */
  Datatype: CodingArgs;
  /**
   * extension: The context is a particular extension from a particular profile, a uri that identifies the extension definition.
   */
  Extension: CodingArgs;
  /**
   * mapping: The context is all nodes whose mapping to a specified reference model corresponds to a particular mapping structure.  The context identifies the mapping target. The mapping should clearly identify where such an extension could be used.
   */
  Mapping: CodingArgs;
  /**
   * resource: The context is all elements matching a particular resource element path.
   */
  Resource: CodingArgs;
}

/**
 * How an extension context is interpreted.
 */
export const ExtensionContextCodings:ExtensionContextCodingType = {
  /**
   * datatype: The context is all nodes matching a particular data type element path (root or repeating element) or all elements referencing a particular primitive data type (expressed as the datatype name).
   */
  Datatype: {
    display: "Datatype",
    code: "datatype",
    system: "http://hl7.org/fhir/extension-context",
  },
  /**
   * extension: The context is a particular extension from a particular profile, a uri that identifies the extension definition.
   */
  Extension: {
    display: "Extension",
    code: "extension",
    system: "http://hl7.org/fhir/extension-context",
  },
  /**
   * mapping: The context is all nodes whose mapping to a specified reference model corresponds to a particular mapping structure.  The context identifies the mapping target. The mapping should clearly identify where such an extension could be used.
   */
  Mapping: {
    display: "Mapping",
    code: "mapping",
    system: "http://hl7.org/fhir/extension-context",
  },
  /**
   * resource: The context is all elements matching a particular resource element path.
   */
  Resource: {
    display: "Resource",
    code: "resource",
    system: "http://hl7.org/fhir/extension-context",
  },
} as const;
