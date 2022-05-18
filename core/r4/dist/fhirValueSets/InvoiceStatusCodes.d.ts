/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
export declare const InvoiceStatusCodes: {
    /**
     * balanced: the invoice has been balaced / completely paid.
     */
    readonly Balanced: "balanced";
    /**
     * cancelled: the invoice was cancelled.
     */
    readonly Cancelled: "cancelled";
    /**
     * draft: the invoice has been prepared but not yet finalized.
     */
    readonly Draft: "draft";
    /**
     * entered-in-error: the invoice was determined as entered in error before it was issued.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * issued: the invoice has been finalized and sent to the recipient.
     */
    readonly Issued: "issued";
};
/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
export declare type InvoiceStatusCodeType = typeof InvoiceStatusCodes[keyof typeof InvoiceStatusCodes];
//# sourceMappingURL=InvoiceStatusCodes.d.ts.map