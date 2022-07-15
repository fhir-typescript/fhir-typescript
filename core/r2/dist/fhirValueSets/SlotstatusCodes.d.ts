/**
 * The free/busy status of a slot.
 */
export declare const SlotstatusCodes: {
    /**
     * busy: Indicates that the time interval is busy because one  or more events have been scheduled for that interval.
     */
    readonly Busy: "busy";
    /**
     * busy-tentative: Indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval.
     */
    readonly BusyTentative: "busy-tentative";
    /**
     * busy-unavailable: Indicates that the time interval is busy and that the interval can not be scheduled.
     */
    readonly BusyUnavailable: "busy-unavailable";
    /**
     * free: Indicates that the time interval is free for scheduling.
     */
    readonly Free: "free";
};
/**
 * The free/busy status of a slot.
 */
export declare type SlotstatusCodeType = typeof SlotstatusCodes[keyof typeof SlotstatusCodes];
//# sourceMappingURL=SlotstatusCodes.d.ts.map