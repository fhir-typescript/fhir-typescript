// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v2-0276|2.9

/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export const V20276Codes = {
  /**
   * Code: CHECKUP
   */
  ARoutineCheckUpSuchAsAnAnnualPhysical: "CHECKUP",
  /**
   * Code: EMERGENCY
   */
  EmergencyAppointment: "EMERGENCY",
  /**
   * Code: FOLLOWUP
   */
  AFollowUpVisitFromAPreviousAppointment: "FOLLOWUP",
  /**
   * Code: ROUTINE
   */
  RoutineAppointmentDefaultIfNotValued: "ROUTINE",
  /**
   * Code: WALKIN
   */
  APreviouslyUnscheduledWalkInVisit: "WALKIN",
} as const;

/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export type V20276CodeType = typeof V20276Codes[keyof typeof V20276Codes];
