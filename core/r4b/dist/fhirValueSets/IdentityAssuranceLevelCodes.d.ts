/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export declare const IdentityAssuranceLevelCodes: {
    /**
     * level1: Little or no confidence in the asserted identity's accuracy.
     */
    readonly Level1: "level1";
    /**
     * level2: Some confidence in the asserted identity's accuracy.
     */
    readonly Level2: "level2";
    /**
     * level3: High confidence in the asserted identity's accuracy.
     */
    readonly Level3: "level3";
    /**
     * level4: Very high confidence in the asserted identity's accuracy.
     */
    readonly Level4: "level4";
};
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export declare type IdentityAssuranceLevelCodeType = typeof IdentityAssuranceLevelCodes[keyof typeof IdentityAssuranceLevelCodes];
//# sourceMappingURL=IdentityAssuranceLevelCodes.d.ts.map