import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
/**
 * Valid arguments for the PaymentReconciliationDetail type.
 */
export interface PaymentReconciliationDetailArgs extends fhir.BackboneElementArgs {
    /**
     * Code to indicate the nature of the payment, adjustment, funds advance, etc.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The claim or financial resource.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * The claim response resource.
     */
    response?: fhir.ReferenceArgs | undefined;
    /**
     * The Organization which submitted the claim or financial transaction.
     */
    submitter?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is receiving the payment.
     */
    payee?: fhir.ReferenceArgs | undefined;
    /**
     * The date of the invoice or financial resource.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.detail.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Amount paid for this detail.
     */
    amount?: fhir.MoneyArgs | undefined;
}
/**
 * List of individual settlement amounts and the corresponding transaction.
 */
export declare class PaymentReconciliationDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Code to indicate the nature of the payment, adjustment, funds advance, etc.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The claim or financial resource.
     */
    request?: fhir.Reference | undefined;
    /**
     * The claim response resource.
     */
    response?: fhir.Reference | undefined;
    /**
     * The Organization which submitted the claim or financial transaction.
     */
    submitter?: fhir.Reference | undefined;
    /**
     * The organization which is receiving the payment.
     */
    payee?: fhir.Reference | undefined;
    /**
     * The date of the invoice or financial resource.
     */
    date?: fhir.FhirDate | undefined;
    /**
     * Amount paid for this detail.
     */
    amount?: fhir.Money | undefined;
    /**
     * Default constructor for PaymentReconciliationDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PaymentReconciliationDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PaymentReconciliationProcessNote type.
 */
export interface PaymentReconciliationProcessNoteArgs extends fhir.BackboneElementArgs {
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.processNote.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * Suite of notes.
 */
export declare class PaymentReconciliationProcessNote extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for PaymentReconciliationProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PaymentReconciliationProcessNoteArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PaymentReconciliation type.
 */
export interface PaymentReconciliationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentReconciliation" | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.disposition
     */
    _disposition?: fhir.FhirElementArgs;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * List of individual settlement amounts and the corresponding transaction.
     */
    detail?: fhir.PaymentReconciliationDetailArgs[] | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodeableConceptArgs | undefined;
    /**
     * Total payment amount.
     */
    total?: fhir.MoneyArgs | undefined;
    /**
     * Suite of notes.
     */
    processNote?: fhir.PaymentReconciliationProcessNoteArgs[] | undefined;
}
/**
 * This resource provides payment details and claim references supporting a bulk payment.
 */
export declare class PaymentReconciliation extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "PaymentReconciliation";
    /**
     * The Response business identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | undefined;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.Period | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhir.Reference | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | undefined;
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
    detail: fhir.PaymentReconciliationDetail[];
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * Total payment amount.
     */
    total?: fhir.Money | undefined;
    /**
     * Suite of notes.
     */
    processNote: fhir.PaymentReconciliationProcessNote[];
    /**
     * Default constructor for PaymentReconciliation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PaymentReconciliationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=PaymentReconciliation.d.ts.map