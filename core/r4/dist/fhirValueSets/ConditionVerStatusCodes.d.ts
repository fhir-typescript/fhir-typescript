/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
export declare const ConditionVerStatusCodes: {
    /**
     * confirmed: There is sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    readonly Confirmed: "confirmed";
    /**
     * differential: One of a set of potential (and typically mutually exclusive) diagnoses asserted to further guide the diagnostic process and preliminary treatment.
     */
    readonly Differential: "differential";
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * provisional: This is a tentative diagnosis - still a candidate that is under consideration.
     */
    readonly Provisional: "provisional";
    /**
     * refuted: This condition has been ruled out by diagnostic and clinical evidence.
     */
    readonly Refuted: "refuted";
    /**
     * unconfirmed: There is not sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    readonly Unconfirmed: "unconfirmed";
};
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
export declare type ConditionVerStatusCodeType = typeof ConditionVerStatusCodes[keyof typeof ConditionVerStatusCodes];
//# sourceMappingURL=ConditionVerStatusCodes.d.ts.map