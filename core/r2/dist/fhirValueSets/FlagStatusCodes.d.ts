/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or entered in error.
 */
export declare const FlagStatusCodes: {
    /**
     * active: A current flag that should be displayed to a user. A system may use the category to determine which roles should view the flag.
     */
    readonly Active: "active";
    /**
     * entered-in-error: The flag was added in error, and should no longer be displayed.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * inactive: The flag does not need to be displayed any more.
     */
    readonly Inactive: "inactive";
};
/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or entered in error.
 */
export declare type FlagStatusCodeType = typeof FlagStatusCodes[keyof typeof FlagStatusCodes];
//# sourceMappingURL=FlagStatusCodes.d.ts.map