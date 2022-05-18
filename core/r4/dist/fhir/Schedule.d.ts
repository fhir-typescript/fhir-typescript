import * as fhir from '../fhir.js';
import { C80PracticeCodesCodingType } from '../fhirValueSets/C80PracticeCodesCodings.js';
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
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a practitioner and a room (Location) are always required by a system.
     */
    actor: fhir.ReferenceArgs[] | null;
    /**
     * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhir.PeriodArgs | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
     */
    comment?: fhir.FhirString | string | undefined;
}
/**
 * A container for slots of time that may be available for booking appointments.
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
    identifier?: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConcept[];
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: fhir.CodeableConcept[];
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.CodeableConcept[];
    /**
     * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a practitioner and a room (Location) are always required by a system.
     */
    actor: fhir.Reference[];
    /**
     * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhir.Period | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for Schedule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ScheduleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for specialty (Schedule.specialty)
     */
    static specialtyPreferredCoding(): C80PracticeCodesCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=Schedule.d.ts.map