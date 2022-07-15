// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v2-0276|2.0.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Value Set of codes that describe the kind of appointment or the reason why an appointment has been scheduled.
 */
export type V20276CodingType = {
  /**
   * Code: CHECKUP
   */
  ARoutineCheckUpSuchAsAnAnnualPhysical: CodingArgs;
  /**
   * Code: EMERGENCY
   */
  EmergencyAppointment: CodingArgs;
  /**
   * Code: FOLLOWUP
   */
  AFollowUpVisitFromAPreviousAppointment: CodingArgs;
  /**
   * Code: ROUTINE
   */
  RoutineAppointmentDefaultIfNotValued: CodingArgs;
  /**
   * Code: WALKIN
   */
  APreviouslyUnscheduledWalkInVisit: CodingArgs;
}

/**
 * Value Set of codes that describe the kind of appointment or the reason why an appointment has been scheduled.
 */
export const V20276Codings:V20276CodingType = {
  /**
   * Code: CHECKUP
   */
  ARoutineCheckUpSuchAsAnAnnualPhysical: {
    display: "A routine check-up, such as an annual physical",
    code: "CHECKUP",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276",
  },
  /**
   * Code: EMERGENCY
   */
  EmergencyAppointment: {
    display: "Emergency appointment",
    code: "EMERGENCY",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276",
  },
  /**
   * Code: FOLLOWUP
   */
  AFollowUpVisitFromAPreviousAppointment: {
    display: "A follow up visit from a previous appointment",
    code: "FOLLOWUP",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276",
  },
  /**
   * Code: ROUTINE
   */
  RoutineAppointmentDefaultIfNotValued: {
    display: "Routine appointment - default if not valued",
    code: "ROUTINE",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276",
  },
  /**
   * Code: WALKIN
   */
  APreviouslyUnscheduledWalkInVisit: {
    display: "A previously unscheduled walk-in visit",
    code: "WALKIN",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276",
  },
} as const;
