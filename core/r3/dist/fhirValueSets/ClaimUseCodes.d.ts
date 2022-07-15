/**
 * Complete, proposed, exploratory, other
 */
export declare const ClaimUseCodes: {
    /**
     * complete: The treatment is complete and this represents a Claim for the services.
     */
    readonly Complete: "complete";
    /**
     * exploratory: The treatment is proposed and this represents a Pre-determination for the services.
     */
    readonly Exploratory: "exploratory";
    /**
     * other: A locally defined or otherwise resolved status.
     */
    readonly Other: "other";
    /**
     * proposed: The treatment is proposed and this represents a Pre-authorization for the services.
     */
    readonly Proposed: "proposed";
};
/**
 * Complete, proposed, exploratory, other
 */
export declare type ClaimUseCodeType = typeof ClaimUseCodes[keyof typeof ClaimUseCodes];
//# sourceMappingURL=ClaimUseCodes.d.ts.map