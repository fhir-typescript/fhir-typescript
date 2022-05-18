/**
 * This value set includes sample Consent Action codes.
 */
export declare const ConsentActionCodes: {
    /**
     * access: Retrieval without permitting collection, use or disclosure. e.g., no screen-scraping for collection, use or disclosure (view-only access)
     */
    readonly Access: "access";
    /**
     * collect: Gather retrieved information for storage
     */
    readonly Collect: "collect";
    /**
     * correct: Allow retrieval of a patient's information for the purpose of update or rectify
     */
    readonly AccessAndCorrect: "correct";
    /**
     * disclose: Transfer retrieved information
     */
    readonly Disclose: "disclose";
    /**
     * use: Utilize the retrieved information
     */
    readonly Use: "use";
};
/**
 * This value set includes sample Consent Action codes.
 */
export declare type ConsentActionCodeType = typeof ConsentActionCodes[keyof typeof ConsentActionCodes];
//# sourceMappingURL=ConsentActionCodes.d.ts.map