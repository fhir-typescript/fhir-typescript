import * as fhir from '../fhirJson.js';
/**
 * The adjudication results.
 */
export interface ClaimResponseItemAdjudication extends fhir.BackboneElement {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Adjudication reason such as limit reached.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.Money | undefined;
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
     * A list of note references to the notes provided below.
     */
    noteNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ClaimResponseItemAdjudication | null)[] | undefined;
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
     * A list of note references to the notes provided below.
     */
    noteNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ClaimResponseItemAdjudication | null)[] | undefined;
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
     * The adjudication results.
     */
    adjudication?: (fhir.ClaimResponseItemAdjudication | null)[] | undefined;
    /**
     * The second tier service adjudications for submitted services.
     */
    detail?: (fhir.ClaimResponseItemDetail | null)[] | undefined;
}
/**
 * The second tier service adjudications for payor added services.
 */
export interface ClaimResponseAddItemDetail extends fhir.BackboneElement {
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * A code to indicate the Professional Service or Product supplied.
     */
    service?: fhir.CodeableConcept | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The fee charged for the professional service or product..
     */
    fee?: fhir.Money | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ClaimResponseItemAdjudication | null)[] | undefined;
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
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * A code to indicate the Professional Service or Product supplied.
     */
    service?: fhir.CodeableConcept | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The fee charged for the professional service or product..
     */
    fee?: fhir.Money | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ClaimResponseItemAdjudication | null)[] | undefined;
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
     * An error code,from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.CodeableConcept | null;
}
/**
 * Payment details for the claim if the claim has been paid.
 */
export interface ClaimResponsePayment extends fhir.BackboneElement {
    /**
     * Whether this represents partial or complete payment of the claim.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
     */
    adjustment?: fhir.Money | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.CodeableConcept | undefined;
    /**
     * Estimated payment data.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.payment.date
     */
    _date?: fhir.FhirElement;
    /**
     * Payable less any payment adjustment.
     */
    amount?: fhir.Money | undefined;
    /**
     * Payment identifier.
     */
    identifier?: fhir.Identifier | undefined;
}
/**
 * Note text.
 */
export interface ClaimResponseProcessNote extends fhir.BackboneElement {
    /**
     * An integer associated with each note which may be referred to from each service line item.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.number
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
     * Extended properties for primitive element: ClaimResponse.processNote.text
     */
    _text?: fhir.FhirElement;
    /**
     * The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
     */
    language?: fhir.CodeableConcept | undefined;
}
/**
 * Financial instrument by which payment information for health care.
 */
export interface ClaimResponseInsurance extends fhir.BackboneElement {
    /**
     * A service line item.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.focal
     */
    _focal?: fhir.FhirElement;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage: fhir.Reference | null;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.businessArrangement
     */
    _businessArrangement?: fhir.FhirElement;
    /**
     * A list of references from the Insurer to which these services pertain.
     */
    preAuthRef?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElement | null)[];
    /**
     * The Coverages adjudication details.
     */
    claimResponse?: fhir.Reference | undefined;
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
     * This element is labeled as a modifier because the status contains the code cancelled and entered-in-error that mark the response as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.status
     */
    _status?: fhir.FhirElement;
    /**
     * Patient Resource.
     */
    patient?: fhir.Reference | undefined;
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
    insurer?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.Reference | undefined;
    /**
     * Original request resource referrence.
     */
    request?: fhir.Reference | undefined;
    /**
     * Processing outcome errror, partial or complete processing.
     */
    outcome?: fhir.CodeableConcept | undefined;
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
    payeeType?: fhir.CodeableConcept | undefined;
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
     * The total cost of the services reported.
     */
    totalCost?: fhir.Money | undefined;
    /**
     * The amount of deductible applied which was not allocated to any particular service line.
     */
    unallocDeductable?: fhir.Money | undefined;
    /**
     * Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible).
     */
    totalBenefit?: fhir.Money | undefined;
    /**
     * Payment details for the claim if the claim has been paid.
     */
    payment?: fhir.ClaimResponsePayment | undefined;
    /**
     * Status of funds reservation (For provider, for Patient, None).
     */
    reserved?: fhir.Coding | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * Note text.
     */
    processNote?: (fhir.ClaimResponseProcessNote | null)[] | undefined;
    /**
     * Request for additional supporting or authorizing information, such as: documents, images or resources.
     */
    communicationRequest?: (fhir.Reference | null)[] | undefined;
    /**
     * Financial instrument by which payment information for health care.
     */
    insurance?: (fhir.ClaimResponseInsurance | null)[] | undefined;
}
//# sourceMappingURL=ClaimResponse.d.ts.map