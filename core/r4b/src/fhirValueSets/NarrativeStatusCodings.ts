// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/narrative-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The status of a resource narrative.
 */
export type NarrativeStatusCodingType = {
  /**
   * additional: The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.
   */
  Additional: CodingArgs;
  /**
   * empty: The contents of the narrative are some equivalent of "No human-readable text provided in this case".
   */
  Empty: CodingArgs;
  /**
   * extensions: The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.
   */
  Extensions: CodingArgs;
  /**
   * generated: The contents of the narrative are entirely generated from the core elements in the content.
   */
  Generated: CodingArgs;
}

/**
 * The status of a resource narrative.
 */
export const NarrativeStatusCodings:NarrativeStatusCodingType = {
  /**
   * additional: The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.
   */
  Additional: {
    display: "Additional",
    code: "additional",
    system: "http://hl7.org/fhir/narrative-status",
  },
  /**
   * empty: The contents of the narrative are some equivalent of "No human-readable text provided in this case".
   */
  Empty: {
    display: "Empty",
    code: "empty",
    system: "http://hl7.org/fhir/narrative-status",
  },
  /**
   * extensions: The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.
   */
  Extensions: {
    display: "Extensions",
    code: "extensions",
    system: "http://hl7.org/fhir/narrative-status",
  },
  /**
   * generated: The contents of the narrative are entirely generated from the core elements in the content.
   */
  Generated: {
    display: "Generated",
    code: "generated",
    system: "http://hl7.org/fhir/narrative-status",
  },
} as const;
