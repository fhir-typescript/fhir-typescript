/**
 * This value set includes Status codes.
 */
export declare const FmStatusCodes: {
    /**
     * active: The instance is currently in-force.
     */
    readonly Active: "active";
    /**
     * cancelled: The instance is withdrawn, rescinded or reversed.
     */
    readonly Cancelled: "cancelled";
    /**
     * draft: A new instance the contents of which is not complete.
     */
    readonly Draft: "draft";
    /**
     * entered-in-error: The instance was entered in error.
     */
    readonly EnteredInError: "entered-in-error";
};
/**
 * This value set includes Status codes.
 */
export declare type FmStatusCodeType = typeof FmStatusCodes[keyof typeof FmStatusCodes];
//# sourceMappingURL=FmStatusCodes.d.ts.map