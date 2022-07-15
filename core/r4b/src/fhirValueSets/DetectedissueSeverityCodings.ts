// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/detectedissue-severity|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export type DetectedissueSeverityCodingType = {
  /**
   * high: Indicates the issue may be life-threatening or has the potential to cause permanent injury.
   */
  High: CodingArgs;
  /**
   * low: Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.
   */
  Low: CodingArgs;
  /**
   * moderate: Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.
   */
  Moderate: CodingArgs;
}

/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export const DetectedissueSeverityCodings:DetectedissueSeverityCodingType = {
  /**
   * high: Indicates the issue may be life-threatening or has the potential to cause permanent injury.
   */
  High: {
    display: "High",
    code: "high",
    system: "http://hl7.org/fhir/detectedissue-severity",
  },
  /**
   * low: Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.
   */
  Low: {
    display: "Low",
    code: "low",
    system: "http://hl7.org/fhir/detectedissue-severity",
  },
  /**
   * moderate: Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.
   */
  Moderate: {
    display: "Moderate",
    code: "moderate",
    system: "http://hl7.org/fhir/detectedissue-severity",
  },
} as const;
