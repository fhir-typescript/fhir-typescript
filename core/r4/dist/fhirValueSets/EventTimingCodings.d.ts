import { CodingArgs } from '../fhir/Coding.js';
/**
 * Real world event relating to the schedule.
 */
export declare type EventTimingCodingType = {
    /**
     * AC: before meal (from lat. ante cibus)
     */
    AC: CodingArgs;
    /**
     * ACD: before lunch (from lat. ante cibus diurnus)
     */
    ACD: CodingArgs;
    /**
     * ACM: before breakfast (from lat. ante cibus matutinus)
     */
    ACM: CodingArgs;
    /**
     * ACV: before dinner (from lat. ante cibus vespertinus)
     */
    ACV: CodingArgs;
    /**
     * AFT: Event occurs during the afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    Afternoon: CodingArgs;
    /**
     * AFT.early: Event occurs during the early afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    EarlyAfternoon: CodingArgs;
    /**
     * AFT.late: Event occurs during the late afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    LateAfternoon: CodingArgs;
    /**
     * C: Description: meal (from lat. ante cibus)
     */
    C: CodingArgs;
    /**
     * CD: Description: lunch (from lat. cibus diurnus)
     */
    CD: CodingArgs;
    /**
     * CM: Description: breakfast (from lat. cibus matutinus)
     */
    CM: CodingArgs;
    /**
     * CV: Description: dinner (from lat. cibus vespertinus)
     */
    CV: CodingArgs;
    /**
     * EVE: Event occurs during the evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    Evening: CodingArgs;
    /**
     * EVE.early: Event occurs during the early evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    EarlyEvening: CodingArgs;
    /**
     * EVE.late: Event occurs during the late evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    LateEvening: CodingArgs;
    /**
     * HS: Description: Prior to beginning a regular period of extended sleep (this would exclude naps).  Note that this might occur at different times of day depending on a person's regular sleep schedule.
     */
    HS: CodingArgs;
    /**
     * MORN: Event occurs during the morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    Morning: CodingArgs;
    /**
     * MORN.early: Event occurs during the early morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    EarlyMorning: CodingArgs;
    /**
     * MORN.late: Event occurs during the late morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    LateMorning: CodingArgs;
    /**
     * NIGHT: Event occurs during the night. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    Night: CodingArgs;
    /**
     * NOON: Event occurs around 12:00pm. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    Noon: CodingArgs;
    /**
     * PC: after meal (from lat. post cibus)
     */
    PC: CodingArgs;
    /**
     * PCD: after lunch (from lat. post cibus diurnus)
     */
    PCD: CodingArgs;
    /**
     * PCM: after breakfast (from lat. post cibus matutinus)
     */
    PCM: CodingArgs;
    /**
     * PCV: after dinner (from lat. post cibus vespertinus)
     */
    PCV: CodingArgs;
    /**
     * PHS: Event occurs [offset] after subject goes to sleep. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    AfterSleep: CodingArgs;
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
    WAKE: CodingArgs;
};
/**
 * Real world event relating to the schedule.
 */
export declare const EventTimingCodings: EventTimingCodingType;
//# sourceMappingURL=EventTimingCodings.d.ts.map