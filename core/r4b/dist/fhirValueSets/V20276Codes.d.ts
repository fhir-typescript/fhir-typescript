/**
 * Value Set of codes that describe the kind of appointment or the reason why an appointment has been scheduled.
 */
export declare const V20276Codes: {
    /**
     * Code: CHECKUP
     */
    readonly ARoutineCheckUpSuchAsAnAnnualPhysical: "CHECKUP";
    /**
     * Code: EMERGENCY
     */
    readonly EmergencyAppointment: "EMERGENCY";
    /**
     * Code: FOLLOWUP
     */
    readonly AFollowUpVisitFromAPreviousAppointment: "FOLLOWUP";
    /**
     * Code: ROUTINE
     */
    readonly RoutineAppointmentDefaultIfNotValued: "ROUTINE";
    /**
     * Code: WALKIN
     */
    readonly APreviouslyUnscheduledWalkInVisit: "WALKIN";
};
/**
 * Value Set of codes that describe the kind of appointment or the reason why an appointment has been scheduled.
 */
export declare type V20276CodeType = typeof V20276Codes[keyof typeof V20276Codes];
//# sourceMappingURL=V20276Codes.d.ts.map