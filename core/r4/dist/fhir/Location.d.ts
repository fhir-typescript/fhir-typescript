import * as fhir from '../fhir.js';
import { DaysOfWeekCodeType } from '../fhirValueSets/DaysOfWeekCodes.js';
import { LocationStatusCodeType } from '../fhirValueSets/LocationStatusCodes.js';
import { LocationModeCodeType } from '../fhirValueSets/LocationModeCodes.js';
/**
 * Valid arguments for the LocationPosition type.
 */
export interface LocationPositionArgs extends fhir.BackboneElementArgs {
    /**
     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */
    longitude: fhir.FhirDecimal | number | undefined;
    /**
     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */
    latitude: fhir.FhirDecimal | number | undefined;
    /**
     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */
    altitude?: fhir.FhirDecimal | number | undefined;
}
/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export declare class LocationPosition extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */
    longitude: fhir.FhirDecimal | null;
    /**
     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */
    latitude: fhir.FhirDecimal | null;
    /**
     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */
    altitude?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for LocationPosition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<LocationPositionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the LocationHoursOfOperation type.
 */
export interface LocationHoursOfOperationArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: fhir.FhirCode<DaysOfWeekCodeType>[] | string[] | undefined;
    /**
     * The Location is open all day.
     */
    allDay?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Time that the Location opens.
     */
    openingTime?: fhir.FhirTime | string | undefined;
    /**
     * Time that the Location closes.
     */
    closingTime?: fhir.FhirTime | string | undefined;
}
/**
 * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
 * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 */
export declare class LocationHoursOfOperation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek: fhir.FhirCode<DaysOfWeekCodeType>[];
    /**
     * The Location is open all day.
     */
    allDay?: fhir.FhirBoolean | undefined;
    /**
     * Time that the Location opens.
     */
    openingTime?: fhir.FhirTime | undefined;
    /**
     * Time that the Location closes.
     */
    closingTime?: fhir.FhirTime | undefined;
    /**
     * Default constructor for LocationHoursOfOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<LocationHoursOfOperationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for daysOfWeek (Location.hoursOfOperation.daysOfWeek)
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
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Location type.
 */
export interface LocationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Location" | undefined;
    /**
     * Unique code or number identifying the location to its users.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
     */
    status?: fhir.FhirCode<LocationStatusCodeType> | string | undefined;
    /**
     * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
     */
    operationalStatus?: fhir.CodingArgs | undefined;
    /**
     * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
     */
    alias?: fhir.FhirString[] | string[] | undefined;
    /**
     * Description of the Location, which helps in finding or referencing the place.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
     */
    mode?: fhir.FhirCode<LocationModeCodeType> | string | undefined;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
     */
    address?: fhir.AddressArgs | undefined;
    /**
     * Physical form of the location, e.g. building, room, vehicle, road.
     */
    physicalType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
     */
    position?: fhir.LocationPositionArgs | undefined;
    /**
     * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Another Location of which this Location is physically a part of.
     */
    partOf?: fhir.ReferenceArgs | undefined;
    /**
     * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
     * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
     */
    hoursOfOperation?: fhir.LocationHoursOfOperationArgs[] | undefined;
    /**
     * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
     */
    availabilityExceptions?: fhir.FhirString | string | undefined;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export declare class Location extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Location";
    /**
     * Unique code or number identifying the location to its users.
     */
    identifier: fhir.Identifier[];
    /**
     * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
     */
    status?: fhir.FhirCode<LocationStatusCodeType> | undefined;
    /**
     * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
     */
    operationalStatus?: fhir.Coding | undefined;
    /**
     * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: fhir.FhirString | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
     */
    alias: fhir.FhirString[];
    /**
     * Description of the Location, which helps in finding or referencing the place.
     */
    description?: fhir.FhirString | undefined;
    /**
     * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
     */
    mode?: fhir.FhirCode<LocationModeCodeType> | undefined;
    /**
     * Indicates the type of function performed at the location.
     */
    type: fhir.CodeableConcept[];
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
     */
    address?: fhir.Address | undefined;
    /**
     * Physical form of the location, e.g. building, room, vehicle, road.
     */
    physicalType?: fhir.CodeableConcept | undefined;
    /**
     * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
     */
    position?: fhir.LocationPosition | undefined;
    /**
     * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * Another Location of which this Location is physically a part of.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
     * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
     */
    hoursOfOperation: fhir.LocationHoursOfOperation[];
    /**
     * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
     */
    availabilityExceptions?: fhir.FhirString | undefined;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint: fhir.Reference[];
    /**
     * Default constructor for Location - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<LocationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Location.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Inactive: "inactive";
        readonly Suspended: "suspended";
    };
    /**
     * Preferred-bound Value Set for operationalStatus (Location.operationalStatus)
     */
    static get operationalStatusPreferredCodings(): {
        readonly Closed: fhir.Coding;
        readonly Housekeeping: fhir.Coding;
        readonly Isolated: fhir.Coding;
        readonly Contaminated: fhir.Coding;
        readonly Occupied: fhir.Coding;
        readonly Unoccupied: fhir.Coding;
    };
    /**
     * Required-bound Value Set for mode (Location.mode)
     */
    static get modeRequiredCodes(): {
        readonly Instance: "instance";
        readonly Kind: "kind";
    };
    /**
     * Extensible-bound Value Set for type (Location.type)
     */
    static get typeExtensibleCodings(): {
        readonly DedicatedClinicalLocationRoleType: fhir.Coding;
        readonly DedicatedNonClinicalLocationRoleType: fhir.Coding;
        readonly DedicatedServiceDeliveryLocationRoleType: fhir.Coding;
        readonly IncidentalServiceDeliveryLocationRoleType: fhir.Coding;
        readonly AccidentSite: fhir.Coding;
        readonly AllergyClinic: fhir.Coding;
        readonly Ambulance: fhir.Coding;
        readonly AmputeeClinic: fhir.Coding;
        readonly BoneMarrowTransplantClinic: fhir.Coding;
        readonly BoneMarrowTransplantUnit: fhir.Coding;
        readonly BreastClinic: fhir.Coding;
        readonly ChildAndAdolescentNeurologyClinic: fhir.Coding;
        readonly ChildAndAdolescentPsychiatryClinic: fhir.Coding;
        readonly AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities: fhir.Coding;
        readonly CardiacCatheterizationLab: fhir.Coding;
        readonly CoronaryCareUnit: fhir.Coding;
        readonly ChestUnit: fhir.Coding;
        readonly ChronicCareFacility: fhir.Coding;
        readonly CoagulationClinic: fhir.Coding;
        readonly CommunityLocation: fhir.Coding;
        readonly ColonAndRectalSurgeryClinic: fhir.Coding;
        readonly CommunityServiceCenter: fhir.Coding;
        readonly CardiovascularDiagnosticsOrTherapeuticsUnit: fhir.Coding;
        readonly DeliveryAddress: fhir.Coding;
        readonly DermatologyClinic: fhir.Coding;
        readonly DiagnosticsOrTherapeuticsUnit: fhir.Coding;
        readonly EchocardiographyLab: fhir.Coding;
        readonly EndocrinologyClinic: fhir.Coding;
        readonly EndoscopyLab: fhir.Coding;
        readonly OtorhinolaryngologyClinic: fhir.Coding;
        readonly EpilepsyUnit: fhir.Coding;
        readonly EmergencyRoom: fhir.Coding;
        readonly EmergencyTraumaUnit: fhir.Coding;
        readonly FamilyMedicineClinic: fhir.Coding;
        readonly HospitalsGeneralAcuteCareHospital: fhir.Coding;
        readonly GastroenterologyClinic: fhir.Coding;
        readonly GastroenterologyDiagnosticsOrTherapeuticsLab: fhir.Coding;
        readonly GeneralInternalMedicineClinic: fhir.Coding;
        readonly GynecologyClinic: fhir.Coding;
        readonly HandClinic: fhir.Coding;
        readonly HemodialysisUnit: fhir.Coding;
        readonly HematologyClinic: fhir.Coding;
        readonly HospitalLaboratory: fhir.Coding;
        /**
         * Unique code or number identifying the location to its users.
         */
        readonly Hospital: fhir.Coding;
        readonly RadiologyUnit: fhir.Coding;
        readonly HypertensionClinic: fhir.Coding;
        readonly HospitalUnit: fhir.Coding;
        readonly SpecimenCollectionSite: fhir.Coding;
        readonly IntensiveCareUnit: fhir.Coding;
        readonly ImpairmentEvaluationCenter: fhir.Coding;
        readonly InfectiousDiseaseClinic: fhir.Coding;
        readonly InpatientLaboratory: fhir.Coding;
        readonly InpatientPharmacy: fhir.Coding;
        readonly InfertilityClinic: fhir.Coding;
        readonly LympedemaClinic: fhir.Coding;
        readonly MedicalLaboratory: fhir.Coding;
        readonly MedicalGeneticsClinic: fhir.Coding;
        readonly MilitaryHospital: fhir.Coding;
        readonly MobileUnit: fhir.Coding;
        readonly NursingOrCustodialCareFacility: fhir.Coding;
        readonly NeurologyCriticalCareAndStrokeUnit: fhir.Coding;
        readonly NephrologyClinic: fhir.Coding;
        readonly NeurologyClinic: fhir.Coding;
        readonly NeurosurgeryUnit: fhir.Coding;
        readonly ObstetricsClinic: fhir.Coding;
        readonly OutpatientFacility: fhir.Coding;
        readonly OralAndMaxillofacialSurgeryClinic: fhir.Coding;
        readonly MedicalOncologyClinic: fhir.Coding;
        readonly OpthalmologyClinic: fhir.Coding;
        readonly OptometryClinic: fhir.Coding;
        readonly OrthopedicsClinic: fhir.Coding;
        readonly OutpatientLaboratory: fhir.Coding;
        readonly OutpatientPharmacy: fhir.Coding;
        readonly PainClinic: fhir.Coding;
        readonly PrimaryCareClinic: fhir.Coding;
        readonly PediatricsClinic: fhir.Coding;
        readonly PediatricCardiologyClinic: fhir.Coding;
        readonly PediatricEndocrinologyClinic: fhir.Coding;
        readonly PediatricGastroenterologyClinic: fhir.Coding;
        readonly PediatricHematologyClinic: fhir.Coding;
        readonly PediatricOncologyClinic: fhir.Coding;
        readonly PediatricIntensiveCareUnit: fhir.Coding;
        readonly PediatricInfectiousDiseaseClinic: fhir.Coding;
        readonly PediatricNephrologyClinic: fhir.Coding;
        readonly PediatricNeonatalIntensiveCareUnit: fhir.Coding;
        readonly PediatricRheumatologyClinic: fhir.Coding;
        readonly PediatricUnit: fhir.Coding;
        readonly Pharmacy: fhir.Coding;
        readonly PsychiatricHospitalUnit: fhir.Coding;
        readonly PlasticSurgeryClinic: fhir.Coding;
        readonly PodiatryClinic: fhir.Coding;
        readonly PainRehabilitationCenter: fhir.Coding;
        readonly PreventiveMedicineClinic: fhir.Coding;
        readonly ProctologyClinic: fhir.Coding;
        readonly ProviderQuoteSOffice: fhir.Coding;
        readonly ProsthodonticsClinic: fhir.Coding;
        readonly PsychologyClinic: fhir.Coding;
        readonly PsychiatryClinic: fhir.Coding;
        readonly PsychatricCareFacility: fhir.Coding;
        readonly PatientQuoteSResidence: fhir.Coding;
        readonly RadiologyDiagnosticsOrTherapeuticsUnit: fhir.Coding;
        readonly RadiationOncologyUnit: fhir.Coding;
        readonly RehabilitationHospital: fhir.Coding;
        readonly AddictionTreatmentCenter: fhir.Coding;
        readonly RheumatologyClinic: fhir.Coding;
        readonly IntellectualImpairmentCenter: fhir.Coding;
        readonly ParentsWithAdjustmentDifficultiesCenter: fhir.Coding;
        readonly PhysicalImpairmentCenter: fhir.Coding;
        readonly PhysicalImpairmentHearingCenter: fhir.Coding;
        readonly PhysicalImpairmentMotorSkillsCenter: fhir.Coding;
        readonly PhysicalImpairmentVisualSkillsCenter: fhir.Coding;
        readonly RehabilitationHospitalUnit: fhir.Coding;
        readonly YouthsWithAdjustmentDifficultiesCenter: fhir.Coding;
        readonly NeuroradiologyUnit: fhir.Coding;
        readonly ResidentialTreatmentFacility: fhir.Coding;
        readonly School: fhir.Coding;
        readonly SleepDisordersUnit: fhir.Coding;
        readonly SkilledNursingFacility: fhir.Coding;
        readonly SportsMedicineClinic: fhir.Coding;
        readonly SurgeryClinic: fhir.Coding;
        readonly SubstanceUseRehabilitationFacility: fhir.Coding;
        readonly TransplantClinic: fhir.Coding;
        readonly TravelAndGeographicMedicineClinic: fhir.Coding;
        readonly UnderageProtectionCenter: fhir.Coding;
        readonly UrologyClinic: fhir.Coding;
        readonly WoundClinic: fhir.Coding;
        readonly WorkSite: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Location.d.ts.map