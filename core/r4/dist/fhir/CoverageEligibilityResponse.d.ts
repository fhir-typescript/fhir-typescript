import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
import { EligibilityresponsePurposeCodeType } from '../fhirValueSets/EligibilityresponsePurposeCodes.js';
import { RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
/**
 * Valid arguments for the CoverageEligibilityResponseInsuranceItemBenefit type.
 */
export interface CoverageEligibilityResponseInsuranceItemBenefitArgs extends fhir.BackboneElementArgs {
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowed?: fhir.FhirUnsignedInt | fhir.FhirString | fhir.Money | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: fhir.FhirString | string | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.MoneyArgs | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    used?: fhir.FhirUnsignedInt | fhir.FhirString | fhir.Money | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedString?: fhir.FhirString | string | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhir.MoneyArgs | undefined;
}
/**
 * Benefits used to date.
 */
export declare class CoverageEligibilityResponseInsuranceItemBenefit extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowed?: (fhir.FhirUnsignedInt | fhir.FhirString | fhir.Money) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.insurance.item.benefit.allowed[x]
     */
    protected static readonly _fts_allowedIsChoice: true;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    used?: (fhir.FhirUnsignedInt | fhir.FhirString | fhir.Money) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.insurance.item.benefit.used[x]
     */
    protected static readonly _fts_usedIsChoice: true;
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItemBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageEligibilityResponseInsuranceItemBenefitArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CoverageEligibilityResponseInsuranceItem type.
 */
export interface CoverageEligibilityResponseInsuranceItemArgs extends fhir.BackboneElementArgs {
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
     * The practitioner who is eligible for the provision of the product or service.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: fhir.FhirBoolean | boolean | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.CodeableConceptArgs | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.CodeableConceptArgs | undefined;
    /**
     * Benefits used to date.
     */
    benefit?: fhir.CoverageEligibilityResponseInsuranceItemBenefitArgs[] | undefined;
    /**
     * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
     */
    authorizationRequired?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Codes or comments regarding information or actions associated with the preauthorization.
     */
    authorizationSupporting?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A web location for obtaining requirements or descriptive information regarding the preauthorization.
     */
    authorizationUrl?: fhir.FhirUri | string | undefined;
}
/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export declare class CoverageEligibilityResponseInsuranceItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
     * The practitioner who is eligible for the provision of the product or service.
     */
    provider?: fhir.Reference | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: fhir.FhirBoolean | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: fhir.FhirString | undefined;
    /**
     * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.CodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.CodeableConcept | undefined;
    /**
     * Benefits used to date.
     */
    benefit: fhir.CoverageEligibilityResponseInsuranceItemBenefit[];
    /**
     * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
     */
    authorizationRequired?: fhir.FhirBoolean | undefined;
    /**
     * Codes or comments regarding information or actions associated with the preauthorization.
     */
    authorizationSupporting: fhir.CodeableConcept[];
    /**
     * A web location for obtaining requirements or descriptive information regarding the preauthorization.
     */
    authorizationUrl?: fhir.FhirUri | undefined;
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageEligibilityResponseInsuranceItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CoverageEligibilityResponseInsurance type.
 */
export interface CoverageEligibilityResponseInsuranceArgs extends fhir.BackboneElementArgs {
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.ReferenceArgs | null;
    /**
     * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Benefits and optionally current balances, and authorization details by category or service.
     */
    item?: fhir.CoverageEligibilityResponseInsuranceItemArgs[] | undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class CoverageEligibilityResponseInsurance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: fhir.FhirBoolean | undefined;
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: fhir.Period | undefined;
    /**
     * Benefits and optionally current balances, and authorization details by category or service.
     */
    item: fhir.CoverageEligibilityResponseInsuranceItem[];
    /**
     * Default constructor for CoverageEligibilityResponseInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageEligibilityResponseInsuranceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CoverageEligibilityResponseError type.
 */
export interface CoverageEligibilityResponseErrorArgs extends fhir.BackboneElementArgs {
    /**
     * An error code,from a specified code system, which details why the eligibility check could not be performed.
     */
    code: fhir.CodeableConceptArgs | null;
}
/**
 * Errors encountered during the processing of the request.
 */
export declare class CoverageEligibilityResponseError extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An error code,from a specified code system, which details why the eligibility check could not be performed.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Default constructor for CoverageEligibilityResponseError - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageEligibilityResponseErrorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CoverageEligibilityResponse type.
 */
export interface CoverageEligibilityResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityResponse" | undefined;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: fhir.FhirCode<EligibilityresponsePurposeCodeType>[] | string[] | undefined;
    /**
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
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
     * The date this resource was created.
     */
    created: fhir.FhirDateTime | string | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.ReferenceArgs | undefined;
    /**
     * Reference to the original request resource.
     */
    request: fhir.ReferenceArgs | null;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: fhir.FhirCode<RemittanceOutcomeCodeType> | string | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * The Insurer who issued the coverage in question and is the author of the response.
     */
    insurer: fhir.ReferenceArgs | null;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.CoverageEligibilityResponseInsuranceArgs[] | undefined;
    /**
     * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
     */
    preAuthRef?: fhir.FhirString | string | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    form?: fhir.CodeableConceptArgs | undefined;
    /**
     * Errors encountered during the processing of the request.
     */
    error?: fhir.CoverageEligibilityResponseErrorArgs[] | undefined;
}
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export declare class CoverageEligibilityResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityResponse";
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<FmStatusCodeType> | null;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: fhir.FhirCode<EligibilityresponsePurposeCodeType>[];
    /**
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
     */
    patient: fhir.Reference | null;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    serviced?: (fhir.FhirDate | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.serviced[x]
     */
    protected static readonly _fts_servicedIsChoice: true;
    /**
     * The date this resource was created.
     */
    created: fhir.FhirDateTime | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.Reference | undefined;
    /**
     * Reference to the original request resource.
     */
    request: fhir.Reference | null;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: fhir.FhirCode<RemittanceOutcomeCodeType> | null;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | undefined;
    /**
     * The Insurer who issued the coverage in question and is the author of the response.
     */
    insurer: fhir.Reference | null;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.CoverageEligibilityResponseInsurance[];
    /**
     * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
     */
    preAuthRef?: fhir.FhirString | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * Errors encountered during the processing of the request.
     */
    error: fhir.CoverageEligibilityResponseError[];
    /**
     * Default constructor for CoverageEligibilityResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageEligibilityResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (CoverageEligibilityResponse.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Cancelled: "cancelled";
        readonly Draft: "draft";
        readonly EnteredInError: "entered-in-error";
    };
    /**
     * Required-bound Value Set for purpose (CoverageEligibilityResponse.purpose)
     */
    static get purposeRequiredCodes(): {
        readonly CoverageAuthRequirements: "auth-requirements";
        readonly CoverageBenefits: "benefits";
        readonly CoverageDiscovery: "discovery";
        readonly CoverageValidation: "validation";
    };
    /**
     * Required-bound Value Set for outcome (CoverageEligibilityResponse.outcome)
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
//# sourceMappingURL=CoverageEligibilityResponse.d.ts.map