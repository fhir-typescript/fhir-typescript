import * as fhir from '../fhir.js';
import { RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
/**
 * Valid arguments for the PaymentReconciliationDetail type.
 */
export interface PaymentReconciliationDetailArgs extends fhir.BackboneElementArgs {
    /**
     * Code to indicate the nature of the payment, adjustment, funds advance, etc.
     */
    type: fhir.CodingArgs | null;
    /**
     * The claim or financial resource.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * The claim response resource.
     */
    responce?: fhir.ReferenceArgs | undefined;
    /**
     * The Organization which submitted the invoice or financial transaction.
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
    amount?: fhir.QuantityArgs | undefined;
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
    date?: fhir.FhirDate | undefined;
    /**
     * Amount paid for this detail.
     */
    amount?: fhir.Quantity | undefined;
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
 * Valid arguments for the PaymentReconciliationNote type.
 */
export interface PaymentReconciliationNoteArgs extends fhir.BackboneElementArgs {
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.note.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * Suite of notes.
 */
export declare class PaymentReconciliationNote extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.Coding | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for PaymentReconciliationNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PaymentReconciliationNoteArgs>, options?: fhir.FhirConstructorOptions);
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
     * Original request resource reference.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: fhir.FhirCode<RemittanceOutcomeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.outcome
     */
    _outcome?: fhir.FhirElementArgs;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.disposition
     */
    _disposition?: fhir.FhirElementArgs;
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.CodingArgs | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.CodingArgs | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhir.ReferenceArgs | undefined;
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
    form?: fhir.CodingArgs | undefined;
    /**
     * Total payment amount.
     */
    total: fhir.QuantityArgs | null;
    /**
     * Suite of notes.
     */
    note?: fhir.PaymentReconciliationNoteArgs[] | undefined;
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
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: fhir.FhirCode<RemittanceOutcomeCodeType> | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | undefined;
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
    created?: fhir.FhirDateTime | undefined;
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
    detail: fhir.PaymentReconciliationDetail[];
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
    note: fhir.PaymentReconciliationNote[];
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