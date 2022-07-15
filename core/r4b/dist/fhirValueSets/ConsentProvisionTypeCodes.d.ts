/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export declare const ConsentProvisionTypeCodes: {
    /**
     * deny: Consent is denied for actions meeting these rules.
     */
    readonly OptOut: "deny";
    /**
     * permit: Consent is provided for actions meeting these rules.
     */
    readonly OptIn: "permit";
};
/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export declare type ConsentProvisionTypeCodeType = typeof ConsentProvisionTypeCodes[keyof typeof ConsentProvisionTypeCodes];
//# sourceMappingURL=ConsentProvisionTypeCodes.d.ts.map