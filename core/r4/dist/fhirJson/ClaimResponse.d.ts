import * as fhir from '../fhirJson.js';
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export interface ClaimResponseItemAdjudication extends fhir.BackboneElement {
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * For example may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * For example: amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.Money | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.adjudication.value
     */
    _value?: fhir.FhirElement;
}
/**
 * A sub-detail adjudication of a simple product or service.
 */
export interface ClaimResponseItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.subDetailSequence
     */
    _subDetailSequence?: fhir.FhirElement;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ClaimResponseItemAdjudication[] | undefined;
}
/**
 * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export interface ClaimResponseItemDetail extends fhir.BackboneElement {
    /**
     * A number to uniquely reference the claim detail entry.
     */
    detailSequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.detailSequence
     */
    _detailSequence?: fhir.FhirElement;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * A sub-detail adjudication of a simple product or service.
     */
    subDetail?: fhir.ClaimResponseItemDetailSubDetail[] | undefined;
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export interface ClaimResponseItem extends fhir.BackboneElement {
    /**
     * A number to uniquely reference the claim item entries.
     */
    itemSequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.itemSequence
     */
    _itemSequence?: fhir.FhirElement;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.ClaimResponseItemDetail[] | undefined;
}
/**
 * The third-tier service adjudications for payor added services.
 */
export interface ClaimResponseAddItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.subDetail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.subDetail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
}
/**
 * The second-tier service adjudications for payor added services.
 */
export interface ClaimResponseAddItemDetail extends fhir.BackboneElement {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.ClaimResponseAddItemDetailSubDetail[] | undefined;
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export interface ClaimResponseAddItem extends fhir.BackboneElement {
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.itemSequence
     */
    _itemSequence?: (fhir.FhirElement | null)[];
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detailSequence
     */
    _detailSequence?: (fhir.FhirElement | null)[];
    /**
     * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
     */
    subdetailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.subdetailSequence
     */
    _subdetailSequence?: (fhir.FhirElement | null)[];
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.Reference[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.serviced[x]
     */
    _servicedDate?: fhir.FhirElement;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Where the product or service was provided.
     */
    locationAddress?: fhir.Address | undefined;
    /**
     * Where the product or service was provided.
     */
    locationReference?: fhir.Reference | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * For example: Providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConcept[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.ClaimResponseAddItemDetail[] | undefined;
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export interface ClaimResponseTotal extends fhir.BackboneElement {
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.Money | null;
}
/**
 * Payment details for the adjudication of the claim.
 */
export interface ClaimResponsePayment extends fhir.BackboneElement {
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
     */
    adjustment?: fhir.Money | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.CodeableConcept | undefined;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.payment.date
     */
    _date?: fhir.FhirElement;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount: fhir.Money | null;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.Identifier | undefined;
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export interface ClaimResponseProcessNote extends fhir.BackboneElement {
    /**
     * A number to uniquely identify a note entry.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.number
     */
    _number?: fhir.FhirElement;
    /**
     * The business purpose of the note text.
     */
    type?: 'display' | 'print' | 'printoper' | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text: string | null;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.text
     */
    _text?: fhir.FhirElement;
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.CodeableConcept | undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface ClaimResponseInsurance extends fhir.BackboneElement {
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.focal
     */
    _focal?: fhir.FhirElement;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.businessArrangement
     */
    _businessArrangement?: fhir.FhirElement;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.Reference | undefined;
}
/**
 * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
 */
export interface ClaimResponseError extends fhir.BackboneElement {
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    itemSequence?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.itemSequence
     */
    _itemSequence?: fhir.FhirElement;
    /**
     * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    detailSequence?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.detailSequence
     */
    _detailSequence?: fhir.FhirElement;
    /**
     * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    subDetailSequence?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.subDetailSequence
     */
    _subDetailSequence?: fhir.FhirElement;
    /**
     * An error code, from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.CodeableConcept | null;
}
/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ClaimResponse";
    /**
     * A unique identifier assigned to this claim response.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | null;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    type: fhir.CodeableConcept | null;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: 'claim' | 'preauthorization' | 'predetermination' | null;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
     */
    patient: fhir.Reference | null;
    /**
     * The date this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: ClaimResponse.created
     */
    _created?: fhir.FhirElement;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.Reference | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.Reference | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: 'complete' | 'error' | 'partial' | 'queued' | null;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.disposition
     */
    _disposition?: fhir.FhirElement;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.preAuthRef
     */
    _preAuthRef?: fhir.FhirElement;
    /**
     * The time frame during which this authorization is effective.
     */
    preAuthPeriod?: fhir.Period | undefined;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    payeeType?: fhir.CodeableConcept | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.ClaimResponseItem[] | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.ClaimResponseAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.ClaimResponseItemAdjudication[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.ClaimResponseTotal[] | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.ClaimResponsePayment | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhir.CodeableConcept | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.CodeableConcept | undefined;
    /**
     * Needed to permit insurers to include the actual form.
     */
    form?: fhir.Attachment | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhir.ClaimResponseProcessNote[] | undefined;
    /**
     * For example: professional reports, documents, images, clinical resources, or accident reports.
     */
    communicationRequest?: fhir.Reference[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.ClaimResponseInsurance[] | undefined;
    /**
     * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
     */
    error?: fhir.ClaimResponseError[] | undefined;
}
//# sourceMappingURL=ClaimResponse.d.ts.map