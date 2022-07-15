import * as fhir from '../fhirJson.js';
/**
 * A specific type of service that may be delivered or performed.
 */
export interface HealthcareServiceServiceType extends fhir.BackboneElement {
    /**
     * The specific type of service being delivered or performed.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * A collection of times that the Service Site is available.
 */
export interface HealthcareServiceAvailableTime extends fhir.BackboneElement {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: (('fri' | 'mon' | 'sat' | 'sun' | 'thu' | 'tue' | 'wed') | null)[] | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.daysOfWeek
     */
    _daysOfWeek?: (fhir.FhirElement | null)[];
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.allDay
     */
    _allDay?: fhir.FhirElement;
    /**
     * The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
     */
    availableStartTime?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.availableStartTime
     */
    _availableStartTime?: fhir.FhirElement;
    /**
     * The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
     */
    availableEndTime?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.availableEndTime
     */
    _availableEndTime?: fhir.FhirElement;
}
/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export interface HealthcareServiceNotAvailable extends fhir.BackboneElement {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: HealthcareService.notAvailable.description
     */
    _description?: fhir.FhirElement;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: fhir.Period | undefined;
}
/**
 * The details of a healthcare service available at a location.
 */
export interface HealthcareService extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "HealthcareService" | null;
    /**
     * External identifiers for this item.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The organization that provides this healthcare service.
     */
    providedBy?: fhir.Reference | undefined;
    /**
     * Identifies the broad category of service being performed or delivered.
     */
    serviceCategory?: fhir.CodeableConcept | undefined;
    /**
     * A specific type of service that may be delivered or performed.
     */
    serviceType?: (fhir.HealthcareServiceServiceType | null)[] | undefined;
    /**
     * The location where this healthcare service may be provided.
     */
    location: fhir.Reference | null;
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    serviceName?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.serviceName
     */
    _serviceName?: fhir.FhirElement;
    /**
     * Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.comment
     */
    _comment?: fhir.FhirElement;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.extraDetails
     */
    _extraDetails?: fhir.FhirElement;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhir.Attachment | undefined;
    /**
     * List of contacts related to this specific healthcare service.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * The location(s) that this service is available to (not where the service is provided).
     */
    coverageArea?: (fhir.Reference | null)[] | undefined;
    /**
     * The code(s) that detail the conditions under which the healthcare service is available/offered.
     */
    serviceProvisionCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: fhir.CodeableConcept | undefined;
    /**
     * Describes the eligibility conditions for the service.
     */
    eligibilityNote?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.eligibilityNote
     */
    _eligibilityNote?: fhir.FhirElement;
    /**
     * Program Names that can be used to categorize the service.
     */
    programName?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.programName
     */
    _programName?: (fhir.FhirElement | null)[];
    /**
     * Collection of characteristics (attributes).
     */
    characteristic?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The public part of the 'keys' allocated to an Organization by an accredited body to support secure exchange of data over the internet. To be provided by the Organization, where available.
     */
    publicKey?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.publicKey
     */
    _publicKey?: fhir.FhirElement;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.appointmentRequired
     */
    _appointmentRequired?: fhir.FhirElement;
    /**
     * A collection of times that the Service Site is available.
     */
    availableTime?: (fhir.HealthcareServiceAvailableTime | null)[] | undefined;
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable?: (fhir.HealthcareServiceNotAvailable | null)[] | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availabilityExceptions
     */
    _availabilityExceptions?: fhir.FhirElement;
}
//# sourceMappingURL=HealthcareService.d.ts.map