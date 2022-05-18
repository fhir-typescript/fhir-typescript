/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export declare const V3ActPriorityCodes: {
    /**
     * A: As soon as possible, next highest priority after stat.
     */
    readonly ASAP: "A";
    /**
     * CR: Filler should contact the placer as soon as results are available, even for preliminary results.  (Was "C" in HL7 version 2.3's reporting priority.)
     */
    readonly CallbackResults: "CR";
    /**
     * CS: Filler should contact the placer (or target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    readonly CallbackForScheduling: "CS";
    /**
     * CSP: Filler should contact the placer to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    readonly CallbackPlacerForScheduling: "CSP";
    /**
     * CSR: Filler should contact the service recipient (target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    readonly ContactRecipientForScheduling: "CSR";
    /**
     * EL: Beneficial to the patient but not essential for survival.
     */
    readonly Elective: "EL";
    /**
     * EM: An unforeseen combination of circumstances or the resulting state that calls for immediate action.
     */
    readonly Emergency: "EM";
    /**
     * P: Used to indicate that a service is to be performed prior to a scheduled surgery.  When ordering a service and using the pre-op priority, a check is done to see the amount of time that must be allowed for performance of the service.  When the order is placed, a message can be generated indicating the time needed for the service so that it is not ordered in conflict with a scheduled operation.
     */
    readonly Preop: "P";
    /**
     * PRN: An "as needed" order should be accompanied by a description of what constitutes a need. This description is represented by an observation service predicate as a precondition.
     */
    readonly AsNeeded: "PRN";
    /**
     * R: Routine service, do at usual work hours.
     */
    readonly Routine: "R";
    /**
     * RR: A report should be prepared and sent as quickly as possible.
     */
    readonly RushReporting: "RR";
    /**
     * S: With highest priority (e.g., emergency).
     */
    readonly Stat: "S";
    /**
     * T: It is critical to come as close as possible to the requested time (e.g., for a through antimicrobial level).
     */
    readonly TimingCritical: "T";
    /**
     * UD: Drug is to be used as directed by the prescriber.
     */
    readonly UseAsDirected: "UD";
    /**
     * UR: Calls for prompt action.
     */
    readonly Urgent: "UR";
};
/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export declare type V3ActPriorityCodeType = typeof V3ActPriorityCodes[keyof typeof V3ActPriorityCodes];
//# sourceMappingURL=V3ActPriorityCodes.d.ts.map