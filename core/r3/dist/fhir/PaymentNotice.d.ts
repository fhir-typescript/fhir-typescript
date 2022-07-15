import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
/**
 * Valid arguments for the PaymentNotice type.
 */
export interface PaymentNoticeArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentNotice" | undefined;
    /**
     * The notice business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PaymentNotice.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Reference of resource for which payment is being made.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Reference of response to resource for which payment is being made.
     */
    response?: fhir.ReferenceArgs | undefined;
    /**
     * The date when the above payment action occurrred.
     */
    statusDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: PaymentNotice.statusDate
     */
    _statusDate?: fhir.FhirElementArgs;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: PaymentNotice.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The Insurer who is target  of the request.
     */
    target?: fhir.ReferenceArgs | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * The payment status, typically paid: payment sent, cleared: payment received.
     */
    paymentStatus?: fhir.CodeableConceptArgs | undefined;
}
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export declare class PaymentNotice extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "PaymentNotice";
    /**
     * The notice business identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | undefined;
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
    statusDate?: fhir.FhirDate | undefined;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | undefined;
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
    /**
     * Default constructor for PaymentNotice - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PaymentNoticeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=PaymentNotice.d.ts.map