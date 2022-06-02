import * as fhir from '../fhirJson.js';
/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export interface CoverageClass extends fhir.BackboneElement {
    /**
     * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    type: fhir.CodeableConcept | null;
    /**
     * For example, the Group or Plan number.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: Coverage.class.value
     */
    _value?: fhir.FhirElement;
    /**
     * A short description for the class.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.class.name
     */
    _name?: fhir.FhirElement;
}
/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export interface CoverageCostToBeneficiaryException extends fhir.BackboneElement {
    /**
     * The code for the specific exception.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The timeframe during when the exception is in force.
     */
    period?: fhir.Period | undefined;
}
/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export interface CoverageCostToBeneficiary extends fhir.BackboneElement {
    /**
     * For example visit, specialist visits, emergency, inpatient care, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    valueMoney?: fhir.Money | undefined;
    /**
     * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
     */
    exception?: (fhir.CoverageCostToBeneficiaryException | null)[] | undefined;
}
/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export interface Coverage extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Coverage" | null;
    /**
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | null;
    /**
     * Extended properties for primitive element: Coverage.status
     */
    _status?: fhir.FhirElement;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * For example: may be an individual, corporation or the subscriber's employer.
     */
    policyHolder?: fhir.Reference | undefined;
    /**
     * May be self or a parent in the case of dependants.
     */
    subscriber?: fhir.Reference | undefined;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.subscriberId
     */
    _subscriberId?: fhir.FhirElement;
    /**
     * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
     */
    beneficiary: fhir.Reference | null;
    /**
     * Periodically the member number is constructed from the subscriberId and the dependant number.
     */
    dependent?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.dependent
     */
    _dependent?: fhir.FhirElement;
    /**
     * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.Period | undefined;
    /**
     * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
     * For selfpay it may provide multiple paying persons and/or organizations.
     */
    payor: (fhir.Reference | null)[] | null;
    /**
     * For example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    class?: (fhir.CoverageClass | null)[] | undefined;
    /**
     * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: number | undefined;
    /**
     * Extended properties for primitive element: Coverage.order
     */
    _order?: fhir.FhirElement;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.network
     */
    _network?: fhir.FhirElement;
    /**
     * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
     */
    costToBeneficiary?: (fhir.CoverageCostToBeneficiary | null)[] | undefined;
    /**
     * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
     */
    subrogation?: boolean | undefined;
    /**
     * Extended properties for primitive element: Coverage.subrogation
     */
    _subrogation?: fhir.FhirElement;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=Coverage.d.ts.map