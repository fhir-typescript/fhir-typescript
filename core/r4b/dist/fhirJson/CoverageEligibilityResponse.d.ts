import * as fhir from '../fhirJson.js';
/**
 * Benefits used to date.
 */
export interface CoverageEligibilityResponseInsuranceItemBenefit extends fhir.BackboneElement {
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.allowed[x]
     */
    _allowedUnsignedInt?: fhir.FhirElement;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.allowed[x]
     */
    _allowedString?: fhir.FhirElement;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.Money | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.used[x]
     */
    _usedUnsignedInt?: fhir.FhirElement;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedString?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.used[x]
     */
    _usedString?: fhir.FhirElement;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhir.Money | undefined;
}
/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export interface CoverageEligibilityResponseInsuranceItem extends fhir.BackboneElement {
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
    modifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The practitioner who is eligible for the provision of the product or service.
     */
    provider?: fhir.Reference | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.excluded
     */
    _excluded?: fhir.FhirElement;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.name
     */
    _name?: fhir.FhirElement;
    /**
     * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.description
     */
    _description?: fhir.FhirElement;
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
    benefit?: (fhir.CoverageEligibilityResponseInsuranceItemBenefit | null)[] | undefined;
    /**
     * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
     */
    authorizationRequired?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.authorizationRequired
     */
    _authorizationRequired?: fhir.FhirElement;
    /**
     * Codes or comments regarding information or actions associated with the preauthorization.
     */
    authorizationSupporting?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A web location for obtaining requirements or descriptive information regarding the preauthorization.
     */
    authorizationUrl?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.authorizationUrl
     */
    _authorizationUrl?: fhir.FhirElement;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface CoverageEligibilityResponseInsurance extends fhir.BackboneElement {
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.inforce
     */
    _inforce?: fhir.FhirElement;
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: fhir.Period | undefined;
    /**
     * Benefits and optionally current balances, and authorization details by category or service.
     */
    item?: (fhir.CoverageEligibilityResponseInsuranceItem | null)[] | undefined;
}
/**
 * Errors encountered during the processing of the request.
 */
export interface CoverageEligibilityResponseError extends fhir.BackboneElement {
    /**
     * An error code,from a specified code system, which details why the eligibility check could not be performed.
     */
    code: fhir.CodeableConcept | null;
}
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export interface CoverageEligibilityResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityResponse" | null;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.status
     */
    _status?: fhir.FhirElement;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: (('auth-requirements' | 'benefits' | 'discovery' | 'validation') | null)[] | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.purpose
     */
    _purpose?: (fhir.FhirElement | null)[];
    /**
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
     */
    patient: fhir.Reference | null;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.serviced[x]
     */
    _servicedDate?: fhir.FhirElement;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
    /**
     * The date this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.created
     */
    _created?: fhir.FhirElement;
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
    outcome: 'complete' | 'error' | 'partial' | 'queued' | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.outcome
     */
    _outcome?: fhir.FhirElement;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.disposition
     */
    _disposition?: fhir.FhirElement;
    /**
     * The Insurer who issued the coverage in question and is the author of the response.
     */
    insurer: fhir.Reference | null;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: (fhir.CoverageEligibilityResponseInsurance | null)[] | undefined;
    /**
     * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
     */
    preAuthRef?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.preAuthRef
     */
    _preAuthRef?: fhir.FhirElement;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * Errors encountered during the processing of the request.
     */
    error?: (fhir.CoverageEligibilityResponseError | null)[] | undefined;
}
//# sourceMappingURL=CoverageEligibilityResponse.d.ts.map