import { CodingArgs } from '../fhir/Coding.js';
/**
 * The free/busy status of the slot.
 */
export declare type SlotstatusCodingType = {
    /**
     * busy: Indicates that the time interval is busy because one  or more events have been scheduled for that interval.
     */
    Busy: CodingArgs;
    /**
     * busy-tentative: Indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval.
     */
    BusyTentative: CodingArgs;
    /**
     * busy-unavailable: Indicates that the time interval is busy and that the interval cannot be scheduled.
     */
    BusyUnavailable: CodingArgs;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: CodingArgs;
    /**
     * free: Indicates that the time interval is free for scheduling.
     */
    Free: CodingArgs;
};
/**
 * The free/busy status of the slot.
 */
export declare const SlotstatusCodings: SlotstatusCodingType;
//# sourceMappingURL=SlotstatusCodings.d.ts.map