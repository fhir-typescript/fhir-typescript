/**
 * Indicates the state of the consent.
 */
export declare const ConsentStateCodesCodes: {
    /**
     * active: The consent is to be followed and enforced.
     */
    readonly Active: "active";
    /**
     * draft: The consent is in development or awaiting use but is not yet intended to be acted upon.
     */
    readonly Pending: "draft";
    /**
     * entered-in-error: The consent was created wrongly (e.g. wrong patient) and should be ignored.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * inactive: The consent is terminated or replaced.
     */
    readonly Inactive: "inactive";
    /**
     * proposed: The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
     */
    readonly Proposed: "proposed";
    /**
     * rejected: The consent has been rejected by one or more of the parties.
     */
    readonly Rejected: "rejected";
};
/**
 * Indicates the state of the consent.
 */
export declare type ConsentStateCodesCodeType = typeof ConsentStateCodesCodes[keyof typeof ConsentStateCodesCodes];
//# sourceMappingURL=ConsentStateCodesCodes.d.ts.map