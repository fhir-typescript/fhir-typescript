/**
 * How an exception statement is applied, such as adding additional consent or removing consent
 */
export declare const ConsentExceptTypeCodes: {
    /**
     * deny: Consent is denied for actions meeting these rules
     */
    readonly OptOut: "deny";
    /**
     * permit: Consent is provided for actions meeting these rules
     */
    readonly OptIn: "permit";
};
/**
 * How an exception statement is applied, such as adding additional consent or removing consent
 */
export declare type ConsentExceptTypeCodeType = typeof ConsentExceptTypeCodes[keyof typeof ConsentExceptTypeCodes];
//# sourceMappingURL=ConsentExceptTypeCodes.d.ts.map