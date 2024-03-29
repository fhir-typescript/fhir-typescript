// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/link-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of link between this patient resource and another patient resource.
 */
export type LinkTypeCodingType = {
  /**
   * refer: The patient resource containing this link is in use and valid but not considered the main source of information about a patient. The link points forward to another patient resource that should be consulted to retrieve additional patient information.
   */
  Refer: CodingArgs;
  /**
   * replaced-by: The patient resource containing this link must no longer be used. The link points forward to another patient resource that must be used in lieu of the patient resource that contains this link.
   */
  ReplacedBy: CodingArgs;
  /**
   * replaces: The patient resource containing this link is the current active patient record. The link points back to an inactive patient resource that has been merged into this resource, and should be consulted to retrieve additional referenced information.
   */
  Replaces: CodingArgs;
  /**
   * seealso: The patient resource containing this link is in use and valid, but points to another patient resource that is known to contain data about the same person. Data in this resource might overlap or contradict information found in the other patient resource. This link does not indicate any relative importance of the resources concerned, and both should be regarded as equally valid.
   */
  SeeAlso: CodingArgs;
}

/**
 * The type of link between this patient resource and another patient resource.
 */
export const LinkTypeCodings:LinkTypeCodingType = {
  /**
   * refer: The patient resource containing this link is in use and valid but not considered the main source of information about a patient. The link points forward to another patient resource that should be consulted to retrieve additional patient information.
   */
  Refer: {
    display: "Refer",
    code: "refer",
    system: "http://hl7.org/fhir/link-type",
  },
  /**
   * replaced-by: The patient resource containing this link must no longer be used. The link points forward to another patient resource that must be used in lieu of the patient resource that contains this link.
   */
  ReplacedBy: {
    display: "Replaced-by",
    code: "replaced-by",
    system: "http://hl7.org/fhir/link-type",
  },
  /**
   * replaces: The patient resource containing this link is the current active patient record. The link points back to an inactive patient resource that has been merged into this resource, and should be consulted to retrieve additional referenced information.
   */
  Replaces: {
    display: "Replaces",
    code: "replaces",
    system: "http://hl7.org/fhir/link-type",
  },
  /**
   * seealso: The patient resource containing this link is in use and valid, but points to another patient resource that is known to contain data about the same person. Data in this resource might overlap or contradict information found in the other patient resource. This link does not indicate any relative importance of the resources concerned, and both should be regarded as equally valid.
   */
  SeeAlso: {
    display: "See also",
    code: "seealso",
    system: "http://hl7.org/fhir/link-type",
  },
} as const;
