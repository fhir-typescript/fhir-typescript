import * as fhir from '../fhirJson.js';
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export interface PaymentNotice extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentNotice" | null;
    /**
     * A unique identifier assigned to this payment notice.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | null;
    /**
     * Extended properties for primitive element: PaymentNotice.status
     */
    _status?: fhir.FhirElement;
    /**
     * Reference of resource for which payment is being made.
     */
    request?: fhir.Reference | undefined;
    /**
     * Reference of response to resource for which payment is being made.
     */
    response?: fhir.Reference | undefined;
    /**
     * The date when this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: PaymentNotice.created
     */
    _created?: fhir.FhirElement;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * A reference to the payment which is the subject of this notice.
     */
    payment: fhir.Reference | null;
    /**
     * The date when the above payment action occurred.
     */
    paymentDate?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentNotice.paymentDate
     */
    _paymentDate?: fhir.FhirElement;
    /**
     * The party who will receive or has received payment that is the subject of this notification.
     */
    payee?: fhir.Reference | undefined;
    /**
     * The party who is notified of the payment status.
     */
    recipient: fhir.Reference | null;
    /**
     * The amount sent to the payee.
     */
    amount: fhir.Money | null;
    /**
     * Typically paid: payment sent, cleared: payment received.
     */
    paymentStatus?: fhir.CodeableConcept | undefined;
}
//# sourceMappingURL=PaymentNotice.d.ts.map