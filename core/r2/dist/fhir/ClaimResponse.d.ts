import * as fhir from '../fhir.js';
import { RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
/**
 * Valid arguments for the ClaimResponseItemAdjudication type.
 */
export interface ClaimResponseItemAdjudicationArgs extends fhir.BackboneElementArgs {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    code: fhir.CodingArgs | null;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.QuantityArgs | undefined;
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
 * The adjudications results.
 */
export declare class ClaimResponseItemAdjudication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
 * Valid arguments for the ClaimResponseItemDetailAdjudication type.
 */
export interface ClaimResponseItemDetailAdjudicationArgs extends fhir.BackboneElementArgs {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    code: fhir.CodingArgs | null;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.QuantityArgs | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.adjudication.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * The adjudications results.
 */
export declare class ClaimResponseItemDetailAdjudication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    value?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for ClaimResponseItemDetailAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseItemDetailAdjudicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseItemDetailSubDetailAdjudication type.
 */
export interface ClaimResponseItemDetailSubDetailAdjudicationArgs extends fhir.BackboneElementArgs {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    code: fhir.CodingArgs | null;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.QuantityArgs | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.adjudication.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * The adjudications results.
 */
export declare class ClaimResponseItemDetailSubDetailAdjudication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    value?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for ClaimResponseItemDetailSubDetailAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseItemDetailSubDetailAdjudicationArgs>, options?: fhir.FhirConstructorOptions);
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
     * The adjudications results.
     */
    adjudication?: fhir.ClaimResponseItemDetailSubDetailAdjudicationArgs[] | undefined;
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
     * The adjudications results.
     */
    adjudication: fhir.ClaimResponseItemDetailSubDetailAdjudication[];
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
     * The adjudications results.
     */
    adjudication?: fhir.ClaimResponseItemDetailAdjudicationArgs[] | undefined;
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
     * The adjudications results.
     */
    adjudication: fhir.ClaimResponseItemDetailAdjudication[];
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
     * The adjudications results.
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
     * The adjudications results.
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
 * Valid arguments for the ClaimResponseAddItemAdjudication type.
 */
export interface ClaimResponseAddItemAdjudicationArgs extends fhir.BackboneElementArgs {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    code: fhir.CodingArgs | null;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.QuantityArgs | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.adjudication.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * The adjudications results.
 */
export declare class ClaimResponseAddItemAdjudication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    value?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for ClaimResponseAddItemAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseAddItemAdjudicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseAddItemDetailAdjudication type.
 */
export interface ClaimResponseAddItemDetailAdjudicationArgs extends fhir.BackboneElementArgs {
    /**
     * Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    code: fhir.CodingArgs | null;
    /**
     * Monetary amount associated with the code.
     */
    amount?: fhir.QuantityArgs | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.adjudication.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * The adjudications results.
 */
export declare class ClaimResponseAddItemDetailAdjudication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    value?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for ClaimResponseAddItemDetailAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseAddItemDetailAdjudicationArgs>, options?: fhir.FhirConstructorOptions);
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
     * A code to indicate the Professional Service or Product supplied.
     */
    service: fhir.CodingArgs | null;
    /**
     * The fee charged for the professional service or product..
     */
    fee?: fhir.QuantityArgs | undefined;
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ClaimResponseAddItemDetailAdjudicationArgs[] | undefined;
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
    adjudication: fhir.ClaimResponseAddItemDetailAdjudication[];
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
     * A code to indicate the Professional Service or Product supplied.
     */
    service: fhir.CodingArgs | null;
    /**
     * The fee charged for the professional service or product..
     */
    fee?: fhir.QuantityArgs | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumberLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.noteNumberLinkId
     */
    _noteNumberLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ClaimResponseAddItemAdjudicationArgs[] | undefined;
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
    noteNumberLinkId: fhir.FhirPositiveInt[];
    /**
     * The adjudications results.
     */
    adjudication: fhir.ClaimResponseAddItemAdjudication[];
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
     * An error code,froma specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.CodingArgs | null;
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
     * An error code,froma specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.Coding | null;
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
 * Valid arguments for the ClaimResponseNote type.
 */
export interface ClaimResponseNoteArgs extends fhir.BackboneElementArgs {
    /**
     * An integer associated with each note which may be referred to from each service line item.
     */
    number?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.note.number
     */
    _number?: fhir.FhirElementArgs;
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.note.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * Note text.
 */
export declare class ClaimResponseNote extends fhir.BackboneElement {
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
    type?: fhir.Coding | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for ClaimResponseNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseNoteArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimResponseCoverage type.
 */
export interface ClaimResponseCoverageArgs extends fhir.BackboneElementArgs {
    /**
     * To maintain order of the coverages.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.coverage.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * To identify which coverage is being adjudicated.
     */
    focal: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.coverage.focal
     */
    _focal?: fhir.FhirElementArgs;
    /**
     * Need to identify the issuer to target for processing and for coordination of benefit processing.
     */
    coverage: fhir.ReferenceArgs | null;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.coverage.businessArrangement
     */
    _businessArrangement?: fhir.FhirElementArgs;
    /**
     * To determine the relationship between the patient and the subscriber.
     */
    relationship: fhir.CodingArgs | null;
    /**
     * To provide any pre-determination or prior authorization reference.
     */
    preAuthRef?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.coverage.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElementArgs | null)[];
    /**
     * Used by downstream payers to determine what balance remains and the net payable.
     */
    claimResponse?: fhir.ReferenceArgs | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.CodingArgs | undefined;
}
/**
 * Health care programs and insurers are significant payors of health service costs.
 */
export declare class ClaimResponseCoverage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * To maintain order of the coverages.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * To identify which coverage is being adjudicated.
     */
    focal: fhir.FhirBoolean | null;
    /**
     * Need to identify the issuer to target for processing and for coordination of benefit processing.
     */
    coverage: fhir.Reference | null;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: fhir.FhirString | undefined;
    /**
     * To determine the relationship between the patient and the subscriber.
     */
    relationship: fhir.Coding | null;
    /**
     * To provide any pre-determination or prior authorization reference.
     */
    preAuthRef: fhir.FhirString[];
    /**
     * Used by downstream payers to determine what balance remains and the net payable.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.Coding | undefined;
    /**
     * Default constructor for ClaimResponseCoverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimResponseCoverageArgs>, options?: fhir.FhirConstructorOptions);
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
     * Original request resource referrence.
     */
    request?: fhir.ReferenceArgs | undefined;
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
     * Extended properties for primitive element: ClaimResponse.created
     */
    _created?: fhir.FhirElementArgs;
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
     * Transaction status: error, complete.
     */
    outcome?: fhir.FhirCode<RemittanceOutcomeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.outcome
     */
    _outcome?: fhir.FhirElementArgs;
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
    payeeType?: fhir.CodingArgs | undefined;
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
     * This is a check value that the receiver calculates and returns.
     */
    totalCost?: fhir.QuantityArgs | undefined;
    /**
     * The amount of deductible applied which was not allocated to any particular service line.
     */
    unallocDeductable?: fhir.QuantityArgs | undefined;
    /**
     * Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible).
     */
    totalBenefit?: fhir.QuantityArgs | undefined;
    /**
     * Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
     */
    paymentAdjustment?: fhir.QuantityArgs | undefined;
    /**
     * Reason for the payment adjustment.
     */
    paymentAdjustmentReason?: fhir.CodingArgs | undefined;
    /**
     * Estimated payment data.
     */
    paymentDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.paymentDate
     */
    _paymentDate?: fhir.FhirElementArgs;
    /**
     * Payable less any payment adjustment.
     */
    paymentAmount?: fhir.QuantityArgs | undefined;
    /**
     * Payment identifier.
     */
    paymentRef?: fhir.IdentifierArgs | undefined;
    /**
     * Status of funds reservation (For provider, for Patient, None).
     */
    reserved?: fhir.CodingArgs | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodingArgs | undefined;
    /**
     * Note text.
     */
    note?: fhir.ClaimResponseNoteArgs[] | undefined;
    /**
     * Health care programs and insurers are significant payors of health service costs.
     */
    coverage?: fhir.ClaimResponseCoverageArgs[] | undefined;
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
    created?: fhir.FhirDateTime | undefined;
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
    outcome?: fhir.FhirCode<RemittanceOutcomeCodeType> | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | undefined;
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    payeeType?: fhir.Coding | undefined;
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
    paymentDate?: fhir.FhirDate | undefined;
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
    note: fhir.ClaimResponseNote[];
    /**
     * Health care programs and insurers are significant payors of health service costs.
     */
    coverage: fhir.ClaimResponseCoverage[];
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