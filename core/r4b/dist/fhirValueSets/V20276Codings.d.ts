import { CodingArgs } from '../fhir/Coding.js';
/**
 * Value Set of codes that describe the kind of appointment or the reason why an appointment has been scheduled.
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
 * Value Set of codes that describe the kind of appointment or the reason why an appointment has been scheduled.
 */
export declare const V20276Codings: V20276CodingType;
//# sourceMappingURL=V20276Codings.d.ts.map