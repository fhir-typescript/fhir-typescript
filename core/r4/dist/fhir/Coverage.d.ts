import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
/**
 * Valid arguments for the CoverageClass type.
 */
export interface CoverageClassArgs extends fhir.BackboneElementArgs {
    /**
     * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * For example, the Group or Plan number.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * A short description for the class.
     */
    name?: fhir.FhirString | string | undefined;
}
/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export declare class CoverageClass extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    type: fhir.CodeableConcept | null;
    /**
     * For example, the Group or Plan number.
     */
    value: fhir.FhirString | null;
    /**
     * A short description for the class.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Default constructor for CoverageClass - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageClassArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type (Coverage.class.type)
     */
    static get typeExtensibleCodings(): {
        readonly Class: fhir.Coding;
        readonly Group: fhir.Coding;
        readonly Plan: fhir.Coding;
        readonly RXBIN: fhir.Coding;
        readonly RXGroup: fhir.Coding;
        readonly RXId: fhir.Coding;
        readonly RXPCN: fhir.Coding;
        readonly Sequence: fhir.Coding;
        readonly SubClass: fhir.Coding;
        readonly SubGroup: fhir.Coding;
        readonly SubPlan: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CoverageCostToBeneficiaryException type.
 */
export interface CoverageCostToBeneficiaryExceptionArgs extends fhir.BackboneElementArgs {
    /**
     * The code for the specific exception.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The timeframe during when the exception is in force.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export declare class CoverageCostToBeneficiaryException extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The code for the specific exception.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The timeframe during when the exception is in force.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for CoverageCostToBeneficiaryException - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageCostToBeneficiaryExceptionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CoverageCostToBeneficiary type.
 */
export interface CoverageCostToBeneficiaryArgs extends fhir.BackboneElementArgs {
    /**
     * For example visit, specialist visits, emergency, inpatient care, etc.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    value?: fhir.Quantity | fhir.Money | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    valueMoney?: fhir.MoneyArgs | undefined;
    /**
     * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
     */
    exception?: fhir.CoverageCostToBeneficiaryExceptionArgs[] | undefined;
}
/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export declare class CoverageCostToBeneficiary extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For example visit, specialist visits, emergency, inpatient care, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    value: (fhir.Quantity | fhir.Money) | null;
    /**
     * Internal flag to properly serialize choice-type element Coverage.costToBeneficiary.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
     */
    exception: fhir.CoverageCostToBeneficiaryException[];
    /**
     * Default constructor for CoverageCostToBeneficiary - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageCostToBeneficiaryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type (Coverage.costToBeneficiary.type)
     */
    static get typeExtensibleCodings(): {
        readonly CopayAmount: fhir.Coding;
        readonly CopayPercentage: fhir.Coding;
        readonly Deductible: fhir.Coding;
        readonly Emergency: fhir.Coding;
        readonly GPOfficeVisit: fhir.Coding;
        readonly InpatientHospital: fhir.Coding;
        readonly MaximumOutOfPocket: fhir.Coding;
        readonly SpecialistOfficeVisit: fhir.Coding;
        readonly TeleVisit: fhir.Coding;
        readonly UrgentCare: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Coverage type.
 */
export interface CoverageArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Coverage" | undefined;
    /**
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example: may be an individual, corporation or the subscriber's employer.
     */
    policyHolder?: fhir.ReferenceArgs | undefined;
    /**
     * May be self or a parent in the case of dependants.
     */
    subscriber?: fhir.ReferenceArgs | undefined;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: fhir.FhirString | string | undefined;
    /**
     * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
     */
    beneficiary: fhir.ReferenceArgs | null;
    /**
     * Periodically the member number is constructed from the subscriberId and the dependant number.
     */
    dependent?: fhir.FhirString | string | undefined;
    /**
     * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
     */
    relationship?: fhir.CodeableConceptArgs | undefined;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
     * For selfpay it may provide multiple paying persons and/or organizations.
     */
    payor: fhir.ReferenceArgs[] | null;
    /**
     * For example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    class?: fhir.CoverageClassArgs[] | undefined;
    /**
     * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: fhir.FhirString | string | undefined;
    /**
     * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
     */
    costToBeneficiary?: fhir.CoverageCostToBeneficiaryArgs[] | undefined;
    /**
     * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
     */
    subrogation?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export declare class Coverage extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Coverage";
    /**
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status: fhir.FhirCode<FmStatusCodeType> | null;
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
    subscriberId?: fhir.FhirString | undefined;
    /**
     * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
     */
    beneficiary: fhir.Reference | null;
    /**
     * Periodically the member number is constructed from the subscriberId and the dependant number.
     */
    dependent?: fhir.FhirString | undefined;
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
    payor: fhir.Reference[];
    /**
     * For example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    class: fhir.CoverageClass[];
    /**
     * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: fhir.FhirPositiveInt | undefined;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: fhir.FhirString | undefined;
    /**
     * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
     */
    costToBeneficiary: fhir.CoverageCostToBeneficiary[];
    /**
     * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
     */
    subrogation?: fhir.FhirBoolean | undefined;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract: fhir.Reference[];
    /**
     * Default constructor for Coverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Coverage.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Cancelled: "cancelled";
        readonly Draft: "draft";
        readonly EnteredInError: "entered-in-error";
    };
    /**
     * Preferred-bound Value Set for type (Coverage.type)
     */
    static get typePreferredCodings(): {
        readonly AnnuityPolicy: fhir.Coding;
        readonly Automobile: fhir.Coding;
        readonly WomenQuoteSCancerDetectionProgram: fhir.Coding;
        readonly CharityProgram: fhir.Coding;
        readonly CollisionCoveragePolicy: fhir.Coding;
        readonly CrimeVictimProgram: fhir.Coding;
        readonly DentalCarePolicy: fhir.Coding;
        readonly DentalProgram: fhir.Coding;
        readonly DisabilityInsurancePolicy: fhir.Coding;
        readonly DiseaseSpecificPolicy: fhir.Coding;
        readonly PublicHealthProgram: fhir.Coding;
        readonly DrugPolicy: fhir.Coding;
        readonly EmployeeAssistanceProgram: fhir.Coding;
        readonly ExtendedHealthcare: fhir.Coding;
        readonly EndRenalProgram: fhir.Coding;
        readonly EmployeeWelfareBenefitPlanPolicy: fhir.Coding;
        readonly FlexibleBenefitPlanPolicy: fhir.Coding;
        readonly GovernmentEmployeeHealthProgram: fhir.Coding;
        readonly HealthInsurancePlanPolicy: fhir.Coding;
        readonly HighRiskPoolProgram: fhir.Coding;
        readonly HIVAIDSProgram: fhir.Coding;
        readonly HealthMaintenanceOrganizationPolicy: fhir.Coding;
        readonly HealthSpendingAccount: fhir.Coding;
        readonly IndigenousPeoplesHealthProgram: fhir.Coding;
        readonly LifeInsurancePolicy: fhir.Coding;
        readonly LongTermCarePolicy: fhir.Coding;
        readonly MandatoryHealthProgram: fhir.Coding;
        readonly ManagedCarePolicy: fhir.Coding;
        readonly MentalHealthPolicy: fhir.Coding;
        readonly MentalHealthProgram: fhir.Coding;
        readonly MilitaryHealthProgram: fhir.Coding;
        readonly Pay: fhir.Coding;
        readonly PropertyAndCasualtyInsurancePolicy: fhir.Coding;
        readonly PointOfServicePolicy: fhir.Coding;
        readonly PreferredProviderOrganizationPolicy: fhir.Coding;
        readonly PublicHealthcare: fhir.Coding;
        readonly ReinsurancePolicy: fhir.Coding;
        readonly RetireeHealthProgram: fhir.Coding;
        readonly SafetyNetClinicProgram: fhir.Coding;
        readonly SocialServiceProgram: fhir.Coding;
        readonly SubstanceUsePolicy: fhir.Coding;
        readonly SubstanceUseProgram: fhir.Coding;
        readonly SubsidizedHealthProgram: fhir.Coding;
        readonly SubsidizedManagedCareProgram: fhir.Coding;
        readonly SubsidizedSupplementalHealthProgram: fhir.Coding;
        readonly SurplusLineInsurancePolicy: fhir.Coding;
        readonly TermLifeInsurancePolicy: fhir.Coding;
        readonly UniversalLifeInsurancePolicy: fhir.Coding;
        readonly UmbrellaLiabilityInsurancePolicy: fhir.Coding;
        readonly UninsuredMotoristPolicy: fhir.Coding;
        readonly VeteranHealthProgram: fhir.Coding;
        readonly VisionCarePolicy: fhir.Coding;
        readonly WorkerQuoteSCompensation: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for relationship (Coverage.relationship)
     */
    static get relationshipExtensibleCodings(): {
        readonly Child: fhir.Coding;
        readonly CommonLawSpouse: fhir.Coding;
        readonly InjuredParty: fhir.Coding;
        readonly Other: fhir.Coding;
        readonly Parent: fhir.Coding;
        readonly Self: fhir.Coding;
        readonly Spouse: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Coverage.d.ts.map