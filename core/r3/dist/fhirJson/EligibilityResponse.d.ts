import * as fhir from '../fhirJson.js';
/**
 * Benefits Used to date.
 */
export interface EligibilityResponseInsuranceBenefitBalanceFinancial extends fhir.BackboneElement {
    /**
     * Deductable, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Benefits allowed.
     */
    allowedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.insurance.benefitBalance.financial.allowed[x]
     */
    _allowedUnsignedInt?: fhir.FhirElement;
    /**
     * Benefits allowed.
     */
    allowedString?: string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.insurance.benefitBalance.financial.allowed[x]
     */
    _allowedString?: fhir.FhirElement;
    /**
     * Benefits allowed.
     */
    allowedMoney?: fhir.Money | undefined;
    /**
     * Benefits used.
     */
    usedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.insurance.benefitBalance.financial.used[x]
     */
    _usedUnsignedInt?: fhir.FhirElement;
    /**
     * Benefits used.
     */
    usedMoney?: fhir.Money | undefined;
}
/**
 * Benefits and optionally current balances by Category.
 */
export interface EligibilityResponseInsuranceBenefitBalance extends fhir.BackboneElement {
    /**
     * Dental, Vision, Medical, Pharmacy, Rehab etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
     */
    subCategory?: fhir.CodeableConcept | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.
     */
    excluded?: boolean | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.insurance.benefitBalance.excluded
     */
    _excluded?: fhir.FhirElement;
    /**
     * A short name or tag for the benefit, for example MED01, or DENT2.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.insurance.benefitBalance.name
     */
    _name?: fhir.FhirElement;
    /**
     * A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services'.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.insurance.benefitBalance.description
     */
    _description?: fhir.FhirElement;
    /**
     * Network designation.
     */
    network?: fhir.CodeableConcept | undefined;
    /**
     * Unit designation: individual or family.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual vistis'.
     */
    term?: fhir.CodeableConcept | undefined;
    /**
     * Benefits Used to date.
     */
    financial?: (fhir.EligibilityResponseInsuranceBenefitBalanceFinancial | null)[] | undefined;
}
/**
 * The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.
 */
export interface EligibilityResponseInsurance extends fhir.BackboneElement {
    /**
     * A suite of updated or additional Coverages from the Insurer.
     */
    coverage?: fhir.Reference | undefined;
    /**
     * The contract resource which may provide more detailed information.
     */
    contract?: fhir.Reference | undefined;
    /**
     * Benefits and optionally current balances by Category.
     */
    benefitBalance?: (fhir.EligibilityResponseInsuranceBenefitBalance | null)[] | undefined;
}
/**
 * Mutually exclusive with Services Provided (Item).
 */
export interface EligibilityResponseError extends fhir.BackboneElement {
    /**
     * An error code,from a specified code system, which details why the eligibility check could not be performed.
     */
    code: fhir.CodeableConcept | null;
}
/**
 * This resource provides eligibility and plan details from the processing of an Eligibility resource.
 */
export interface EligibilityResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EligibilityResponse" | null;
    /**
     * The Response business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.status
     */
    _status?: fhir.FhirElement;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.created
     */
    _created?: fhir.FhirElement;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.Reference | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: 'complete' | 'error' | 'partial' | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.disposition
     */
    _disposition?: fhir.FhirElement;
    /**
     * The Insurer who produced this adjudicated response.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * Flag indicating if the coverage provided is inforce currently  if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: boolean | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.inforce
     */
    _inforce?: fhir.FhirElement;
    /**
     * The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.
     */
    insurance?: (fhir.EligibilityResponseInsurance | null)[] | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * Mutually exclusive with Services Provided (Item).
     */
    error?: (fhir.EligibilityResponseError | null)[] | undefined;
}
//# sourceMappingURL=EligibilityResponse.d.ts.map