import { CodingArgs } from '../fhir/Coding.js';
/**
 * The free/busy status of a slot.
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
     * busy-unavailable: Indicates that the time interval is busy and that the interval can not be scheduled.
     */
    BusyUnavailable: CodingArgs;
    /**
     * free: Indicates that the time interval is free for scheduling.
     */
    Free: CodingArgs;
};
/**
 * The free/busy status of a slot.
 */
export declare const SlotstatusCodings: SlotstatusCodingType;
//# sourceMappingURL=SlotstatusCodings.d.ts.map