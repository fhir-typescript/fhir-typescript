/**
 * This value set includes a sample set of Payment Status codes.
 */
export declare const PaymentStatusCodes: {
    /**
     * cleared: The payment has been received by the payee.
     */
    readonly Cleared: "cleared";
    /**
     * paid: The payment has been sent physically or electronically.
     */
    readonly Paid: "paid";
};
/**
 * This value set includes a sample set of Payment Status codes.
 */
export declare type PaymentStatusCodeType = typeof PaymentStatusCodes[keyof typeof PaymentStatusCodes];
//# sourceMappingURL=PaymentStatusCodes.d.ts.map