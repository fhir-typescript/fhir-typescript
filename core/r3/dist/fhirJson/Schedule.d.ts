import * as fhir from '../fhirJson.js';
/**
 * A container for slots of time that may be available for booking appointments.
 */
export interface Schedule extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Schedule" | null;
    /**
     * External Ids for this item.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Schedule.active
     */
    _active?: fhir.FhirElement;
    /**
     * A broad categorisation of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConcept | undefined;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a pracitioner and a room(location) are always required by a system.
     */
    actor: (fhir.Reference | null)[] | null;
    /**
     * The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhir.Period | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Schedule.comment
     */
    _comment?: fhir.FhirElement;
}
//# sourceMappingURL=Schedule.d.ts.map