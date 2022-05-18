/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export declare const ClaimUseCodes: {
    /**
     * claim: The treatment is complete and this represents a Claim for the services.
     */
    readonly Claim: "claim";
    /**
     * preauthorization: The treatment is proposed and this represents a Pre-authorization for the services.
     */
    readonly Preauthorization: "preauthorization";
    /**
     * predetermination: The treatment is proposed and this represents a Pre-determination for the services.
     */
    readonly Predetermination: "predetermination";
};
/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export declare type ClaimUseCodeType = typeof ClaimUseCodes[keyof typeof ClaimUseCodes];
//# sourceMappingURL=ClaimUseCodes.d.ts.map