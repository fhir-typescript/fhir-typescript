/**
 * This value set includes sample Payment Type codes.
 */
export declare const PaymentTypeCodes: {
    /**
     * adjustment: The amount is an adjustment regarding claims already paid.
     */
    readonly Adjustment: "adjustment";
    /**
     * advance: The amount is an advance against future claims.
     */
    readonly Advance: "advance";
    /**
     * payment: The amount is partial or complete settlement of the amounts due.
     */
    readonly Payment: "payment";
};
/**
 * This value set includes sample Payment Type codes.
 */
export declare type PaymentTypeCodeType = typeof PaymentTypeCodes[keyof typeof PaymentTypeCodes];
//# sourceMappingURL=PaymentTypeCodes.d.ts.map