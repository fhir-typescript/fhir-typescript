import { Coding } from '../fhir/Coding.js';
/**
 * The free/busy status of the slot.
 */
export declare const SlotstatusCodings: {
    /**
     * busy: Indicates that the time interval is busy because one  or more events have been scheduled for that interval.
     */
    readonly Busy: Coding;
    /**
     * busy-tentative: Indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval.
     */
    readonly BusyTentative: Coding;
    /**
     * busy-unavailable: Indicates that the time interval is busy and that the interval cannot be scheduled.
     */
    readonly BusyUnavailable: Coding;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: Coding;
    /**
     * free: Indicates that the time interval is free for scheduling.
     */
    readonly Free: Coding;
};
/**
 * The free/busy status of the slot.
 */
export declare type SlotstatusCodingType = typeof SlotstatusCodings;
//# sourceMappingURL=SlotstatusCodings.d.ts.map