import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
/**
 * Valid arguments for the CoverageGrouping type.
 */
export interface CoverageGroupingArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify an employer group. May also be referred to as a Policy or Group ID.
     */
    group?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.group
     */
    _group?: fhir.FhirElementArgs;
    /**
     * A short description for the group.
     */
    groupDisplay?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.groupDisplay
     */
    _groupDisplay?: fhir.FhirElementArgs;
    /**
     * Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a subset of an employer group.
     */
    subGroup?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subGroup
     */
    _subGroup?: fhir.FhirElementArgs;
    /**
     * A short description for the subgroup.
     */
    subGroupDisplay?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subGroupDisplay
     */
    _subGroupDisplay?: fhir.FhirElementArgs;
    /**
     * Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a collection of benefits provided to employees. May be referred to as a Section or Division ID.
     */
    plan?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.plan
     */
    _plan?: fhir.FhirElementArgs;
    /**
     * A short description for the plan.
     */
    planDisplay?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.planDisplay
     */
    _planDisplay?: fhir.FhirElementArgs;
    /**
     * Identifies a sub-style or sub-collective of coverage issued by the underwriter, for example may be used to identify a subset of a collection of benefits provided to employees.
     */
    subPlan?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subPlan
     */
    _subPlan?: fhir.FhirElementArgs;
    /**
     * A short description for the subplan.
     */
    subPlanDisplay?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subPlanDisplay
     */
    _subPlanDisplay?: fhir.FhirElementArgs;
    /**
     * Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage such as a level of deductables or co-payment.
     */
    class?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.class
     */
    _class?: fhir.FhirElementArgs;
    /**
     * A short description for the class.
     */
    classDisplay?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.classDisplay
     */
    _classDisplay?: fhir.FhirElementArgs;
    /**
     * Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a subclass of coverage such as a sub-level of deductables or co-payment.
     */
    subClass?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subClass
     */
    _subClass?: fhir.FhirElementArgs;
    /**
     * A short description for the subclass.
     */
    subClassDisplay?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subClassDisplay
     */
    _subClassDisplay?: fhir.FhirElementArgs;
}
/**
 * A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export declare class CoverageGrouping extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify an employer group. May also be referred to as a Policy or Group ID.
     */
    group?: fhir.FhirString | undefined;
    /**
     * A short description for the group.
     */
    groupDisplay?: fhir.FhirString | undefined;
    /**
     * Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a subset of an employer group.
     */
    subGroup?: fhir.FhirString | undefined;
    /**
     * A short description for the subgroup.
     */
    subGroupDisplay?: fhir.FhirString | undefined;
    /**
     * Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a collection of benefits provided to employees. May be referred to as a Section or Division ID.
     */
    plan?: fhir.FhirString | undefined;
    /**
     * A short description for the plan.
     */
    planDisplay?: fhir.FhirString | undefined;
    /**
     * Identifies a sub-style or sub-collective of coverage issued by the underwriter, for example may be used to identify a subset of a collection of benefits provided to employees.
     */
    subPlan?: fhir.FhirString | undefined;
    /**
     * A short description for the subplan.
     */
    subPlanDisplay?: fhir.FhirString | undefined;
    /**
     * Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage such as a level of deductables or co-payment.
     */
    class?: fhir.FhirString | undefined;
    /**
     * A short description for the class.
     */
    classDisplay?: fhir.FhirString | undefined;
    /**
     * Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a subclass of coverage such as a sub-level of deductables or co-payment.
     */
    subClass?: fhir.FhirString | undefined;
    /**
     * A short description for the subclass.
     */
    subClassDisplay?: fhir.FhirString | undefined;
    /**
     * Default constructor for CoverageGrouping - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageGroupingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatination of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The party who 'owns' the insurance policy,  may be an individual, corporation or the subscriber's employer.
     */
    policyHolder?: fhir.ReferenceArgs | undefined;
    /**
     * The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
     */
    subscriber?: fhir.ReferenceArgs | undefined;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.subscriberId
     */
    _subscriberId?: fhir.FhirElementArgs;
    /**
     * The party who benefits from the insurance coverage., the patient when services are provided.
     */
    beneficiary?: fhir.ReferenceArgs | undefined;
    /**
     * The relationship of beneficiary (patient) to the subscriber.
     */
    relationship?: fhir.CodeableConceptArgs | undefined;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
     */
    payor?: fhir.ReferenceArgs[] | undefined;
    /**
     * A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    grouping?: fhir.CoverageGroupingArgs | undefined;
    /**
     * A unique identifier for a dependent under the coverage.
     */
    dependent?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.dependent
     */
    _dependent?: fhir.FhirElementArgs;
    /**
     * An optional counter for a particular instance of the identified coverage which increments upon each renewal.
     */
    sequence?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * The order of applicability of this coverage relative to other coverages which are currently inforce. Note, there may be gaps in the numbering and this does not imply primary, secondard etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Coverage.order
     */
    _order?: fhir.FhirElementArgs;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.network
     */
    _network?: fhir.FhirElementArgs;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Financial instrument which may be used to reimburse or pay for health care products and services.
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
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatination of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | undefined;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The party who 'owns' the insurance policy,  may be an individual, corporation or the subscriber's employer.
     */
    policyHolder?: fhir.Reference | undefined;
    /**
     * The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
     */
    subscriber?: fhir.Reference | undefined;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: fhir.FhirString | undefined;
    /**
     * The party who benefits from the insurance coverage., the patient when services are provided.
     */
    beneficiary?: fhir.Reference | undefined;
    /**
     * The relationship of beneficiary (patient) to the subscriber.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.Period | undefined;
    /**
     * The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
     */
    payor: fhir.Reference[];
    /**
     * A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    grouping?: fhir.CoverageGrouping | undefined;
    /**
     * A unique identifier for a dependent under the coverage.
     */
    dependent?: fhir.FhirString | undefined;
    /**
     * An optional counter for a particular instance of the identified coverage which increments upon each renewal.
     */
    sequence?: fhir.FhirString | undefined;
    /**
     * The order of applicability of this coverage relative to other coverages which are currently inforce. Note, there may be gaps in the numbering and this does not imply primary, secondard etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: fhir.FhirPositiveInt | undefined;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: fhir.FhirString | undefined;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract: fhir.Reference[];
    /**
     * Default constructor for Coverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CoverageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Coverage.d.ts.map