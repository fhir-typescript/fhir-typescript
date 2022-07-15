/**
 * Code for a known / defined timing pattern.
 */
export declare const TimingAbbreviationCodes: {
    /**
     * AM: Every morning at institution specified times.
     */
    readonly AM: "AM";
    /**
     * BID: Two times a day at institution specified time
     */
    readonly BID: "BID";
    /**
     * PM: Every afternoon at institution specified times.
     */
    readonly PM: "PM";
    /**
     * Q4H: Every 4 hours at institution specified time
     */
    readonly Q4H: "Q4H";
    /**
     * Q6H: Every 6 hours at institution specified time
     */
    readonly Q6H: "Q6H";
    /**
     * QD: Every day at institution specified times.
     */
    readonly QD: "QD";
    /**
     * QID: Four times a day at institution specified time
     */
    readonly QID: "QID";
    /**
     * QOD: Every other day at institution specified times.
     */
    readonly QOD: "QOD";
    /**
     * TID: Three times a day at institution specified time
     */
    readonly TID: "TID";
};
/**
 * Code for a known / defined timing pattern.
 */
export declare type TimingAbbreviationCodeType = typeof TimingAbbreviationCodes[keyof typeof TimingAbbreviationCodes];
//# sourceMappingURL=TimingAbbreviationCodes.d.ts.map