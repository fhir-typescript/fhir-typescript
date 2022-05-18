/**
 * A code to indicate if the substance is actively used.
 */
export declare const SubstanceStatusCodes: {
    /**
     * active: The substance is considered for use or reference.
     */
    readonly Active: "active";
    /**
     * entered-in-error: The substance was entered in error.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * inactive: The substance is considered for reference, but not for use.
     */
    readonly Inactive: "inactive";
};
/**
 * A code to indicate if the substance is actively used.
 */
export declare type SubstanceStatusCodeType = typeof SubstanceStatusCodes[keyof typeof SubstanceStatusCodes];
//# sourceMappingURL=SubstanceStatusCodes.d.ts.map