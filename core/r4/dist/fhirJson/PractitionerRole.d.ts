import * as fhir from '../fhirJson.js';
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export interface PractitionerRoleAvailableTime extends fhir.BackboneElement {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: ('fri' | 'mon' | 'sat' | 'sun' | 'thu' | 'tue' | 'wed')[] | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.daysOfWeek
     */
    _daysOfWeek?: (fhir.FhirElement | null)[];
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.allDay
     */
    _allDay?: fhir.FhirElement;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.availableStartTime
     */
    _availableStartTime?: fhir.FhirElement;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.availableEndTime
     */
    _availableEndTime?: fhir.FhirElement;
}
/**
 * The practitioner is not available or performing this role during this period of time due to the provided reason.
 */
export interface PractitionerRoleNotAvailable extends fhir.BackboneElement {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: PractitionerRole.notAvailable.description
     */
    _description?: fhir.FhirElement;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: fhir.Period | undefined;
}
/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export interface PractitionerRole extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "PractitionerRole";
    /**
     * Business Identifiers that are specific to a role/location.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.active
     */
    _active?: fhir.FhirElement;
    /**
     * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
     */
    period?: fhir.Period | undefined;
    /**
     * Practitioner that is able to provide the defined services for the organization.
     */
    practitioner?: fhir.Reference | undefined;
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    organization?: fhir.Reference | undefined;
    /**
     * A person may have more than one role.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: fhir.Reference[] | undefined;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: fhir.Reference[] | undefined;
    /**
     * Contact details that are specific to the role/location/service.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhir.PractitionerRoleAvailableTime[] | undefined;
    /**
     * The practitioner is not available or performing this role during this period of time due to the provided reason.
     */
    notAvailable?: fhir.PractitionerRoleNotAvailable[] | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availabilityExceptions
     */
    _availabilityExceptions?: fhir.FhirElement;
    /**
     * Technical endpoints providing access to services operated for the practitioner with this role.
     */
    endpoint?: fhir.Reference[] | undefined;
}
//# sourceMappingURL=PractitionerRole.d.ts.map