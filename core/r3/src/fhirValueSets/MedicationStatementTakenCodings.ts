// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-statement-taken|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A coded concept identifying level of certainty if patient has taken or has not taken the medication
 */
export type MedicationStatementTakenCodingType = {
  /**
   * n: Negative assertion that patient has not taken medication
   */
  No: CodingArgs;
  /**
   * na: Patient reporting does not apply
   */
  NotApplicable: CodingArgs;
  /**
   * unk: Unknown assertion if patient has taken medication
   */
  Unknown: CodingArgs;
  /**
   * y: Positive assertion that patient has taken medication
   */
  Yes: CodingArgs;
}

/**
 * A coded concept identifying level of certainty if patient has taken or has not taken the medication
 */
export const MedicationStatementTakenCodings:MedicationStatementTakenCodingType = {
  /**
   * n: Negative assertion that patient has not taken medication
   */
  No: {
    display: "No",
    code: "n",
    system: "http://hl7.org/fhir/medication-statement-taken",
  },
  /**
   * na: Patient reporting does not apply
   */
  NotApplicable: {
    display: "Not Applicable",
    code: "na",
    system: "http://hl7.org/fhir/medication-statement-taken",
  },
  /**
   * unk: Unknown assertion if patient has taken medication
   */
  Unknown: {
    display: "Unknown",
    code: "unk",
    system: "http://hl7.org/fhir/medication-statement-taken",
  },
  /**
   * y: Positive assertion that patient has taken medication
   */
  Yes: {
    display: "Yes",
    code: "y",
    system: "http://hl7.org/fhir/medication-statement-taken",
  },
} as const;