import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
export declare type InvoiceStatusCodingType = {
    /**
     * balanced: the invoice has been balaced / completely paid.
     */
    Balanced: CodingArgs;
    /**
     * cancelled: the invoice was cancelled.
     */
    Cancelled: CodingArgs;
    /**
     * draft: the invoice has been prepared but not yet finalized.
     */
    Draft: CodingArgs;
    /**
     * entered-in-error: the invoice was determined as entered in error before it was issued.
     */
    EnteredInError: CodingArgs;
    /**
     * issued: the invoice has been finalized and sent to the recipient.
     */
    Issued: CodingArgs;
};
/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
export declare const InvoiceStatusCodings: InvoiceStatusCodingType;
//# sourceMappingURL=InvoiceStatusCodings.d.ts.map