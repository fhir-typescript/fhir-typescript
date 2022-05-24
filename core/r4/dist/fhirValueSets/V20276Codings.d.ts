import { CodingArgs } from '../fhir/Coding.js';
/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export declare type V20276CodingType = {
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
};
/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export declare const V20276Codings: V20276CodingType;
//# sourceMappingURL=V20276Codings.d.ts.map