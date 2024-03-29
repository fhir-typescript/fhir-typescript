import * as fhir from '../fhir.js';
import { DaysOfWeekCodeType } from '../fhirValueSets/DaysOfWeekCodes.js';
/**
 * Valid arguments for the PractitionerRoleAvailableTime type.
 */
export interface PractitionerRoleAvailableTimeArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: fhir.FhirCode<DaysOfWeekCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.daysOfWeek
     */
    _daysOfWeek?: (fhir.FhirElementArgs | null)[];
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.allDay
     */
    _allDay?: fhir.FhirElementArgs;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: fhir.FhirTime | string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.availableStartTime
     */
    _availableStartTime?: fhir.FhirElementArgs;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: fhir.FhirTime | string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.availableEndTime
     */
    _availableEndTime?: fhir.FhirElementArgs;
}
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare class PractitionerRoleAvailableTime extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek: fhir.FhirCode<DaysOfWeekCodeType>[];
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: fhir.FhirBoolean | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: fhir.FhirTime | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: fhir.FhirTime | undefined;
    /**
     * Default constructor for PractitionerRoleAvailableTime - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PractitionerRoleAvailableTimeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PractitionerRoleNotAvailable type.
 */
export interface PractitionerRoleNotAvailableArgs extends fhir.BackboneElementArgs {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.notAvailable.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: fhir.PeriodArgs | undefined;
}
/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export declare class PractitionerRoleNotAvailable extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: fhir.FhirString | null;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: fhir.Period | undefined;
    /**
     * Default constructor for PractitionerRoleNotAvailable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PractitionerRoleNotAvailableArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PractitionerRole type.
 */
export interface PractitionerRoleArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "PractitionerRole" | undefined;
    /**
     * Business Identifiers that are specific to a role/location.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Default is true.
     * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Practitioner that is able to provide the defined services for the organation.
     */
    practitioner?: fhir.ReferenceArgs | undefined;
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * A person may have more than one role. At least one role is required.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: fhir.ReferenceArgs[] | undefined;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: fhir.ReferenceArgs[] | undefined;
    /**
     * Contact details that are specific to the role/location/service.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhir.PractitionerRoleAvailableTimeArgs[] | undefined;
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable?: fhir.PractitionerRoleNotAvailableArgs[] | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availabilityExceptions
     */
    _availabilityExceptions?: fhir.FhirElementArgs;
    /**
     * Technical endpoints providing access to services operated for the practitioner with this role.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
}
/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export declare class PractitionerRole extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "PractitionerRole";
    /**
     * Business Identifiers that are specific to a role/location.
     */
    identifier: fhir.Identifier[];
    /**
     * Default is true.
     * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
     */
    period?: fhir.Period | undefined;
    /**
     * Practitioner that is able to provide the defined services for the organation.
     */
    practitioner?: fhir.Reference | undefined;
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    organization?: fhir.Reference | undefined;
    /**
     * A person may have more than one role. At least one role is required.
     */
    code: fhir.CodeableConcept[];
    /**
     * Specific specialty of the practitioner.
     */
    specialty: fhir.CodeableConcept[];
    /**
     * The location(s) at which this practitioner provides care.
     */
    location: fhir.Reference[];
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService: fhir.Reference[];
    /**
     * Contact details that are specific to the role/location/service.
     */
    telecom: fhir.ContactPoint[];
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime: fhir.PractitionerRoleAvailableTime[];
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable: fhir.PractitionerRoleNotAvailable[];
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: fhir.FhirString | undefined;
    /**
     * Technical endpoints providing access to services operated for the practitioner with this role.
     */
    endpoint: fhir.Reference[];
    /**
     * Default constructor for PractitionerRole - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PractitionerRoleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=PractitionerRole.d.ts.map