/**
 * A code or set of codes (e.g., for routine, emergency,) specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 *
 * *Discussion:* This attribute is used in orders to indicate the ordered priority, and in event documentation it indicates the actual priority used to perform the act. In definition mood it indicates the available priorities.
 */
export declare const V3ActPriorityCodes: {
    /**
     * Code: A
     */
    readonly A: "A";
    /**
     * Code: CR
     */
    readonly CR: "CR";
    /**
     * Code: CS
     */
    readonly CallbackForScheduling: "CS";
    /**
     * Code: CSP
     */
    readonly CallbackPlacerForScheduling: "CSP";
    /**
     * Code: CSR
     */
    readonly ContactRecipientForScheduling: "CSR";
    /**
     * Code: EL
     */
    readonly EL: "EL";
    /**
     * Code: EM
     */
    readonly EM: "EM";
    /**
     * Code: P
     */
    readonly P: "P";
    /**
     * Code: PRN
     */
    readonly PRN: "PRN";
    /**
     * Code: R
     */
    readonly R: "R";
    /**
     * Code: RR
     */
    readonly RR: "RR";
    /**
     * Code: S
     */
    readonly S: "S";
    /**
     * Code: T
     */
    readonly T: "T";
    /**
     * Code: UD
     */
    readonly UD: "UD";
    /**
     * Code: UR
     */
    readonly UR: "UR";
};
/**
 * A code or set of codes (e.g., for routine, emergency,) specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 *
 * *Discussion:* This attribute is used in orders to indicate the ordered priority, and in event documentation it indicates the actual priority used to perform the act. In definition mood it indicates the available priorities.
 */
export declare type V3ActPriorityCodeType = typeof V3ActPriorityCodes[keyof typeof V3ActPriorityCodes];
//# sourceMappingURL=V3ActPriorityCodes.d.ts.map