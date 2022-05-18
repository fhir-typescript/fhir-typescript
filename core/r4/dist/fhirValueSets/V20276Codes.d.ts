/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
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
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export declare type V20276CodeType = typeof V20276Codes[keyof typeof V20276Codes];
//# sourceMappingURL=V20276Codes.d.ts.map