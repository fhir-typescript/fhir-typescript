/**
 * This value set includes sample Payee Type codes.
 */
export declare const PayeetypeCodes: {
    /**
     * other: Any benefit payable will be paid to a third party such as a guarrantor.
     */
    readonly Provider: "other";
    /**
     * provider: Any benefit payable will be paid to the provider (Assignment of Benefit).
     */
    readonly ProviderProvider: "provider";
    /**
     * subscriber: The subscriber (policy holder) will be reimbursed.
     */
    readonly Subscriber: "subscriber";
};
/**
 * This value set includes sample Payee Type codes.
 */
export declare type PayeetypeCodeType = typeof PayeetypeCodes[keyof typeof PayeetypeCodes];
//# sourceMappingURL=PayeetypeCodes.d.ts.map