import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
import { EligibilityrequestPurposeCodeType } from '../fhirValueSets/EligibilityrequestPurposeCodes.js';
/**
 * Valid arguments for the CoverageEligibilityRequestSupportingInfo type.
 */
export interface CoverageEligibilityRequestSupportingInfoArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.supportingInfo.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    information: fhir.ReferenceArgs | null;
    /**
     * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
     */
    appliesToAll?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.supportingInfo.appliesToAll
     */
    _appliesToAll?: fhir.FhirElementArgs;
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class CoverageEligibilityRequestSupportingInfo extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    information: fhir.Reference | null;
    /**
     * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
     */
    appliesToAll?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestSupportingInfo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageEligibilityRequestSupportingInfoArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CoverageEligibilityRequestInsurance type.
 */
export interface CoverageEligibilityRequestInsuranceArgs extends fhir.BackboneElementArgs {
    /**
     * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
     */
    focal?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.insurance.focal
     */
    _focal?: fhir.FhirElementArgs;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.ReferenceArgs | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.insurance.businessArrangement
     */
    _businessArrangement?: fhir.FhirElementArgs;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class CoverageEligibilityRequestInsurance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
     */
    focal?: fhir.FhirBoolean | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: fhir.FhirString | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageEligibilityRequestInsuranceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CoverageEligibilityRequestItemDiagnosis type.
 */
export interface CoverageEligibilityRequestItemDiagnosisArgs extends fhir.BackboneElementArgs {
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosis?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Patient diagnosis for which care is sought.
 */
export declare class CoverageEligibilityRequestItemDiagnosis extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosis?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CoverageEligibilityRequest.item.diagnosis.diagnosis[x]
     */
    protected static readonly _fts_diagnosisIsChoice: true;
    /**
     * Default constructor for CoverageEligibilityRequestItemDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageEligibilityRequestItemDiagnosisArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CoverageEligibilityRequestItem type.
 */
export interface CoverageEligibilityRequestItemArgs extends fhir.BackboneElementArgs {
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product line.
     */
    supportingInfoSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.item.supportingInfoSequence
     */
    _supportingInfoSequence?: (fhir.FhirElementArgs | null)[];
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The practitioner who is responsible for the product or service to be rendered to the patient.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * The amount charged to the patient by the provider for a single unit.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * Facility where the services will be provided.
     */
    facility?: fhir.ReferenceArgs | undefined;
    /**
     * Patient diagnosis for which care is sought.
     */
    diagnosis?: fhir.CoverageEligibilityRequestItemDiagnosisArgs[] | undefined;
    /**
     * The plan/proposal/order describing the proposed service in detail.
     */
    detail?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
export declare class CoverageEligibilityRequestItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product line.
     */
    supportingInfoSequence: fhir.FhirPositiveInt[];
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhir.CodeableConcept | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier: fhir.CodeableConcept[];
    /**
     * The practitioner who is responsible for the product or service to be rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The amount charged to the patient by the provider for a single unit.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Facility where the services will be provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * Patient diagnosis for which care is sought.
     */
    diagnosis: fhir.CoverageEligibilityRequestItemDiagnosis[];
    /**
     * The plan/proposal/order describing the proposed service in detail.
     */
    detail: fhir.Reference[];
    /**
     * Default constructor for CoverageEligibilityRequestItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageEligibilityRequestItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CoverageEligibilityRequest type.
 */
export interface CoverageEligibilityRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityRequest" | undefined;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * When the requestor expects the processor to complete processing.
     */
    priority?: fhir.CodeableConceptArgs | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: fhir.FhirCode<EligibilityrequestPurposeCodeType>[] | string[] | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.purpose
     */
    _purpose?: (fhir.FhirElementArgs | null)[];
    /**
     * 1..1.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    serviced?: fhir.FhirDate | fhir.Period | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: fhir.FhirDate | string | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date when this resource was created.
     */
    created: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * Person who created the request.
     */
    enterer?: fhir.ReferenceArgs | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The Insurer who issued the coverage in question and is the recipient of the request.
     */
    insurer: fhir.ReferenceArgs | null;
    /**
     * Facility where the services are intended to be provided.
     */
    facility?: fhir.ReferenceArgs | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.CoverageEligibilityRequestSupportingInfoArgs[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.CoverageEligibilityRequestInsuranceArgs[] | undefined;
    /**
     * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
     */
    item?: fhir.CoverageEligibilityRequestItemArgs[] | undefined;
}
/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export declare class CoverageEligibilityRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityRequest";
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<FmStatusCodeType> | null;
    /**
     * When the requestor expects the processor to complete processing.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: fhir.FhirCode<EligibilityrequestPurposeCodeType>[];
    /**
     * 1..1.
     */
    patient: fhir.Reference | null;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    serviced?: (fhir.FhirDate | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CoverageEligibilityRequest.serviced[x]
     */
    protected static readonly _fts_servicedIsChoice: true;
    /**
     * The date when this resource was created.
     */
    created: fhir.FhirDateTime | null;
    /**
     * Person who created the request.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The Insurer who issued the coverage in question and is the recipient of the request.
     */
    insurer: fhir.Reference | null;
    /**
     * Facility where the services are intended to be provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo: fhir.CoverageEligibilityRequestSupportingInfo[];
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.CoverageEligibilityRequestInsurance[];
    /**
     * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
     */
    item: fhir.CoverageEligibilityRequestItem[];
    /**
     * Default constructor for CoverageEligibilityRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageEligibilityRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (CoverageEligibilityRequest.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Cancelled: "cancelled";
        readonly Draft: "draft";
        readonly EnteredInError: "entered-in-error";
    };
    /**
     * Required-bound Value Set for purpose (CoverageEligibilityRequest.purpose)
     */
    static get purposeRequiredCodes(): {
        readonly CoverageAuthRequirements: "auth-requirements";
        readonly CoverageBenefits: "benefits";
        readonly CoverageDiscovery: "discovery";
        readonly CoverageValidation: "validation";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=CoverageEligibilityRequest.d.ts.map