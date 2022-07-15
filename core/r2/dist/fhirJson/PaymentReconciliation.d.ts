import * as fhir from '../fhirJson.js';
/**
 * List of individual settlement amounts and the corresponding transaction.
 */
export interface PaymentReconciliationDetail extends fhir.BackboneElement {
    /**
     * Code to indicate the nature of the payment, adjustment, funds advance, etc.
     */
    type: fhir.Coding | null;
    /**
     * The claim or financial resource.
     */
    request?: fhir.Reference | undefined;
    /**
     * The claim response resource.
     */
    responce?: fhir.Reference | undefined;
    /**
     * The Organization which submitted the invoice or financial transaction.
     */
    submitter?: fhir.Reference | undefined;
    /**
     * The organization which is receiving the payment.
     */
    payee?: fhir.Reference | undefined;
    /**
     * The date of the invoice or financial resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.detail.date
     */
    _date?: fhir.FhirElement;
    /**
     * Amount paid for this detail.
     */
    amount?: fhir.Quantity | undefined;
}
/**
 * Suite of notes.
 */
export interface PaymentReconciliationNote extends fhir.BackboneElement {
    /**
     * The note purpose: Print/Display.
     */
    type?: 'display' | 'print' | 'printoper' | undefined;
    /**
     * The note text.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.note.text
     */
    _text?: fhir.FhirElement;
}
/**
 * This resource provides payment details and claim references supporting a bulk payment.
 */
export interface PaymentReconciliation extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentReconciliation" | null;
    /**
     * The Response business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: 'complete' | 'error' | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.outcome
     */
    _outcome?: fhir.FhirElement;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.disposition
     */
    _disposition?: fhir.FhirElement;
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.Coding | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.Coding | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.created
     */
    _created?: fhir.FhirElement;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.Period | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.Reference | undefined;
    /**
     * List of individual settlement amounts and the corresponding transaction.
     */
    detail?: (fhir.PaymentReconciliationDetail | null)[] | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.Coding | undefined;
    /**
     * Total payment amount.
     */
    total: fhir.Quantity | null;
    /**
     * Suite of notes.
     */
    note?: (fhir.PaymentReconciliationNote | null)[] | undefined;
}
//# sourceMappingURL=PaymentReconciliation.d.ts.map