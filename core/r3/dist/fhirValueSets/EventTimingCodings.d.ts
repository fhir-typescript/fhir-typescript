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
     * AFT: event occurs during the afternoon
     */
    Afternoon: CodingArgs;
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
     * EVE: event occurs during the evening
     */
    Evening: CodingArgs;
    /**
     * HS: Description: Prior to beginning a regular period of extended sleep (this would exclude naps).  Note that this might occur at different times of day depending on a person's regular sleep schedule.
     */
    HS: CodingArgs;
    /**
     * MORN: event occurs during the morning
     */
    Morning: CodingArgs;
    /**
     * NIGHT: event occurs during the night
     */
    Night: CodingArgs;
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
     * PHS: event occurs [offset] after subject goes to sleep
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