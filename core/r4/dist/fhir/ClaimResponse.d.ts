import * as fhir from '../fhir.js';
import { NoteTypeCodeType } from '../fhirValueSets/NoteTypeCodes.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
import { ClaimUseCodeType } from '../fhirValueSets/ClaimUseCodes.js';
import { RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
/**
 * Valid arguments for the ClaimResponseItemAdjudication type.
 */
export interface ClaimResponseItemAdjudicationArgs extends fhir.BackboneElementArgs {
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * For example may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example: amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.MoneyArgs | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: fhir.FhirDecimal | number | undefined;
}
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare class ClaimResponseItemAdjudication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    value?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for ClaimResponseItemAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseItemAdjudicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseItemDetailSubDetail type.
 */
export interface ClaimResponseItemDetailSubDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ClaimResponseItemAdjudicationArgs[] | undefined;
}
/**
 * A sub-detail adjudication of a simple product or service.
 */
export declare class ClaimResponseItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence: fhir.FhirPositiveInt | null;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * Default constructor for ClaimResponseItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseItemDetailSubDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseItemDetail type.
 */
export interface ClaimResponseItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely reference the claim detail entry.
     */
    detailSequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudicationArgs[] | null;
    /**
     * A sub-detail adjudication of a simple product or service.
     */
    subDetail?: fhir.ClaimResponseItemDetailSubDetailArgs[] | undefined;
}
/**
 * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimResponseItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely reference the claim detail entry.
     */
    detailSequence: fhir.FhirPositiveInt | null;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * A sub-detail adjudication of a simple product or service.
     */
    subDetail: fhir.ClaimResponseItemDetailSubDetail[];
    /**
     * Default constructor for ClaimResponseItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseItem type.
 */
export interface ClaimResponseItemArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely reference the claim item entries.
     */
    itemSequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication: fhir.ClaimResponseItemAdjudicationArgs[] | null;
    /**
     * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.ClaimResponseItemDetailArgs[] | undefined;
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare class ClaimResponseItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely reference the claim item entries.
     */
    itemSequence: fhir.FhirPositiveInt | null;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail: fhir.ClaimResponseItemDetail[];
    /**
     * Default constructor for ClaimResponseItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseAddItemDetailSubDetail type.
 */
export interface ClaimResponseAddItemDetailSubDetailArgs extends fhir.BackboneElementArgs {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConceptArgs | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudicationArgs[] | null;
}
/**
 * The third-tier service adjudications for payor added services.
 */
export declare class ClaimResponseAddItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier: fhir.CodeableConcept[];
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
    factor?: fhir.FhirDecimal | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * Default constructor for ClaimResponseAddItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseAddItemDetailSubDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseAddItemDetail type.
 */
export interface ClaimResponseAddItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConceptArgs | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudicationArgs[] | null;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.ClaimResponseAddItemDetailSubDetailArgs[] | undefined;
}
/**
 * The second-tier service adjudications for payor added services.
 */
export declare class ClaimResponseAddItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier: fhir.CodeableConcept[];
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
    factor?: fhir.FhirDecimal | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail: fhir.ClaimResponseAddItemDetailSubDetail[];
    /**
     * Default constructor for ClaimResponseAddItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseAddItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseAddItem type.
 */
export interface ClaimResponseAddItemArgs extends fhir.BackboneElementArgs {
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
     */
    subdetailSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.ReferenceArgs[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConceptArgs | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    serviced?: fhir.FhirDate | fhir.Period | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: fhir.FhirDate | string | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Where the product or service was provided.
     */
    location?: fhir.CodeableConcept | fhir.Address | fhir.Reference | undefined;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Where the product or service was provided.
     */
    locationAddress?: fhir.AddressArgs | undefined;
    /**
     * Where the product or service was provided.
     */
    locationReference?: fhir.ReferenceArgs | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * For example: Providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudicationArgs[] | null;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.ClaimResponseAddItemDetailArgs[] | undefined;
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare class ClaimResponseAddItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence: fhir.FhirPositiveInt[];
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence: fhir.FhirPositiveInt[];
    /**
     * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
     */
    subdetailSequence: fhir.FhirPositiveInt[];
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider: fhir.Reference[];
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier: fhir.CodeableConcept[];
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode: fhir.CodeableConcept[];
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    serviced?: (fhir.FhirDate | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ClaimResponse.addItem.serviced[x]
     */
    protected static readonly _fts_servicedIsChoice: true;
    /**
     * Where the product or service was provided.
     */
    location?: (fhir.CodeableConcept | fhir.Address | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ClaimResponse.addItem.location[x]
     */
    protected static readonly _fts_locationIsChoice: true;
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
    factor?: fhir.FhirDecimal | undefined;
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
    subSite: fhir.CodeableConcept[];
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail: fhir.ClaimResponseAddItemDetail[];
    /**
     * Default constructor for ClaimResponseAddItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseAddItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseTotal type.
 */
export interface ClaimResponseTotalArgs extends fhir.BackboneElementArgs {
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.MoneyArgs | null;
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare class ClaimResponseTotal extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.Money | null;
    /**
     * Default constructor for ClaimResponseTotal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseTotalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponsePayment type.
 */
export interface ClaimResponsePaymentArgs extends fhir.BackboneElementArgs {
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
     */
    adjustment?: fhir.MoneyArgs | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount: fhir.MoneyArgs | null;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.IdentifierArgs | undefined;
}
/**
 * Payment details for the adjudication of the claim.
 */
export declare class ClaimResponsePayment extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    date?: fhir.FhirDate | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount: fhir.Money | null;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Default constructor for ClaimResponsePayment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponsePaymentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseProcessNote type.
 */
export interface ClaimResponseProcessNoteArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify a note entry.
     */
    number?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: fhir.FhirCode<NoteTypeCodeType> | string | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text: fhir.FhirString | string | undefined;
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.CodeableConceptArgs | undefined;
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare class ClaimResponseProcessNote extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify a note entry.
     */
    number?: fhir.FhirPositiveInt | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: fhir.FhirCode<NoteTypeCodeType> | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text: fhir.FhirString | null;
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimResponseProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseProcessNoteArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (ClaimResponse.processNote.type)
     */
    static get typeRequiredCodes(): {
        readonly Display: "display";
        readonly PrintForm: "print";
        readonly PrintOperator: "printoper";
    };
    /**
     * Preferred-bound Value Set for language (ClaimResponse.processNote.language)
     */
    static get languagePreferredCodings(): {
        readonly Arabic: fhir.Coding;
        readonly Bengali: fhir.Coding;
        readonly Czech: fhir.Coding;
        readonly Danish: fhir.Coding;
        readonly German: fhir.Coding;
        readonly GermanAustria: fhir.Coding;
        readonly GermanSwitzerland: fhir.Coding;
        readonly GermanGermany: fhir.Coding;
        readonly Greek: fhir.Coding;
        readonly English: fhir.Coding;
        readonly EnglishAustralia: fhir.Coding;
        readonly EnglishCanada: fhir.Coding;
        readonly EnglishGreatBritain: fhir.Coding;
        readonly EnglishIndia: fhir.Coding;
        readonly EnglishNewZeland: fhir.Coding;
        readonly EnglishSingapore: fhir.Coding;
        readonly EnglishUnitedStates: fhir.Coding;
        readonly Spanish: fhir.Coding;
        readonly SpanishArgentina: fhir.Coding;
        readonly SpanishSpain: fhir.Coding;
        readonly SpanishUruguay: fhir.Coding;
        readonly Finnish: fhir.Coding;
        readonly French: fhir.Coding;
        readonly FrenchBelgium: fhir.Coding;
        readonly FrenchSwitzerland: fhir.Coding;
        readonly FrenchFrance: fhir.Coding;
        readonly Frysian: fhir.Coding;
        readonly FrysianNetherlands: fhir.Coding;
        readonly Hindi: fhir.Coding;
        readonly Croatian: fhir.Coding;
        readonly Italian: fhir.Coding;
        /**
         * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
         */
        readonly ItalianSwitzerland: fhir.Coding;
        readonly ItalianItaly: fhir.Coding;
        readonly Japanese: fhir.Coding;
        readonly Korean: fhir.Coding;
        readonly Dutch: fhir.Coding;
        readonly DutchBelgium: fhir.Coding;
        readonly DutchNetherlands: fhir.Coding;
        readonly Norwegian: fhir.Coding;
        readonly NorwegianNorway: fhir.Coding;
        readonly Punjabi: fhir.Coding;
        readonly Polish: fhir.Coding;
        readonly Portuguese: fhir.Coding;
        readonly PortugueseBrazil: fhir.Coding;
        readonly Russian: fhir.Coding;
        readonly RussianRussia: fhir.Coding;
        readonly Serbian: fhir.Coding;
        readonly SerbianSerbia: fhir.Coding;
        readonly Swedish: fhir.Coding;
        readonly SwedishSweden: fhir.Coding;
        readonly Telegu: fhir.Coding;
        readonly Chinese: fhir.Coding;
        readonly ChineseChina: fhir.Coding;
        readonly ChineseHongKong: fhir.Coding;
        readonly ChineseSingapore: fhir.Coding;
        readonly ChineseTaiwan: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseInsurance type.
 */
export interface ClaimResponseInsuranceArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: fhir.FhirBoolean | boolean | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.ReferenceArgs | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: fhir.FhirString | string | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.ReferenceArgs | undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ClaimResponseInsurance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: fhir.FhirBoolean | null;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: fhir.FhirString | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimResponseInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseInsuranceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseError type.
 */
export interface ClaimResponseErrorArgs extends fhir.BackboneElementArgs {
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    itemSequence?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    detailSequence?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    subDetailSequence?: fhir.FhirPositiveInt | number | undefined;
    /**
     * An error code, from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.CodeableConceptArgs | null;
}
/**
 * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
 */
export declare class ClaimResponseError extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    itemSequence?: fhir.FhirPositiveInt | undefined;
    /**
     * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    detailSequence?: fhir.FhirPositiveInt | undefined;
    /**
     * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    subDetailSequence?: fhir.FhirPositiveInt | undefined;
    /**
     * An error code, from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Default constructor for ClaimResponseError - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseErrorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponse type.
 */
export interface ClaimResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ClaimResponse" | undefined;
    /**
     * A unique identifier assigned to this claim response.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: fhir.FhirCode<ClaimUseCodeType> | string | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The date this resource was created.
     */
    created: fhir.FhirDateTime | string | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.ReferenceArgs | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.ReferenceArgs | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: fhir.FhirCode<RemittanceOutcomeCodeType> | string | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: fhir.FhirString | string | undefined;
    /**
     * The time frame during which this authorization is effective.
     */
    preAuthPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    payeeType?: fhir.CodeableConceptArgs | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.ClaimResponseItemArgs[] | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.ClaimResponseAddItemArgs[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.ClaimResponseItemAdjudicationArgs[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.ClaimResponseTotalArgs[] | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.ClaimResponsePaymentArgs | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhir.CodeableConceptArgs | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.CodeableConceptArgs | undefined;
    /**
     * Needed to permit insurers to include the actual form.
     */
    form?: fhir.AttachmentArgs | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhir.ClaimResponseProcessNoteArgs[] | undefined;
    /**
     * For example: professional reports, documents, images, clinical resources, or accident reports.
     */
    communicationRequest?: fhir.ReferenceArgs[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.ClaimResponseInsuranceArgs[] | undefined;
    /**
     * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
     */
    error?: fhir.ClaimResponseErrorArgs[] | undefined;
}
/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export declare class ClaimResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ClaimResponse";
    /**
     * A unique identifier assigned to this claim response.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<FmStatusCodeType> | null;
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
    use: fhir.FhirCode<ClaimUseCodeType> | null;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
     */
    patient: fhir.Reference | null;
    /**
     * The date this resource was created.
     */
    created: fhir.FhirDateTime | null;
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
    outcome: fhir.FhirCode<RemittanceOutcomeCodeType> | null;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: fhir.FhirString | undefined;
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
    item: fhir.ClaimResponseItem[];
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem: fhir.ClaimResponseAddItem[];
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total: fhir.ClaimResponseTotal[];
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
    processNote: fhir.ClaimResponseProcessNote[];
    /**
     * For example: professional reports, documents, images, clinical resources, or accident reports.
     */
    communicationRequest: fhir.Reference[];
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.ClaimResponseInsurance[];
    /**
     * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
     */
    error: fhir.ClaimResponseError[];
    /**
     * Default constructor for ClaimResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (ClaimResponse.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Cancelled: "cancelled";
        readonly Draft: "draft";
        readonly EnteredInError: "entered-in-error";
    };
    /**
     * Extensible-bound Value Set for type (ClaimResponse.type)
     */
    static get typeExtensibleCodings(): {
        readonly Institutional: fhir.Coding;
        readonly Oral: fhir.Coding;
        readonly Pharmacy: fhir.Coding;
        readonly Professional: fhir.Coding;
        readonly Vision: fhir.Coding;
    };
    /**
     * Required-bound Value Set for use (ClaimResponse.use)
     */
    static get useRequiredCodes(): {
        readonly Claim: "claim";
        readonly Preauthorization: "preauthorization";
        readonly Predetermination: "predetermination";
    };
    /**
     * Required-bound Value Set for outcome (ClaimResponse.outcome)
     */
    static get outcomeRequiredCodes(): {
        readonly ProcessingComplete: "complete";
        readonly Error: "error";
        readonly PartialProcessing: "partial";
        readonly Queued: "queued";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=ClaimResponse.d.ts.map