import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Schedule type.
 */
export interface ScheduleArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Schedule" | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The schedule type can be used for the categorization of healthcare services or other appointment types.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, Device, Patient or RelatedPerson.
     */
    actor: fhir.ReferenceArgs | null;
    /**
     * The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhir.PeriodArgs | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Schedule.comment
     */
    _comment?: fhir.FhirElementArgs;
}
/**
 * A container for slot(s) of time that may be available for booking appointments.
 */
export declare class Schedule extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Schedule";
    /**
     * External Ids for this item.
     */
    identifier: fhir.Identifier[];
    /**
     * The schedule type can be used for the categorization of healthcare services or other appointment types.
     */
    type: fhir.CodeableConcept[];
    /**
     * The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, Device, Patient or RelatedPerson.
     */
    actor: fhir.Reference | null;
    /**
     * The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhir.Period | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for Schedule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ScheduleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Schedule.d.ts.map