// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/history-status|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * A code that identifies the status of the family history record.
 */
export const HistoryStatusCodings = {
  /**
   * completed: All available related health information is captured as of the date (and possibly time) when the family member history was taken.
   */
  Completed: new Coding({
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/history-status",
  }),
  /**
   * entered-in-error: This instance should not have been part of this patient's medical record.
   */
  EnteredInError: new Coding({
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/history-status",
  }),
  /**
   * health-unknown: Health information for this family member is unavailable/unknown.
   */
  HealthUnknown: new Coding({
    display: "Health Unknown",
    code: "health-unknown",
    system: "http://hl7.org/fhir/history-status",
  }),
  /**
   * partial: Some health information is known and captured, but not complete - see notes for details.
   */
  Partial: new Coding({
    display: "Partial",
    code: "partial",
    system: "http://hl7.org/fhir/history-status",
  }),
} as const;

/**
 * A code that identifies the status of the family history record.
 */
export type HistoryStatusCodingType = typeof HistoryStatusCodings;