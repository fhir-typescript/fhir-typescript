import * as fhir from '../fhirJson.js';
/**
 * A container for slot(s) of time that may be available for booking appointments.
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
     * The schedule type can be used for the categorization of healthcare services or other appointment types.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
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
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Schedule.comment
     */
    _comment?: fhir.FhirElement;
}
//# sourceMappingURL=Schedule.d.ts.map