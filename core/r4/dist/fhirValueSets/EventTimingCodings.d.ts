import { Coding } from '../fhir/Coding.js';
/**
 * Real world event relating to the schedule.
 */
export declare const EventTimingCodings: {
    /**
     * AC: before meal (from lat. ante cibus)
     */
    readonly AC: Coding;
    /**
     * ACD: before lunch (from lat. ante cibus diurnus)
     */
    readonly ACD: Coding;
    /**
     * ACM: before breakfast (from lat. ante cibus matutinus)
     */
    readonly ACM: Coding;
    /**
     * ACV: before dinner (from lat. ante cibus vespertinus)
     */
    readonly ACV: Coding;
    /**
     * AFT: Event occurs during the afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly Afternoon: Coding;
    /**
     * AFT.early: Event occurs during the early afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly EarlyAfternoon: Coding;
    /**
     * AFT.late: Event occurs during the late afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly LateAfternoon: Coding;
    /**
     * C: Description: meal (from lat. ante cibus)
     */
    readonly C: Coding;
    /**
     * CD: Description: lunch (from lat. cibus diurnus)
     */
    readonly CD: Coding;
    /**
     * CM: Description: breakfast (from lat. cibus matutinus)
     */
    readonly CM: Coding;
    /**
     * CV: Description: dinner (from lat. cibus vespertinus)
     */
    readonly CV: Coding;
    /**
     * EVE: Event occurs during the evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly Evening: Coding;
    /**
     * EVE.early: Event occurs during the early evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly EarlyEvening: Coding;
    /**
     * EVE.late: Event occurs during the late evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly LateEvening: Coding;
    /**
     * HS: Description: Prior to beginning a regular period of extended sleep (this would exclude naps).  Note that this might occur at different times of day depending on a person's regular sleep schedule.
     */
    readonly HS: Coding;
    /**
     * MORN: Event occurs during the morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly Morning: Coding;
    /**
     * MORN.early: Event occurs during the early morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly EarlyMorning: Coding;
    /**
     * MORN.late: Event occurs during the late morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly LateMorning: Coding;
    /**
     * NIGHT: Event occurs during the night. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly Night: Coding;
    /**
     * NOON: Event occurs around 12:00pm. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly Noon: Coding;
    /**
     * PC: after meal (from lat. post cibus)
     */
    readonly PC: Coding;
    /**
     * PCD: after lunch (from lat. post cibus diurnus)
     */
    readonly PCD: Coding;
    /**
     * PCM: after breakfast (from lat. post cibus matutinus)
     */
    readonly PCM: Coding;
    /**
     * PCV: after dinner (from lat. post cibus vespertinus)
     */
    readonly PCV: Coding;
    /**
     * PHS: Event occurs [offset] after subject goes to sleep. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly AfterSleep: Coding;
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
    readonly WAKE: Coding;
};
/**
 * Real world event relating to the schedule.
 */
export declare type EventTimingCodingType = typeof EventTimingCodings;
//# sourceMappingURL=EventTimingCodings.d.ts.map