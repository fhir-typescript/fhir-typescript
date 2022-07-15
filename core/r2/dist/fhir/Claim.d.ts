import * as fhir from '../fhir.js';
import { ClaimTypeLinkCodeType } from '../fhirValueSets/ClaimTypeLinkCodes.js';
import { ClaimUseLinkCodeType } from '../fhirValueSets/ClaimUseLinkCodes.js';
/**
 * Valid arguments for the ClaimPayee type.
 */
export interface ClaimPayeeArgs extends fhir.BackboneElementArgs {
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * The provider who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * The person other than the subscriber who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */
    person?: fhir.ReferenceArgs | undefined;
}
/**
 * The party to be reimbursed for the services.
 */
export declare class ClaimPayee extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.Coding | undefined;
    /**
     * The provider who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */
    organization?: fhir.Reference | undefined;
    /**
     * The person other than the subscriber who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */
    person?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimPayee - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimPayeeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimDiagnosis type.
 */
export interface ClaimDiagnosisArgs extends fhir.BackboneElementArgs {
    /**
     * Required to maintain order of the diagnoses.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.diagnosis.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * Required to adjudicate services rendered to condition presented.
     */
    diagnosis: fhir.CodingArgs | null;
}
/**
 * Ordered list of patient diagnosis for which care is sought.
 */
export declare class ClaimDiagnosis extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Required to maintain order of the diagnoses.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * Required to adjudicate services rendered to condition presented.
     */
    diagnosis: fhir.Coding | null;
    /**
     * Default constructor for ClaimDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimDiagnosisArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimCoverage type.
 */
export interface ClaimCoverageArgs extends fhir.BackboneElementArgs {
    /**
     * To maintain order of the coverages.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.coverage.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * To identify which coverage is being adjudicated.
     */
    focal: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Claim.coverage.focal
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
     * Extended properties for primitive element: Claim.coverage.businessArrangement
     */
    _businessArrangement?: fhir.FhirElementArgs;
    /**
     * To determine the relationship between the patient and the subscriber.
     */
    relationship: fhir.CodingArgs | null;
    /**
     * To provide any pre=determination or prior authorization reference.
     */
    preAuthRef?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.coverage.preAuthRef
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
export declare class ClaimCoverage extends fhir.BackboneElement {
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
     * To provide any pre=determination or prior authorization reference.
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
     * Default constructor for ClaimCoverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimCoverageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimItemDetailSubDetail type.
 */
export interface ClaimItemDetailSubDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * The type of product or service.
     */
    type: fhir.CodingArgs | null;
    /**
     * The fee for an additional  service or product or charge.
     */
    service: fhir.CodingArgs | null;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    unitPrice?: fhir.QuantityArgs | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.factor
     */
    _factor?: fhir.FhirElementArgs;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    points?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.points
     */
    _points?: fhir.FhirElementArgs;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    net?: fhir.QuantityArgs | undefined;
    /**
     * The UDI code and issuer if applicable for the supplied product.
     */
    udi?: fhir.CodingArgs | undefined;
}
/**
 * Third tier of goods and services.
 */
export declare class ClaimItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * The type of product or service.
     */
    type: fhir.Coding | null;
    /**
     * The fee for an additional  service or product or charge.
     */
    service: fhir.Coding | null;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    unitPrice?: fhir.Quantity | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    points?: fhir.FhirDecimal | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    net?: fhir.Quantity | undefined;
    /**
     * The UDI code and issuer if applicable for the supplied product.
     */
    udi?: fhir.Coding | undefined;
    /**
     * Default constructor for ClaimItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimItemDetailSubDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimItemDetail type.
 */
export interface ClaimItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * The type of product or service.
     */
    type: fhir.CodingArgs | null;
    /**
     * If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
     */
    service: fhir.CodingArgs | null;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    unitPrice?: fhir.QuantityArgs | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.factor
     */
    _factor?: fhir.FhirElementArgs;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    points?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.points
     */
    _points?: fhir.FhirElementArgs;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    net?: fhir.QuantityArgs | undefined;
    /**
     * The UDI code and issuer if applicable for the supplied product.
     */
    udi?: fhir.CodingArgs | undefined;
    /**
     * Third tier of goods and services.
     */
    subDetail?: fhir.ClaimItemDetailSubDetailArgs[] | undefined;
}
/**
 * Second tier of goods and services.
 */
export declare class ClaimItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * The type of product or service.
     */
    type: fhir.Coding | null;
    /**
     * If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
     */
    service: fhir.Coding | null;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    unitPrice?: fhir.Quantity | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    points?: fhir.FhirDecimal | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    net?: fhir.Quantity | undefined;
    /**
     * The UDI code and issuer if applicable for the supplied product.
     */
    udi?: fhir.Coding | undefined;
    /**
     * Third tier of goods and services.
     */
    subDetail: fhir.ClaimItemDetailSubDetail[];
    /**
     * Default constructor for ClaimItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimItemProsthesis type.
 */
export interface ClaimItemProsthesisArgs extends fhir.BackboneElementArgs {
    /**
     * May impact on adjudication.
     */
    initial?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Claim.item.prosthesis.initial
     */
    _initial?: fhir.FhirElementArgs;
    /**
     * May impact on adjudication.
     */
    priorDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Claim.item.prosthesis.priorDate
     */
    _priorDate?: fhir.FhirElementArgs;
    /**
     * May impact on adjudication.
     */
    priorMaterial?: fhir.CodingArgs | undefined;
}
/**
 * The materials and placement date of prior fixed prosthesis.
 */
export declare class ClaimItemProsthesis extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * May impact on adjudication.
     */
    initial?: fhir.FhirBoolean | undefined;
    /**
     * May impact on adjudication.
     */
    priorDate?: fhir.FhirDate | undefined;
    /**
     * May impact on adjudication.
     */
    priorMaterial?: fhir.Coding | undefined;
    /**
     * Default constructor for ClaimItemProsthesis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimItemProsthesisArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimItem type.
 */
export interface ClaimItemArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * The type of product or service.
     */
    type: fhir.CodingArgs | null;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * Diagnosis applicable for this service or product line.
     */
    diagnosisLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.diagnosisLinkId
     */
    _diagnosisLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
     */
    service: fhir.CodingArgs | null;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    serviceDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Claim.item.serviceDate
     */
    _serviceDate?: fhir.FhirElementArgs;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
     */
    unitPrice?: fhir.QuantityArgs | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.factor
     */
    _factor?: fhir.FhirElementArgs;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    points?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.points
     */
    _points?: fhir.FhirElementArgs;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    net?: fhir.QuantityArgs | undefined;
    /**
     * The UDI code and issuer if applicable for the supplied product.
     */
    udi?: fhir.CodingArgs | undefined;
    /**
     * Physical service site on the patient (limb, tooth, etc.).
     */
    bodySite?: fhir.CodingArgs | undefined;
    /**
     * A region or surface of the site, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodingArgs[] | undefined;
    /**
     * May impact on adjudication.
     */
    modifier?: fhir.CodingArgs[] | undefined;
    /**
     * Second tier of goods and services.
     */
    detail?: fhir.ClaimItemDetailArgs[] | undefined;
    /**
     * The materials and placement date of prior fixed prosthesis.
     */
    prosthesis?: fhir.ClaimItemProsthesisArgs | undefined;
}
/**
 * First tier of goods and services.
 */
export declare class ClaimItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * The type of product or service.
     */
    type: fhir.Coding | null;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * Diagnosis applicable for this service or product line.
     */
    diagnosisLinkId: fhir.FhirPositiveInt[];
    /**
     * If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
     */
    service: fhir.Coding | null;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    serviceDate?: fhir.FhirDate | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
     */
    unitPrice?: fhir.Quantity | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    points?: fhir.FhirDecimal | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    net?: fhir.Quantity | undefined;
    /**
     * The UDI code and issuer if applicable for the supplied product.
     */
    udi?: fhir.Coding | undefined;
    /**
     * Physical service site on the patient (limb, tooth, etc.).
     */
    bodySite?: fhir.Coding | undefined;
    /**
     * A region or surface of the site, e.g. limb region or tooth surface(s).
     */
    subSite: fhir.Coding[];
    /**
     * May impact on adjudication.
     */
    modifier: fhir.Coding[];
    /**
     * Second tier of goods and services.
     */
    detail: fhir.ClaimItemDetail[];
    /**
     * The materials and placement date of prior fixed prosthesis.
     */
    prosthesis?: fhir.ClaimItemProsthesis | undefined;
    /**
     * Default constructor for ClaimItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimMissingTeeth type.
 */
export interface ClaimMissingTeethArgs extends fhir.BackboneElementArgs {
    /**
     * Provides the tooth number of the missing tooth.
     */
    tooth: fhir.CodingArgs | null;
    /**
     * Provides the reason for the missing tooth.
     */
    reason?: fhir.CodingArgs | undefined;
    /**
     * Some services and adjudications require this information.
     */
    extractionDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Claim.missingTeeth.extractionDate
     */
    _extractionDate?: fhir.FhirElementArgs;
}
/**
 * The list of missing teeth may influence the adjudication of services for example with Bridges.
 */
export declare class ClaimMissingTeeth extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Provides the tooth number of the missing tooth.
     */
    tooth: fhir.Coding | null;
    /**
     * Provides the reason for the missing tooth.
     */
    reason?: fhir.Coding | undefined;
    /**
     * Some services and adjudications require this information.
     */
    extractionDate?: fhir.FhirDate | undefined;
    /**
     * Default constructor for ClaimMissingTeeth - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimMissingTeethArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Claim type.
 */
export interface ClaimArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Claim" | undefined;
    /**
     * The category of claim this is.
     */
    type: fhir.FhirCode<ClaimTypeLinkCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Claim.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The version of the specification on which this instance relies.
     */
    ruleset?: fhir.CodingArgs | undefined;
    /**
     * The version of the specification from which the original instance was created.
     */
    originalRuleset?: fhir.CodingArgs | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Claim.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * Insurer Identifier, typical BIN number (6 digit).
     */
    target?: fhir.ReferenceArgs | undefined;
    /**
     * The provider which is responsible for the bill, claim pre-determination, pre-authorization.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the bill, claim pre-determination, pre-authorization.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
     */
    use?: fhir.FhirCode<ClaimUseLinkCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Claim.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * Immediate (stat), best effort (normal), deferred (deferred).
     */
    priority?: fhir.CodingArgs | undefined;
    /**
     * In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.
     */
    fundsReserve?: fhir.CodingArgs | undefined;
    /**
     * Person who created the invoice/claim/pre-determination or pre-authorization.
     */
    enterer?: fhir.ReferenceArgs | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.ReferenceArgs | undefined;
    /**
     * For type=Pharmacy and Vision only.
     */
    prescription?: fhir.ReferenceArgs | undefined;
    /**
     * Original prescription to support the dispensing of pharmacy services, medications or products.
     */
    originalPrescription?: fhir.ReferenceArgs | undefined;
    /**
     * The party to be reimbursed for the services.
     */
    payee?: fhir.ClaimPayeeArgs | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.ReferenceArgs | undefined;
    /**
     * Ordered list of patient diagnosis for which care is sought.
     */
    diagnosis?: fhir.ClaimDiagnosisArgs[] | undefined;
    /**
     * List of patient conditions for which care is sought.
     */
    condition?: fhir.CodingArgs[] | undefined;
    /**
     * Patient Resource.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Health care programs and insurers are significant payors of health service costs.
     */
    coverage?: fhir.ClaimCoverageArgs[] | undefined;
    /**
     * To determine extenuating circumstances for coverage.
     */
    exception?: fhir.CodingArgs[] | undefined;
    /**
     * Often required for over-age dependents.
     */
    school?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Claim.school
     */
    _school?: fhir.FhirElementArgs;
    /**
     * Coverage may be dependent on accidents.
     */
    accident?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Claim.accident
     */
    _accident?: fhir.FhirElementArgs;
    /**
     * Coverage may be dependent on the type of accident.
     */
    accidentType?: fhir.CodingArgs | undefined;
    /**
     * Coverage may be modified based on exception information provided.
     */
    interventionException?: fhir.CodingArgs[] | undefined;
    /**
     * First tier of goods and services.
     */
    item?: fhir.ClaimItemArgs[] | undefined;
    /**
     * Code to indicate that Xrays, images, emails, documents, models or attachments are being sent in support of this submission.
     */
    additionalMaterials?: fhir.CodingArgs[] | undefined;
    /**
     * The list of missing teeth may influence the adjudication of services for example with Bridges.
     */
    missingTeeth?: fhir.ClaimMissingTeethArgs[] | undefined;
}
/**
 * A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
 */
export declare class Claim extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Claim";
    /**
     * The category of claim this is.
     */
    type: fhir.FhirCode<ClaimTypeLinkCodeType> | null;
    /**
     * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
     */
    identifier: fhir.Identifier[];
    /**
     * The version of the specification on which this instance relies.
     */
    ruleset?: fhir.Coding | undefined;
    /**
     * The version of the specification from which the original instance was created.
     */
    originalRuleset?: fhir.Coding | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * Insurer Identifier, typical BIN number (6 digit).
     */
    target?: fhir.Reference | undefined;
    /**
     * The provider which is responsible for the bill, claim pre-determination, pre-authorization.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the bill, claim pre-determination, pre-authorization.
     */
    organization?: fhir.Reference | undefined;
    /**
     * Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
     */
    use?: fhir.FhirCode<ClaimUseLinkCodeType> | undefined;
    /**
     * Immediate (stat), best effort (normal), deferred (deferred).
     */
    priority?: fhir.Coding | undefined;
    /**
     * In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.
     */
    fundsReserve?: fhir.Coding | undefined;
    /**
     * Person who created the invoice/claim/pre-determination or pre-authorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * For type=Pharmacy and Vision only.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * Original prescription to support the dispensing of pharmacy services, medications or products.
     */
    originalPrescription?: fhir.Reference | undefined;
    /**
     * The party to be reimbursed for the services.
     */
    payee?: fhir.ClaimPayee | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.Reference | undefined;
    /**
     * Ordered list of patient diagnosis for which care is sought.
     */
    diagnosis: fhir.ClaimDiagnosis[];
    /**
     * List of patient conditions for which care is sought.
     */
    condition: fhir.Coding[];
    /**
     * Patient Resource.
     */
    patient: fhir.Reference | null;
    /**
     * Health care programs and insurers are significant payors of health service costs.
     */
    coverage: fhir.ClaimCoverage[];
    /**
     * To determine extenuating circumstances for coverage.
     */
    exception: fhir.Coding[];
    /**
     * Often required for over-age dependents.
     */
    school?: fhir.FhirString | undefined;
    /**
     * Coverage may be dependent on accidents.
     */
    accident?: fhir.FhirDate | undefined;
    /**
     * Coverage may be dependent on the type of accident.
     */
    accidentType?: fhir.Coding | undefined;
    /**
     * Coverage may be modified based on exception information provided.
     */
    interventionException: fhir.Coding[];
    /**
     * First tier of goods and services.
     */
    item: fhir.ClaimItem[];
    /**
     * Code to indicate that Xrays, images, emails, documents, models or attachments are being sent in support of this submission.
     */
    additionalMaterials: fhir.Coding[];
    /**
     * The list of missing teeth may influence the adjudication of services for example with Bridges.
     */
    missingTeeth: fhir.ClaimMissingTeeth[];
    /**
     * Default constructor for Claim - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Claim.d.ts.map