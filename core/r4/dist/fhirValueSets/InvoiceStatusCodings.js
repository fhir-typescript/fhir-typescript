/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
var InvoiceStatusCodings = {
    /**
     * balanced: the invoice has been balaced / completely paid.
     */
    Balanced: new Coding({
        display: "balanced",
        code: "balanced",
        system: "http://hl7.org/fhir/invoice-status",
    }),
    /**
     * cancelled: the invoice was cancelled.
     */
    Cancelled: new Coding({
        display: "cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/invoice-status",
    }),
    /**
     * draft: the invoice has been prepared but not yet finalized.
     */
    Draft: new Coding({
        display: "draft",
        code: "draft",
        system: "http://hl7.org/fhir/invoice-status",
    }),
    /**
     * entered-in-error: the invoice was determined as entered in error before it was issued.
     */
    EnteredInError: new Coding({
        display: "entered in error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/invoice-status",
    }),
    /**
     * issued: the invoice has been finalized and sent to the recipient.
     */
    Issued: new Coding({
        display: "issued",
        code: "issued",
        system: "http://hl7.org/fhir/invoice-status",
    }),
};

export { InvoiceStatusCodings };
//# sourceMappingURL=InvoiceStatusCodings.js.map
