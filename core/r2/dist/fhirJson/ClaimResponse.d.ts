import * as fhir from '../fhirJson.js';
/**
 * The adjudications results.
 */
export interface ClaimResponseItemAdjudication extends fhir.BackboneElement {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    code: fhir.Coding | null;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.adjudication.value
     */
    _value?: fhir.FhirElement;
}
/**
 * The adjudications results.
 */
export interface ClaimResponseItemDetailAdjudication extends fhir.BackboneElement {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    code: fhir.Coding | null;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.adjudication.value
     */
    _value?: fhir.FhirElement;
}
/**
 * The adjudications results.
 */
export interface ClaimResponseItemDetailSubDetailAdjudication extends fhir.BackboneElement {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    code: fhir.Coding | null;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.adjudication.value
     */
    _value?: fhir.FhirElement;
}
/**
 * The third tier service adjudications for submitted services.
 */
export interface ClaimResponseItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * A service line number.
     */
    sequenceLinkId: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.sequenceLinkId
     */
    _sequenceLinkId?: fhir.FhirElement;
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ClaimResponseItemDetailSubDetailAdjudication | null)[] | undefined;
}
/**
 * The second tier service adjudications for submitted services.
 */
export interface ClaimResponseItemDetail extends fhir.BackboneElement {
    /**
     * A service line number.
     */
    sequenceLinkId: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.sequenceLinkId
     */
    _sequenceLinkId?: fhir.FhirElement;
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ClaimResponseItemDetailAdjudication | null)[] | undefined;
    /**
     * The third tier service adjudications for submitted services.
     */
    subDetail?: (fhir.ClaimResponseItemDetailSubDetail | null)[] | undefined;
}
/**
 * The first tier service adjudications for submitted services.
 */
export interface ClaimResponseItem extends fhir.BackboneElement {
    /**
     * A service line number.
     */
    sequenceLinkId: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.sequenceLinkId
     */
    _sequenceLinkId?: fhir.FhirElement;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ClaimResponseItemAdjudication | null)[] | undefined;
    /**
     * The second tier service adjudications for submitted services.
     */
    detail?: (fhir.ClaimResponseItemDetail | null)[] | undefined;
}
/**
 * The adjudications results.
 */
export interface ClaimResponseAddItemAdjudication extends fhir.BackboneElement {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    code: fhir.Coding | null;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.adjudication.value
     */
    _value?: fhir.FhirElement;
}
/**
 * The adjudications results.
 */
export interface ClaimResponseAddItemDetailAdjudication extends fhir.BackboneElement {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    code: fhir.Coding | null;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.adjudication.value
     */
    _value?: fhir.FhirElement;
}
/**
 * The second tier service adjudications for payor added services.
 */
export interface ClaimResponseAddItemDetail extends fhir.BackboneElement {
    /**
     * A code to indicate the Professional Service or Product supplied.
     */
    service: fhir.Coding | null;
    /**
     * The fee charged for the professional service or product..
     */
    fee?: fhir.Quantity | undefined;
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ClaimResponseAddItemDetailAdjudication | null)[] | undefined;
}
/**
 * The first tier service adjudications for payor added services.
 */
export interface ClaimResponseAddItem extends fhir.BackboneElement {
    /**
     * List of input service items which this service line is intended to replace.
     */
    sequenceLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.sequenceLinkId
     */
    _sequenceLinkId?: (fhir.FhirElement | null)[];
    /**
     * A code to indicate the Professional Service or Product supplied.
     */
    service: fhir.Coding | null;
    /**
     * The fee charged for the professional service or product..
     */
    fee?: fhir.Quantity | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumberLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.noteNumberLinkId
     */
    _noteNumberLinkId?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ClaimResponseAddItemAdjudication | null)[] | undefined;
    /**
     * The second tier service adjudications for payor added services.
     */
    detail?: (fhir.ClaimResponseAddItemDetail | null)[] | undefined;
}
/**
 * Mutually exclusive with Services Provided (Item).
 */
export interface ClaimResponseError extends fhir.BackboneElement {
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.
     */
    sequenceLinkId?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.sequenceLinkId
     */
    _sequenceLinkId?: fhir.FhirElement;
    /**
     * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
     */
    detailSequenceLinkId?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.detailSequenceLinkId
     */
    _detailSequenceLinkId?: fhir.FhirElement;
    /**
     * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
     */
    subdetailSequenceLinkId?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.subdetailSequenceLinkId
     */
    _subdetailSequenceLinkId?: fhir.FhirElement;
    /**
     * An error code,froma specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.Coding | null;
}
/**
 * Note text.
 */
export interface ClaimResponseNote extends fhir.BackboneElement {
    /**
     * An integer associated with each note which may be referred to from each service line item.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.note.number
     */
    _number?: fhir.FhirElement;
    /**
     * The note purpose: Print/Display.
     */
    type?: 'display' | 'print' | 'printoper' | undefined;
    /**
     * The note text.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.note.text
     */
    _text?: fhir.FhirElement;
}
/**
 * Health care programs and insurers are significant payors of health service costs.
 */
export interface ClaimResponseCoverage extends fhir.BackboneElement {
    /**
     * To maintain order of the coverages.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.coverage.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * To identify which coverage is being adjudicated.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: ClaimResponse.coverage.focal
     */
    _focal?: fhir.FhirElement;
    /**
     * Need to identify the issuer to target for processing and for coordination of benefit processing.
     */
    coverage: fhir.Reference | null;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.coverage.businessArrangement
     */
    _businessArrangement?: fhir.FhirElement;
    /**
     * To determine the relationship between the patient and the subscriber.
     */
    relationship: fhir.Coding | null;
    /**
     * To provide any pre-determination or prior authorization reference.
     */
    preAuthRef?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.coverage.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElement | null)[];
    /**
     * Used by downstream payers to determine what balance remains and the net payable.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.Coding | undefined;
}
/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ClaimResponse" | null;
    /**
     * The Response business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Original request resource referrence.
     */
    request?: fhir.Reference | undefined;
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
     * Extended properties for primitive element: ClaimResponse.created
     */
    _created?: fhir.FhirElement;
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
     * Transaction status: error, complete.
     */
    outcome?: 'complete' | 'error' | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.outcome
     */
    _outcome?: fhir.FhirElement;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.disposition
     */
    _disposition?: fhir.FhirElement;
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    payeeType?: fhir.Coding | undefined;
    /**
     * The first tier service adjudications for submitted services.
     */
    item?: (fhir.ClaimResponseItem | null)[] | undefined;
    /**
     * The first tier service adjudications for payor added services.
     */
    addItem?: (fhir.ClaimResponseAddItem | null)[] | undefined;
    /**
     * Mutually exclusive with Services Provided (Item).
     */
    error?: (fhir.ClaimResponseError | null)[] | undefined;
    /**
     * This is a check value that the receiver calculates and returns.
     */
    totalCost?: fhir.Quantity | undefined;
    /**
     * The amount of deductible applied which was not allocated to any particular service line.
     */
    unallocDeductable?: fhir.Quantity | undefined;
    /**
     * Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible).
     */
    totalBenefit?: fhir.Quantity | undefined;
    /**
     * Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
     */
    paymentAdjustment?: fhir.Quantity | undefined;
    /**
     * Reason for the payment adjustment.
     */
    paymentAdjustmentReason?: fhir.Coding | undefined;
    /**
     * Estimated payment data.
     */
    paymentDate?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.paymentDate
     */
    _paymentDate?: fhir.FhirElement;
    /**
     * Payable less any payment adjustment.
     */
    paymentAmount?: fhir.Quantity | undefined;
    /**
     * Payment identifier.
     */
    paymentRef?: fhir.Identifier | undefined;
    /**
     * Status of funds reservation (For provider, for Patient, None).
     */
    reserved?: fhir.Coding | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.Coding | undefined;
    /**
     * Note text.
     */
    note?: (fhir.ClaimResponseNote | null)[] | undefined;
    /**
     * Health care programs and insurers are significant payors of health service costs.
     */
    coverage?: (fhir.ClaimResponseCoverage | null)[] | undefined;
}
//# sourceMappingURL=ClaimResponse.d.ts.map