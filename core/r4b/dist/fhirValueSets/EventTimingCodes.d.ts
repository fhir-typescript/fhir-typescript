/**
 * Real world event relating to the schedule.
 */
export declare const EventTimingCodes: {
    /**
     * Code: AC
     */
    readonly AC: "AC";
    /**
     * Code: ACD
     */
    readonly ACD: "ACD";
    /**
     * Code: ACM
     */
    readonly ACM: "ACM";
    /**
     * Code: ACV
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
     * Code: C
     */
    readonly C: "C";
    /**
     * Code: CD
     */
    readonly CD: "CD";
    /**
     * Code: CM
     */
    readonly CM: "CM";
    /**
     * Code: CV
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
     * Code: HS
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
     * Code: PC
     */
    readonly PC: "PC";
    /**
     * Code: PCD
     */
    readonly PCD: "PCD";
    /**
     * Code: PCM
     */
    readonly PCM: "PCM";
    /**
     * Code: PCV
     */
    readonly PCV: "PCV";
    /**
     * PHS: Event occurs [offset] after subject goes to sleep. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    readonly AfterSleep: "PHS";
    /**
     * Code: WAKE
     */
    readonly WAKE: "WAKE";
};
/**
 * Real world event relating to the schedule.
 */
export declare type EventTimingCodeType = typeof EventTimingCodes[keyof typeof EventTimingCodes];
//# sourceMappingURL=EventTimingCodes.d.ts.map