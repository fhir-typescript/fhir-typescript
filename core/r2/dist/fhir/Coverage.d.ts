import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Coverage type.
 */
export interface CoverageArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Coverage" | undefined;
    /**
     * Need to identify the issuer to target for processing and for coordination of benefit processing.
     */
    issuer?: fhir.ReferenceArgs | undefined;
    /**
     * Business Identification Number (BIN number) used to identify the routing  of eclaims if the insurer themselves don't have a BIN number for all of their business.
     */
    bin?: fhir.IdentifierArgs | undefined;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The order of application of coverages is dependent on the types of coverage.
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * The id issued to the subscriber.
     */
    subscriberId?: fhir.IdentifierArgs | undefined;
    /**
     * This value may uniquely identify the coverage or it may be used in conjunction with the additional identifiers below.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.
     */
    group?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.group
     */
    _group?: fhir.FhirElementArgs;
    /**
     * Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.
     */
    plan?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.plan
     */
    _plan?: fhir.FhirElementArgs;
    /**
     * Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a specific employer group within a class of employers. May be referred to as a Section or Division ID.
     */
    subPlan?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coverage.subPlan
     */
    _subPlan?: fhir.FhirElementArgs;
    /**
     * For some coverage a single identifier is issued to the PolicyHolder and dependent number issues to each to each of their dependents to track and manage the plan.
     */
    dependent?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Coverage.dependent
     */
    _dependent?: fhir.FhirElementArgs;
    /**
     * Some coverage, for example social plans, may be offered in short time increments, for example for a week or a month at a time, so while the rest of the plan details and identifiers may remain constant over time, the instance is incremented with each renewal and provided to the covered party on their 'card'.
     */
    sequence?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Coverage.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * The party who 'owns' the insurance contractual relationship to the policy or to whom the benefit of the policy is due.
     */
    subscriber?: fhir.ReferenceArgs | undefined;
    /**
     * The identifier for a community of providers.
     */
    network?: fhir.IdentifierArgs | undefined;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Financial instrument which may be used to pay for or reimburse health care products and services.
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
     * Need to identify the issuer to target for processing and for coordination of benefit processing.
     */
    issuer?: fhir.Reference | undefined;
    /**
     * Business Identification Number (BIN number) used to identify the routing  of eclaims if the insurer themselves don't have a BIN number for all of their business.
     */
    bin?: fhir.Identifier | undefined;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.Period | undefined;
    /**
     * The order of application of coverages is dependent on the types of coverage.
     */
    type?: fhir.Coding | undefined;
    /**
     * The id issued to the subscriber.
     */
    subscriberId?: fhir.Identifier | undefined;
    /**
     * This value may uniquely identify the coverage or it may be used in conjunction with the additional identifiers below.
     */
    identifier: fhir.Identifier[];
    /**
     * Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.
     */
    group?: fhir.FhirString | undefined;
    /**
     * Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.
     */
    plan?: fhir.FhirString | undefined;
    /**
     * Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a specific employer group within a class of employers. May be referred to as a Section or Division ID.
     */
    subPlan?: fhir.FhirString | undefined;
    /**
     * For some coverage a single identifier is issued to the PolicyHolder and dependent number issues to each to each of their dependents to track and manage the plan.
     */
    dependent?: fhir.FhirPositiveInt | undefined;
    /**
     * Some coverage, for example social plans, may be offered in short time increments, for example for a week or a month at a time, so while the rest of the plan details and identifiers may remain constant over time, the instance is incremented with each renewal and provided to the covered party on their 'card'.
     */
    sequence?: fhir.FhirPositiveInt | undefined;
    /**
     * The party who 'owns' the insurance contractual relationship to the policy or to whom the benefit of the policy is due.
     */
    subscriber?: fhir.Reference | undefined;
    /**
     * The identifier for a community of providers.
     */
    network?: fhir.Identifier | undefined;
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