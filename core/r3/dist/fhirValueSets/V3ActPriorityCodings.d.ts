import { CodingArgs } from '../fhir/Coding.js';
/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export declare type V3ActPriorityCodingType = {
    /**
     * A: As soon as possible, next highest priority after stat.
     */
    ASAP: CodingArgs;
    /**
     * CR: Filler should contact the placer as soon as results are available, even for preliminary results.  (Was "C" in HL7 version 2.3's reporting priority.)
     */
    CallbackResults: CodingArgs;
    /**
     * CS: Filler should contact the placer (or target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    CallbackForScheduling: CodingArgs;
    /**
     * CSP: Filler should contact the placer to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    CallbackPlacerForScheduling: CodingArgs;
    /**
     * CSR: Filler should contact the service recipient (target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    ContactRecipientForScheduling: CodingArgs;
    /**
     * EL: Beneficial to the patient but not essential for survival.
     */
    Elective: CodingArgs;
    /**
     * EM: An unforeseen combination of circumstances or the resulting state that calls for immediate action.
     */
    Emergency: CodingArgs;
    /**
     * P: Used to indicate that a service is to be performed prior to a scheduled surgery.  When ordering a service and using the pre-op priority, a check is done to see the amount of time that must be allowed for performance of the service.  When the order is placed, a message can be generated indicating the time needed for the service so that it is not ordered in conflict with a scheduled operation.
     */
    Preop: CodingArgs;
    /**
     * PRN: An "as needed" order should be accompanied by a description of what constitutes a need. This description is represented by an observation service predicate as a precondition.
     */
    AsNeeded: CodingArgs;
    /**
     * R: Routine service, do at usual work hours.
     */
    Routine: CodingArgs;
    /**
     * RR: A report should be prepared and sent as quickly as possible.
     */
    RushReporting: CodingArgs;
    /**
     * S: With highest priority (e.g., emergency).
     */
    Stat: CodingArgs;
    /**
     * T: It is critical to come as close as possible to the requested time (e.g., for a through antimicrobial level).
     */
    TimingCritical: CodingArgs;
    /**
     * UD: Drug is to be used as directed by the prescriber.
     */
    UseAsDirected: CodingArgs;
    /**
     * UR: Calls for prompt action.
     */
    Urgent: CodingArgs;
};
/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export declare const V3ActPriorityCodings: V3ActPriorityCodingType;
//# sourceMappingURL=V3ActPriorityCodings.d.ts.map