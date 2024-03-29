// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-can-push-updates|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Ability of the primary source to push updates/alerts
 */
export type VerificationresultCanPushUpdatesCodingType = {
  /**
   * Code: no
   */
  No: CodingArgs;
  /**
   * Code: undetermined
   */
  Undetermined: CodingArgs;
  /**
   * Code: yes
   */
  Yes: CodingArgs;
}

/**
 * Ability of the primary source to push updates/alerts
 */
export const VerificationresultCanPushUpdatesCodings:VerificationresultCanPushUpdatesCodingType = {
  /**
   * Code: no
   */
  No: {
    display: "No",
    code: "no",
    system: "http://terminology.hl7.org/CodeSystem/can-push-updates",
  },
  /**
   * Code: undetermined
   */
  Undetermined: {
    display: "Undetermined",
    code: "undetermined",
    system: "http://terminology.hl7.org/CodeSystem/can-push-updates",
  },
  /**
   * Code: yes
   */
  Yes: {
    display: "Yes",
    code: "yes",
    system: "http://terminology.hl7.org/CodeSystem/can-push-updates",
  },
} as const;
