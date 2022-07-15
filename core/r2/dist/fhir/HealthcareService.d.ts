import * as fhir from '../fhir.js';
import { DaysOfWeekCodeType } from '../fhirValueSets/DaysOfWeekCodes.js';
/**
 * Valid arguments for the HealthcareServiceServiceType type.
 */
export interface HealthcareServiceServiceTypeArgs extends fhir.BackboneElementArgs {
    /**
     * The specific type of service being delivered or performed.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * A specific type of service that may be delivered or performed.
 */
export declare class HealthcareServiceServiceType extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The specific type of service being delivered or performed.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty: fhir.CodeableConcept[];
    /**
     * Default constructor for HealthcareServiceServiceType - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<HealthcareServiceServiceTypeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the HealthcareServiceAvailableTime type.
 */
export interface HealthcareServiceAvailableTimeArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: fhir.FhirCode<DaysOfWeekCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.daysOfWeek
     */
    _daysOfWeek?: (fhir.FhirElementArgs | null)[];
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.allDay
     */
    _allDay?: fhir.FhirElementArgs;
    /**
     * The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
     */
    availableStartTime?: fhir.FhirTime | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.availableStartTime
     */
    _availableStartTime?: fhir.FhirElementArgs;
    /**
     * The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
     */
    availableEndTime?: fhir.FhirTime | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.availableEndTime
     */
    _availableEndTime?: fhir.FhirElementArgs;
}
/**
 * A collection of times that the Service Site is available.
 */
export declare class HealthcareServiceAvailableTime extends fhir.BackboneElement {
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
     * The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
     */
    availableStartTime?: fhir.FhirTime | undefined;
    /**
     * The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
     */
    availableEndTime?: fhir.FhirTime | undefined;
    /**
     * Default constructor for HealthcareServiceAvailableTime - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<HealthcareServiceAvailableTimeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the HealthcareServiceNotAvailable type.
 */
export interface HealthcareServiceNotAvailableArgs extends fhir.BackboneElementArgs {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.notAvailable.description
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
export declare class HealthcareServiceNotAvailable extends fhir.BackboneElement {
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
     * Default constructor for HealthcareServiceNotAvailable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<HealthcareServiceNotAvailableArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the HealthcareService type.
 */
export interface HealthcareServiceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "HealthcareService" | undefined;
    /**
     * External identifiers for this item.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The organization that provides this healthcare service.
     */
    providedBy?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the broad category of service being performed or delivered.
     */
    serviceCategory?: fhir.CodeableConceptArgs | undefined;
    /**
     * A specific type of service that may be delivered or performed.
     */
    serviceType?: fhir.HealthcareServiceServiceTypeArgs[] | undefined;
    /**
     * The location where this healthcare service may be provided.
     */
    location: fhir.ReferenceArgs | null;
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    serviceName?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.serviceName
     */
    _serviceName?: fhir.FhirElementArgs;
    /**
     * Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.extraDetails
     */
    _extraDetails?: fhir.FhirElementArgs;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhir.AttachmentArgs | undefined;
    /**
     * List of contacts related to this specific healthcare service.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * The location(s) that this service is available to (not where the service is provided).
     */
    coverageArea?: fhir.ReferenceArgs[] | undefined;
    /**
     * The code(s) that detail the conditions under which the healthcare service is available/offered.
     */
    serviceProvisionCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: fhir.CodeableConceptArgs | undefined;
    /**
     * Describes the eligibility conditions for the service.
     */
    eligibilityNote?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.eligibilityNote
     */
    _eligibilityNote?: fhir.FhirElementArgs;
    /**
     * Program Names that can be used to categorize the service.
     */
    programName?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.programName
     */
    _programName?: (fhir.FhirElementArgs | null)[];
    /**
     * Collection of characteristics (attributes).
     */
    characteristic?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The public part of the 'keys' allocated to an Organization by an accredited body to support secure exchange of data over the internet. To be provided by the Organization, where available.
     */
    publicKey?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.publicKey
     */
    _publicKey?: fhir.FhirElementArgs;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.appointmentRequired
     */
    _appointmentRequired?: fhir.FhirElementArgs;
    /**
     * A collection of times that the Service Site is available.
     */
    availableTime?: fhir.HealthcareServiceAvailableTimeArgs[] | undefined;
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable?: fhir.HealthcareServiceNotAvailableArgs[] | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availabilityExceptions
     */
    _availabilityExceptions?: fhir.FhirElementArgs;
}
/**
 * The details of a healthcare service available at a location.
 */
export declare class HealthcareService extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "HealthcareService";
    /**
     * External identifiers for this item.
     */
    identifier: fhir.Identifier[];
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
    serviceType: fhir.HealthcareServiceServiceType[];
    /**
     * The location where this healthcare service may be provided.
     */
    location: fhir.Reference | null;
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    serviceName?: fhir.FhirString | undefined;
    /**
     * Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: fhir.FhirString | undefined;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhir.Attachment | undefined;
    /**
     * List of contacts related to this specific healthcare service.
     */
    telecom: fhir.ContactPoint[];
    /**
     * The location(s) that this service is available to (not where the service is provided).
     */
    coverageArea: fhir.Reference[];
    /**
     * The code(s) that detail the conditions under which the healthcare service is available/offered.
     */
    serviceProvisionCode: fhir.CodeableConcept[];
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: fhir.CodeableConcept | undefined;
    /**
     * Describes the eligibility conditions for the service.
     */
    eligibilityNote?: fhir.FhirString | undefined;
    /**
     * Program Names that can be used to categorize the service.
     */
    programName: fhir.FhirString[];
    /**
     * Collection of characteristics (attributes).
     */
    characteristic: fhir.CodeableConcept[];
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod: fhir.CodeableConcept[];
    /**
     * The public part of the 'keys' allocated to an Organization by an accredited body to support secure exchange of data over the internet. To be provided by the Organization, where available.
     */
    publicKey?: fhir.FhirString | undefined;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: fhir.FhirBoolean | undefined;
    /**
     * A collection of times that the Service Site is available.
     */
    availableTime: fhir.HealthcareServiceAvailableTime[];
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable: fhir.HealthcareServiceNotAvailable[];
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: fhir.FhirString | undefined;
    /**
     * Default constructor for HealthcareService - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<HealthcareServiceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=HealthcareService.d.ts.map