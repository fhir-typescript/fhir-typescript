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
     * The notice business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
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
     * The date when the above payment action occurrred.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentNotice.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentNotice.created
     */
    _created?: fhir.FhirElement;
    /**
     * The Insurer who is target  of the request.
     */
    target?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The payment status, typically paid: payment sent, cleared: payment received.
     */
    paymentStatus?: fhir.CodeableConcept | undefined;
}
//# sourceMappingURL=PaymentNotice.d.ts.map