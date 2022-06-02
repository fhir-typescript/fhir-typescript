import * as fhir from '../fhir.js';
import { DaysOfWeekCodeType } from '../fhirValueSets/DaysOfWeekCodes.js';
import { C80PracticeCodingType } from '../fhirValueSets/C80PracticeCodings.js';
import { LanguagesCodingType } from '../fhirValueSets/LanguagesCodings.js';
/**
 * Valid arguments for the HealthcareServiceEligibility type.
 */
export interface HealthcareServiceEligibilityArgs extends fhir.BackboneElementArgs {
    /**
     * Coded value for the eligibility.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
     */
    comment?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.eligibility.comment
     */
    _comment?: fhir.FhirElementArgs;
}
/**
 * Does this service have specific eligibility requirements that need to be met in order to use the service?
 */
export declare class HealthcareServiceEligibility extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Coded value for the eligibility.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
     */
    comment?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for HealthcareServiceEligibility - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<HealthcareServiceEligibilityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: fhir.FhirTime | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.availableStartTime
     */
    _availableStartTime?: fhir.FhirElementArgs;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: fhir.FhirTime | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.availableEndTime
     */
    _availableEndTime?: fhir.FhirElementArgs;
}
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
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
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: fhir.FhirTime | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: fhir.FhirTime | undefined;
    /**
     * Default constructor for HealthcareServiceAvailableTime - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<HealthcareServiceAvailableTimeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for daysOfWeek (HealthcareService.availableTime.daysOfWeek)
     */
    static get daysOfWeekRequiredCodes(): {
        readonly Friday: "fri";
        readonly Monday: "mon";
        readonly Saturday: "sat";
        readonly Sunday: "sun";
        readonly Thursday: "thu";
        readonly Tuesday: "tue";
        readonly Wednesday: "wed";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * This property is recommended to be the same as the Location's managingOrganization, and if not provided should be interpreted as such. If the Location does not have a managing Organization, then this property should be populated.
     */
    providedBy?: fhir.ReferenceArgs | undefined;
    /**
     * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The specific type of service that may be delivered or performed.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The location(s) where this healthcare service may be provided.
     */
    location?: fhir.ReferenceArgs[] | undefined;
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Would expect that a user would not see this information on a search results, and it would only be available when viewing the complete details of the service.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.extraDetails
     */
    _extraDetails?: fhir.FhirElementArgs;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhir.AttachmentArgs | undefined;
    /**
     * If this is empty, then refer to the location's contacts.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
     */
    coverageArea?: fhir.ReferenceArgs[] | undefined;
    /**
     * The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
     */
    serviceProvisionCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: fhir.HealthcareServiceEligibilityArgs[] | undefined;
    /**
     * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ….
     */
    program?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * These could be such things as is wheelchair accessible.
     */
    characteristic?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
     */
    communication?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.appointmentRequired
     */
    _appointmentRequired?: fhir.FhirElementArgs;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
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
    /**
     * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
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
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * This property is recommended to be the same as the Location's managingOrganization, and if not provided should be interpreted as such. If the Location does not have a managing Organization, then this property should be populated.
     */
    providedBy?: fhir.Reference | undefined;
    /**
     * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
     */
    category: fhir.CodeableConcept[];
    /**
     * The specific type of service that may be delivered or performed.
     */
    type: fhir.CodeableConcept[];
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty: fhir.CodeableConcept[];
    /**
     * The location(s) where this healthcare service may be provided.
     */
    location: fhir.Reference[];
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Would expect that a user would not see this information on a search results, and it would only be available when viewing the complete details of the service.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: fhir.FhirMarkdown | undefined;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhir.Attachment | undefined;
    /**
     * If this is empty, then refer to the location's contacts.
     */
    telecom: fhir.ContactPoint[];
    /**
     * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
     */
    coverageArea: fhir.Reference[];
    /**
     * The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
     */
    serviceProvisionCode: fhir.CodeableConcept[];
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility: fhir.HealthcareServiceEligibility[];
    /**
     * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ….
     */
    program: fhir.CodeableConcept[];
    /**
     * These could be such things as is wheelchair accessible.
     */
    characteristic: fhir.CodeableConcept[];
    /**
     * When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
     */
    communication: fhir.CodeableConcept[];
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod: fhir.CodeableConcept[];
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: fhir.FhirBoolean | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
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
     * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
     */
    endpoint: fhir.Reference[];
    /**
     * Default constructor for HealthcareService - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<HealthcareServiceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for specialty (HealthcareService.specialty)
     */
    static get specialtyPreferredCodings(): C80PracticeCodingType;
    /**
     * Preferred-bound Value Set for communication (HealthcareService.communication)
     */
    static get communicationPreferredCodings(): LanguagesCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=HealthcareService.d.ts.map