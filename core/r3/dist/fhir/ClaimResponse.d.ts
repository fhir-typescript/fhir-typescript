import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
/**
 * Valid arguments for the ClaimResponseItemAdjudication type.
 */
export interface ClaimResponseItemAdjudicationArgs extends fhir.BackboneElementArgs {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * Adjudication reason such as limit reached.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.MoneyArgs | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.adjudication.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * The adjudication results.
 */
export declare class ClaimResponseItemAdjudication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    value?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for ClaimResponseItemAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseItemAdjudicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseItemDetailSubDetail type.
 */
export interface ClaimResponseItemDetailSubDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequenceLinkId: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.sequenceLinkId
     */
    _sequenceLinkId?: fhir.FhirElementArgs;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.noteNumber
     */
    _noteNumber?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ClaimResponseItemAdjudicationArgs[] | undefined;
}
/**
 * The third tier service adjudications for submitted services.
 */
export declare class ClaimResponseItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequenceLinkId: fhir.FhirPositiveInt | null;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudications results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * Default constructor for ClaimResponseItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseItemDetailSubDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseItemDetail type.
 */
export interface ClaimResponseItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequenceLinkId: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.sequenceLinkId
     */
    _sequenceLinkId?: fhir.FhirElementArgs;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ClaimResponseItemAdjudicationArgs[] | undefined;
    /**
     * The third tier service adjudications for submitted services.
     */
    subDetail?: fhir.ClaimResponseItemDetailSubDetailArgs[] | undefined;
}
/**
 * The second tier service adjudications for submitted services.
 */
export declare class ClaimResponseItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequenceLinkId: fhir.FhirPositiveInt | null;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudications results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * The third tier service adjudications for submitted services.
     */
    subDetail: fhir.ClaimResponseItemDetailSubDetail[];
    /**
     * Default constructor for ClaimResponseItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseItem type.
 */
export interface ClaimResponseItemArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequenceLinkId: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.sequenceLinkId
     */
    _sequenceLinkId?: fhir.FhirElementArgs;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.noteNumber
     */
    _noteNumber?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ClaimResponseItemAdjudicationArgs[] | undefined;
    /**
     * The second tier service adjudications for submitted services.
     */
    detail?: fhir.ClaimResponseItemDetailArgs[] | undefined;
}
/**
 * The first tier service adjudications for submitted services.
 */
export declare class ClaimResponseItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequenceLinkId: fhir.FhirPositiveInt | null;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * The second tier service adjudications for submitted services.
     */
    detail: fhir.ClaimResponseItemDetail[];
    /**
     * Default constructor for ClaimResponseItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseAddItemDetail type.
 */
export interface ClaimResponseAddItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConceptArgs | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code to indicate the Professional Service or Product supplied.
     */
    service?: fhir.CodeableConceptArgs | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The fee charged for the professional service or product..
     */
    fee?: fhir.MoneyArgs | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ClaimResponseItemAdjudicationArgs[] | undefined;
}
/**
 * The second tier service adjudications for payor added services.
 */
export declare class ClaimResponseAddItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    modifier: fhir.CodeableConcept[];
    /**
     * The fee charged for the professional service or product..
     */
    fee?: fhir.Money | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudications results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * Default constructor for ClaimResponseAddItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseAddItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseAddItem type.
 */
export interface ClaimResponseAddItemArgs extends fhir.BackboneElementArgs {
    /**
     * List of input service items which this service line is intended to replace.
     */
    sequenceLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.sequenceLinkId
     */
    _sequenceLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConceptArgs | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code to indicate the Professional Service or Product supplied.
     */
    service?: fhir.CodeableConceptArgs | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The fee charged for the professional service or product..
     */
    fee?: fhir.MoneyArgs | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.noteNumber
     */
    _noteNumber?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ClaimResponseItemAdjudicationArgs[] | undefined;
    /**
     * The second tier service adjudications for payor added services.
     */
    detail?: fhir.ClaimResponseAddItemDetailArgs[] | undefined;
}
/**
 * The first tier service adjudications for payor added services.
 */
export declare class ClaimResponseAddItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * List of input service items which this service line is intended to replace.
     */
    sequenceLinkId: fhir.FhirPositiveInt[];
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
    modifier: fhir.CodeableConcept[];
    /**
     * The fee charged for the professional service or product..
     */
    fee?: fhir.Money | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudications results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[];
    /**
     * The second tier service adjudications for payor added services.
     */
    detail: fhir.ClaimResponseAddItemDetail[];
    /**
     * Default constructor for ClaimResponseAddItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseAddItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseError type.
 */
export interface ClaimResponseErrorArgs extends fhir.BackboneElementArgs {
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.
     */
    sequenceLinkId?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.sequenceLinkId
     */
    _sequenceLinkId?: fhir.FhirElementArgs;
    /**
     * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
     */
    detailSequenceLinkId?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.detailSequenceLinkId
     */
    _detailSequenceLinkId?: fhir.FhirElementArgs;
    /**
     * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
     */
    subdetailSequenceLinkId?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.subdetailSequenceLinkId
     */
    _subdetailSequenceLinkId?: fhir.FhirElementArgs;
    /**
     * An error code,from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.CodeableConceptArgs | null;
}
/**
 * Mutually exclusive with Services Provided (Item).
 */
export declare class ClaimResponseError extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.
     */
    sequenceLinkId?: fhir.FhirPositiveInt | undefined;
    /**
     * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
     */
    detailSequenceLinkId?: fhir.FhirPositiveInt | undefined;
    /**
     * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
     */
    subdetailSequenceLinkId?: fhir.FhirPositiveInt | undefined;
    /**
     * An error code,from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Default constructor for ClaimResponseError - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseErrorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponsePayment type.
 */
export interface ClaimResponsePaymentArgs extends fhir.BackboneElementArgs {
    /**
     * Whether this represents partial or complete payment of the claim.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
     */
    adjustment?: fhir.MoneyArgs | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Estimated payment data.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.payment.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Payable less any payment adjustment.
     */
    amount?: fhir.MoneyArgs | undefined;
    /**
     * Payment identifier.
     */
    identifier?: fhir.IdentifierArgs | undefined;
}
/**
 * Payment details for the claim if the claim has been paid.
 */
export declare class ClaimResponsePayment extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    date?: fhir.FhirDate | undefined;
    /**
     * Payable less any payment adjustment.
     */
    amount?: fhir.Money | undefined;
    /**
     * Payment identifier.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Default constructor for ClaimResponsePayment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponsePaymentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseProcessNote type.
 */
export interface ClaimResponseProcessNoteArgs extends fhir.BackboneElementArgs {
    /**
     * An integer associated with each note which may be referred to from each service line item.
     */
    number?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.number
     */
    _number?: fhir.FhirElementArgs;
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
     */
    language?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Note text.
 */
export declare class ClaimResponseProcessNote extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An integer associated with each note which may be referred to from each service line item.
     */
    number?: fhir.FhirPositiveInt | undefined;
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
     */
    language?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimResponseProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseProcessNoteArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseInsurance type.
 */
export interface ClaimResponseInsuranceArgs extends fhir.BackboneElementArgs {
    /**
     * A service line item.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
     */
    focal: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.focal
     */
    _focal?: fhir.FhirElementArgs;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage: fhir.ReferenceArgs | null;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.businessArrangement
     */
    _businessArrangement?: fhir.FhirElementArgs;
    /**
     * A list of references from the Insurer to which these services pertain.
     */
    preAuthRef?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElementArgs | null)[];
    /**
     * The Coverages adjudication details.
     */
    claimResponse?: fhir.ReferenceArgs | undefined;
}
/**
 * Financial instrument by which payment information for health care.
 */
export declare class ClaimResponseInsurance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line item.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
     */
    focal: fhir.FhirBoolean | null;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage: fhir.Reference | null;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: fhir.FhirString | undefined;
    /**
     * A list of references from the Insurer to which these services pertain.
     */
    preAuthRef: fhir.FhirString[];
    /**
     * The Coverages adjudication details.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimResponseInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseInsuranceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * The Response business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code cancelled and entered-in-error that mark the response as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Patient Resource.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The Insurer who produced this adjudicated response.
     */
    insurer?: fhir.ReferenceArgs | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Original request resource referrence.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Processing outcome errror, partial or complete processing.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.disposition
     */
    _disposition?: fhir.FhirElementArgs;
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    payeeType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The first tier service adjudications for submitted services.
     */
    item?: fhir.ClaimResponseItemArgs[] | undefined;
    /**
     * The first tier service adjudications for payor added services.
     */
    addItem?: fhir.ClaimResponseAddItemArgs[] | undefined;
    /**
     * Mutually exclusive with Services Provided (Item).
     */
    error?: fhir.ClaimResponseErrorArgs[] | undefined;
    /**
     * The total cost of the services reported.
     */
    totalCost?: fhir.MoneyArgs | undefined;
    /**
     * The amount of deductible applied which was not allocated to any particular service line.
     */
    unallocDeductable?: fhir.MoneyArgs | undefined;
    /**
     * Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible).
     */
    totalBenefit?: fhir.MoneyArgs | undefined;
    /**
     * Payment details for the claim if the claim has been paid.
     */
    payment?: fhir.ClaimResponsePaymentArgs | undefined;
    /**
     * Status of funds reservation (For provider, for Patient, None).
     */
    reserved?: fhir.CodingArgs | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodeableConceptArgs | undefined;
    /**
     * Note text.
     */
    processNote?: fhir.ClaimResponseProcessNoteArgs[] | undefined;
    /**
     * Request for additional supporting or authorizing information, such as: documents, images or resources.
     */
    communicationRequest?: fhir.ReferenceArgs[] | undefined;
    /**
     * Financial instrument by which payment information for health care.
     */
    insurance?: fhir.ClaimResponseInsuranceArgs[] | undefined;
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
     * The Response business identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains the code cancelled and entered-in-error that mark the response as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | undefined;
    /**
     * Patient Resource.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | undefined;
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
    disposition?: fhir.FhirString | undefined;
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    payeeType?: fhir.CodeableConcept | undefined;
    /**
     * The first tier service adjudications for submitted services.
     */
    item: fhir.ClaimResponseItem[];
    /**
     * The first tier service adjudications for payor added services.
     */
    addItem: fhir.ClaimResponseAddItem[];
    /**
     * Mutually exclusive with Services Provided (Item).
     */
    error: fhir.ClaimResponseError[];
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
    processNote: fhir.ClaimResponseProcessNote[];
    /**
     * Request for additional supporting or authorizing information, such as: documents, images or resources.
     */
    communicationRequest: fhir.Reference[];
    /**
     * Financial instrument by which payment information for health care.
     */
    insurance: fhir.ClaimResponseInsurance[];
    /**
     * Default constructor for ClaimResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ClaimResponse.d.ts.map