import { Coding } from '../fhir/Coding.js';
/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
export declare const InvoiceStatusCodings: {
    /**
     * balanced: the invoice has been balaced / completely paid.
     */
    readonly Balanced: Coding;
    /**
     * cancelled: the invoice was cancelled.
     */
    readonly Cancelled: Coding;
    /**
     * draft: the invoice has been prepared but not yet finalized.
     */
    readonly Draft: Coding;
    /**
     * entered-in-error: the invoice was determined as entered in error before it was issued.
     */
    readonly EnteredInError: Coding;
    /**
     * issued: the invoice has been finalized and sent to the recipient.
     */
    readonly Issued: Coding;
};
/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
export declare type InvoiceStatusCodingType = typeof InvoiceStatusCodings;
//# sourceMappingURL=InvoiceStatusCodings.d.ts.map