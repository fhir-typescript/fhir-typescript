/**
 * Real world event relating to the schedule.
 */
export declare const EventTimingCodes: {
    /**
     * AC: before meal (from lat. ante cibus)
     */
    readonly AC: "AC";
    /**
     * ACD: before lunch (from lat. ante cibus diurnus)
     */
    readonly ACD: "ACD";
    /**
     * ACM: before breakfast (from lat. ante cibus matutinus)
     */
    readonly ACM: "ACM";
    /**
     * ACV: before dinner (from lat. ante cibus vespertinus)
     */
    readonly ACV: "ACV";
    /**
     * AFT: Event occurs during the afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly Afternoon: "AFT";
    /**
     * AFT.early: Event occurs during the early afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly EarlyAfternoon: "AFT.early";
    /**
     * AFT.late: Event occurs during the late afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly LateAfternoon: "AFT.late";
    /**
     * C: Description: meal (from lat. ante cibus)
     */
    readonly C: "C";
    /**
     * CD: Description: lunch (from lat. cibus diurnus)
     */
    readonly CD: "CD";
    /**
     * CM: Description: breakfast (from lat. cibus matutinus)
     */
    readonly CM: "CM";
    /**
     * CV: Description: dinner (from lat. cibus vespertinus)
     */
    readonly CV: "CV";
    /**
     * EVE: Event occurs during the evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly Evening: "EVE";
    /**
     * EVE.early: Event occurs during the early evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly EarlyEvening: "EVE.early";
    /**
     * EVE.late: Event occurs during the late evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly LateEvening: "EVE.late";
    /**
     * HS: Description: Prior to beginning a regular period of extended sleep (this would exclude naps).  Note that this might occur at different times of day depending on a person's regular sleep schedule.
     */
    readonly HS: "HS";
    /**
     * MORN: Event occurs during the morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly Morning: "MORN";
    /**
     * MORN.early: Event occurs during the early morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly EarlyMorning: "MORN.early";
    /**
     * MORN.late: Event occurs during the late morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly LateMorning: "MORN.late";
    /**
     * NIGHT: Event occurs during the night. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly Night: "NIGHT";
    /**
     * NOON: Event occurs around 12:00pm. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly Noon: "NOON";
    /**
     * PC: after meal (from lat. post cibus)
     */
    readonly PC: "PC";
    /**
     * PCD: after lunch (from lat. post cibus diurnus)
     */
    readonly PCD: "PCD";
    /**
     * PCM: after breakfast (from lat. post cibus matutinus)
     */
    readonly PCM: "PCM";
    /**
     * PCV: after dinner (from lat. post cibus vespertinus)
     */
    readonly PCV: "PCV";
    /**
     * PHS: Event occurs [offset] after subject goes to sleep. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly AfterSleep: "PHS";
    /**
     * WAKE: Description: Upon waking up from a regular period of sleep, in order to start regular activities (this would exclude waking up from a nap or temporarily waking up during a period of sleep)
     *
     *
     *                            Usage Notes: e.g.
     *
     *                         Take pulse rate on waking in management of thyrotoxicosis.
     *
     *                         Take BP on waking in management of hypertension
     *
     *                         Take basal body temperature on waking in establishing date of ovulation
     */
    readonly WAKE: "WAKE";
};
/**
 * Real world event relating to the schedule.
 */
export declare type EventTimingCodeType = typeof EventTimingCodes[keyof typeof EventTimingCodes];
//# sourceMappingURL=EventTimingCodes.d.ts.map