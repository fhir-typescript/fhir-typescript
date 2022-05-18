// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/codesystem-content-mode|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * The extent of the content of the code system (the concepts and codes it defines) are represented in a code system resource.
 */
export const CodesystemContentModeCodings = {
  /**
   * complete: All the concepts defined by the code system are included in the code system resource.
   */
  Complete: new Coding({
    display: "Complete",
    code: "complete",
    system: "http://hl7.org/fhir/codesystem-content-mode",
  }),
  /**
   * example: A few representative concepts are included in the code system resource. There is no useful intent in the subset choice and there's no process to make it workable: it's not intended to be workable.
   */
  Example: new Coding({
    display: "Example",
    code: "example",
    system: "http://hl7.org/fhir/codesystem-content-mode",
  }),
  /**
   * fragment: A subset of the code system concepts are included in the code system resource. This is a curated subset released for a specific purpose under the governance of the code system steward, and that the intent, bounds and consequences of the fragmentation are clearly defined in the fragment or the code system documentation. Fragments are also known as partitions.
   */
  Fragment: new Coding({
    display: "Fragment",
    code: "fragment",
    system: "http://hl7.org/fhir/codesystem-content-mode",
  }),
  /**
   * not-present: None of the concepts defined by the code system are included in the code system resource.
   */
  NotPresent: new Coding({
    display: "Not Present",
    code: "not-present",
    system: "http://hl7.org/fhir/codesystem-content-mode",
  }),
  /**
   * supplement: The resource doesn't define any new concepts; it just provides additional designations and properties to another code system.
   */
  Supplement: new Coding({
    display: "Supplement",
    code: "supplement",
    system: "http://hl7.org/fhir/codesystem-content-mode",
  }),
} as const;

/**
 * The extent of the content of the code system (the concepts and codes it defines) are represented in a code system resource.
 */
export type CodesystemContentModeCodingType = typeof CodesystemContentModeCodings;
