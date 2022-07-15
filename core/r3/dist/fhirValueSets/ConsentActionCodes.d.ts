/**
 * This value set includes sample Consent Action codes.
 */
export declare const ConsentActionCodes: {
    /**
     * access: Provide an entity access to information to achieve a stated purpose
     */
    readonly Access: "access";
    /**
     * collect: Gather/acquire information by an entity to achieve a stated purpose
     */
    readonly Collect: "collect";
    /**
     * correct: Allowing an entity to correct a patient's information
     */
    readonly AccessAndCorrect: "correct";
    /**
     * disclose: Release / transfer of information to an entity
     */
    readonly Disclose: "disclose";
    /**
     * use: Use of stored information by an entity fo the stated purpose
     */
    readonly Use: "use";
};
/**
 * This value set includes sample Consent Action codes.
 */
export declare type ConsentActionCodeType = typeof ConsentActionCodes[keyof typeof ConsentActionCodes];
//# sourceMappingURL=ConsentActionCodes.d.ts.map