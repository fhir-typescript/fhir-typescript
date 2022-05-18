import { Coding } from '../fhir/Coding.js';
/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export declare const V3ActPriorityCodings: {
    /**
     * A: As soon as possible, next highest priority after stat.
     */
    readonly ASAP: Coding;
    /**
     * CR: Filler should contact the placer as soon as results are available, even for preliminary results.  (Was "C" in HL7 version 2.3's reporting priority.)
     */
    readonly CallbackResults: Coding;
    /**
     * CS: Filler should contact the placer (or target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    readonly CallbackForScheduling: Coding;
    /**
     * CSP: Filler should contact the placer to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    readonly CallbackPlacerForScheduling: Coding;
    /**
     * CSR: Filler should contact the service recipient (target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    readonly ContactRecipientForScheduling: Coding;
    /**
     * EL: Beneficial to the patient but not essential for survival.
     */
    readonly Elective: Coding;
    /**
     * EM: An unforeseen combination of circumstances or the resulting state that calls for immediate action.
     */
    readonly Emergency: Coding;
    /**
     * P: Used to indicate that a service is to be performed prior to a scheduled surgery.  When ordering a service and using the pre-op priority, a check is done to see the amount of time that must be allowed for performance of the service.  When the order is placed, a message can be generated indicating the time needed for the service so that it is not ordered in conflict with a scheduled operation.
     */
    readonly Preop: Coding;
    /**
     * PRN: An "as needed" order should be accompanied by a description of what constitutes a need. This description is represented by an observation service predicate as a precondition.
     */
    readonly AsNeeded: Coding;
    /**
     * R: Routine service, do at usual work hours.
     */
    readonly Routine: Coding;
    /**
     * RR: A report should be prepared and sent as quickly as possible.
     */
    readonly RushReporting: Coding;
    /**
     * S: With highest priority (e.g., emergency).
     */
    readonly Stat: Coding;
    /**
     * T: It is critical to come as close as possible to the requested time (e.g., for a through antimicrobial level).
     */
    readonly TimingCritical: Coding;
    /**
     * UD: Drug is to be used as directed by the prescriber.
     */
    readonly UseAsDirected: Coding;
    /**
     * UR: Calls for prompt action.
     */
    readonly Urgent: Coding;
};
/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export declare type V3ActPriorityCodingType = typeof V3ActPriorityCodings;
//# sourceMappingURL=V3ActPriorityCodings.d.ts.map