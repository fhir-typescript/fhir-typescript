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
     * The Response business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.Coding | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.Coding | undefined;
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
     * Reference of resource to reverse.
     */
    request?: fhir.Reference | undefined;
    /**
     * Reference of response to resource to reverse.
     */
    response?: fhir.Reference | undefined;
    /**
     * The payment status, typically paid: payment sent, cleared: payment received.
     */
    paymentStatus: fhir.Coding | null;
}
//# sourceMappingURL=PaymentNotice.d.ts.map