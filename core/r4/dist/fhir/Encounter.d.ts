import * as fhir from '../fhir.js';
import { EncounterStatusCodeType } from '../fhirValueSets/EncounterStatusCodes.js';
import { EncounterLocationStatusCodeType } from '../fhirValueSets/EncounterLocationStatusCodes.js';
/**
 * Valid arguments for the EncounterStatusHistory type.
 */
export interface EncounterStatusHistoryArgs extends fhir.BackboneElementArgs {
    /**
     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
     */
    status: fhir.FhirCode<EncounterStatusCodeType> | string | undefined;
    /**
     * The time that the episode was in the specified status.
     */
    period: fhir.PeriodArgs | null;
}
/**
 * The current status is always found in the current version of the resource, not the status history.
 */
export declare class EncounterStatusHistory extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
     */
    status: fhir.FhirCode<EncounterStatusCodeType> | null;
    /**
     * The time that the episode was in the specified status.
     */
    period: fhir.Period | null;
    /**
     * Default constructor for EncounterStatusHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterStatusHistoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Encounter.statusHistory.status)
     */
    static get statusRequiredCodes(): {
        readonly Arrived: "arrived";
        readonly Cancelled: "cancelled";
        readonly EnteredInError: "entered-in-error";
        readonly Finished: "finished";
        readonly InProgress: "in-progress";
        readonly OnLeave: "onleave";
        readonly Planned: "planned";
        readonly Triaged: "triaged";
        readonly Unknown: "unknown";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EncounterClassHistory type.
 */
export interface EncounterClassHistoryArgs extends fhir.BackboneElementArgs {
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class: fhir.CodingArgs | null;
    /**
     * The time that the episode was in the specified class.
     */
    period: fhir.PeriodArgs | null;
}
/**
 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
 */
export declare class EncounterClassHistory extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class: fhir.Coding | null;
    /**
     * The time that the episode was in the specified class.
     */
    period: fhir.Period | null;
    /**
     * Default constructor for EncounterClassHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterClassHistoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for class (Encounter.classHistory.class)
     */
    static get classExtensibleCodings(): {
        readonly InpatientAcute: fhir.Coding;
        readonly Ambulatory: fhir.Coding;
        readonly Emergency: fhir.Coding;
        readonly Field: fhir.Coding;
        readonly HomeHealth: fhir.Coding;
        readonly InpatientEncounter: fhir.Coding;
        readonly InpatientNonAcute: fhir.Coding;
        readonly ObservationEncounter: fhir.Coding;
        readonly PreAdmission: fhir.Coding;
        readonly ShortStay: fhir.Coding;
        readonly Virtual: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EncounterParticipant type.
 */
export interface EncounterParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Persons involved in the encounter other than the patient.
     */
    individual?: fhir.ReferenceArgs | undefined;
}
/**
 * The list of people responsible for providing the service.
 */
export declare class EncounterParticipant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
     */
    type: fhir.CodeableConcept[];
    /**
     * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
     */
    period?: fhir.Period | undefined;
    /**
     * Persons involved in the encounter other than the patient.
     */
    individual?: fhir.Reference | undefined;
    /**
     * Default constructor for EncounterParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterParticipantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type (Encounter.participant.type)
     */
    static get typeExtensibleCodings(): {
        readonly Admitter: fhir.Coding;
        readonly Attender: fhir.Coding;
        readonly CallbackContact: fhir.Coding;
        readonly Consultant: fhir.Coding;
        readonly Discharger: fhir.Coding;
        readonly Emergency: fhir.Coding;
        readonly Escort: fhir.Coding;
        readonly Participation: fhir.Coding;
        readonly PrimaryPerformer: fhir.Coding;
        readonly Referrer: fhir.Coding;
        readonly SecondaryPerformer: fhir.Coding;
        readonly Translator: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EncounterDiagnosis type.
 */
export interface EncounterDiagnosisArgs extends fhir.BackboneElementArgs {
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    condition: fhir.ReferenceArgs | null;
    /**
     * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
     */
    use?: fhir.CodeableConceptArgs | undefined;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: fhir.FhirPositiveInt | number | undefined;
}
/**
 * The list of diagnosis relevant to this encounter.
 */
export declare class EncounterDiagnosis extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    condition: fhir.Reference | null;
    /**
     * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
     */
    use?: fhir.CodeableConcept | undefined;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: fhir.FhirPositiveInt | undefined;
    /**
     * Default constructor for EncounterDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterDiagnosisArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for use (Encounter.diagnosis.use)
     */
    static get usePreferredCodings(): {
        readonly AdmissionDiagnosis: fhir.Coding;
        readonly Billing: fhir.Coding;
        readonly ChiefComplaint: fhir.Coding;
        readonly ComorbidityDiagnosis: fhir.Coding;
        readonly DischargeDiagnosis: fhir.Coding;
        readonly PostOpDiagnosis: fhir.Coding;
        readonly PreOpDiagnosis: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EncounterHospitalization type.
 */
export interface EncounterHospitalizationArgs extends fhir.BackboneElementArgs {
    /**
     * Pre-admission identifier.
     */
    preAdmissionIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The location/organization from which the patient came before admission.
     */
    origin?: fhir.ReferenceArgs | undefined;
    /**
     * From where patient was admitted (physician referral, transfer).
     */
    admitSource?: fhir.CodeableConceptArgs | undefined;
    /**
     * Whether this hospitalization is a readmission and why if known.
     */
    reAdmission?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
     */
    dietPreference?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
     */
    specialArrangement?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Location/organization to which the patient is discharged.
     */
    destination?: fhir.ReferenceArgs | undefined;
    /**
     * Category or kind of location after discharge.
     */
    dischargeDisposition?: fhir.CodeableConceptArgs | undefined;
}
/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 */
export declare class EncounterHospitalization extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Pre-admission identifier.
     */
    preAdmissionIdentifier?: fhir.Identifier | undefined;
    /**
     * The location/organization from which the patient came before admission.
     */
    origin?: fhir.Reference | undefined;
    /**
     * From where patient was admitted (physician referral, transfer).
     */
    admitSource?: fhir.CodeableConcept | undefined;
    /**
     * Whether this hospitalization is a readmission and why if known.
     */
    reAdmission?: fhir.CodeableConcept | undefined;
    /**
     * For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
     */
    dietPreference: fhir.CodeableConcept[];
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy: fhir.CodeableConcept[];
    /**
     * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
     */
    specialArrangement: fhir.CodeableConcept[];
    /**
     * Location/organization to which the patient is discharged.
     */
    destination?: fhir.Reference | undefined;
    /**
     * Category or kind of location after discharge.
     */
    dischargeDisposition?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for EncounterHospitalization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterHospitalizationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for admitSource (Encounter.hospitalization.admitSource)
     */
    static get admitSourcePreferredCodings(): {
        readonly BornInHospital: fhir.Coding;
        readonly FromAccidentEmergencyDepartment: fhir.Coding;
        readonly GeneralPractitionerReferral: fhir.Coding;
        readonly TransferredFromOtherHospital: fhir.Coding;
        readonly MedicalPractitionerPhysicianReferral: fhir.Coding;
        readonly FromNursingHome: fhir.Coding;
        readonly Other: fhir.Coding;
        readonly FromOutpatientDepartment: fhir.Coding;
        readonly FromPsychiatricHospital: fhir.Coding;
        readonly FromRehabilitationFacility: fhir.Coding;
    };
    /**
     * Preferred-bound Value Set for specialCourtesy (Encounter.hospitalization.specialCourtesy)
     */
    static get specialCourtesyPreferredCodings(): {
        readonly ExtendedCourtesy: fhir.Coding;
        readonly NormalCourtesy: fhir.Coding;
        readonly ProfessionalCourtesy: fhir.Coding;
        readonly Staff: fhir.Coding;
        readonly Unknown: fhir.Coding;
        readonly VeryImportantPerson: fhir.Coding;
    };
    /**
     * Preferred-bound Value Set for specialArrangement (Encounter.hospitalization.specialArrangement)
     */
    static get specialArrangementPreferredCodings(): {
        readonly AdditionalBedding: fhir.Coding;
        readonly Attendant: fhir.Coding;
        readonly GuideDog: fhir.Coding;
        readonly Interpreter: fhir.Coding;
        readonly Wheelchair: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EncounterLocation type.
 */
export interface EncounterLocationArgs extends fhir.BackboneElementArgs {
    /**
     * The location where the encounter takes place.
     */
    location: fhir.ReferenceArgs | null;
    /**
     * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
     */
    status?: fhir.FhirCode<EncounterLocationStatusCodeType> | string | undefined;
    /**
     * This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.
     * There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
     */
    physicalType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Time period during which the patient was present at the location.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
export declare class EncounterLocation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The location where the encounter takes place.
     */
    location: fhir.Reference | null;
    /**
     * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
     */
    status?: fhir.FhirCode<EncounterLocationStatusCodeType> | undefined;
    /**
     * This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.
     * There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
     */
    physicalType?: fhir.CodeableConcept | undefined;
    /**
     * Time period during which the patient was present at the location.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for EncounterLocation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterLocationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Encounter.location.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Completed: "completed";
        readonly Planned: "planned";
        readonly Reserved: "reserved";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Encounter type.
 */
export interface EncounterArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Encounter" | undefined;
    /**
     * Identifier(s) by which this encounter is known.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
     */
    status: fhir.FhirCode<EncounterStatusCodeType> | string | undefined;
    /**
     * The current status is always found in the current version of the resource, not the status history.
     */
    statusHistory?: fhir.EncounterStatusHistoryArgs[] | undefined;
    /**
     * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
     */
    class: fhir.CodingArgs | null;
    /**
     * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
     */
    classHistory?: fhir.EncounterClassHistoryArgs[] | undefined;
    /**
     * Since there are many ways to further classify encounters, this element is 0..*.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Broad categorization of the service that is to be provided (e.g. cardiology).
     */
    serviceType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the urgency of the encounter.
     */
    priority?: fhir.CodeableConceptArgs | undefined;
    /**
     * While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
     */
    episodeOfCare?: fhir.ReferenceArgs[] | undefined;
    /**
     * The request this encounter satisfies (e.g. incoming referral or procedure request).
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The list of people responsible for providing the service.
     */
    participant?: fhir.EncounterParticipantArgs[] | undefined;
    /**
     * The appointment that scheduled this encounter.
     */
    appointment?: fhir.ReferenceArgs[] | undefined;
    /**
     * If not (yet) known, the end of the Period may be omitted.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * May differ from the time the Encounter.period lasted because of leave of absence.
     */
    length?: fhir.DurationArgs | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * The list of diagnosis relevant to this encounter.
     */
    diagnosis?: fhir.EncounterDiagnosisArgs[] | undefined;
    /**
     * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
     */
    account?: fhir.ReferenceArgs[] | undefined;
    /**
     * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
     * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
     */
    hospitalization?: fhir.EncounterHospitalizationArgs | undefined;
    /**
     * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
     */
    location?: fhir.EncounterLocationArgs[] | undefined;
    /**
     * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
     */
    serviceProvider?: fhir.ReferenceArgs | undefined;
    /**
     * This is also used for associating a child's encounter back to the mother's encounter.
     * Refer to the Notes section in the Patient resource for further details.
     */
    partOf?: fhir.ReferenceArgs | undefined;
}
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
export declare class Encounter extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Encounter";
    /**
     * Identifier(s) by which this encounter is known.
     */
    identifier: fhir.Identifier[];
    /**
     * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
     */
    status: fhir.FhirCode<EncounterStatusCodeType> | null;
    /**
     * The current status is always found in the current version of the resource, not the status history.
     */
    statusHistory: fhir.EncounterStatusHistory[];
    /**
     * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
     */
    class: fhir.Coding | null;
    /**
     * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
     */
    classHistory: fhir.EncounterClassHistory[];
    /**
     * Since there are many ways to further classify encounters, this element is 0..*.
     */
    type: fhir.CodeableConcept[];
    /**
     * Broad categorization of the service that is to be provided (e.g. cardiology).
     */
    serviceType?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the urgency of the encounter.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
     */
    subject?: fhir.Reference | undefined;
    /**
     * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
     */
    episodeOfCare: fhir.Reference[];
    /**
     * The request this encounter satisfies (e.g. incoming referral or procedure request).
     */
    basedOn: fhir.Reference[];
    /**
     * The list of people responsible for providing the service.
     */
    participant: fhir.EncounterParticipant[];
    /**
     * The appointment that scheduled this encounter.
     */
    appointment: fhir.Reference[];
    /**
     * If not (yet) known, the end of the Period may be omitted.
     */
    period?: fhir.Period | undefined;
    /**
     * May differ from the time the Encounter.period lasted because of leave of absence.
     */
    length?: fhir.Duration | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonReference: fhir.Reference[];
    /**
     * The list of diagnosis relevant to this encounter.
     */
    diagnosis: fhir.EncounterDiagnosis[];
    /**
     * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
     */
    account: fhir.Reference[];
    /**
     * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
     * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
     */
    hospitalization?: fhir.EncounterHospitalization | undefined;
    /**
     * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
     */
    location: fhir.EncounterLocation[];
    /**
     * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
     */
    serviceProvider?: fhir.Reference | undefined;
    /**
     * This is also used for associating a child's encounter back to the mother's encounter.
     * Refer to the Notes section in the Patient resource for further details.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * Default constructor for Encounter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Encounter.status)
     */
    static get statusRequiredCodes(): {
        readonly Arrived: "arrived";
        readonly Cancelled: "cancelled";
        readonly EnteredInError: "entered-in-error";
        readonly Finished: "finished";
        readonly InProgress: "in-progress";
        readonly OnLeave: "onleave";
        readonly Planned: "planned";
        readonly Triaged: "triaged";
        readonly Unknown: "unknown";
    };
    /**
     * Extensible-bound Value Set for class (Encounter.class)
     */
    static get classExtensibleCodings(): {
        readonly InpatientAcute: fhir.Coding;
        readonly Ambulatory: fhir.Coding;
        readonly Emergency: fhir.Coding;
        readonly Field: fhir.Coding;
        readonly HomeHealth: fhir.Coding;
        readonly InpatientEncounter: fhir.Coding;
        readonly InpatientNonAcute: fhir.Coding;
        readonly ObservationEncounter: fhir.Coding;
        readonly PreAdmission: fhir.Coding;
        readonly ShortStay: fhir.Coding;
        readonly Virtual: fhir.Coding;
    };
    /**
     * Preferred-bound Value Set for reasonCode (Encounter.reasonCode)
     */
    static get reasonCodePreferredCodings(): {
        readonly CauterizationOfBartholinQuoteSGland: fhir.Coding;
        readonly ReligiousDiscrimination: fhir.Coding;
        readonly OperationOnNerveGanglion: fhir.Coding;
        readonly RemovalOfCornealEpithelium: fhir.Coding;
        readonly DiseaseDueToNairovirus: fhir.Coding;
        readonly RepairOfScrotum: fhir.Coding;
        readonly Apneic: fhir.Coding;
        readonly MudSlide: fhir.Coding;
        readonly Pollution: fhir.Coding;
        readonly EnvironmentalPollution: fhir.Coding;
        readonly NoisePolution: fhir.Coding;
        readonly AirPollution: fhir.Coding;
        readonly WaterPollution: fhir.Coding;
        readonly DrinkingWaterPollution: fhir.Coding;
        readonly BathingWaterPollution: fhir.Coding;
        readonly SoilPollution: fhir.Coding;
        readonly DustPollution: fhir.Coding;
        readonly ExposureToPollution: fhir.Coding;
        readonly ExposureToEnvironmentalPollution: fhir.Coding;
        readonly ExposureToEnvironmentalPollutionOccupational: fhir.Coding;
        readonly ExposureToEnvironmentalPollutionNonOccupational: fhir.Coding;
        readonly ExposureToPollutedAir: fhir.Coding;
        readonly ExposureToPollutedAirOccupational: fhir.Coding;
        readonly ExposureToPollutedAirNonOccupational: fhir.Coding;
        readonly ExposureToWaterPollution: fhir.Coding;
        /**
         * Mapping of this datatype to a FHIR equivalent
         */
        readonly ExposureToPollutedWaterOccupational: fhir.Coding;
        readonly ExposureToPollutedWaterNonOccupational: fhir.Coding;
        readonly ExposureToPollutedDrinkingWater: fhir.Coding;
        readonly ExposureToPollutedBathingWater: fhir.Coding;
        readonly ExposureToPollutedSoil: fhir.Coding;
        readonly ExposureToPollutedSoilOccupational: fhir.Coding;
        readonly ExposureToPollutedSoilNonOccupational: fhir.Coding;
        readonly ExposureToChemicalPollution: fhir.Coding;
        readonly ExposureToChemicalPollutionOccupational: fhir.Coding;
        readonly ExposureToChemicalPollutionNonOccupational: fhir.Coding;
        readonly ExposureToToxicWasteOccupational: fhir.Coding;
        readonly ExposureToToxicWasteNonOccupational: fhir.Coding;
        readonly ExposureToToxicAgriculturalAgents: fhir.Coding;
        readonly ExposureToToxicAgriculturalAgentsOccupational: fhir.Coding;
        readonly ExposureToToxicAgriculturalAgentsNonOccupational: fhir.Coding;
        readonly ExposureToToxicDust: fhir.Coding;
        readonly ExposureToToxicDustOccupational: fhir.Coding;
        readonly ExposureToToxicDustNonOccupational: fhir.Coding;
        readonly BiliaryEsophagitis: fhir.Coding;
        readonly Fetoscopy: fhir.Coding;
        readonly AbsenceOfGuilt: fhir.Coding;
        readonly UnilateralHeadache: fhir.Coding;
        readonly OpenWoundOfTracheaWithoutComplication: fhir.Coding;
        readonly EnucleationOfParotidGlandCyst: fhir.Coding;
        readonly ThoracicArthritis: fhir.Coding;
        readonly MesentericPortalFistula: fhir.Coding;
        readonly MinimumBactericidalConcentrationTestMicrodilutionMethod: fhir.Coding;
        readonly InsertionOfIntravascularDeviceInCommonIliacVeinComplete: fhir.Coding;
        readonly FailedAttemptedProcedure: fhir.Coding;
        readonly Disacchariduria: fhir.Coding;
        readonly ExcisionOfLesionOfPatella: fhir.Coding;
        readonly DebridementOfOpenFractureOfPhalangesOfFoot: fhir.Coding;
        readonly PaternityTesting: fhir.Coding;
        readonly DopplerColorFlowVelocityMapping: fhir.Coding;
        readonly DiagnosticUltrasoundOfAbdomenAndRetroperitoneum: fhir.Coding;
        readonly Colonospasm: fhir.Coding;
        readonly UreteritisGlandularis: fhir.Coding;
        readonly CapillaryBloodSampling: fhir.Coding;
        readonly HyperplasiaOfIsletAlphaCellsWithGastrinExcess: fhir.Coding;
        readonly SphincterotomyOfPapillaOfVater: fhir.Coding;
        readonly DeathOfSpouse: fhir.Coding;
        readonly DeathOfCompanion: fhir.Coding;
        readonly DeathOfParent: fhir.Coding;
        readonly DeathOfChild: fhir.Coding;
        readonly DeathOfSibling: fhir.Coding;
        readonly SuicideOfRelative: fhir.Coding;
        readonly DeathOfPet: fhir.Coding;
        readonly RefusalOfTreatmentByPatient: fhir.Coding;
        readonly StenosisOfPrecerebralArtery: fhir.Coding;
        readonly PNDPerinatalDeath: fhir.Coding;
        readonly Opisthorchiasis: fhir.Coding;
        readonly ContactWithHandTool: fhir.Coding;
        readonly FacialMyokymia: fhir.Coding;
        readonly ProximalSplenorenalAnastomosis: fhir.Coding;
        readonly XerodermaPigmentosumGroupB: fhir.Coding;
        readonly GlucocorticoidResponsivePrimaryHyperaldosteronism: fhir.Coding;
        readonly SeptalInfarctionByEKG: fhir.Coding;
        readonly MacularRetinalCyst: fhir.Coding;
        /**
         * Pre-admission identifier.
         */
        readonly ExcisionOfPerinephricCyst: fhir.Coding;
        readonly VulvalCandidiasis: fhir.Coding;
        readonly CongenitalSepsis: fhir.Coding;
        readonly AnxietyDisorderOfChildhoodORAdolescence: fhir.Coding;
        readonly ExcisionOfAbdominalVaricoseVein: fhir.Coding;
        readonly UnilateralCleftOfPrimaryPalate: fhir.Coding;
        /**
         * Category or kind of location after discharge.
         */
        readonly UnilateralCoronoidHyperplasiaOfMandible: fhir.Coding;
        readonly UnilateralCoronoidHypoplasiaOfMandible: fhir.Coding;
        readonly IntraerythrocyticParasitosisByNuttallia: fhir.Coding;
        readonly TranscruralMobilizationOfStapes: fhir.Coding;
        readonly TriadKneeRepair: fhir.Coding;
        readonly EarlyLatentSyphilisPositiveSerologyNegativeCerebrospinalFluidWithRelapseAfterTreatment: fhir.Coding;
        readonly FemalePatternAlopecia: fhir.Coding;
        readonly Floods: fhir.Coding;
        readonly NormalSebaceousGlandActivity: fhir.Coding;
        readonly DegenerativeDisorderOfEyelid: fhir.Coding;
        readonly Decortication: fhir.Coding;
        readonly ChronicAggressiveTypeBViralHepatitis: fhir.Coding;
        readonly UnilateralTraumaticAmputationOfArmWithoutComplication: fhir.Coding;
        readonly ClosedReductionOfDislocationOfFootAndToe: fhir.Coding;
        readonly JudicialExecutionByLethalInjection: fhir.Coding;
        readonly KineticActivitiesForRangeOfMotion: fhir.Coding;
        readonly PostpartumPeriod6Days: fhir.Coding;
        readonly SepticemiaDuringLabor: fhir.Coding;
        readonly KneeLocking: fhir.Coding;
        readonly InterstitialRadiumApplication: fhir.Coding;
        readonly CongenitalValvularInsufficiency: fhir.Coding;
        readonly RemovalOfIntactMammaryImplantBilateral: fhir.Coding;
        readonly MuehrckeLines: fhir.Coding;
        readonly SolarRetinitis: fhir.Coding;
        readonly UnilateralInguinalHerniaWithGangreneANDObstruction: fhir.Coding;
        readonly AssaultAndBattery: fhir.Coding;
        readonly ConfrontationVisualTest: fhir.Coding;
        readonly ThermalHypesthesia: fhir.Coding;
        readonly CircumoralParesthesia: fhir.Coding;
        readonly DSDDevelopmentalSpeechDisorder: fhir.Coding;
        readonly CongenitalMicrocheilia: fhir.Coding;
        readonly FitRemovableOrthodonticAppliance: fhir.Coding;
        readonly ConstrictedVisualField: fhir.Coding;
        readonly SkinReactionNegative: fhir.Coding;
        readonly MyocardialHypertrophyDeterminedByElectrocardiogram: fhir.Coding;
        readonly CavitaryProstatitis: fhir.Coding;
        readonly ExposureToNonMechanicalForce: fhir.Coding;
        readonly ExposureToMagneticField: fhir.Coding;
        readonly Ureteroenterostomy: fhir.Coding;
        readonly AutologousWholeBloodIssued: fhir.Coding;
        readonly CytomegalovirusImmuneGlobulinIssued: fhir.Coding;
        readonly CryoprecipitateIssued: fhir.Coding;
        readonly FactorIXIssued: fhir.Coding;
        readonly FactorVIIIIssued: fhir.Coding;
        readonly Allotype: fhir.Coding;
        readonly HepatitisBVirusImmuneGlobulinHumanIssued: fhir.Coding;
        readonly DispensingOfHumanImmuneSerumGlobulinIntravenousIVIg: fhir.Coding;
        readonly PlasmaProductIssued: fhir.Coding;
        readonly PlateletProductIssued: fhir.Coding;
        readonly RhImmuneGlobulinIssued: fhir.Coding;
        readonly VaricellaVirusImmuneGlobulinIssued: fhir.Coding;
        readonly FreshFrozenPlasmaIssued: fhir.Coding;
        readonly PackedRedBloodCellsIssued: fhir.Coding;
        readonly WholeBloodIssued: fhir.Coding;
        readonly AlbuminIssued: fhir.Coding;
        readonly PlateletpheresisProductIssued: fhir.Coding; /**
         * Broad categorization of the service that is to be provided (e.g. cardiology).
         */
        readonly PlateletConcentrateIssued: fhir.Coding;
        readonly AutologousRedBloodCellsIssued: fhir.Coding;
        readonly CryoPoorPlasmaIssued: fhir.Coding;
        readonly FactorVIIIssued: fhir.Coding;
        readonly BotulismImmuneGlobulinHumanIssued: fhir.Coding;
        readonly RabiesImmuneGlobulinHumanIssued: fhir.Coding;
        readonly RespiratorySyncytialVirusImmuneGlobulinHumanIssued: fhir.Coding;
        readonly TetanusImmuneGlobulinHumanIssued: fhir.Coding;
        readonly VacciniaImmuneGlobulinHumanIssued: fhir.Coding;
        readonly LeukocyteProductIssued: fhir.Coding;
        readonly RedBloodCellsIssued: fhir.Coding;
        readonly SolventDetergentTreatedPlasmaProductIssued: fhir.Coding;
        readonly HumanImmuneGlobulinProductIssued: fhir.Coding;
        readonly CoagulationFactorProductIssued: fhir.Coding;
        readonly IncisionOfInguinalRegion: fhir.Coding;
        readonly ExcisionOfTendonForGraft: fhir.Coding;
        readonly GlasgowComaScale10: fhir.Coding;
        readonly AnesthesiaForProcedureOnBonyPelvis: fhir.Coding;
        readonly ThoracoscopicPartialLobectomyOfLung: fhir.Coding;
        readonly FamilialAmyloidNeuropathyFinnishType: fhir.Coding;
        readonly DiseaseConditionDeterminationWellControlled: fhir.Coding;
        readonly ChronicBipolarIIDisorderMostRecentEpisodeMajorDepressive: fhir.Coding;
        readonly CarbuncleOfHeel: fhir.Coding;
        readonly ExcisionalBiopsyOfBoneOfScapula: fhir.Coding;
        readonly AngiographyOfArteriesOfExtremityUnilateral: fhir.Coding;
        readonly BenignEssentialHypertension: fhir.Coding;
        readonly DeepThirdDegreeBurnOfForeheadANDORCheekWithLossOfBodyPart: fhir.Coding;
        readonly OpticDiscGlaucomatousAtrophy: fhir.Coding;
        readonly Gastroptosis: fhir.Coding;
        readonly ArthroscopicRepairLateralMeniscus: fhir.Coding;
        readonly StruckByFallingLumber: fhir.Coding;
        readonly RetrobulbarInjectionOfTherapeuticAgent: fhir.Coding;
        readonly JuvenileDermatomyositis: fhir.Coding;
        readonly InfectionByStrongyloides: fhir.Coding;
        readonly ChoroidalHemorrhage: fhir.Coding;
        readonly UpperArmXRay: fhir.Coding;
        readonly IncisionOfSubvalvularTissueForDiscreteSubvalvularAorticStenosis: fhir.Coding;
        readonly ExposureToIonizingRadiation: fhir.Coding;
        readonly NoDiagnosisOnAxis1: fhir.Coding;
        readonly CongenitalArticularRigidityWithMyopathy: fhir.Coding;
        readonly MuscleTransfer: fhir.Coding;
        readonly ApplicationOfCastSugarTong: fhir.Coding;
        readonly EpiphysealArrestByStaplingOfDistalRadius: fhir.Coding;
        readonly CongenitalAnteversionOfFemoralNeck: fhir.Coding;
        readonly LyingProne: fhir.Coding;
        readonly KernigSignPositive: fhir.Coding;
        readonly BrudzinskiSignPositive: fhir.Coding;
        readonly ChvostekSignPositive: fhir.Coding;
        readonly TrousseauSignPositive: fhir.Coding;
        readonly IncisionalBiopsyOfTestis: fhir.Coding;
        readonly RefusionOfSpine: fhir.Coding;
        readonly ExcisionOfMeniscusOfWrist: fhir.Coding;
        readonly Schistosis: fhir.Coding;
        readonly MultipleFracturesOfRibs: fhir.Coding;
        readonly InjuryOfDescendingLeftColonWithoutOpenWoundIntoAbdominalCavity: fhir.Coding;
        readonly ClosureOfTympanicMembranePerforation: fhir.Coding;
        readonly ElectrocoagulationOfLesionOfVagina: fhir.Coding;
        readonly SpontaneousAbortionWithLacerationOfCervix: fhir.Coding;
        readonly KnucklePadsLeuconychiaAndDeafness: fhir.Coding;
        readonly UnilateralParesis: fhir.Coding;
        readonly OpenReductionOfClosedShoulderDislocationWithFractureOfGreaterTuberosity: fhir.Coding;
        readonly RepairOfCardiacPacemakerPocketInSkinANDORSubcutaneousTissue: fhir.Coding;
        readonly IsologousChimera: fhir.Coding;
        readonly HandMicroscopeExaminationOfSkin: fhir.Coding;
        readonly LaryngealPerichondritis: fhir.Coding;
        readonly VisualAcuityLessThan02160CountFingers1MeterOrVisualFieldLessThan5DegreesButBetterThan5: fhir.Coding;
        readonly AbnormalJawClosure: fhir.Coding;
        readonly VitaminKDeficiencyCoagulationDisorder: fhir.Coding;
        readonly CongenitalAbsenceOfBileDuct: fhir.Coding;
        readonly Homoiothermia: fhir.Coding;
        readonly ContextDependentProcedure: fhir.Coding;
        readonly MRIOfBladder: fhir.Coding;
        readonly UnilateralRecurrentFemoralHerniaWithoutObstructionANDWithoutGangrene: fhir.Coding;
        readonly AsphyxiationByHanging: fhir.Coding;
        readonly InfectionByCladosporiumCarrionii: fhir.Coding;
        readonly ExcisionOfAppendicealStump: fhir.Coding;
        readonly AsphyxiationByEnvironmentalOxygenLack: fhir.Coding;
        readonly ComplicationOfReimplant: fhir.Coding;
        readonly ImpairedGlucoseToleranceAssociatedWithGeneticSyndrome: fhir.Coding;
        readonly AbsenceOfStress: fhir.Coding;
        readonly ReconstructionOfEyebrow: fhir.Coding;
        readonly UpperPartialDentureCastMetalBaseWithoutResinSaddlesIncludingAnyConventionalClaspsRestsAndTeeth: fhir.Coding;
        readonly InjuryOfOvaryWithoutOpenWoundIntoAbdominalCavity: fhir.Coding;
        readonly PostTranslationalGeneticProteinProcessing: fhir.Coding;
        readonly KanamycinPoisoning: fhir.Coding;
        readonly DeathDuringAnestheticInduction: fhir.Coding;
        readonly CerebrospinalFluidImmunoglobulinGRatioAndImmunoglobulinGIndex: fhir.Coding;
        readonly ProcedureOnMeckelDiverticulum: fhir.Coding;
        readonly FallFromSwing: fhir.Coding;
        readonly IlioiliacShunt: fhir.Coding;
        readonly DivisionOfCongenitalWebOfLarynx: fhir.Coding;
        readonly PercutaneousImplantationOfNeurostimulatorElectrodesIntoNeuromuscularComponent: fhir.Coding;
        readonly ConjugatedVisualDeviation: fhir.Coding;
        readonly PeyroniesDisease: fhir.Coding;
        readonly Colosigmoidostomy: fhir.Coding;
        readonly ManualEvacuationOfFeces: fhir.Coding;
        readonly DecreasedHairGrowth: fhir.Coding;
        readonly DTADeepTransverseArrest: fhir.Coding;
        readonly ReferralToDieticianDeclined: fhir.Coding;
        readonly ReferralToChiropodistDeclined: fhir.Coding;
        readonly AngiotensinConvertingEnzymeInhibitorNotIndicated: fhir.Coding;
        readonly StatinNotIndicated: fhir.Coding;
        readonly WarfarinNotIndicated: fhir.Coding;
        readonly AspirinNotIndicated: fhir.Coding;
        readonly StatinDeclined: fhir.Coding;
        readonly AngiotensinConvertingEnzymeInhibitorDeclined: fhir.Coding;
        readonly WarfarinDeclined: fhir.Coding;
        readonly SuspectedBreastCancer: fhir.Coding;
        readonly NoSuicidalThoughts: fhir.Coding;
        readonly FHPrematureCoronaryHeartDisease: fhir.Coding;
        readonly HangNail: fhir.Coding;
        readonly MedicalProcedureOnPalate: fhir.Coding;
        readonly ArthrotomyOfWristJointWithExplorationAndBiopsy: fhir.Coding;
        readonly IliacArteryInjury: fhir.Coding;
        readonly AnteriorSpinalRhizotomy: fhir.Coding;
        readonly CalculusOfCommonDuctWithObstruction: fhir.Coding;
        readonly DrugIndicated: fhir.Coding;
        readonly NitrateIndicated: fhir.Coding;
        readonly CalciumChannelBlockerIndicated: fhir.Coding;
        readonly LipidLoweringTherapyIndicated: fhir.Coding;
        readonly DiureticIndicated: fhir.Coding;
        readonly AngiotensinConvertingEnzymeInhibitorIndicated: fhir.Coding;
        readonly AspirinIndicated: fhir.Coding;
        readonly AntiHumanGlobulinTestEnzymeTechniqueTiter: fhir.Coding;
        readonly BetaBlockerIndicated: fhir.Coding;
        readonly WarfarinIndicated: fhir.Coding;
        readonly NitrateNotIndicated: fhir.Coding;
        readonly CalciumChannelBlockerNotIndicated: fhir.Coding;
        readonly LipidLoweringTherapyNotIndicated: fhir.Coding;
        readonly DiureticNotIndicated: fhir.Coding;
        readonly NitrateContraindicated: fhir.Coding;
        readonly DiureticContraindicated: fhir.Coding;
        readonly NitrateDeclined: fhir.Coding;
        readonly DiureticDeclined: fhir.Coding;
        readonly LipidLoweringTherapyContraindicated: fhir.Coding;
        readonly CalciumChannelBlockerContraindicated: fhir.Coding;
        readonly CalciumChannelBlockerDeclined: fhir.Coding;
        readonly LipidLoweringTherapyDeclined: fhir.Coding;
        readonly AccidentalIngestionOfWhiteSpirit: fhir.Coding;
        readonly AssessmentOfNeedsOfCarerCompleted: fhir.Coding;
        readonly PartiallyInformedOfTestResults: fhir.Coding;
        readonly DeathOfPartner: fhir.Coding;
        readonly HODislocatedShoulder: fhir.Coding;
        readonly Leucocoria: fhir.Coding;
        readonly FetalOrNeonatalEffectOfChronicMaternalRespiratoryDisease: fhir.Coding;
        readonly BreathingTreatment: fhir.Coding;
        readonly InjuryOfSuperiorMesentericArtery: fhir.Coding;
        readonly OpenFractureOfMetacarpalBoneS: fhir.Coding;
        readonly FallFromSlide: fhir.Coding;
        readonly UnicornateUterus: fhir.Coding;
        readonly ObsessiveCompulsivePersonalityDisorder: fhir.Coding;
        readonly SupinationEversionInjuryOfAnkle: fhir.Coding;
        readonly AgoraphobiaWithoutHistoryOfPanicDisorderWithLimitedSymptomAttacks: fhir.Coding;
        readonly HallucinogenInducedMoodDisorder: fhir.Coding;
        readonly DiffuseCholesteatosisOfMiddleEar: fhir.Coding;
        readonly EchographyScanBModeForFoetalAgeDetermination: fhir.Coding;
        readonly IntracranialHemorrhage: fhir.Coding;
        readonly SolanumNigrumPoisoning: fhir.Coding;
        readonly MetabolicAlkalosis: fhir.Coding;
        readonly LaparoscopicSigmoidColectomy: fhir.Coding;
        readonly LenzMajewskiDysplasia: fhir.Coding;
        readonly FallDownElevatorShaft: fhir.Coding;
        readonly ComplicationOfUltrasoundTherapy: fhir.Coding;
        readonly DirectThrombectomyOfIliacVeinByLegIncision: fhir.Coding;
        readonly IncisionAndExplorationOfUreter: fhir.Coding;
        readonly ChronicPharyngitis: fhir.Coding;
        readonly Frightened: fhir.Coding;
        readonly DeathByHanging: fhir.Coding;
        readonly FallFromBuilding: fhir.Coding;
        readonly ApplicationOfLongLegCastBraceType: fhir.Coding;
        readonly AnesthesiaForTympanotomy: fhir.Coding;
        readonly OperationOnPapillaryMuscleOfHeart: fhir.Coding;
        readonly AnteriorSubcapsularPolarCataract: fhir.Coding;
        readonly PenetratingKeratoplastyWithHomograft: fhir.Coding;
        readonly AngiographyOfArteriovenousShunt: fhir.Coding;
        readonly InflammationOfLymphatics: fhir.Coding;
        readonly OperationOnFace: fhir.Coding;
        readonly HypoplasticChondrodystrophy: fhir.Coding;
        readonly InjuryOfProstateWithoutOpenWoundIntoAbdominalCavity: fhir.Coding;
        readonly ExcisionOfTumorFromShoulderAreaDeepIntramuscular: fhir.Coding;
        readonly UnilateralVasotomy: fhir.Coding;
        readonly NecrotizingGlomerulonephritis: fhir.Coding;
        readonly IntraspinalAbscess: fhir.Coding;
        readonly AsphyxiaDueToForeignBodyInLarynx: fhir.Coding;
        readonly IntracranialHemorrhageFollowingInjuryWithoutOpenIntracranialWoundANDWithProlongedLossOfConsciousnessMoreThan24HoursWithoutReturnToPreExistingLevel: fhir.Coding;
        readonly Pexy: fhir.Coding;
        readonly RepairWithResectionRecession: fhir.Coding;
        readonly NormalPeripheralVision: fhir.Coding;
        readonly Icthyoparasitism: fhir.Coding;
        readonly RemovalOfHair: fhir.Coding;
        readonly BiofeedbackGalvanicSkinResponse: fhir.Coding;
        readonly Cerclage: fhir.Coding;
        readonly TruncalVagotomyWithPyloroplastyAndGastrostomy: fhir.Coding;
        readonly RepairOfNonunionOfMetatarsalWithBoneGraft: fhir.Coding;
        readonly MiscarriageWithUrinaryTractInfection: fhir.Coding;
        readonly RubellaScreeningNotOffered: fhir.Coding;
        readonly SuperficialForeignBodyOfScrotumWithoutMajorOpenWoundButWithInfection: fhir.Coding;
        readonly DoubleTestNotOffered: fhir.Coding;
        readonly HypertensiveHeartANDRenalDiseaseComplicatingANDORReasonForCareDuringChildbirth: fhir.Coding;
        readonly HerpesLabialis: fhir.Coding;
        readonly ObliterationOfLymphaticVessel: fhir.Coding;
        readonly VAL20qPartialTrisomySyndrome: fhir.Coding;
        readonly LuteinizingHormoneAndFollicleStimulatingHormoneChecked: fhir.Coding;
        readonly Chalazion: fhir.Coding;
        readonly TravelVaccinationGiven: fhir.Coding;
        readonly ScreeningNotOffered: fhir.Coding;
        readonly ImmunizationNotOffered: fhir.Coding;
        readonly OrbitalCongestion: fhir.Coding;
        readonly PONVPostoperativeNauseaAndVomiting: fhir.Coding;
        readonly ExternalHordeolum: fhir.Coding;
        readonly LungAdhesionsFreed: fhir.Coding;
        readonly CongenitalAnomalyOfLargeIntestine: fhir.Coding;
        readonly AcuteEndophthalmitis: fhir.Coding;
        readonly OsmolarityMeasurement: fhir.Coding;
        readonly BipolarIDisorderSingleManicEpisodeWithPostpartumOnset: fhir.Coding;
        readonly BilateralEpididymovasostomy: fhir.Coding;
        readonly AbnormalBladderContinence: fhir.Coding;
        readonly AltemeierOperationPerinealRectalPullThrough: fhir.Coding;
        readonly HandMuscleForeignBodyRemoved: fhir.Coding;
        readonly HospitalAdmissionForIsolation: fhir.Coding;
        readonly MeningitisDueToGonococcus: fhir.Coding;
        readonly CongenitalStrictureOfBileDuct: fhir.Coding;
        readonly GorhamDisease: fhir.Coding;
        readonly Splenitis: fhir.Coding;
        readonly ContactWithMachinery: fhir.Coding;
        readonly CongenitalPhlebectasia: fhir.Coding;
        readonly BlisterOfButtockWithoutInfection: fhir.Coding;
        readonly ClinicalStageIVB: fhir.Coding;
        readonly BlisterOfFootWithoutInfection: fhir.Coding;
        readonly BreastReconstructionUnilateralWithSinglePedicleTRAMFlapAndOppositeBreastReductionMastopexy: fhir.Coding;
        readonly AspirationOfSoftTissue: fhir.Coding;
        readonly CystourethroscopyWithResectionOfUreterocele: fhir.Coding;
        readonly NitrofuranDerivativePoisoning: fhir.Coding;
        readonly ViralPharyngitis: fhir.Coding;
        readonly Ureteroplication: fhir.Coding;
        readonly PalsyOfConjugateGaze: fhir.Coding;
        readonly UnattendedDeath: fhir.Coding;
        readonly CentralNervousSystemMalformationInFoetusAffectingObstetricalCare: fhir.Coding;
        readonly NodularTendinousDiseaseOfFinger: fhir.Coding;
        readonly OmphaloceleWithObstruction: fhir.Coding;
        readonly OpenDislocationOfKnee: fhir.Coding;
        readonly AmikacinLevel: fhir.Coding;
        readonly OsteomyelitisOfFemur: fhir.Coding;
        readonly BriefGroupPsychotherapy: fhir.Coding;
        readonly ClarkMelanomaLevel4: fhir.Coding;
        readonly InterleukinIL2Assay: fhir.Coding;
        readonly ProteinSDeficiency: fhir.Coding;
        readonly DrowningInLiquidOtherThanWater: fhir.Coding;
        readonly ChronicGastricUlcerWithoutHemorrhageWithoutPerforationANDWithoutObstruction: fhir.Coding;
        readonly RepairOfIntestinouterineFistula: fhir.Coding;
        readonly ImplantationOfCardiacSingleChamberDeviceReplacementRateResponsive: fhir.Coding;
        readonly ReconstructionOfOssiclesWithStapedectomy: fhir.Coding;
        readonly TractotomyOfMesencephalon: fhir.Coding;
        readonly LengtheningOfGastrocnemiusMuscle: fhir.Coding;
        readonly HeterosexualPrecociousPuberty: fhir.Coding;
        readonly FailedAttemptedTerminationOfPregnancyWithUremia: fhir.Coding;
        readonly InfantileHemiplegia: fhir.Coding;
        readonly AnesthesiaForTotalElbowReplacement: fhir.Coding;
        readonly SkeletalXRayOfAnkleAndFoot: fhir.Coding;
        readonly RemovalOfForeignBodyOfTendonAndOrTendonSheath: fhir.Coding;
        readonly SocialServiceInterviewWithPlanning: fhir.Coding;
        readonly BriefHistoryTaken: fhir.Coding;
        readonly IntermediateHistoryTaken: fhir.Coding;
        readonly FullHistoryTaken: fhir.Coding;
        readonly NoCurrentProblemsOrDisability: fhir.Coding;
        readonly NoFamilyHistoryOfMalignancy: fhir.Coding;
        readonly NoFamilyHistoryOfCardiovascularAccidentOrStroke: fhir.Coding;
        readonly NoSignificantSocialHistory: fhir.Coding;
        readonly NoHistoryOfCardiovascularSystemDisease: fhir.Coding;
        readonly NoHistoryOfGastrointestinalTractDisease: fhir.Coding;
        readonly NoHistoryOfGenitourinaryTractDisease: fhir.Coding;
        readonly NoHistoryOfCentralNervousSystemDisease: fhir.Coding;
        readonly NoHistoryOfRespiratorySystemDisease: fhir.Coding;
        readonly NoHistoryOfPsychiatricDisorder: fhir.Coding;
        readonly FamilyHistoryTaken: fhir.Coding;
        readonly NoSignificantFamilyHistory: fhir.Coding;
        readonly NoFamilyHistoryOfGlaucoma: fhir.Coding;
        readonly NoFHAllergy: fhir.Coding;
        readonly FHLongevity: fhir.Coding;
        readonly NoSignificantFamilyHistoryOfCardiovascularDisease: fhir.Coding;
        readonly NoFHCVAStrokeTIA: fhir.Coding;
        readonly NoSignificantFamilyHistoryOfHypertension: fhir.Coding;
        readonly NoSignificantFamilyHistoryOfDiabetes: fhir.Coding;
        readonly FHInfectiousDisease: fhir.Coding;
        readonly FHTuberculosis: fhir.Coding;
        readonly FHSyphilis: fhir.Coding;
        readonly FHGonorrhea: fhir.Coding;
        readonly FHNeoplasmOfSkin: fhir.Coding;
        readonly FHNeoplasmOfMaleGenitalOrgan: fhir.Coding;
        readonly FamilyHistoryOfUrologicalNeoplasm: fhir.Coding;
        readonly FHLeukemia: fhir.Coding;
        readonly FHNeoplasmOfOvary: fhir.Coding;
        readonly FHNeoplasmOfCervix: fhir.Coding;
        readonly FHNeoplasmOfUterus: fhir.Coding;
        readonly FHEndocrineDisorders: fhir.Coding;
        readonly FHThyroidDisorder: fhir.Coding;
        readonly FHDiabetesMellitus: fhir.Coding;
        readonly FHMetabolicDisorder: fhir.Coding;
        readonly FHNutritionalDeficiency: fhir.Coding;
        readonly FHGout: fhir.Coding;
        readonly FHCysticFibrosis: fhir.Coding;
        readonly FHPorphyria: fhir.Coding;
        readonly FHObesity: fhir.Coding;
        readonly FHCholinesteraseDeficiency: fhir.Coding;
        readonly FHOsteoporosis: fhir.Coding;
        readonly FHHypercholesterolemia: fhir.Coding;
        readonly FHBloodDisorder: fhir.Coding;
        readonly FamilyHistoryOfHereditarySpherocytosis: fhir.Coding;
        readonly FHThalassemia: fhir.Coding;
        readonly FamilyHistoryOfSickleCellAnemia: fhir.Coding;
        readonly FHSickleCellTrait: fhir.Coding;
        readonly FamilyHistoryOfMentalDisorder: fhir.Coding;
        readonly FHSenileDementia: fhir.Coding;
        readonly FHDrugDependency: fhir.Coding;
        readonly FamilyHistoryOfSchizophrenia: fhir.Coding;
        readonly FHDepression: fhir.Coding;
        readonly FHManicDepressiveState: fhir.Coding;
        readonly FamilyHistoryOfAnxietyDisorder: fhir.Coding;
        readonly FHSuicide: fhir.Coding;
        readonly FamilyHistoryOfHuntingtonQuoteSChorea: fhir.Coding;
        readonly FHMultipleSclerosis: fhir.Coding;
        readonly FHHemiplegia: fhir.Coding;
        readonly FHParaplegia: fhir.Coding;
        readonly FamilyHistoryCerebralPalsy: fhir.Coding;
        readonly FHEpilepsy: fhir.Coding;
        readonly FamilyHistoryOfMigraine: fhir.Coding;
        readonly FHMuscularDystrophy: fhir.Coding;
        readonly FamilyHistoryOfMotorNeuroneDisease: fhir.Coding;
        readonly FHEyeDisorder: fhir.Coding;
        readonly FamilyHistoryOfGlaucoma: fhir.Coding;
        readonly FHCataract: fhir.Coding;
        readonly FHSquint: fhir.Coding;
        readonly FHEarDisorder: fhir.Coding;
        readonly FamilyHistoryOfDeafness: fhir.Coding;
        readonly FHOtosclerosis: fhir.Coding;
        readonly FamilyHistoryOfHypertension: fhir.Coding;
        readonly FamilyHistoryOfAtherosclerosis: fhir.Coding;
        readonly FHTIA: fhir.Coding;
        readonly FHCongenHeartDisease: fhir.Coding;
        readonly FHAsthma: fhir.Coding;
        readonly FHOccupationalLungDis: fhir.Coding;
        readonly FHHayFever: fhir.Coding;
        readonly FHGastrointestinalDisease: fhir.Coding;
        readonly FamilyHistoryOfCrohnQuoteSDisease: fhir.Coding;
        readonly FamilyHistoryOfPolycysticKidney: fhir.Coding;
        readonly FHMaleInfertility: fhir.Coding;
        readonly FamilyHistoryOfFemaleInfertility: fhir.Coding;
        readonly FHBreastDisease: fhir.Coding;
        readonly FHPeriodProblem: fhir.Coding;
        readonly FHEarlyMenarche: fhir.Coding;
        readonly FHLateMenarche: fhir.Coding;
        readonly FHEarlyMenopause: fhir.Coding;
        readonly FHLateMenopause: fhir.Coding;
        readonly FamilyHistoryOfObstetricDisorder: fhir.Coding;
        readonly FHRaisedBPInPregnancy: fhir.Coding;
        readonly FHDiabetesInPregnancy: fhir.Coding;
        readonly FHPuerperalDepression: fhir.Coding;
        readonly FHSkinDisease: fhir.Coding;
        readonly FHEczema: fhir.Coding;
        readonly FHPsoriasis: fhir.Coding;
        readonly FHAlopecia: fhir.Coding;
        readonly FHHirsutism: fhir.Coding;
        readonly FHRheumatoidArthritis: fhir.Coding;
        readonly FHOsteoarthritis: fhir.Coding;
        readonly FHCongenitalAnomaly: fhir.Coding;
        readonly FHAnencephaly: fhir.Coding;
        readonly FHSpinaBifida: fhir.Coding;
        readonly FHCongenitalRSAnomaly: fhir.Coding;
        readonly FHCongenitalGITAnomaly: fhir.Coding;
        readonly FHCongenitalGUAnomaly: fhir.Coding;
        readonly FHCongOrthopedicAnomaly: fhir.Coding;
        readonly FHChromosomalAnomaly: fhir.Coding;
        readonly FHMother: fhir.Coding;
        readonly FHMotherAliveAndWell: fhir.Coding;
        readonly FHMotherAliveWithProblem: fhir.Coding;
        readonly FHMotherDead: fhir.Coding;
        readonly FHMotherUnwell: fhir.Coding;
        readonly FHFather: fhir.Coding;
        readonly FHFatherAliveAndWell: fhir.Coding;
        readonly FHFatherAliveWithProblem: fhir.Coding;
        readonly FHFatherDead: fhir.Coding;
        readonly FHFatherDeaf: fhir.Coding;
        readonly FHSister: fhir.Coding;
        readonly FHSisterAliveAndWell: fhir.Coding;
        readonly FHSisterAliveWithProblem: fhir.Coding;
        readonly FHSisterDead: fhir.Coding;
        readonly FHBrother: fhir.Coding;
        readonly FHBrotherAliveAndWell: fhir.Coding;
        readonly FHBrotherAliveWithProblem: fhir.Coding;
        readonly FHBrotherDead: fhir.Coding;
        readonly FHSon: fhir.Coding;
        readonly FHSonAliveAndWell: fhir.Coding;
        readonly FHSonAliveWithProblem: fhir.Coding;
        readonly FHSonDead: fhir.Coding;
        readonly FHDaughter: fhir.Coding;
        readonly FHDaughterAliveAndWell: fhir.Coding;
        readonly FHDaughterAliveWithProblem: fhir.Coding;
        readonly FHDaughterDead: fhir.Coding;
        readonly FHMaternalGrandfather: fhir.Coding;
        readonly FHPaternalGrandfather: fhir.Coding;
        readonly FHMaternalGrandmother: fhir.Coding;
        readonly FHPaternalGrandmother: fhir.Coding;
        readonly FHAunt: fhir.Coding;
        readonly FHUncle: fhir.Coding;
        readonly FHAllergy: fhir.Coding;
        readonly HistoryOfCotDeathInFamily: fhir.Coding;
        readonly FHChildBattering: fhir.Coding;
        readonly FHDeathUnder60Years: fhir.Coding;
        readonly FHAtopy: fhir.Coding;
        readonly FHConsanguinity: fhir.Coding;
        readonly InfectionCausedByMacracanthorhynchusHirudinaceus: fhir.Coding;
        readonly HomeHelpOrganized: fhir.Coding;
        readonly IncreasedCapillaryPermeability: fhir.Coding;
        readonly FatherRemarried: fhir.Coding;
        readonly MotherRemarried: fhir.Coding;
        readonly PartnerBeginsWork: fhir.Coding;
        readonly PartnerStopsWork: fhir.Coding;
        readonly PartnerRetires: fhir.Coding;
        readonly PartnerWorksAfterRetirement: fhir.Coding;
        readonly ImprisonmentOfFamilyMember: fhir.Coding;
        readonly HusbandInPrison: fhir.Coding;
        readonly SpouseArrested: fhir.Coding;
        readonly PartnerUnemployed: fhir.Coding;
        readonly WifePregnant: fhir.Coding;
        readonly WifeWell: fhir.Coding;
        readonly WifeAlive: fhir.Coding;
        readonly FamilyMemberOnProtectionRegister: fhir.Coding;
        readonly FamilyMemberRemovedFromProtectionRegister: fhir.Coding;
        readonly VulnerableChildInFamily: fhir.Coding;
        readonly ParentIsHandicapped: fhir.Coding;
        readonly SpouseIsHandicapped: fhir.Coding;
        readonly SiblingIsHandicapped: fhir.Coding;
        readonly RelativeAcuteMedicalDisorder: fhir.Coding;
        readonly DeathOfInfant: fhir.Coding;
        readonly SuddenInfantDeath: fhir.Coding;
        readonly DeathOfSon: fhir.Coding;
        readonly DeathOfDaughter: fhir.Coding;
        readonly DeathOfFather: fhir.Coding;
        readonly DeathOfMother: fhir.Coding;
        readonly DeathOfBrother: fhir.Coding;
        readonly DeathOfSister: fhir.Coding;
        readonly SuicideOfCloseRelative: fhir.Coding;
        readonly RelativeKilled: fhir.Coding;
        readonly ChildAbuseInFamily: fhir.Coding;
        readonly LegalProblemInFamily: fhir.Coding;
        readonly SpouseWorksAwayFromHome: fhir.Coding;
        readonly FatherSmokes: fhir.Coding;
        readonly MotherSmokes: fhir.Coding;
        readonly BothParentsSmoke: fhir.Coding;
        readonly DeathOfUnrelatedPerson: fhir.Coding;
        readonly BilateralRepairOfInguinalHerniaDirect: fhir.Coding;
        readonly HOInfectiousDisease: fhir.Coding;
        readonly HOTuberculosis: fhir.Coding;
        readonly HOPoliomyelitis: fhir.Coding;
        readonly HOMalaria: fhir.Coding;
        readonly HOScarlatina: fhir.Coding;
        readonly HOMeasles: fhir.Coding;
        readonly HOMumps: fhir.Coding;
        readonly HORubella: fhir.Coding;
        readonly HOPertussis: fhir.Coding;
        readonly HOChickenpox: fhir.Coding;
        readonly HOViralIllness: fhir.Coding;
        readonly HOMalignantMelanoma: fhir.Coding;
        readonly HOLeukemia: fhir.Coding;
        readonly HOHyperthyroidism: fhir.Coding;
        readonly HOHypothyroidism: fhir.Coding;
        readonly HODiabetesMellitus: fhir.Coding;
        readonly HONutritionDisorder: fhir.Coding;
        readonly HORaisedBloodLipids: fhir.Coding;
        readonly HOGout: fhir.Coding;
        readonly HOObesity: fhir.Coding;
        readonly HOAnemiaIronDeficient: fhir.Coding;
        readonly HistoryOfAnemiaVitaminB12Deficient: fhir.Coding;
        readonly HOHemolyticAnemia: fhir.Coding;
        readonly HOBleedingDisorder: fhir.Coding;
        readonly HOPurpura: fhir.Coding;
        readonly HOFailedBloodDonorTest: fhir.Coding;
        readonly HOPsychiatricDisorder: fhir.Coding;
        readonly HODementia: fhir.Coding;
        readonly HOAlcoholism: fhir.Coding;
        readonly HODrugDependency: fhir.Coding;
        readonly HOSchizophrenia: fhir.Coding;
        readonly HODepression: fhir.Coding;
        readonly HOAnxietyState: fhir.Coding;
        readonly HOAnorexiaNervosa: fhir.Coding;
        readonly HOPsychologicalTrauma: fhir.Coding;
        readonly HOBehaviorProblem: fhir.Coding;
        readonly HOAttemptedSuicide: fhir.Coding;
        readonly HOMeningitis: fhir.Coding;
        readonly HOEncephalitis: fhir.Coding;
        readonly HOEpilepsy: fhir.Coding;
        readonly HOMigraine: fhir.Coding;
        readonly HOTrigeminalNeuralgia: fhir.Coding;
        readonly HOBellQuoteSPalsy: fhir.Coding;
        readonly HOEyeDisorder: fhir.Coding;
        readonly HORetinalDetachment: fhir.Coding;
        readonly HOGlaucoma: fhir.Coding;
        readonly HOCataract: fhir.Coding;
        readonly HOVisualDisturbance: fhir.Coding;
        readonly HOCornealUlcer: fhir.Coding;
        readonly HOEarDisorder: fhir.Coding;
        readonly HOChronicEarInfection: fhir.Coding;
        readonly HOHearingProblem: fhir.Coding;
        readonly HORheumaticFever: fhir.Coding;
        readonly RelineUpperPartialDentureChairside: fhir.Coding;
        readonly HOHypertension: fhir.Coding;
        readonly HOMyocardialInfarctAtLessThan60: fhir.Coding;
        readonly HOMyocardialInfarctAtGreaterThan60: fhir.Coding;
        readonly HOAnginaPectoris: fhir.Coding;
        readonly HOHeartFailure: fhir.Coding;
        readonly HODeepVeinThrombosis: fhir.Coding;
        readonly HOVaricoseVeins: fhir.Coding;
        readonly HOTIA: fhir.Coding;
        readonly HOPulmonaryEmbolus: fhir.Coding;
        readonly HOVentricularFibrillation: fhir.Coding;
        readonly HOAorticAneurysm: fhir.Coding;
        readonly HOSubarachnoidHemorrhage: fhir.Coding;
        readonly HORespiratoryDisease: fhir.Coding;
        readonly HOHayFever: fhir.Coding;
        readonly HOPneumonia: fhir.Coding;
        readonly HOAsthma: fhir.Coding;
        readonly HOPneumothorax: fhir.Coding;
        readonly HOAppendicitis: fhir.Coding;
        readonly HOAbdominalHernia: fhir.Coding;
        readonly HOLiverDisease: fhir.Coding;
        readonly HOJaundice: fhir.Coding;
        readonly HOHematemesis: fhir.Coding;
        readonly HOMelena: fhir.Coding;
        readonly HOUpperGITNeoplasm: fhir.Coding;
        readonly HOLowerGITNeoplasm: fhir.Coding;
        readonly HONephritis: fhir.Coding;
        readonly HOKidneyInfection: fhir.Coding;
        readonly HOUrinaryStone: fhir.Coding;
        readonly HORecurrentCystitis: fhir.Coding;
        readonly HOHematuria: fhir.Coding;
        readonly HOUrethralStricture: fhir.Coding;
        readonly HOMaleGenitalDisorder: fhir.Coding;
        readonly HOProstatism: fhir.Coding;
        readonly HOInfertilityMale: fhir.Coding;
        readonly HOVasectomy: fhir.Coding;
        readonly HOSkinDisorder: fhir.Coding;
        readonly HOEczema: fhir.Coding;
        readonly HOPsoriasis: fhir.Coding;
        readonly HOChronicSkinUlcer: fhir.Coding;
        readonly HORheumatoidArthritis: fhir.Coding;
        readonly HOOsteoarthritis: fhir.Coding;
        readonly HOBackProblem: fhir.Coding;
        readonly HOCongenitalAnomaly: fhir.Coding;
        readonly HOCardiacAnomaly: fhir.Coding;
        readonly HOCleftPalate: fhir.Coding;
        readonly HOCleftLip: fhir.Coding;
        readonly HOUrinaryAnomaly: fhir.Coding;
        readonly HistoryOfCongenitalDislocationOfHip: fhir.Coding;
        readonly HOPerinatalProblem: fhir.Coding;
        readonly HOBirthTrauma: fhir.Coding;
        readonly HOBirthAsphyxia: fhir.Coding;
        readonly HOHemolyticDisease: fhir.Coding;
        readonly HOPerinatalConvulsion: fhir.Coding;
        readonly HistoryOfPerinatalCerebralIrritability: fhir.Coding;
        readonly HOInjury: fhir.Coding;
        readonly HOHeadInjury: fhir.Coding;
        readonly HOPoisoning: fhir.Coding;
        readonly GalactosylceramideBetaGalactosidaseMeasurementLeukocytes: fhir.Coding;
        readonly HONonDrugAllergy: fhir.Coding;
        readonly HOMultipleAllergies: fhir.Coding;
        readonly HOSurgery: fhir.Coding;
        readonly HOMajorVascularSurgery: fhir.Coding;
        readonly HOMajorAbdominalSurgery: fhir.Coding;
        readonly HOMajorOrthopedicSurgery: fhir.Coding;
        readonly HOSpinalSurgery: fhir.Coding;
        readonly HOUpperLimbAmputation: fhir.Coding;
        readonly HOLowerLimbAmputation: fhir.Coding;
        readonly HOPneumonectomy: fhir.Coding;
        readonly HOCardiacSurgery: fhir.Coding;
        readonly HOSplenectomy: fhir.Coding;
        readonly HOOrchidectomy: fhir.Coding;
        readonly HORiskFactor: fhir.Coding;
        readonly HORadiationExposure: fhir.Coding;
        readonly HOAsbestosExposure: fhir.Coding;
        readonly HOIsocyanateExposure: fhir.Coding;
        readonly InsuranceRefusedMedicalReasons: fhir.Coding;
        readonly HepatitisBOccupationalRisk: fhir.Coding;
        readonly HOHighRiskMedication: fhir.Coding;
        readonly HOAnticoagulantTherapy: fhir.Coding;
        readonly HOSteroidTherapy: fhir.Coding;
        readonly HOInsulinTherapy: fhir.Coding;
        readonly HOAnticonvulsantTherapy: fhir.Coding;
        readonly HistoryOfImmunosuppressiveTherapy: fhir.Coding;
        readonly HOHormoneReplacementHRT: fhir.Coding;
        readonly HOChemotherapy: fhir.Coding;
        readonly HORepeatMedication: fhir.Coding;
        readonly HOKidneyDonation: fhir.Coding;
        readonly HOSkinDonation: fhir.Coding;
        readonly HOTissueOrganRecipient: fhir.Coding;
        readonly HOBloodTransfusion: fhir.Coding;
        readonly HOKidneyRecipient: fhir.Coding;
        readonly HOHeartRecipient: fhir.Coding;
        readonly HOHeartValveRecipient: fhir.Coding;
        readonly HOSkinRecipient: fhir.Coding;
        readonly HOBoneTissueRecipient: fhir.Coding;
        readonly HOCorneaRecipient: fhir.Coding;
        readonly HOLiverRecipient: fhir.Coding;
        readonly HOLungRecipient: fhir.Coding;
        readonly HOArtificialOrganTissue: fhir.Coding;
        readonly HOArtificialEyeglobe: fhir.Coding;
        readonly HOArtificialEyeLens: fhir.Coding;
        readonly HOArtificialHeartValve: fhir.Coding;
        readonly HOArtificialBloodVessel: fhir.Coding;
        readonly HOArtificialJoint: fhir.Coding;
        readonly HOArtificialLimb: fhir.Coding;
        readonly HOArtificialHeart: fhir.Coding;
        readonly HOArtificialBladder: fhir.Coding;
        readonly HOTracheostomy: fhir.Coding;
        readonly HOIleostomy: fhir.Coding;
        readonly HOColostomy: fhir.Coding;
        readonly HOGastrostomy: fhir.Coding;
        readonly HOCardiacPacemakerInSitu: fhir.Coding;
        readonly HOKidneyDialysis: fhir.Coding;
        readonly HOCSFDrainageDevice: fhir.Coding;
        readonly HOArthrodesis: fhir.Coding;
        readonly HistoryOfArthrodesisOfInterphalangealJointOfToe: fhir.Coding;
        readonly HOMachineDependence: fhir.Coding;
        readonly HORespiratorDependence: fhir.Coding;
        readonly HOStillbirth: fhir.Coding;
        readonly HOMiscarriage: fhir.Coding;
        readonly NoHistoryOfMiscarriage: fhir.Coding;
        readonly HO1Miscarriage: fhir.Coding;
        readonly HO2Miscarriages: fhir.Coding;
        readonly HO3Miscarriages: fhir.Coding;
        readonly HO4Miscarriages: fhir.Coding;
        readonly HO5Miscarriages: fhir.Coding;
        readonly HO6Miscarriages: fhir.Coding;
        readonly NoHistoryOfAbortion: fhir.Coding;
        readonly HOEctopicPregnancy: fhir.Coding;
        readonly HOPrematureDelivery: fhir.Coding;
        readonly HOInfantFeedingMethod: fhir.Coding;
        readonly HOInfantBreastFed: fhir.Coding;
        readonly HOInfantBottleFed: fhir.Coding;
        readonly HOOralContraceptiveUsage: fhir.Coding;
        readonly HOIUDUsage: fhir.Coding;
        readonly HOContraceptiveCapUsage: fhir.Coding;
        readonly HOCondomUsage: fhir.Coding;
        readonly HOMenstrualDisorder: fhir.Coding;
        readonly HOAmenorrhea: fhir.Coding;
        readonly HOPolymenorrhea: fhir.Coding;
        readonly HOHeavyPeriods: fhir.Coding;
        readonly HOPainfulPeriods: fhir.Coding;
        readonly HOPostcoitalBleeding: fhir.Coding;
        readonly HOInterMenstrualBleeding: fhir.Coding;
        readonly HOPostmenopausalBleeding: fhir.Coding;
        readonly HistoryOfRecurrentVaginalDischarge: fhir.Coding;
        readonly HOStressIncontinence: fhir.Coding;
        readonly HODyspareunia: fhir.Coding;
        readonly HOBreastProblem: fhir.Coding;
        readonly HOInfertilityFemale: fhir.Coding;
        readonly HOHysterectomy: fhir.Coding;
        readonly HOObstetricProblem: fhir.Coding;
        readonly HOAntepartumHemorrhage: fhir.Coding;
        readonly HOCesareanSection: fhir.Coding;
        readonly HOEclampsia: fhir.Coding;
        readonly HOSeverePreEclampsia: fhir.Coding;
        readonly HOManualRemovalOfPlacenta: fhir.Coding;
        readonly HOPostpartumHemorrhage: fhir.Coding;
        readonly HOLongLabor: fhir.Coding;
        readonly HOPerinatalFetalLoss: fhir.Coding;
        readonly HOPreviousForcepsDelivery: fhir.Coding;
        readonly NoTemperatureSymptom: fhir.Coding;
        readonly NotTired: fhir.Coding;
        readonly NoStiffNeck: fhir.Coding;
        readonly DoesNotBruiseEasily: fhir.Coding;
        readonly NoBackache: fhir.Coding;
        readonly NoGeneralSymptom: fhir.Coding;
        readonly NoCough: fhir.Coding;
        readonly NightCoughPresent: fhir.Coding;
        readonly NightCoughAbsent: fhir.Coding;
        readonly NoBreathlessness: fhir.Coding;
        readonly NoHiccough: fhir.Coding;
        readonly HiccoughPresent: fhir.Coding;
        readonly NoRespiratorySymptoms: fhir.Coding;
        readonly NoPalpitations: fhir.Coding;
        readonly ChestPainNotPresent: fhir.Coding;
        readonly NoEdemaPresent: fhir.Coding;
        readonly NoCardiovascularSymptom: fhir.Coding;
        readonly SevereManicBipolarIDisorderWithoutPsychoticFeatures: fhir.Coding;
        readonly NoToothProblem: fhir.Coding;
        readonly NoMouthProblem: fhir.Coding;
        readonly NoProblemChewing: fhir.Coding;
        readonly NoProblemSwallowing: fhir.Coding;
        readonly NoAbdominalPain: fhir.Coding;
        readonly NoNausea: fhir.Coding;
        readonly NauseaPresent: fhir.Coding;
        readonly NoVomiting: fhir.Coding;
        readonly AbdomenNotDistended: fhir.Coding;
        readonly NoExcessiveUpperGastrointestinalGas: fhir.Coding;
        readonly NoTenesmus: fhir.Coding;
        readonly TenesmusPresent: fhir.Coding;
        readonly DiarrheaNotPresent: fhir.Coding;
        readonly NoGastrointestinalSymptom: fhir.Coding;
        readonly NoGenitourinaryPain: fhir.Coding;
        readonly NoUrethralDischarge: fhir.Coding;
        readonly VaginalDischargeAbsent: fhir.Coding;
        readonly VaginalDischargePresent: fhir.Coding;
        readonly NoBreastLump: fhir.Coding;
        readonly BreastLumpPresent: fhir.Coding;
        readonly NoGenitourinarySymptom: fhir.Coding;
        readonly NoMotorSymptom: fhir.Coding;
        readonly ParalysisPresent: fhir.Coding;
        readonly Coordinated: fhir.Coding;
        readonly DizzinessPresent: fhir.Coding;
        readonly GiddinessPresent: fhir.Coding;
        readonly NoConsciousnessDisturbance: fhir.Coding;
        readonly FeltFaint: fhir.Coding;
        readonly NoVisualSymptom: fhir.Coding;
        readonly SpeechNormal: fhir.Coding;
        readonly NoHeadache: fhir.Coding;
        readonly UnilateralDeafness: fhir.Coding;
        readonly NoTinnitusPresent: fhir.Coding;
        readonly NoEarache: fhir.Coding;
        readonly UnilateralEarache: fhir.Coding;
        readonly EarDischargeAbsent: fhir.Coding;
        readonly EarDischargePresent: fhir.Coding;
        readonly DoesNotSneeze: fhir.Coding;
        readonly DoesNotHaveNosebleeds: fhir.Coding;
        readonly DoesNotSnore: fhir.Coding;
        readonly NoNasalSymptoms: fhir.Coding;
        readonly NoSoreThroat: fhir.Coding;
        readonly SoreThroatPresent: fhir.Coding;
        readonly NoThroatSymptom: fhir.Coding;
        readonly NoEarNoseOrThroatSymptom: fhir.Coding;
        readonly FreeOfSymptoms: fhir.Coding;
        readonly SuspectedCancer: fhir.Coding;
        readonly SuspectedLungCancer: fhir.Coding;
        readonly SuspectedDrugAbuse: fhir.Coding;
        readonly SuspectedAbuseSoftDrugs: fhir.Coding;
        readonly SuspectedAbuseHardDrugs: fhir.Coding;
        readonly SuspectedDeafness: fhir.Coding;
        readonly SuspectedVictimOfChildAbuse: fhir.Coding;
        readonly DepthOfExamination: fhir.Coding;
        readonly PatientNotExamined: fhir.Coding;
        readonly PatientExamined: fhir.Coding;
        readonly OneOrMoreOrgansExamined: fhir.Coding;
        readonly OneOrMoreSystemsExamined: fhir.Coding;
        readonly FullExaminationPerformed: fhir.Coding;
        readonly DepthOfGeneralExamination: fhir.Coding;
        readonly GeneralExaminationNotDone: fhir.Coding;
        readonly OEEdemaNotPresent: fhir.Coding;
        readonly UnilateralLegEdema: fhir.Coding;
        readonly OECataractPresent: fhir.Coding;
        readonly OnExaminationUnilateralThyroidSwelling: fhir.Coding;
        readonly DepthOfRespiratorySystemExamination: fhir.Coding;
        readonly RespiratorySystemNotExamined: fhir.Coding;
        readonly OENoAdventitiousSounds: fhir.Coding;
        readonly OEConsolidationPresent: fhir.Coding;
        readonly OECavitation: fhir.Coding;
        readonly DepthOfCVSExamination: fhir.Coding;
        readonly CVSNotExamined: fhir.Coding;
        readonly OENoArterialBruit: fhir.Coding;
        readonly OECarotidBruitPresent: fhir.Coding;
        readonly OEFemoralBruitPresent: fhir.Coding;
        readonly OERenalBruitPresent: fhir.Coding;
        readonly OENoCardiacThrill: fhir.Coding;
        readonly OEPericardialRubAbsent: fhir.Coding;
        readonly OENoCardiacMurmur: fhir.Coding;
        readonly DepthOfGITExamination: fhir.Coding;
        readonly GITNotExamined: fhir.Coding;
        readonly OEMouthExamined: fhir.Coding;
        readonly OnExaminationNoAbdominalMovement: fhir.Coding;
        readonly OnExaminationNoIntraAbdominalMovement: fhir.Coding;
        readonly OnExaminationNoAbdominalPainOnPalpation: fhir.Coding;
        readonly OENoGuardingOnPalpation: fhir.Coding;
        readonly OENoReboundTenderness: fhir.Coding;
        readonly OENoAbdominalRigidity: fhir.Coding;
        readonly OELiverNotPalpable: fhir.Coding;
        readonly OELiverNotPainful: fhir.Coding;
        readonly OEGallbladderNotPalpable: fhir.Coding;
        readonly OnExaminationAbdominalMassNotPalpated: fhir.Coding;
        readonly OEAscitesNotDemonstrated: fhir.Coding;
        readonly OENoHerniaDemonstrated: fhir.Coding;
        readonly DepthOfGenitourinaryExamination: fhir.Coding;
        readonly GUSystemNotExamined: fhir.Coding;
        readonly OEKidneyPalpated: fhir.Coding;
        readonly OEKidneysNotPalpable: fhir.Coding;
        readonly OEBladderNotPalpable: fhir.Coding;
        readonly OENoScrotalSwelling: fhir.Coding;
        readonly OENoVaginalDischarge: fhir.Coding;
        readonly OENoNippleDischarge: fhir.Coding;
        readonly OENoBreastLumpPalpable: fhir.Coding;
        readonly OEBreastLumpNotTethered: fhir.Coding;
        readonly OENoFetalMovements: fhir.Coding;
        readonly OEFetalHeartNotHeard: fhir.Coding;
        readonly OEVEPelvisNotAdequate: fhir.Coding;
        readonly OEVECervixNotRipe: fhir.Coding;
        readonly DepthOfNervousSystemExamination: fhir.Coding;
        readonly NervousSystemNotExamined: fhir.Coding;
        readonly OENoFitConvulsionSeen: fhir.Coding;
        readonly OENoParalysis: fhir.Coding;
        readonly InjectionOfSclerosingAgentInVaricoseVein: fhir.Coding;
        readonly SensorySystemNotExamined: fhir.Coding;
        readonly OENoTrophicChanges: fhir.Coding;
        readonly OENoMuscleContracture: fhir.Coding;
        readonly OENoInvoluntaryMovements: fhir.Coding;
        readonly OEAnalgesiaPresent: fhir.Coding;
        readonly OENoSuppression: fhir.Coding;
        readonly OENoVisualAgnosia: fhir.Coding;
        readonly OEVisualAgnosiaPresent: fhir.Coding;
        readonly OEPastPointingPresent: fhir.Coding;
        readonly OEDysdiadochokinesia: fhir.Coding;
        readonly CineplastyWithCineplasticProsthesisOfExtremity: fhir.Coding;
        readonly OENoClonus: fhir.Coding;
        readonly OECNSNotExamined: fhir.Coding;
        readonly AbnormalityOfOrgansANDORSoftTissuesOfPelvisAffectingPregnancy: fhir.Coding;
        readonly OENoRaisedICPressure: fhir.Coding;
        readonly OEMeningismAbsent: fhir.Coding;
        readonly OEKernigQuoteSSignNegative: fhir.Coding;
        readonly OEBrudzinskiQuoteSSignNegative: fhir.Coding;
        readonly OENoSpeechDefect: fhir.Coding;
        readonly HistoryAndPhysicalExaminationInsurance: fhir.Coding;
        readonly OEPtosisAbsent: fhir.Coding;
        readonly OEAccommodPupilNotReact: fhir.Coding;
        readonly OENoNystagmus: fhir.Coding;
        readonly OENotClinicallyAnemic: fhir.Coding;
        readonly OESpleenNotPalpable: fhir.Coding;
        readonly ENTExaminationNotPerformed: fhir.Coding;
        readonly OENoNasalDischarge: fhir.Coding;
        readonly OENoDischargeFromEar: fhir.Coding;
        readonly OEEarNotPainful: fhir.Coding;
        readonly OENoLaryngealSigns: fhir.Coding;
        readonly OETemperatureNotTaken: fhir.Coding;
        readonly OESkinNotExamined: fhir.Coding;
        readonly OENoMacules: fhir.Coding;
        readonly OEEcchymosesPresent: fhir.Coding;
        readonly OECapillaryNeviPresent: fhir.Coding;
        readonly OEPapulesNotPresent: fhir.Coding;
        readonly OESkinNodulesNotPresent: fhir.Coding;
        readonly OEVesiclesNotPresent: fhir.Coding;
        readonly OESkinBullaeNotPresent: fhir.Coding;
        readonly OENoPustulesPresent: fhir.Coding;
        readonly OnExaminationWhealsNotPresent: fhir.Coding;
        readonly OESkinScalesNotPresent: fhir.Coding;
        readonly OENoSkinBurrows: fhir.Coding;
        readonly OEBlackheadsNotPresent: fhir.Coding;
        readonly OEBlackheadsPresent: fhir.Coding;
        readonly OENoSkinPlaque: fhir.Coding;
        readonly OESkinCystNotPresent: fhir.Coding;
        readonly OENoSkinFissures: fhir.Coding;
        readonly OENoSkinUlcer: fhir.Coding;
        readonly OENoSkinScarring: fhir.Coding;
        readonly OENoSkinCrust: fhir.Coding;
        readonly OESkinSinusNotPresent: fhir.Coding;
        readonly OEExtremitiesNotExamined: fhir.Coding;
        readonly HomosexualForcibleAssault: fhir.Coding;
        readonly TransduodenalSphincterotomy: fhir.Coding;
        readonly OrthopedicExamNotDone: fhir.Coding;
        readonly OENoJointAbnormality: fhir.Coding;
        readonly OEJointNotSwollen: fhir.Coding;
        readonly OEJointNotStiff: fhir.Coding;
        readonly OENoJointContraction: fhir.Coding;
        readonly OENoBoneAbnormal: fhir.Coding;
        readonly OENoBoneAbnormality: fhir.Coding;
        readonly OENoSoftTissueAbnormality: fhir.Coding;
        readonly GeneralSignQualifications: fhir.Coding;
        readonly OESignNotTethered: fhir.Coding;
        readonly OESignNotPainful: fhir.Coding;
        readonly OESignNotPulsatile: fhir.Coding;
        readonly PrimaquinePoisoning: fhir.Coding;
        readonly NeurologicalDiagnosticProcedureNotDone: fhir.Coding;
        readonly NeurologicalDiagnosticProcedureDone: fhir.Coding;
        readonly SensoryMappingCarriedOut: fhir.Coding;
        readonly VisualTestingNotDone: fhir.Coding;
        readonly VisualTestingDone: fhir.Coding;
        readonly AuditoryVestibularTestNotDone: fhir.Coding;
        readonly AuditoryVestibularTestDone: fhir.Coding;
        readonly SpecialENTProcedureNotDone: fhir.Coding;
        readonly SpecialENTProcedureDone: fhir.Coding;
        readonly SpecialCVSTestNotDone: fhir.Coding;
        readonly SpecialCVSTestDone: fhir.Coding;
        readonly SpecialGITTestNotDone: fhir.Coding;
        readonly SpecialGITTestDone: fhir.Coding;
        readonly SpecialUrinaryTestNotDone: fhir.Coding;
        readonly SpecialUrinaryTestDone: fhir.Coding;
        readonly LymphocyticPseudotumorOfLung: fhir.Coding;
        readonly SpecialFemaleTestNotDone: fhir.Coding;
        readonly SpecialFemaleTestDone: fhir.Coding;
        readonly SpecialMaleTestNotDone: fhir.Coding;
        readonly SpecialMaleTestDone: fhir.Coding;
        readonly MusculoskeletalTestNotDone: fhir.Coding;
        readonly MusculoskeletalTestDone: fhir.Coding;
        readonly ECGRequested: fhir.Coding;
        readonly ECGNotDone: fhir.Coding;
        readonly SusceptibilitySkinTestDone: fhir.Coding;
        readonly SusceptibilitySkinTestNotDone: fhir.Coding;
        readonly MantouxTestDone: fhir.Coding;
        readonly MantouxTestNotDone: fhir.Coding;
        readonly KveimTestDone: fhir.Coding;
        readonly KveimTestNotDone: fhir.Coding;
        readonly HypersensitivitySkinTestDone: fhir.Coding;
        readonly HypersensitivitySkinTestNotDone: fhir.Coding;
        readonly AccidentProne: fhir.Coding;
        readonly AllergyTestingDone: fhir.Coding;
        readonly AllergyTestingNotDone: fhir.Coding;
        readonly LungFunctionTestingDone: fhir.Coding;
        readonly LungFunctionTestingNotDone: fhir.Coding;
        readonly LungVolumeTestDone: fhir.Coding;
        readonly LungVolumeTestNotDone: fhir.Coding;
        readonly RespiratoryFlowRateMeasured: fhir.Coding;
        readonly RespiratoryFlowRateNotMeasured: fhir.Coding;
        readonly OvulationTemperatureChartStarted: fhir.Coding;
        readonly CardiacFunctionTestDone: fhir.Coding;
        readonly CardiacFunctionTestNotDone: fhir.Coding;
        readonly ExerciseToleranceTestDone: fhir.Coding;
        readonly ExerciseToleranceTestNotDone: fhir.Coding;
        readonly ExcisionOfTendonSheath: fhir.Coding;
        readonly MetabolicFunctionNotTested: fhir.Coding;
        readonly NonSurgicalBiopsyDone: fhir.Coding;
        readonly NonSurgicalBiopsyNotDone: fhir.Coding;
        readonly EndoscopyArranged: fhir.Coding;
        readonly EndoscopyCarriedOut: fhir.Coding;
        readonly EndoscopyNotCarriedOut: fhir.Coding;
        readonly CheckEndoscopyConditionResolved: fhir.Coding;
        readonly BiopsySpecimenNotRetrieved: fhir.Coding;
        readonly InternalFixationOfBoneWithoutFractureReduction: fhir.Coding;
        readonly LaboratoryTestNotNecessary: fhir.Coding;
        readonly LaboratoryProcedurePerformed: fhir.Coding;
        readonly LaboratoryTestRequested: fhir.Coding;
        readonly SampleSentToLaboratoryForTest: fhir.Coding;
        readonly StoolSampleSentToLab: fhir.Coding;
        readonly BloodSampleSentToHematologyLaboratory: fhir.Coding;
        readonly BloodSampleSentToBiochemistryLaboratory: fhir.Coding;
        readonly BloodSampleSentToMicrobiologyLaboratory: fhir.Coding;
        readonly UrineSampleSentToLab: fhir.Coding;
        readonly SwabSentToLab: fhir.Coding;
        readonly PatientRefusedLaboratoryTest: fhir.Coding;
        readonly LaboratoryTestRequestedNotDone: fhir.Coding;
        readonly LaboratoryTestResultAbnormal: fhir.Coding;
        readonly LaboratoryTestDue: fhir.Coding;
        readonly BloodTestDue: fhir.Coding;
        readonly UrineTestDue: fhir.Coding;
        readonly FecesTestDue: fhir.Coding;
        readonly CSFTestDue: fhir.Coding;
        readonly SemenAnalysisDue: fhir.Coding;
        readonly PatientInformedTestResult: fhir.Coding;
        readonly TestResultByLetterToPatient: fhir.Coding;
        readonly TestResultToPatientByTelephone: fhir.Coding;
        readonly TestResultToPatientPersonally: fhir.Coding;
        readonly HematologyTestNotNeeded: fhir.Coding;
        readonly HematologyTestPerformed: fhir.Coding;
        readonly HematologyTestRequested: fhir.Coding;
        readonly BloodSentForHematologyTest: fhir.Coding;
        readonly PatientRefusedHematologyTest: fhir.Coding;
        readonly HematologyTestRequestNotDone: fhir.Coding;
        readonly HematologyResultNotBackYet: fhir.Coding;
        readonly HemoglobinNotEstimated: fhir.Coding;
        readonly HemoglobinRequested: fhir.Coding;
        readonly HemoglobinSampleSent: fhir.Coding;
        readonly SteroidInducedGlaucoma: fhir.Coding;
        readonly ToxicEffectOfPhosdrin: fhir.Coding;
        readonly BloodSentForGrouping: fhir.Coding;
        readonly BloodSentForCrossMatching: fhir.Coding;
        readonly BloodBeenCrossMatched: fhir.Coding;
        readonly TransfusionCenterRefNo: fhir.Coding;
        readonly RhesusAntibodyAbsent: fhir.Coding;
        readonly BloodSentRubellaAntibody: fhir.Coding;
        readonly ClosedFractureClavicleLateralEnd: fhir.Coding;
        readonly BloodSentSHAntigenTest: fhir.Coding;
        readonly BloodSentForHTLV3Serology: fhir.Coding;
        readonly BloodSentForLegionellaTest: fhir.Coding;
        readonly BloodSentInfectiousTiters: fhir.Coding;
        readonly LECellsAbsent: fhir.Coding;
        readonly BehavioralTherapy: fhir.Coding;
        readonly TumorGradeG2: fhir.Coding;
        readonly BloodSentForChemistry: fhir.Coding;
        readonly BloodSentAlphaFetoprotein: fhir.Coding;
        readonly BloodSentCardiacEnzymes: fhir.Coding;
        readonly BloodSentForElectrolytes: fhir.Coding;
        readonly EarlyFontanelClosure: fhir.Coding;
        readonly BloodSentForSerumLipids: fhir.Coding;
        readonly MakingOccupiedBed: fhir.Coding;
        readonly CerebralHemiparesis: fhir.Coding;
        readonly BloodSentForToxicology: fhir.Coding;
        readonly CarcinoembryonicAntigenAbsent: fhir.Coding;
        readonly SagoSpleen: fhir.Coding;
        readonly UrineNotExamined: fhir.Coding;
        readonly UrinalysisRequested: fhir.Coding;
        readonly MSUSentToLab: fhir.Coding;
        readonly UrinePregnancyTestRequested: fhir.Coding;
        readonly UrineGlucoseTestNotDone: fhir.Coding;
        readonly UrineProteinTestNotDone: fhir.Coding;
        readonly UrineKetoneTestNotDone: fhir.Coding;
        readonly UrineBloodTestNotDone: fhir.Coding;
        readonly UrinePHTestNotDone: fhir.Coding;
        readonly UrineBacteriaTestNotDone: fhir.Coding;
        readonly UrineUrobilinogenNotTested: fhir.Coding;
        readonly UrineSentForMicroscopy: fhir.Coding;
        readonly MeesmanQuoteSEpithelialCornealDystrophy: fhir.Coding;
        readonly FecesNotExamined: fhir.Coding;
        readonly FecesSentForExamination: fhir.Coding;
        readonly FecalOccultBloodRequested: fhir.Coding;
        readonly HaagensenTest: fhir.Coding;
        readonly CSFNotExamined: fhir.Coding;
        readonly CSFSentForExamination: fhir.Coding;
        readonly CSFChemistryNotTested: fhir.Coding;
        readonly SemenSentForExamination: fhir.Coding;
        readonly EndoscopicProcedureOfNerve: fhir.Coding;
        readonly VomitSentForExamination: fhir.Coding;
        readonly VomitSentForToxicology: fhir.Coding;
        readonly SynovialFluidSentForExamination: fhir.Coding;
        readonly ArthritisAssociatedWithAnotherDisorder: fhir.Coding;
        readonly BoneMarrowSentForExamination: fhir.Coding;
        readonly PleuralFluidSentForExamination: fhir.Coding;
        readonly SputumSentForExamination: fhir.Coding;
        readonly Typhlolithiasis: fhir.Coding;
        readonly SecondaryChemoprophylaxis: fhir.Coding;
        readonly AsciticFluidSentForExamination: fhir.Coding;
        readonly CalculusSentForExamination: fhir.Coding;
        readonly AmnioticFluidSentForExamination: fhir.Coding;
        readonly SampleSentForExamination: fhir.Coding;
        readonly SweatCollectedForTest: fhir.Coding;
        readonly SampleSentForBacteriology: fhir.Coding;
        readonly SampleSentForCultureSensitivities: fhir.Coding;
        readonly TransitoryAminoAcidMetabolicDisorder: fhir.Coding;
        readonly SampleSentForMycology: fhir.Coding;
        readonly SampleSentForParasitology: fhir.Coding;
        readonly EyeSwabSentForCS: fhir.Coding;
        readonly EyeSwabForVirology: fhir.Coding;
        readonly DirectClosureOfLacerationOfConjunctiva: fhir.Coding;
        readonly SputumSentForCS: fhir.Coding;
        readonly SkinSwabTaken: fhir.Coding;
        readonly SkinScrapingsTaken: fhir.Coding;
        readonly SkinUlcerSwabTaken: fhir.Coding;
        readonly SkinWoundSwabTaken: fhir.Coding;
        readonly GastrointestinalTractSampleForOrganism: fhir.Coding;
        readonly StomachWashingsForCS: fhir.Coding;
        readonly IntestinalWashingsForCS: fhir.Coding;
        readonly RectalWallScrapingForCS: fhir.Coding;
        readonly StoolSampleForCS: fhir.Coding;
        readonly MouthSwab: fhir.Coding;
        readonly BloodSentForCulture: fhir.Coding;
        readonly BloodSentForVirology: fhir.Coding;
        readonly BloodSentForBacteriology: fhir.Coding;
        readonly MSUSentForCS: fhir.Coding;
        readonly MSUSentForBacteriology: fhir.Coding;
        readonly UrineSentForCulture: fhir.Coding;
        readonly CatheterUrineSentForCulture: fhir.Coding;
        readonly UrethralSwabTaken: fhir.Coding;
        readonly HighVaginalSwabTaken: fhir.Coding;
        readonly LowVaginalSwabTaken: fhir.Coding;
        readonly VulvalSwabTaken: fhir.Coding;
        readonly CervicalSwabTaken: fhir.Coding;
        readonly PenileSwabTaken: fhir.Coding;
        readonly MiscellaneousSampleForOrganism: fhir.Coding;
        readonly PeritonealFluidForOrganism: fhir.Coding;
        readonly SemenSentForCS: fhir.Coding;
        readonly NailClippings: fhir.Coding;
        readonly NailClippingsFungusPositive: fhir.Coding;
        readonly NailClippingsFungusNegative: fhir.Coding;
        readonly TissueSentForHistology: fhir.Coding;
        readonly SpecimenSentForHistology: fhir.Coding;
        readonly CervicalSmearActionNeeded: fhir.Coding;
        readonly CervicalSmearRepeatAfterTreatment: fhir.Coding;
        readonly CervicalSmearRepeat1Month: fhir.Coding;
        readonly CervicalSmearRepeat3Months: fhir.Coding;
        readonly CervicalSmearRepeat4Months: fhir.Coding;
        readonly CervicalSmearRepeat6Months: fhir.Coding;
        readonly CervicalSmearRepeat9Months: fhir.Coding;
        readonly CervicalSmearRepeat12Months: fhir.Coding;
        readonly CervicalSmearColposcopyNeeded: fhir.Coding;
        readonly CervicalSmearCervicalBiopsyNeeded: fhir.Coding;
        readonly CervicalSmearUterineCurettageNeeded: fhir.Coding;
        readonly TissueSentForCytology: fhir.Coding;
        readonly CellChromosomeExaminationRequest: fhir.Coding;
        readonly ForensicExaminationRequested: fhir.Coding;
        readonly PostmortemExaminationRequested: fhir.Coding;
        readonly PostmortemExaminationDone: fhir.Coding;
        readonly RatBiteFever: fhir.Coding;
        readonly SedativeHypnoticANDORAnxiolyticInducedAnxietyDisorder: fhir.Coding;
        readonly LocalExcisionOfOvary: fhir.Coding;
        readonly DrainageOfAbscessOfTonsil: fhir.Coding;
        readonly AccessoryLobeOfLung: fhir.Coding;
        readonly UlcerOfBileDuct: fhir.Coding;
        readonly DeathInHospital: fhir.Coding;
        readonly SpecialDosimetry: fhir.Coding;
        readonly SpecialPotencyDiskIdentificationVancomycinTest: fhir.Coding;
        readonly LabialVeneerResinLaminateLaboratory: fhir.Coding;
        readonly IncreasedLegCircumference: fhir.Coding;
        readonly CorrectionOfTibialPseudoarthrosis: fhir.Coding;
        readonly AnthraxExposure: fhir.Coding;
        readonly ClosedFractureOfBaseOfNeckOfFemur: fhir.Coding;
        readonly OpenDislocationOfClavicle: fhir.Coding;
        readonly BreastReconstructionBilateralWithBilateralPedicleTransverseRectusAbdominisMyocutaneousFlaps: fhir.Coding;
        readonly InjuryOfAscendingRightColonWithoutOpenWoundIntoAbdominalCavity: fhir.Coding;
        readonly ImmunoglobulinTypingImmunoglobulinG: fhir.Coding;
        readonly HypothermiaTotalBodyInductionAndMaintenance: fhir.Coding;
        readonly Photokeratitis: fhir.Coding;
        readonly GuttateHypomelanosis: fhir.Coding;
        readonly EndometritisFollowingMolarANDOREctopicPregnancy: fhir.Coding;
        readonly UrethralStrictureDueToSchistosomiasis: fhir.Coding;
        readonly InfectionCausedByCrenosoma: fhir.Coding;
        readonly SutureOfSkinWoundOfHindfoot: fhir.Coding;
        readonly FractureOfVertebralColumnWithSpinalCordInjury: fhir.Coding;
        readonly Thrill: fhir.Coding;
        readonly OccipitalFracture: fhir.Coding;
        readonly UnilateralPartialExcisionOfFallopianTube: fhir.Coding;
        readonly HarrisonRichardsonOperationOnVagina: fhir.Coding;
        readonly FemaleHypererotism: fhir.Coding;
        readonly ConnationOfTeeth: fhir.Coding;
        readonly BucklingOfScleraUsingImplant: fhir.Coding;
        readonly ReplacementOfSkeletalMuscleStimulator: fhir.Coding;
        readonly ThrombophlebitisOfDeepFemoralVein: fhir.Coding;
        readonly SupraorbitalNeuralgia: fhir.Coding;
        readonly ResectionOfUvealTissue: fhir.Coding;
        readonly WorkAccident: fhir.Coding;
        readonly HealedCoronary: fhir.Coding;
        readonly ArthroscopyOfWristWithPartialSynovectomy: fhir.Coding;
        readonly AssessmentOfNutritionalStatus: fhir.Coding;
        readonly AnastomosisOfRectum: fhir.Coding;
        readonly BiliaryCirrhosis: fhir.Coding;
        readonly FetalDeathFromAsphyxiaANDORAnoxiaDuringLabor: fhir.Coding;
        readonly StromalKeratitis: fhir.Coding;
        readonly FisherSyndrome: fhir.Coding;
        readonly Thoracodidymus: fhir.Coding;
        readonly MitralValvotomy: fhir.Coding;
        readonly PoisoningBySawflyLarvae: fhir.Coding;
        readonly InsulinBiosynthesisDefect: fhir.Coding;
        readonly NasopharyngealRehabilitation: fhir.Coding;
        readonly SubmaxillaryIncisionWithDrainage: fhir.Coding;
        readonly RTARenalTubularAcidosis: fhir.Coding;
        readonly FetalDeathFromAsphyxiaANDORAnoxiaNotClearIfNotedBeforeORAfterOnsetOfLabor: fhir.Coding;
        readonly IncreasedMolecularDissociation: fhir.Coding;
        readonly MalocclusionDueToAbnormalSwallowing: fhir.Coding;
        readonly OFDIIOrofacialDigitalSyndromeII: fhir.Coding;
        readonly FecalStercobilinQualitative: fhir.Coding;
        readonly UnilateralImplantOfSiliconeIntoBreast: fhir.Coding;
        readonly UltrasonicGuidanceForPericardiocentesis: fhir.Coding;
        readonly BloodUnitCollectionForDirectedDonationDonor: fhir.Coding;
        readonly FallInvolvingWheelchair: fhir.Coding;
        readonly ApraxiaOfDressing: fhir.Coding;
        readonly IdiopathicCornealEdema: fhir.Coding;
        readonly ExposureToAttackByReptile: fhir.Coding;
        readonly EndoscopicBiopsyOfDuodenum: fhir.Coding;
        readonly TakeDownOfStoma: fhir.Coding;
        readonly MurderOfFriend: fhir.Coding;
        readonly ForcepsDeliveryFailed: fhir.Coding;
        readonly HemorrhagicBronchopneumonia: fhir.Coding;
        readonly AspirationOfBursaOfHand: fhir.Coding;
        readonly CryotherapyOfGenitalWarts: fhir.Coding;
        readonly PanicDisorderWithAgoraphobiaSevereAgoraphobicAvoidanceANDMildPanicAttacks: fhir.Coding;
        readonly EthanolMeasurementBreath: fhir.Coding;
        readonly ChemoreceptorApnea: fhir.Coding;
        readonly ImpairedGlucoseToleranceAssociatedWithPancreaticDisease: fhir.Coding;
        readonly AllergicGastritis: fhir.Coding;
        readonly UnilateralRecurrentInguinalHerniaWithObstructionButNoGangrene: fhir.Coding;
        readonly GranulomaOfLip: fhir.Coding;
        readonly InfestationCausedByGasterophilusHemorrhoidalis: fhir.Coding;
        readonly Microcephalus: fhir.Coding;
        readonly OpenReductionOfOpenSacralFracture: fhir.Coding;
        readonly AutoimmunePancytopenia: fhir.Coding;
        readonly PhacoanaphylacticEndophthalmitis: fhir.Coding;
        readonly NecrosisOfPancreas: fhir.Coding;
        readonly ExcisionOfDiverticulumOfVentricleOfHeart: fhir.Coding;
        readonly OrciprenalinePoisoning: fhir.Coding;
        readonly UnilateralCongenitalMacrostomia: fhir.Coding;
        readonly WithdrawalArrhythmia: fhir.Coding;
        readonly PlicationOfLigament: fhir.Coding;
        readonly Paraparesis: fhir.Coding;
        readonly Endophthalmitis: fhir.Coding;
        readonly PoisoningCausedByGaseousAnesthetic: fhir.Coding;
        readonly TraumaticInjuryOfSixthCranialNerve: fhir.Coding;
        readonly IncisionOfNose: fhir.Coding;
        readonly DevelopmentalAcademicDisorder: fhir.Coding;
        readonly AccessoryNose: fhir.Coding;
        readonly CongenitalRubellaSyndrome: fhir.Coding;
        readonly InfectionCausedByStilesiaGlobipunctata: fhir.Coding;
        readonly HandTendonForeignBodyRemoved: fhir.Coding;
        readonly FluidVolumeDisorder: fhir.Coding;
        readonly AnesthesiaForClosedProcedureOnHumerusAndElbow: fhir.Coding;
        readonly ThoracicPhlebectomy: fhir.Coding;
        readonly ImpairedIntestinalProteinAbsorption: fhir.Coding;
        readonly BilateralTotalNephrectomy: fhir.Coding;
        readonly FBRemovalOfForeignBodyFromBrain: fhir.Coding;
        readonly RuptureOfIrisSphincter: fhir.Coding;
        readonly InsertionOfHaloDeviceOfSkullWithSynchronousSkeletalTraction: fhir.Coding;
        readonly RepairOfAneurysmOfCoronaryArtery: fhir.Coding;
        readonly SutureOfMalePerineum: fhir.Coding;
        readonly RecessionOfPrognathicJaw: fhir.Coding;
        readonly FluorescentAntigenMeasurement: fhir.Coding;
        readonly IntercostalArteryInjury: fhir.Coding;
        readonly IncreasedNutritionalRequirement: fhir.Coding;
        readonly MurderOfSpouse: fhir.Coding;
        readonly PatientTransferInHospitalUnitToUnit: fhir.Coding;
        readonly NonTrafficVehicularAccidentalDeath: fhir.Coding;
        readonly ExcisionOfLesionOfArtery: fhir.Coding;
        readonly StarFigureAtTheMacula: fhir.Coding;
        readonly EctopicBreastTissue: fhir.Coding;
        readonly AmsinckiaSpeciesPoisoning: fhir.Coding;
        readonly AutosomalHereditaryDisorder: fhir.Coding;
        readonly InfestationCausedByPsorergatesOvis: fhir.Coding;
        readonly InsertionOfProsthesisOrProstheticDeviceOfArmBioelectricOrCineplastic: fhir.Coding;
        readonly BifurcationOfBone: fhir.Coding;
        readonly VonWillebrandDiseaseTypeIIC: fhir.Coding;
        readonly ImpairmentLevelBetterEyeSevereImpairmentLesserEyeNearTotalImpairment: fhir.Coding;
        readonly Fall: fhir.Coding;
        readonly PatientDischargeDeceasedMedicolegalCase: fhir.Coding;
        readonly CongenitalSyphiliticHepatomegaly: fhir.Coding;
        readonly CongenitalAbsenceOfUrethra: fhir.Coding;
        readonly TidalWave: fhir.Coding;
        readonly HepaticotomyWithDrainage: fhir.Coding;
        readonly Osteopetrosis: fhir.Coding;
        readonly BenignHypertensiveRenalDisease: fhir.Coding;
        readonly StruckByFallingTree: fhir.Coding;
        readonly EmotionalANDORMentalDiseaseInMotherComplicatingPregnancyChildbirthANDORPuerperium: fhir.Coding;
        readonly AbnormalVascularFlow: fhir.Coding;
        readonly LeftRightConfusion: fhir.Coding;
        readonly DrainageOfNasalSeptalAbscess: fhir.Coding;
        readonly IllegalAbortionWithEndometritis: fhir.Coding;
        readonly CongenitalDeficiencyOfPigmentOfSkin: fhir.Coding;
        readonly DilatedCardiomyopathySecondaryToToxicReaction: fhir.Coding;
        readonly PreauricularPit: fhir.Coding;
        readonly GraftingOfBoneOfThumbWithTransferOfSkinFlap: fhir.Coding;
        readonly EncephalartosSpeciesPoisoning: fhir.Coding;
        readonly ChronicPolyarticularJuvenileRheumatoidArthritis: fhir.Coding;
        readonly PNHParoxysmalNocturnalHemoglobinuria: fhir.Coding;
        readonly NormalSkinPH: fhir.Coding;
        readonly CentralBlockAnesthesia: fhir.Coding;
        readonly CongenitalAbsenceOfForearmOnly: fhir.Coding;
        readonly MoldToYeastConversionTest: fhir.Coding;
        readonly SedativeHypnoticANDORAnxiolyticInducedPsychoticDisorderWithDelusions: fhir.Coding;
        readonly OxymetholonePoisoning: fhir.Coding;
        readonly FocalChoroiditis: fhir.Coding;
        readonly SeromucinousOtitisMedia: fhir.Coding;
        readonly DiseaseDueToFiloviridae: fhir.Coding;
        readonly Urhidrosis: fhir.Coding;
        readonly TotalUrethrectomyIncludingCystostomyInFemale: fhir.Coding;
        readonly UnilateralImagingOfVeinOfUpperExtremity: fhir.Coding;
        readonly LateEffectOfInjuryToNerveRootsSpinalPlexusANDOROtherNervesOfTrunk: fhir.Coding;
        readonly BurnOfVaginaANDORUterus: fhir.Coding;
        readonly DecreasedLactation: fhir.Coding;
        readonly StrippingOfCerebralMeninges: fhir.Coding;
        readonly IntrauterineDeathDelivered: fhir.Coding;
        readonly IntrauterineDeathWithAntenatalProblem: fhir.Coding;
        readonly PsychologicTest: fhir.Coding;
        readonly DeathFromAnyObstetricCauseOccurringMoreThan42DaysButLessThanOneYearAfterDelivery: fhir.Coding;
        readonly DeathFromSequelaeOfDirectObstetricCause: fhir.Coding;
        readonly ConstructionOfSubcutaneousTunnelWithoutEsophagealAnastomosis: fhir.Coding;
        readonly Normotensive: fhir.Coding;
        readonly FractureOfLunate: fhir.Coding;
        readonly UnilateralTraumaticAmputationAtORAboveElbowWithComplication: fhir.Coding;
        readonly InternalFixationOfRadiusAndUlnaWithoutFractureReduction: fhir.Coding;
        readonly DilatedCardiomyopathySecondaryToMetazoalMyocarditis: fhir.Coding;
        readonly ErythemaInduratum: fhir.Coding;
        readonly CerebralEdema: fhir.Coding;
        readonly AcquiredFactorVIIDeficiencyDisease: fhir.Coding;
        readonly NeurogenicThoracicOutletSyndrome: fhir.Coding;
        readonly EunuchoidGigantism: fhir.Coding;
        readonly AlcoholicGastritis: fhir.Coding;
        readonly RedCellIronUtilizationStudy: fhir.Coding;
        readonly LateEffectOfInjuryToBloodVesselsOfThoraxAbdomenANDORPelvis: fhir.Coding;
        readonly BarbituratesMeasurementQuantitativeAndQualitative: fhir.Coding;
        readonly RecurrentErosionSyndrome: fhir.Coding;
        readonly BilateralLossOfLabyrinthineReactivity: fhir.Coding;
        readonly ConductiveHearingLossOfCombinedSites: fhir.Coding;
        readonly FetalDeathDueToPrelaborAnoxia: fhir.Coding;
        readonly FetalDeathDueToLaborAnoxia: fhir.Coding;
        readonly AutosomalDominantOpticAtrophy: fhir.Coding;
        readonly GastricUlcerWithHemorrhageANDPerforationButWithoutObstruction: fhir.Coding;
        readonly ImplantationOfElectromagneticHearingAid: fhir.Coding;
        readonly DentalSubperiostealImplant: fhir.Coding;
        readonly BurningSensationInEye: fhir.Coding;
        readonly CleftHardPalateWithCleftSoftPalateUnilateral: fhir.Coding;
        readonly Delusions: fhir.Coding;
        readonly JudicialExecutionByHanging: fhir.Coding;
        readonly PunctureOfBursaOfHand: fhir.Coding;
        readonly ReimplantationOfAnomalousPulmonaryArtery: fhir.Coding;
        readonly AngiectomyWithAnastomosisOfLowerLimbArtery: fhir.Coding;
        readonly NeurocutaneousMelanosisSequence: fhir.Coding;
        readonly PulmonaryNocardiosis: fhir.Coding;
        readonly PagetsDiseaseOfBone: fhir.Coding;
        readonly FallInvolvingBed: fhir.Coding;
        readonly PharyngealDiverticulitis: fhir.Coding;
        readonly FireStorm: fhir.Coding;
        readonly CarbonDisulfideCausingToxicEffect: fhir.Coding;
        readonly Matricide: fhir.Coding;
        readonly OpenReductionOfOpenMandibularFractureWithExternalFixation: fhir.Coding;
        readonly DeepCornealVascularization: fhir.Coding;
        readonly ReflexSympatheticDystrophyOfUpperExtremity: fhir.Coding;
        readonly Anisomelia: fhir.Coding;
        readonly IsolatedSomatotropinDeficiency: fhir.Coding;
        readonly InfectionCausedByCysticercusPisiformis: fhir.Coding;
        readonly DentalProphylaxisChildren: fhir.Coding;
        readonly IntramembranousBoneFormation: fhir.Coding;
        readonly RepairOfBloodVessel: fhir.Coding;
        readonly WeakCry: fhir.Coding;
        readonly EthopropazinePoisoning: fhir.Coding;
        readonly ReductionOfClosedSacralFracture: fhir.Coding;
        readonly DisorderOfAdenoid: fhir.Coding;
        readonly EdemaOfPharynx: fhir.Coding;
        readonly SuffocationByStrangulation: fhir.Coding;
        readonly SuffocationByMechanicalCause: fhir.Coding;
        readonly NutritionalDeprivationOfChild: fhir.Coding;
        readonly MultipleDeprivationOfChild: fhir.Coding;
        readonly SexualAbuse: fhir.Coding;
        readonly MeconiumInAmnioticFluidNotedBeforeLaborInLivebornInfant: fhir.Coding;
        readonly DiffusePain: fhir.Coding;
        readonly OpenWoundOfJawWithComplication: fhir.Coding;
        readonly ExcisionOfPericardialTumor: fhir.Coding;
        readonly RailwayAccident: fhir.Coding;
        readonly TrainAccidentInvolvingCollisionWithRollingStock: fhir.Coding;
        readonly CollisionBetweenRailwayVehiclesOfAnyKind: fhir.Coding;
        readonly CollisionBetweenRailwayVehiclesRailwayEmployeeInjured: fhir.Coding;
        readonly CollisionBetweenRailwayVehiclesPassengerInjured: fhir.Coding;
        readonly CollisionBetweenRailwayVehiclesPedestrianInjured: fhir.Coding;
        readonly CollisionBetweenRailwayVehiclesPedalCyclistInjured: fhir.Coding;
        readonly CollisionBetweenRailwayVehiclesFollowedByDerailment: fhir.Coding;
        readonly CollisionBetweenRailwayVehiclesFollowedByDerailmentRailwayEmployeeInjured: fhir.Coding;
        readonly CollisionBetweenRailwayVehiclesFollowedByDerailmentPassengerInjured: fhir.Coding;
        readonly CollisionBetweenRailwayVehiclesFollowedByDerailmentPedestrianInjured: fhir.Coding;
        readonly CollisionBetweenRailwayVehiclesFollowedByDerailmentPedalCyclistInjured: fhir.Coding;
        readonly TrainCollisionWithBuffers: fhir.Coding;
        readonly TrainCollisionWithBuffersRailwayEmployeeInjured: fhir.Coding;
        readonly TrainCollisionWithBuffersPassengerInjured: fhir.Coding;
        readonly TrainCollisionWithBuffersPedestrianInjured: fhir.Coding;
        readonly TrainCollisionWithBuffersPedalCyclistInjured: fhir.Coding;
        readonly LSPLeftSacroposteriorPosition: fhir.Coding;
        readonly TrainCollisionWithFallenTreeOnRailway: fhir.Coding;
        readonly TrainCollisionWithFallenTreeRailwayEmployeeInjured: fhir.Coding;
        readonly TrainCollisionWithFallenTreePassengerInjured: fhir.Coding;
        readonly TrainCollisionWithFallenTreePedestrianInjured: fhir.Coding;
        readonly TrainCollisionWithFallenTreePedalCyclistInjured: fhir.Coding;
        readonly TrainCollisionWithGates: fhir.Coding;
        readonly TrainCollisionWithGatesRailwayEmployeeInjured: fhir.Coding;
        readonly TrainCollisionWithGatesPassengerInjured: fhir.Coding;
        readonly TrainCollisionWithGatesPedestrianInjured: fhir.Coding;
        readonly TrainCollisionWithGatesPedalCyclistInjured: fhir.Coding;
        readonly TrainCollisionWithPlatform: fhir.Coding;
        readonly TrainCollisionWithPlatformRailwayEmployeeInjured: fhir.Coding;
        readonly TrainCollisionWithPlatformPassengerInjured: fhir.Coding;
        readonly TrainCollisionWithPlatformPedestrianInjured: fhir.Coding;
        readonly TrainCollisionWithPlatformPedalCyclistInjured: fhir.Coding;
        readonly TrainCollisionWithRockOnRailway: fhir.Coding;
        readonly TrainCollisionWithRockRailwayEmployeeInjured: fhir.Coding;
        readonly TrainCollisionWithRockPassengerInjured: fhir.Coding;
        readonly TrainCollisionWithRockPedestrianInjured: fhir.Coding;
        readonly TrainCollisionWithRockPedalCyclistInjured: fhir.Coding;
        readonly TrainCollisionWithStreetcarRailwayEmployeeInjured: fhir.Coding;
        readonly TrainCollisionWithStreetcarPassengerInjured: fhir.Coding;
        readonly TrainCollisionWithStreetcarPedestrianInjured: fhir.Coding;
        readonly TrainCollisionWithStreetcarPedalCyclistInjured: fhir.Coding;
        readonly RailwayAccidentInvolvingDerailmentWithoutAntecedentCollision: fhir.Coding;
        readonly DerailmentDueToTrackProblemWithoutAntecedentCollision: fhir.Coding;
        readonly DerailmentDueToTrackProblemWithoutAntecedentCollisionRailwayEmployeeInjured: fhir.Coding;
        readonly DerailmentDueToTrackProblemWithoutAntecedentCollisionPassengerInjured: fhir.Coding;
        readonly DerailmentDueToTrackProblemWithoutAntecedentCollisionPedestrianInjured: fhir.Coding;
        readonly DerailmentDueToTrackProblemWithoutAntecedentCollisionPedalCyclistInjured: fhir.Coding;
        readonly DerailmentDueToTrainProblemWithoutAntecedentCollision: fhir.Coding;
        readonly DerailmentDueToTrainProblemWithoutAntecedentCollisionPassengerInjured: fhir.Coding;
        readonly DerailmentDueToTrainProblemWithoutAntecedentCollisionPedestrianInjured: fhir.Coding;
        readonly DerailmentDueToTrainProblemWithoutAntecedentCollisionPedalCyclistInjured: fhir.Coding;
        readonly TrainAccidentInvolvingExplosionFireOrBurning: fhir.Coding;
        readonly TrainAccidentInvolvingExplosion: fhir.Coding;
        readonly TrainAccidentInvolvingExplosionRailwayEmployeeInjured: fhir.Coding;
        readonly TrainAccidentInvolvingExplosionPassengerInjured: fhir.Coding;
        readonly TrainAccidentInvolvingExplosionPedestrianInjured: fhir.Coding;
        readonly TrainAccidentInvolvingExplosionPedalCyclistInjured: fhir.Coding;
        readonly TrainAccidentInvolvingFire: fhir.Coding;
        readonly TrainAccidentInvolvingFireRailwayEmployeeInjured: fhir.Coding;
        readonly TrainAccidentInvolvingFirePedestrianInjured: fhir.Coding;
        readonly TrainAccidentInvolvingFirePedalCyclistInjured: fhir.Coding;
        readonly TrainAccidentInvolvingBurning: fhir.Coding;
        readonly TrainAccidentInvolvingBurningRailwayEmployeeInjured: fhir.Coding;
        readonly TrainAccidentInvolvingBurningPassengerInjured: fhir.Coding;
        readonly TrainAccidentInvolvingBurningPedestrianInjured: fhir.Coding;
        readonly TrainAccidentInvolvingBurningPedalCyclistInjured: fhir.Coding;
        readonly FallInOnOrFromTrain: fhir.Coding;
        readonly FallInTrain: fhir.Coding;
        readonly FallInTrainRailwayEmployeeInjured: fhir.Coding;
        readonly FallInTrainPassengerInjured: fhir.Coding;
        readonly FallOnTrain: fhir.Coding;
        readonly FallOnTrainRailwayEmployeeInjured: fhir.Coding;
        readonly FallOnTrainPassengerInjured: fhir.Coding;
        readonly FallOnTrainPedestrianInjured: fhir.Coding;
        readonly FallOnTrainPedalCyclistInjured: fhir.Coding;
        readonly FallFromTrain: fhir.Coding;
        readonly FallFromTrainRailwayEmployeeInjured: fhir.Coding;
        readonly FallFromTrainPassengerInjured: fhir.Coding;
        readonly HitByRailwayRollingStock: fhir.Coding;
        readonly CrushedByRollingStock: fhir.Coding;
        readonly CrushedByRollingStockRailwayEmployee: fhir.Coding;
        readonly CrushedByRollingStockPassenger: fhir.Coding;
        readonly CrushedByRollingStockPedestrian: fhir.Coding;
        readonly CrushedByRollingStockPedalCyclist: fhir.Coding;
        readonly KnockedDownByRollingStock: fhir.Coding;
        readonly KnockedDownByRollingStockRailwayEmployee: fhir.Coding;
        readonly KnockedDownByRollingStockPassenger: fhir.Coding;
        readonly KnockedDownByRollingStockPedestrian: fhir.Coding;
        readonly KnockedDownByRollingStockPedalCyclist: fhir.Coding;
        readonly RunOverByRollingStock: fhir.Coding;
        readonly RunOverByRollingStockRailwayEmployee: fhir.Coding;
        readonly RunOverByRollingStockPassenger: fhir.Coding;
        readonly RunOverByRollingStockPedestrian: fhir.Coding;
        readonly RunOverByRollingStockPedalCyclist: fhir.Coding;
        readonly KilledByRollingStock: fhir.Coding;
        readonly KilledByRollingStockRailwayEmployee: fhir.Coding;
        readonly KilledByRollingStockPassenger: fhir.Coding;
        readonly KilledByRollingStockPedestrian: fhir.Coding;
        readonly KilledByRollingStockPedalCyclist: fhir.Coding;
        readonly HitByObjectFallingInTrain: fhir.Coding;
        readonly HitByObjectFallingInTrainRailwayEmployee: fhir.Coding;
        readonly HitByObjectFallingInTrainPassenger: fhir.Coding;
        readonly InjuredByTrainDoorOrWindowRailwayEmployee: fhir.Coding;
        readonly InjuredByTrainDoorOrWindowPassenger: fhir.Coding;
        readonly InjuredByTrainDoorOrWindowPedestrian: fhir.Coding;
        readonly InjuredByTrainDoorOrWindowPedalCyclist: fhir.Coding;
        readonly InjuredByObjectSetInMotionByTrain: fhir.Coding;
        readonly InjuredByObjectSetInMotionByTrainRailwayEmployee: fhir.Coding;
        readonly InjuredByObjectSetInMotionByTrainPassenger: fhir.Coding;
        readonly InjuredByObjectSetInMotionByTrainPedestrian: fhir.Coding;
        readonly InjuredByObjectSetInMotionByTrainPedalCyclist: fhir.Coding;
        readonly TrainHitByFallingObject: fhir.Coding;
        readonly TrainHitByFallingObjectRailwayEmployeeInjured: fhir.Coding;
        readonly TrainHitByFallingObjectPassengerInjured: fhir.Coding;
        readonly TrainHitByFallingObjectPedestrianInjured: fhir.Coding;
        readonly TrainHitByFallingObjectPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccident: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithTrain: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingReEntrantCollisionWithAnotherMotorVehicle: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithParkedMotorVehicle: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleParkedDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleParkedPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleParkedPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleParkedOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleParkedPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleParkedOtherSpecifiedPersonInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithStoppedMotorVehicle: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStoppedMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStoppedPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStoppedOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStoppedRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStoppedPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStoppedPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStoppedOtherSpecifiedPersonInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStalled: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStalledPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStalledMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStalledPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStalledOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStalledRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStalledPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStalledPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleStalledOtherSpecifiedPersonInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithDisabledMotorVehicle: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleDisabledDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleDisabledMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleDisabledPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleDisabledOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleDisabledRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleDisabledPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleDisabledOtherSpecifiedPersonInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithAbandonedMotorVehicle: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleAbandonedOnHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleAbandonedOnHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleAbandonedOnHighwayMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleAbandonedOnHighwayOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleAbandonedOnHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleAbandonedOnHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionWithAnotherMotorVehicleAbandonedOnHighwayOtherSpecifiedPersonInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithRiddenAnimal: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalCarryingAPersonDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalCarryingAPersonPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalCarryingAPersonOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalCarryingAPersonRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalCarryingAPersonPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithAnimalDrawnVehicle: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalDrawnVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalDrawnVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalDrawnVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalDrawnVehicleOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalDrawnVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndAnimalDrawnVehiclePedestrianInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithPedalCycle: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndPedalCycleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndPedalCyclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndPedalCycleMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndPedalCyclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndPedalCycleOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndPedalCyclePedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndPedalCyclePedestrianInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithTram: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndTramcarDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndTramcarPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndTramcarMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndTramcarOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndTramcarRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndTramcarPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionBetweenMotorVehicleAndTramcarPedestrianInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithPedestrian: fhir.Coding;
        readonly PedestrianDraggedByMotorVehicle: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianDraggedByMotorVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianDraggedByMotorVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianDraggedByMotorVehicleMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianDraggedByMotorVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianDraggedByMotorVehicleOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianDraggedByMotorVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianDraggedByMotorVehiclePedestrianInjured: fhir.Coding;
        readonly PedestrianHitByMotorVehicle: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianHitByMotorVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianHitByMotorVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianHitByMotorVehicleMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianHitByMotorVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianHitByMotorVehicleOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianHitByMotorVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianHitByMotorVehiclePedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianHitByMotorVehiclePedestrianInjured: fhir.Coding;
        readonly PedestrianRunOverByMotorVehicle: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianRunOverByMotorVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianRunOverByMotorVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianRunOverByMotorVehicleMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianRunOverByMotorVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianRunOverByMotorVehicleOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianRunOverByMotorVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingPedestrianRunOverByMotorVehiclePedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionBetweenMotorVehicleAndBridge: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBridgeDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBridgePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBridgeMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBridgePassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBridgeOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBridgeRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBridgePedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndAnimal: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndAnimalDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndAnimalPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndAnimalPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndAnimalOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndAnimalRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndAnimalPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndAnimalPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndFallenStoneTrafficSignTreeOrUtilityPole: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndFallenStoneTrafficSignTreeOrUtilityPoleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndFallenStoneTrafficSignTreeOrUtilityPolePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndFallenStoneTrafficSignTreeOrUtilityPoleMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndFallenStoneTrafficSignTreeOrUtilityPolePassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndFallenStoneTrafficSignTreeOrUtilityPoleOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndFallenStoneTrafficSignTreeOrUtilityPoleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndFallenStoneTrafficSignTreeOrUtilityPolePedestrianInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithThrownObject: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndObjectThrownInFrontOfMotorVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndObjectThrownInFrontOfMotorVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndObjectThrownInFrontOfMotorVehicleMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndObjectThrownInFrontOfMotorVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndObjectThrownInFrontOfMotorVehicleOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndObjectThrownInFrontOfMotorVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndObjectThrownInFrontOfMotorVehiclePedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndObjectThrownInFrontOfMotorVehiclePedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBoundaryFence: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBoundaryFenceOrGuardRailDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBoundaryFenceOrGuardRailPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBoundaryFenceOrGuardRailPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBoundaryFenceOrGuardRailOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBoundaryFenceOrGuardRailRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBoundaryFenceOrGuardRailPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndBoundaryFenceOrGuardRailPedestrianInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithLandslide: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndLandslideDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndLandslidePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndLandslideMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndLandslidePassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndLandslideOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndLandslideRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndLandslidePedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndLandslidePedestrianInjured: fhir.Coding;
        readonly MotorVehicleOnRoadInCollisionWithSafetyIsland: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndSafetyIslandDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndSafetyIslandPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndSafetyIslandMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndSafetyIslandPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndSafetyIslandOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndSafetyIslandRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndSafetyIslandPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentInvolvingCollisionOnHighwayBetweenMotorVehicleAndSafetyIslandPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToLossOfControlWithoutCollisionOnTheHighway: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleFailingToMakeCurveWithoutCollisionOnTheHighway: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleFailingToMakeCurveWithoutCollisionOnTheHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleFailingToMakeCurveWithoutCollisionOnTheHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleFailingToMakeCurveWithoutCollisionOnTheHighwayMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleFailingToMakeCurveWithoutCollisionOnTheHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleFailingToMakeCurveWithoutCollisionOnTheHighwayOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleFailingToMakeCurveWithoutCollisionOnTheHighwayPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleFailingToMakeCurveWithoutCollisionOnTheHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBlowoutWithoutCollisionOnTheHighway: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBlowoutWithoutCollisionOnTheHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBlowoutWithoutCollisionOnTheHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBlowoutWithoutCollisionOnTheHighwayMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBlowoutWithoutCollisionOnTheHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBlowoutWithoutCollisionOnTheHighwayOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBlowoutWithoutCollisionOnTheHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBlowoutWithoutCollisionOnTheHighwayPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBlowoutWithoutCollisionOnTheHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBurstTireWithoutCollisionOnTheHighway: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBurstTireWithoutCollisionOnTheHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBurstTireWithoutCollisionOnTheHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBurstTireWithoutCollisionOnTheHighwayMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBurstTireWithoutCollisionOnTheHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBurstTireWithoutCollisionOnTheHighwayOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBurstTireWithoutCollisionOnTheHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToBurstTireWithoutCollisionOnTheHighwayPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverFallingAsleepWithoutCollisionOnTheHighway: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverFallingAsleepWithoutCollisionOnTheHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverFallingAsleepWithoutCollisionOnTheHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverFallingAsleepWithoutCollisionOnTheHighwayMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverFallingAsleepWithoutCollisionOnTheHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverFallingAsleepWithoutCollisionOnTheHighwayPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverFallingAsleepWithoutCollisionOnTheHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverInattentionWithoutCollisionOnTheHighway: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverInattentionWithoutCollisionOnTheHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverInattentionWithoutCollisionOnTheHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverInattentionWithoutCollisionOnTheHighwayMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverInattentionWithoutCollisionOnTheHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverInattentionWithoutCollisionOnTheHighwayOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverInattentionWithoutCollisionOnTheHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverInattentionWithoutCollisionOnTheHighwayPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToDriverInattentionWithoutCollisionOnTheHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToExcessiveSpeedWithoutCollisionOnTheHighway: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToExcessiveSpeedWithoutCollisionOnTheHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToExcessiveSpeedWithoutCollisionOnTheHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToExcessiveSpeedWithoutCollisionOnTheHighwayMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToExcessiveSpeedWithoutCollisionOnTheHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToExcessiveSpeedWithoutCollisionOnTheHighwayOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToExcessiveSpeedWithoutCollisionOnTheHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToExcessiveSpeedWithoutCollisionOnTheHighwayPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToExcessiveSpeedWithoutCollisionOnTheHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToFailureOfMechanicalPartWithoutCollisionOnTheHighway: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToFailureOfMechanicalPartWithoutCollisionOnTheHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToFailureOfMechanicalPartWithoutCollisionOnTheHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToFailureOfMechanicalPartWithoutCollisionOnTheHighwayMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToFailureOfMechanicalPartWithoutCollisionOnTheHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToFailureOfMechanicalPartWithoutCollisionOnTheHighwayOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToFailureOfMechanicalPartWithoutCollisionOnHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToFailureOfMechanicalPartWithoutCollisionOnTheHighwayPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleTrafficAccidentDueToMotorVehicleGoingOutOfControlDueToFailureOfMechanicalPartWithoutCollisionOnTheHighwayPedestrianInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentWhileBoardingOrAlighting: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallDownStairsOfMotorBusWhileBoardingOrAlighting: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallDownStairsOfMotorBusWhileBoardingOrAlightingDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallDownStairsOfMotorBusWhileBoardingOrAlightingPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallDownStairsOfMotorBusWhileBoardingOrAlightingMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallDownStairsOfMotorBusWhileBoardingOrAlightingPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallDownStairsOfMotorBusWhileBoardingOrAlightingOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallDownStairsOfMotorBusWhileBoardingOrAlightingRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallDownStairsOfMotorBusWhileBoardingOrAlightingPedalCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallDownStairsOfMotorBusWhileBoardingOrAlightingPedestrianInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromCarInStreetWhileBoardingOrAlighting: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromCarInStreetWhileBoardingOrAlightingDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromCarInStreetWhileBoardingOrAlightingPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromCarInStreetWhileBoardingOrAlightingMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromCarInStreetWhileBoardingOrAlightingPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromCarInStreetWhileBoardingOrAlightingOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromCarInStreetWhileBoardingOrAlightingRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromCarInStreetWhileBoardingOrAlightingPedalCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromCarInStreetWhileBoardingOrAlightingPedestrianInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByMovingPartOfTheVehicleWhileBoardingOrAlighting: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByMovingPartOfTheVehicleWhileBoardingOrAlightingDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByMovingPartOfTheVehicleWhileBoardingOrAlightingPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByMovingPartOfTheVehicleWhileBoardingOrAlightingPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByMovingPartOfTheVehicleWhileBoardingOrAlightingRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByMovingPartOfTheVehicleWhileBoardingOrAlightingPedalCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByMovingPartOfTheVehicleWhileBoardingOrAlightingPedestrianInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingTrappedByDoorOfMotorBusWhileBoardingOrAlighting: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingTrappedByDoorOfMotorBusWhileBoardingOrAlightingPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingTrappedByDoorOfMotorBusWhileBoardingOrAlightingMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingTrappedByDoorOfMotorBusWhileBoardingOrAlightingPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingTrappedByDoorOfMotorBusWhileBoardingOrAlightingOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingTrappedByDoorOfMotorBusWhileBoardingOrAlightingRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingTrappedByDoorOfMotorBusWhileBoardingOrAlightingPedalCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingTrappedByDoorOfMotorBusWhileBoardingOrAlightingPedestrianInjured: fhir.Coding;
        readonly AnalIntercourse: fhir.Coding;
        readonly AccidentDueToBreakageOfAnyPartOfMovingMotorVehicleOnRoad: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBreakageOfAnyPartOfMotorVehicleWhileInMotionDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBreakageOfAnyPartOfMotorVehicleWhileInMotionPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBreakageOfAnyPartOfMotorVehicleWhileInMotionMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBreakageOfAnyPartOfMotorVehicleWhileInMotionOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBreakageOfAnyPartOfMotorVehicleWhileInMotionRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBreakageOfAnyPartOfMotorVehicleWhileInMotionPedestrianInjured: fhir.Coding;
        readonly AccidentDueToExplosionInMovingMotorVehicleOnRoad: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleWhileInMotionDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleWhileInMotionPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleWhileInMotionMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleWhileInMotionPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleWhileInMotionOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleWhileInMotionRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleWhileInMotionPedalCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleWhileInMotionPedestrianInjured: fhir.Coding;
        readonly FallFromMovingMotorVehicleOnRoad: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromMotorVehicleWhileInMotionDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromMotorVehicleWhileInMotionPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromMotorVehicleWhileInMotionMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromMotorVehicleWhileInMotionPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromMotorVehicleWhileInMotionOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromMotorVehicleWhileInMotionRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromMotorVehicleWhileInMotionPedalCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFallFromMotorVehicleWhileInMotionPedestrianInjured: fhir.Coding;
        readonly AccidentDueToJumpingFromMovingMotorVehicleOnRoad: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingJumpFromMotorVehicleWhileInMotionDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingJumpFromMotorVehicleWhileInMotionPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingJumpFromMotorVehicleWhileInMotionMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingJumpFromMotorVehicleWhileInMotionPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingJumpFromMotorVehicleWhileInMotionOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingJumpFromMotorVehicleWhileInMotionPedalCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingJumpFromMotorVehicleWhileInMotionPedestrianInjured: fhir.Coding;
        readonly AccidentallyPushedFromMovingMotorVehicleOnRoad: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleWhileInMotionDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleWhileInMotionPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleWhileInMotionMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleWhileInMotionPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleWhileInMotionOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleWhileInMotionRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleWhileInMotionPedalCyclistInjured: fhir.Coding;
        readonly FireStartingInMotorVehicleWhileInMotionOnRoad: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFireStartingInMotorVehicleWhileInMotionDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFireStartingInMotorVehicleWhileInMotionPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFireStartingInMotorVehicleWhileInMotionMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFireStartingInMotorVehicleWhileInMotionPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFireStartingInMotorVehicleWhileInMotionOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFireStartingInMotorVehicleWhileInMotionRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFireStartingInMotorVehicleWhileInMotionPedalCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingFireStartingInMotorVehicleWhileInMotionPedestrianInjured: fhir.Coding;
        readonly HitByObjectThrownIntoOrOnMovingMotorVehicleOnRoad: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingHitByObjectThrownIntoOrOnMotorVehicleWhileInMotionDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingHitByObjectThrownIntoOrOnMotorVehicleWhileInMotionMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingHitByObjectThrownIntoOrOnMotorVehicleWhileInMotionPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingHitByObjectThrownIntoOrOnMotorVehicleWhileInMotionOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingHitByObjectThrownIntoOrOnMotorVehicleWhileInMotionRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingHitByObjectThrownIntoOrOnMotorVehicleWhileInMotionPedalCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingBeingHitByObjectThrownIntoOrOnMotorVehicleWhileInMotionPedestrianInjured: fhir.Coding;
        readonly InjuredByBeingThrownAgainstMovingMotorVehicleOnRoad: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByBeingThrownAgainstSomePartOfOrObjectInMotorVehicleWhileInMotionDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByBeingThrownAgainstSomePartOfOrObjectInMotorVehicleWhileInMotionPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByBeingThrownAgainstSomePartOfOrObjectInMotorVehicleWhileInMotionMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByBeingThrownAgainstSomePartOfOrObjectInMotorVehicleWhileInMotionPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByBeingThrownAgainstSomePartOfOrObjectInMotorVehicleWhileInMotionOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentWithInjuryByBeingThrownAgainstSomePartOfOrObjectInMotorVehicleWhileInMotionRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByBeingThrownAgainstSomePartOfOrObjectInMotorVehicleWhileInMotionPedalCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingInjuryByBeingThrownAgainstSomePartOfOrObjectInMotorVehicleWhileInMotionPedestrianInjured: fhir.Coding;
        readonly AccidentDueToObjectFallingInOrOnMovingMotorVehicleOnRoad: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingObjectFallingInOrOnMotorVehicleWhileInMotionDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingObjectFallingInOrOnMotorVehicleWhileInMotionPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingObjectFallingInOrOnMotorVehicleWhileInMotionMotorCyclistInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingObjectFallingInOrOnMotorVehicleWhileInMotionPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingObjectFallingInOrOnMotorVehicleWhileInMotionOccupantOfTramInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingObjectFallingInOrOnMotorVehicleWhileInMotionRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NoncollisionMotorVehicleTrafficAccidentInvolvingObjectFallingInOrOnMotorVehicleWhileInMotionPedestrianInjured: fhir.Coding;
        readonly MotorVehicleAccidentOffPublicRoad: fhir.Coding;
        readonly AccidentOffPublicRoadInvolvingMotorDrivenSnowVehicle: fhir.Coding;
        readonly AccidentWithBreakageOfPartOfMotorDrivenSnowVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorDrivenSnowVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorDrivenSnowVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorDrivenSnowVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorDrivenSnowVehiclePassengerOnMotorcycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorDrivenSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorDrivenSnowVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorDrivenSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorDrivenSnowVehiclePedestrianInjured: fhir.Coding;
        readonly FallFromMotorDrivenSnowVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorDrivenSnowVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorDrivenSnowVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorDrivenSnowVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorDrivenSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorDrivenSnowVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorDrivenSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorDrivenSnowVehiclePedestrianInjured: fhir.Coding;
        readonly HitByMotorDrivenSnowVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByMotorDrivenSnowVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByMotorDrivenSnowVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByMotorDrivenSnowVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByMotorDrivenSnowVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByMotorDrivenSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByMotorDrivenSnowVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByMotorDrivenSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByMotorDrivenSnowVehiclePedestrianInjured: fhir.Coding;
        readonly OverturningOfMotorDrivenSnowVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfMotorDrivenSnowVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfMotorDrivenSnowVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfMotorDrivenSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfMotorDrivenSnowVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfMotorDrivenSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByMotorDrivenSnowVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByMotorDrivenSnowVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByMotorDrivenSnowVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByMotorDrivenSnowVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByMotorDrivenSnowVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByMotorDrivenSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByMotorDrivenSnowVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByMotorDrivenSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByMotorDrivenSnowVehiclePedestrianInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionOfMotorDrivenSnowVehicleNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionOfMotorDrivenSnowVehicleNotOnPublicHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionOfMotorDrivenSnowVehicleNotOnPublicHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionOfMotorDrivenSnowVehicleNotOnPublicHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionOfMotorDrivenSnowVehicleNotOnPublicHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionOfMotorDrivenSnowVehicleNotOnPublicHighwayPedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfOffRoadMotorVehicleExceptSnowVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfOffRoadMotorVehicleExceptSnowVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfOffRoadMotorVehicleExceptSnowVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfOffRoadMotorVehicleExceptSnowVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfOffRoadMotorVehicleExceptSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfOffRoadMotorVehicleExceptSnowVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfOffRoadMotorVehicleExceptSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfOffRoadMotorVehicleExceptSnowVehiclePedestrianInjured: fhir.Coding;
        readonly FallFromOffRoadLandMotorVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromOffRoadMotorVehicleExceptSnowVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromOffRoadMotorVehicleExceptSnowVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromOffRoadMotorVehicleExceptSnowVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromOffRoadMotorVehicleExceptSnowVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromOffRoadMotorVehicleExceptSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromOffRoadMotorVehicleExceptSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromOffRoadMotorVehicleExceptSnowVehiclePedestrianInjured: fhir.Coding;
        readonly HitByOffRoadLandMotorVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByOffRoadMotorVehicleExceptSnowVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByOffRoadMotorVehicleExceptSnowVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByOffRoadMotorVehicleExceptSnowVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByOffRoadMotorVehicleExceptSnowVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByOffRoadMotorVehicleExceptSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByOffRoadMotorVehicleExceptSnowVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByOffRoadMotorVehicleExceptSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByOffRoadMotorVehicleExceptSnowVehiclePedestrianInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfOffRoadMotorVehicleExceptSnowVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfOffRoadMotorVehicleExceptSnowVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfOffRoadMotorVehicleExceptSnowVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfOffRoadMotorVehicleExceptSnowVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfOffRoadMotorVehicleExceptSnowVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfOffRoadMotorVehicleExceptSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfOffRoadMotorVehicleExceptSnowVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfOffRoadMotorVehicleExceptSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingOverturningOfOffRoadMotorVehicleExceptSnowVehiclePedestrianInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByOffRoadMotorVehicleExceptSnowVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByOffRoadMotorVehicleExceptSnowVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByOffRoadMotorVehicleExceptSnowVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByOffRoadMotorVehicleExceptSnowVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByOffRoadMotorVehicleExceptSnowVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByOffRoadMotorVehicleExceptSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByOffRoadMotorVehicleExceptSnowVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByOffRoadMotorVehicleExceptSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingRunOverOrDraggedByOffRoadMotorVehicleExceptSnowVehiclePedestrianInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingThrownAgainstSomePartOfOrObjectInOffRoadMotorVehicleExceptSnowVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingThrownAgainstSomePartOfOrObjectInOffRoadMotorVehicleExceptSnowVehicleOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingThrownAgainstSomePartOfOrObjectInOffRoadMotorVehicleExceptSnowVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingThrownAgainstSomePartOfOrObjectInOffRoadMotorVehicleExceptSnowVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingThrownAgainstSomePartOfOrObjectInOffRoadMotorVehicleExceptSnowVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingThrownAgainstSomePartOfOrObjectInOffRoadMotorVehicleExceptSnowVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingThrownAgainstSomePartOfOrObjectInOffRoadMotorVehicleExceptSnowVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingThrownAgainstSomePartOfOrObjectInOffRoadMotorVehicleExceptSnowVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionBetweenOffRoadMotorVehicleExceptSnowVehicleAndAnimalBeingRiddenOrAnimalDrawnVehicle: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionBetweenOffRoadMotorVehicleExceptSnowVehicleAndAnimalBeingRiddenOrAnimalDrawnVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionBetweenOffRoadMotorVehicleExceptSnowVehicleAndAnimalBeingRiddenOrAnimalDrawnVehicleMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionBetweenOffRoadMotorVehicleExceptSnowVehicleAndAnimalBeingRiddenOrAnimalDrawnVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionBetweenOffRoadMotorVehicleExceptSnowVehicleAndAnimalBeingRiddenOrAnimalDrawnVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionBetweenOffRoadMotorVehicleExceptSnowVehicleAndAnimalBeingRiddenOrAnimalDrawnVehicleRiderOfAnimalOrAnimalDrawnVehicleOccupantInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionBetweenOffRoadMotorVehicleExceptSnowVehicleAndAnimalBeingRiddenOrAnimalDrawnVehiclePedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionBetweenOffRoadMotorVehicleExceptSnowVehicleAndAnimalBeingRiddenOrAnimalDrawnVehiclePedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndAnimal: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndAnimalDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndAnimalPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndAnimalMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndAnimalPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndAnimalOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndAnimalRiderOfAnimalOrAnimalDrawnVehicleOccupantInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndAnimalPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndAnimalPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndNonmotorVehicle: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndNonmotorVehicleDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndNonmotorVehiclePassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndNonmotorVehicleMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndNonmotorVehiclePassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndNonmotorVehicleOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndNonmotorVehicleRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndNonmotorVehiclePedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndNonmotorVehiclePedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndPedestrian: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndPedestrianDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndPedestrianPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndPedestrianMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndPedestrianPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndPedestrianOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadVehicleAndPedestrianRiderOfAnimalOrAnimalDrawnVehicleOccupantInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndPedestrianPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndPedestrianPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndRailwayTrain: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndRailwayTrainDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndRailwayTrainPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndRailwayTrainMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndRailwayTrainPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndRailwayTrainOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadVehicleAndRailwayTrainRiderOfAnimalOrAnimalDrawnVehicleOccupantInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndRailwayTrainPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingCollisionNotOnPublicHighwayBetweenMotorVehicleExceptOffRoadMotorVehicleAndRailwayTrainPedestrianInjured: fhir.Coding;
        readonly DecreasedHormoneProduction: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingFallWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadMotorVehicleNotOnPublicHighway: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingFallWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadMotorVehicleNotOnPublicHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingFallWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadMotorVehicleNotOnPublicHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingFallWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadMotorVehicleNotOnPublicHighwayMotorCyclistInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingFallWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadMotorVehicleNotOnPublicHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingFallWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadMotorVehicleNotOnPublicHighwayOccupantOfTramInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingFallWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadMotorVehicleNotOnPublicHighwayPedalCyclistInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingFallWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadMotorVehicleNotOnPublicHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadMotorVehicleNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentWithInjuryFromMovingPartOfMotorVehicleWhenBoardingOrAlightingFromVehicleNotOffRoadVehicleNotOnHighwayRiderOfAnimalOrAnimalDrawnVehicleOccupantInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingBeingTrappedByDoorOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadMotorVehicleNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingTrappedByDoorOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingTrappedByDoorOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingTrappedByDoorOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingTrappedByDoorOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingTrappedByDoorOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingTrappedByDoorOfMotorVehicleWhenBoardingOrAlightingFromVehicleNotOffRoadVehicleNotOnHighwayRiderOfAnimalOrAnimalDrawnVehicleOccupantInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingTrappedByDoorOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayPedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingTrappedByDoorOfMotorVehicleWhileBoardingOrAlightingFromMotorVehicleExceptOffRoadVehicleNotOnHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingBreakageOfPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBreakageOfPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayRiderOfAnimalOrAnimalDrawnVehicleOccupantInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingExplosionOfAnyPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingFallFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFallFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingJumpFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingJumpFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingJumpFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingJumpFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingJumpFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingJumpFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingJumpFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingJumpFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingJumpFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleExceptOffRoadVehicleWhileInMotionNotOnPublicHighwayRiderOfAnimalOrAnimalDrawnVehicleOccupantInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingAccidentallyPushedFromMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingFireStartingInMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingFireStartingInMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFireStartingInMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFireStartingInMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFireStartingInMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFireStartingInMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFireStartingInMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFireStartingInMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingFireStartingInMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingBeingHitByObjectThrownIntoMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownIntoMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownIntoMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownIntoMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownIntoMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownIntoMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingHitByObjectThrownIntoMotorVehicleExceptOffRoadVehicleWhileInMotionNotOnPublicHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownIntoMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownIntoMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingBeingHitByObjectThrownOnMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownOnMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownOnMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownOnMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownOnMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingHitByObjectThrownOnMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayRiderOfAnimalOrOccupantOfAnimalDrawnVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownOnMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingBeingHitByObjectThrownOnMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingInjuryByBeingThrownAgainstSomePartOfOrObjectInMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryByBeingThrownAgainstPartOfOrObjectInMovingMotorVehicleExceptOffRoadVehicleNotOnHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryByBeingThrownAgainstPartOfOrObjectInMovingMotorVehicleExceptOffRoadVehicleNotOnHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryByBeingThrownAgainstPartOfOrObjectInMovingMotorVehicleExceptOffRoadVehicleNotOnHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryByBeingThrownAgainstPartOfOrObjectInMovingMotorVehicleExceptOffRoadVehicleNotOnHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryByBeingThrownAgainstPartOfOrObjectInMovingMotorVehicleExceptOffRoadVehicleNotOnHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryByBeingThrownAgainstPartOfOrObjectInMovingMotorVehicleNotOffRoadVehicleNotOnHighwayRiderOfAnimalOrAnimalDrawnVehicleOccupantInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryByBeingThrownAgainstPartOfOrObjectInMovingMotorVehicleExceptOffRoadVehicleNotOnHighwayPedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryByBeingThrownAgainstPartOfOrObjectInMovingMotorVehicleExceptOffRoadVehicleNotOnHighwayPedestrianInjured: fhir.Coding;
        readonly MotorVehicleNontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighway: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayDriverOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOfMotorVehicleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayMotorCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPassengerOnMotorCycleInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayOccupantOfTramInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayRiderOfAnimalOrAnimalDrawnVehicleOccupantInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedalCyclistInjured: fhir.Coding;
        readonly NontrafficAccidentInvolvingInjuryFromMovingPartOfMotorVehicleExceptOffRoadMotorVehicleWhileInMotionNotOnPublicHighwayPedestrianInjured: fhir.Coding;
        readonly CardiacCatheterizationEducation: fhir.Coding;
        readonly InfectionCausedByContracaecum: fhir.Coding;
        readonly DelusionOfPersecution: fhir.Coding;
        readonly OperationOnVulva: fhir.Coding;
        readonly InjectionOfAorta: fhir.Coding;
        readonly BicuspidizationOfAorticValve: fhir.Coding;
        readonly RetinalHemangioblastomatosis: fhir.Coding;
        readonly ThoracicRadiculitis: fhir.Coding;
        readonly GallopRhythm: fhir.Coding;
        readonly ExcisionOfTonsilTags: fhir.Coding;
        readonly HalogenAcne: fhir.Coding;
        readonly PHNPostHerpeticNeuralgia: fhir.Coding;
        readonly Ureterocentesis: fhir.Coding;
        readonly OperationForBoneInjuryOfTarsalsAndMetatarsals: fhir.Coding;
        readonly CompensatedMetabolicAlkalosis: fhir.Coding;
        readonly SutureOfTendonToSkeletalAttachment: fhir.Coding;
        readonly AlcoholUser: fhir.Coding;
        readonly StruckByFallingRockOrStone: fhir.Coding;
        readonly RepairOfRupturedAneurysmWithGraftOfCeliacArtery: fhir.Coding;
        readonly GasLiquidChromatographyElectronCaptureType: fhir.Coding;
        readonly VisceralEpilepsy: fhir.Coding;
        readonly ExcisionOfLesionOfCulDeSac: fhir.Coding;
        readonly OpenPosteriorDislocationOfDistalEndOfFemur: fhir.Coding;
        readonly AcquiredDeformityOfPinna: fhir.Coding;
        readonly CongenitalAnomalyOfVenaCava: fhir.Coding;
        readonly CuretteTestOfSkin: fhir.Coding;
        readonly NocturnalEmission: fhir.Coding;
        readonly SuperficialInjuryOfPerineumWithoutInfection: fhir.Coding;
        readonly DisabilityEvaluationDisability100Percent: fhir.Coding;
        readonly ComplementComponentAssay: fhir.Coding;
        readonly AcuteEpiglottitisWithObstruction: fhir.Coding;
        readonly SeleniumPoisoning: fhir.Coding;
        readonly SensititerSystemTest: fhir.Coding;
        readonly ScintillatingScotoma: fhir.Coding;
        readonly Chimera: fhir.Coding;
        readonly TumorOfBodyOfUterusAffectingPregnancy: fhir.Coding;
        readonly NervePlexusDisorder: fhir.Coding;
        readonly Proctosigmoidopexy: fhir.Coding;
        readonly PainfulBreathingPleurodynia: fhir.Coding;
        readonly StoneOperationAnoplasty: fhir.Coding;
        readonly PreviousPregnancies6: fhir.Coding;
        readonly XLinkedAbsenceOfThyroxineBindingGlobulin: fhir.Coding;
        readonly ReconstructionOfEyelid: fhir.Coding;
        readonly HypercalcemiaDueToHyperthyroidism: fhir.Coding;
        readonly ForcibleIntercourse: fhir.Coding;
        readonly ArthroscopyOfWristWithInternalFixationForInstability: fhir.Coding;
        readonly ForeignBodyInNasopharynx: fhir.Coding;
        readonly ResectionOfAscendingAortaWithAnastomosis: fhir.Coding;
        readonly PrimaryHypotonyOfEye: fhir.Coding;
        readonly HospitalAdmissionUrgent48Hours: fhir.Coding;
        readonly MonovularTwins: fhir.Coding;
        readonly ObstetricalPulmonaryFatEmbolism: fhir.Coding;
        readonly VenographyOfAdrenalBilateral: fhir.Coding;
        readonly ReplacementOfTracheostomyTube: fhir.Coding;
        readonly VictimOfHomosexualAggression: fhir.Coding;
        readonly CorrectionOfCleftHand: fhir.Coding;
        readonly ExplorationOfPoplitealArtery: fhir.Coding;
        readonly UrinalysisAutomated: fhir.Coding;
        readonly AntibodyDetectionRedBloodCellEnzyme1StageTechniqueIncludingAntiHumanGlobulin: fhir.Coding;
        readonly LucioPhenomenon: fhir.Coding;
        readonly PulsatingExophthalmos: fhir.Coding;
        readonly MicrobialCultureAnaerobicInitialIsolation: fhir.Coding;
        readonly ClosedFractureOfUpperEndOfForearm: fhir.Coding;
        readonly IronDextranToxicity: fhir.Coding;
        readonly UnilateralSimpleMastectomy: fhir.Coding;
        readonly FocalFacialDermalDysplasia: fhir.Coding;
        readonly MillerOperationUrethrovesicalSuspension: fhir.Coding;
        readonly PsychosomaticFactorInPhysicalConditionPsychologicalComponentOfUnknownDegree: fhir.Coding;
        readonly InguinalHerniaWithGangrene: fhir.Coding;
        readonly IntervertebralDiscitis: fhir.Coding;
        readonly PeripancreaticFatNecrosis: fhir.Coding;
        readonly SilentAlleles: fhir.Coding;
        readonly ReactiveAttachmentDisorderOfInfancyOREarlyChildhoodInhibitedType: fhir.Coding;
        readonly UnilateralCongenitalDysplasiaOfLungWithVascularAnomalies: fhir.Coding;
        readonly UnprotectedIntercourse: fhir.Coding;
        readonly BrainMeningesOperation: fhir.Coding;
        readonly AnesthesiaForCastProcedureOnForearmWristOrHand: fhir.Coding;
        readonly DeliveryByRitgenManeuver: fhir.Coding;
        readonly SutureOfRecentWoundOfEyelidDirectClosureFullThickness: fhir.Coding;
        readonly PreviousKnownSuicideAttempt: fhir.Coding;
        readonly MarriageAnnulment: fhir.Coding;
        readonly StrikingAgainstOrStruckBySportsEquipment: fhir.Coding;
        readonly ExposureToStingOrBiteByInsect: fhir.Coding;
        readonly AdductorTenotomy: fhir.Coding;
        readonly SexualOverexposure: fhir.Coding;
        readonly InfectionCausedByMoniliformis: fhir.Coding;
        readonly ComplicatedCystorrhaphy: fhir.Coding;
        readonly DiagnosticModelConstruction: fhir.Coding;
        readonly GeneticTransduction: fhir.Coding;
        readonly SuicideWhileIncarcerated: fhir.Coding;
        readonly RudSyndrome: fhir.Coding;
        readonly HyperBetaAlaninemia: fhir.Coding;
        readonly RadicalResectionOfTumorOfSoftTissueOfWristArea: fhir.Coding;
        readonly SimpleChronicPharyngitis: fhir.Coding;
        readonly LateEffectOfDislocation: fhir.Coding;
        readonly AcuteHemorrhagicGastritis: fhir.Coding;
        readonly TympanoplastyTypeIIWithGraftAgainstIncusOrMalleus: fhir.Coding;
        readonly BuffyCoatSmearEvaluation: fhir.Coding;
        readonly MonofascicularBlock: fhir.Coding;
        readonly IncestuousChildConcubinage: fhir.Coding;
        readonly JudicialExecutionByGuillotine: fhir.Coding;
        readonly ApplicationOfBreastPump: fhir.Coding;
        readonly CellulitisOfPectoralRegion: fhir.Coding;
        readonly ClosedReductionOfDislocationOfPatella: fhir.Coding;
        readonly NormalVariationInTranslucency: fhir.Coding;
        readonly AcuteGonococcalVulvovaginitis: fhir.Coding;
        readonly Achondrogenesis: fhir.Coding;
        readonly LigationOfVeinOfLowerLimb: fhir.Coding;
        readonly MalignantPyoderma: fhir.Coding;
        readonly QuinidineToxicityByElectrocardiogram: fhir.Coding;
        readonly DependenceSyndrome: fhir.Coding;
        readonly ChartPeriodontalPocket: fhir.Coding;
        readonly ExcisionOfMediastinalTumor: fhir.Coding;
        readonly HexosaminidaseAAndTotalHexosaminidaseMeasurementSerum: fhir.Coding;
        readonly ReplantationOfToe: fhir.Coding;
        readonly MotorSimplePartialStatus: fhir.Coding;
        readonly LumbosacralRootLesion: fhir.Coding;
        readonly PolyesterFumeCausingToxicEffect: fhir.Coding;
        readonly OpenWoundOfForeheadWithComplication: fhir.Coding;
        readonly ThirdDegreeBurnOfMultipleSitesOfUpperLimb: fhir.Coding;
        readonly NoninfectiousJejunitis: fhir.Coding;
        readonly EpsteinBarrVirusSerologicTest: fhir.Coding;
        readonly ReplacementOfCerebralVentricularTube: fhir.Coding;
        readonly CerebrospinalFluidCirculationDisorder: fhir.Coding;
        readonly Ascaridiasis: fhir.Coding;
        readonly PlacentaCircumvallata: fhir.Coding;
        readonly Iniencephaly: fhir.Coding;
        readonly PurulentEndocarditis: fhir.Coding;
        readonly IncisionOfLacrimalCanaliculus: fhir.Coding;
        readonly HydrogenSulfidePoisoning: fhir.Coding;
        readonly TorrentialRain: fhir.Coding;
        readonly CellCountOfSynovialFluidWithDifferentialCount: fhir.Coding;
        readonly DivisionOfNerveGanglion: fhir.Coding;
        readonly FetalRotation: fhir.Coding;
        readonly RevisionOfLumbosubarachnoidShunt: fhir.Coding;
        readonly BlindRehabilitation: fhir.Coding;
        readonly EducationalTherapy: fhir.Coding;
        readonly DestructiveProcedureOfArteryOfUpperExtremity: fhir.Coding;
        readonly UnilateralFemoralHerniaWithGangrene: fhir.Coding;
        readonly TennisElbowTest: fhir.Coding;
        readonly AcquiredHeterochromiaOfIris: fhir.Coding;
        readonly Onychomalacia: fhir.Coding;
        readonly BrainDamage: fhir.Coding;
        readonly IntraAbdominalAbscessPostprocedure: fhir.Coding;
        readonly PassesNoUrine: fhir.Coding;
        readonly IntermittentVerticalSquint: fhir.Coding;
        readonly RepairOfMalunionOfMetatarsalBones: fhir.Coding;
        readonly TwentyFourHourCollectionOfUrine: fhir.Coding;
        readonly SuperficialPhlebitis: fhir.Coding;
        readonly Sororicide: fhir.Coding;
        readonly DebridementOfSkinSubcutaneousTissueMuscleAndBone: fhir.Coding;
        readonly DestructiveProcedureOfBreast: fhir.Coding;
        readonly ProvisionOfContactLens: fhir.Coding;
        readonly DisorderOfNutrition: fhir.Coding;
        readonly NurseToNurseCommunication: fhir.Coding;
        readonly CongenitalCerebralArteriovenousAneurysm: fhir.Coding;
        readonly Acalculia: fhir.Coding;
        readonly RebaseOfUpperPartialDenture: fhir.Coding;
        readonly UnilateralImagingOfExternalCarotidArtery: fhir.Coding;
        readonly EarlyOnsetDysthymia: fhir.Coding;
        readonly VAL5QuoteNucleotidaseMeasurement: fhir.Coding;
        readonly RetrogradeUrographyWithKidneyUreterBladder: fhir.Coding;
        readonly TineaCapitisCausedByTrichophyton: fhir.Coding;
        readonly ManualReductionOfClosedSupracondylarFractureOfHumerusWithTraction: fhir.Coding;
        readonly StrokeRehabilitation: fhir.Coding;
        readonly CryptogenicSexualPrecocity: fhir.Coding;
        readonly BoneConductionBetterThanAir: fhir.Coding;
        readonly SalmonellaPneumonia: fhir.Coding;
        readonly NoninflammatoryDisorderOfTheFemaleGenitalOrgans: fhir.Coding;
        readonly Viremia: fhir.Coding;
        readonly ChiropracticVisit: fhir.Coding;
        readonly Sycosis: fhir.Coding;
        readonly MononuclearCellFunctionAssay: fhir.Coding;
        readonly DeathByStrangulation: fhir.Coding;
        readonly ChoroidalRupture: fhir.Coding;
        readonly CongenitalAbsenceOfVenaCava: fhir.Coding;
        readonly RemovalOfPulpComplete: fhir.Coding;
        readonly InjectionOfMedicationInAnteriorChamberOfEye: fhir.Coding;
        readonly Ketosis: fhir.Coding;
        readonly CompulsiveBuying: fhir.Coding;
        readonly OverlayingAccident: fhir.Coding;
        readonly ExcisionOfKeloid: fhir.Coding;
        readonly IncisionOfCerebralSubarachnoidSpace: fhir.Coding;
        readonly AcutePurulentPericarditis: fhir.Coding;
        readonly DiseaseOfSupportingStructuresOfTeeth: fhir.Coding;
        readonly ComplexSyndactylyOfFingers: fhir.Coding;
        readonly AthanasiaTrifurcataPoisoning: fhir.Coding;
        readonly CreationOfLumbarShuntIncludingLaminectomy: fhir.Coding;
        readonly OsteoplastyOfRadius: fhir.Coding;
        readonly ResectionOfRibByTransaxillaryApproach: fhir.Coding;
        readonly MurderOfAcquaintance: fhir.Coding;
        readonly AcneRosaceaErythematousTelangiectaticType: fhir.Coding;
        readonly Trachoma: fhir.Coding;
        readonly TransplantOfHairFolliclesToScalp: fhir.Coding;
        readonly PseudoknucklePad: fhir.Coding;
        readonly ClaspKnifeRigidity: fhir.Coding;
        readonly DeepThirdDegreeBurnOfMultipleSitesOfLowerLimb: fhir.Coding;
        readonly FiligreedNetworkOfVenousValves: fhir.Coding;
        readonly CerebralDegenerationInChildhood: fhir.Coding;
        readonly PneumococcalPleurisy: fhir.Coding;
        readonly AcuteDacryoadenitis: fhir.Coding;
        readonly CrushInjuryOfShoulderRegion: fhir.Coding;
        readonly DubowitzSyndrome: fhir.Coding;
        readonly OpenHeartSurgery: fhir.Coding;
        readonly RemovalOfBoneFlapOfSkull: fhir.Coding;
        readonly HemarthrosisOfShoulder: fhir.Coding;
        readonly BoilOfPerineum: fhir.Coding;
        readonly OperationOfSupportingStructuresOfUterus: fhir.Coding;
        readonly ImplantationOfJointProsthesisOfHand: fhir.Coding;
        readonly RemovalOfLigatureFromFallopianTube: fhir.Coding;
        readonly GraafianFollicleCyst: fhir.Coding;
        readonly RepairOfBifidDigitOfHand: fhir.Coding;
        readonly FallFromScaffolding: fhir.Coding;
        readonly ChronicRecurrentMajorDepressiveDisorder: fhir.Coding;
        readonly PsychiatricInterpretationToFamilyOrParentsOfPatient: fhir.Coding;
        readonly PercutaneousAspirationOfRenalPelvis: fhir.Coding;
        readonly InfectedUlcerOfSkin: fhir.Coding;
        readonly PrepubertalPeriodontitis: fhir.Coding;
        readonly SenterSyndrome: fhir.Coding;
        readonly IntracranialCerebralPerfusionPressureMonitoring: fhir.Coding;
        readonly OpenWoundOfFingerWithoutComplication: fhir.Coding;
        readonly IncisionAndDrainageOfInfectedBursaOfUpperArm: fhir.Coding;
        readonly DecreasedBloodErythrocyteVolume: fhir.Coding;
        readonly UnilateralImagingOfAdrenalArtery: fhir.Coding;
        readonly HypercalcemiaCausedByADrug: fhir.Coding;
        readonly ClinicalStage4: fhir.Coding;
        readonly BlindHypertensiveEye: fhir.Coding;
        readonly PrefabricatedPostAndCoreInAdditionToCrown: fhir.Coding;
        readonly LigationOfVaricoseVeinOfHeadAndNeck: fhir.Coding;
        readonly CauterizationOfLiver: fhir.Coding;
        readonly IntelligenceTestWB1: fhir.Coding;
        readonly IncisionAndExplorationOfVasDeferens: fhir.Coding;
        readonly ClosedTraumaticDislocationOfElbowJoint: fhir.Coding;
        readonly Invalidism: fhir.Coding;
        readonly OverflowProteinuria: fhir.Coding;
        readonly SocialServiceInterviewOfPatient: fhir.Coding;
        readonly SutureOfLigamentOfLowerExtremity: fhir.Coding;
        readonly PalpatoryProteinuria: fhir.Coding;
        readonly SuddenDeath: fhir.Coding;
        readonly CoordinateConvulsion: fhir.Coding;
        readonly RecementationOfSpaceMaintainer: fhir.Coding;
        readonly UnilateralRepairOfDirectInguinalHernia: fhir.Coding;
        readonly DiagnosticProcedureOnCornea: fhir.Coding;
        readonly AnalFistulectomyMultiple: fhir.Coding;
        readonly IncisionAndDrainageOfMasticatorSpaceByExtraoralApproach: fhir.Coding;
        readonly Stripping: fhir.Coding;
        readonly NonvenomousInsectBiteOfAxillaWithoutInfection: fhir.Coding;
        readonly DeathDueToTrampling: fhir.Coding;
        readonly DominantDystrophicEpidermolysisBullosaWithAbsenceOfSkin: fhir.Coding;
        readonly MRIOfPelvis: fhir.Coding;
        readonly StoolFatQuantitativeMeasurement: fhir.Coding;
        readonly MyelophthisicAnemia: fhir.Coding;
        readonly HepaticVenographyWithHemodynamicEvaluation: fhir.Coding;
        readonly StrippingAndLigationOfGreatSaphenousVein: fhir.Coding;
        readonly AcuteDisease: fhir.Coding;
        readonly NecrotizingEnterocolitis: fhir.Coding;
        readonly ClosedPneumothorax: fhir.Coding;
        readonly UnilateralRepairOfIndirectInguinalHernia: fhir.Coding;
        readonly DermalFatFasciaGraft: fhir.Coding;
        readonly Interleukin3Assay: fhir.Coding;
        readonly AuditoryRecruitment: fhir.Coding;
        readonly PreviousAbnormalityOfGlucoseTolerance: fhir.Coding;
        readonly SerologicTestForInfluenzaVirusA: fhir.Coding;
        readonly RecessionOfTendonOfHand: fhir.Coding;
        readonly HeelPain: fhir.Coding;
        readonly HoneycombAtrophyOfFace: fhir.Coding;
        readonly ExploratoryCraniotomyInfratentorial: fhir.Coding;
        readonly GoutyProteinuria: fhir.Coding;
        readonly DestructionOfBartholinQuoteSGland: fhir.Coding;
        readonly OperativeEndoscopyOfIleum: fhir.Coding;
        readonly Epiplopexy: fhir.Coding;
        readonly CongenitalDeformityOfHip: fhir.Coding;
        readonly FibrocalculousPancreaticDiabetes: fhir.Coding;
        readonly Incudopexy: fhir.Coding;
        readonly OxytocinPoisoning: fhir.Coding;
        readonly DecreasedStoolCaliber: fhir.Coding;
        readonly JointCrackle: fhir.Coding;
        readonly UnilateralCaudalDisplacementOfDiaphragm: fhir.Coding;
        readonly FetalOrNeonatalEffectOfAntibioticTransmittedViaPlacentaAndOrBreastMilk: fhir.Coding;
        readonly EpidermolysisBullosaAcquisita: fhir.Coding;
        readonly IntraArticularLooseBody: fhir.Coding;
        readonly OrganicBrainSyndrome: fhir.Coding;
        readonly IntrapartumMaternalDeath: fhir.Coding;
        readonly OsteoplastyOfFacialBones: fhir.Coding;
        readonly MiscarriageComplicatedByDelayedAndOrExcessiveHemorrhage: fhir.Coding;
        readonly TemporomandibularDysplasia: fhir.Coding;
        readonly GastrojejunalUlcerWithoutHemorrhageANDWithoutPerforation: fhir.Coding;
        readonly EpithelialOvarianTumorInternationalFederationOfGynecologyAndObstetricsStageIII: fhir.Coding;
        readonly ImpairmentLevelOneEyeTotalImpairmentOtherEyeNotSpecified: fhir.Coding;
        readonly SenileMyocarditis: fhir.Coding;
        readonly Homicide: fhir.Coding;
        readonly CauterizationOfNavel: fhir.Coding;
        readonly ManualDilationAndStretching: fhir.Coding;
        readonly PhosmetPoisoning: fhir.Coding;
        readonly ImpairedPsychomotorDevelopment: fhir.Coding;
        readonly Fratricide: fhir.Coding;
        readonly ChronicGastrojejunalUlcerWithPerforation: fhir.Coding;
        readonly InfectionCausedByProsthenorchisElegans: fhir.Coding;
        readonly AlcoholicDementia: fhir.Coding;
        readonly CineradiographyOfPharynx: fhir.Coding;
        readonly Nephroureterocystectomy: fhir.Coding;
        readonly SexualPyromania: fhir.Coding;
        readonly DilatedCardiomyopathySecondaryToMyotonicDystrophy: fhir.Coding;
        readonly CongenitalVascularAnomalyOfEye: fhir.Coding;
        readonly MagnesiumSulfatePoisoning: fhir.Coding;
        readonly AcuteMyocardialInfarctionOfBasalLateralWall: fhir.Coding;
        readonly AbrasionAndOrFrictionBurnOfGumWithoutInfection: fhir.Coding;
        readonly CongenitalStenosisOfNares: fhir.Coding;
        readonly NoBacterialAntibodyPresent: fhir.Coding;
        readonly UhlDisease: fhir.Coding;
        readonly PyloricAntralVascularEctasia: fhir.Coding;
        readonly HemolyticAnemiaDueToCardiacTrauma: fhir.Coding;
        readonly ButaneCausingToxicEffect: fhir.Coding;
        readonly TranspositionOfUlnarNerveAtElbow: fhir.Coding;
        readonly Piblokto: fhir.Coding;
        readonly OpenFractureOfVaultOfSkullWithCerebralLacerationANDORContusion: fhir.Coding;
        readonly GasChromatographyMeasurement: fhir.Coding;
        readonly RevisionOfUrinaryConduit: fhir.Coding;
        readonly CervicalMyelography: fhir.Coding;
        readonly InfectionCausedBySchistosomaIncognitum: fhir.Coding;
        readonly IncisionAndDrainageOfVulva: fhir.Coding;
        readonly ArthrotomyForSynovectomyOfSternoclavicularJoint: fhir.Coding;
        readonly MacularKeratitis: fhir.Coding;
        readonly BursectomyOfHand: fhir.Coding;
        readonly VitaminAResponsiveDermatosis: fhir.Coding;
        readonly Pinealectomy: fhir.Coding;
        readonly PostpartumSepsis: fhir.Coding;
        readonly Euthanasia: fhir.Coding;
        readonly ObliterationOfLymphaticStructure: fhir.Coding;
        readonly ImplantationOfJointProsthesisOfElbow: fhir.Coding;
        readonly HospitalAdmissionTypeUnclassifiedExplainByReport: fhir.Coding;
        readonly SpherophakiaBrachymorphiaSyndrome: fhir.Coding;
        readonly IntradermalAllergenTest: fhir.Coding;
        readonly ArthroscopyOfElbowWithPartialSynovectomy: fhir.Coding;
        readonly AnomalyOfChromosomePair10: fhir.Coding;
        readonly ImmuneThrombocytopenia: fhir.Coding;
        readonly DeoxyribonucleicAcidAnalysisAntenatalBlood: fhir.Coding;
        readonly ThoughtBlocking: fhir.Coding;
        readonly FibromuscularDysplasiaOfRenalArtery: fhir.Coding;
        readonly MelnickFraserSyndrome: fhir.Coding;
        readonly AlteredBloodPassedPerRectum: fhir.Coding;
        readonly DecreasedLymphocyteLifeSpan: fhir.Coding;
        readonly DiagnosticProcedureOnAnteriorChamberOfEye: fhir.Coding;
        readonly MaleInfertility: fhir.Coding;
        readonly CryotherapyToHemorrhoid: fhir.Coding;
        readonly DischargeFromPenis: fhir.Coding;
        readonly CysticBullousDiseaseOfTheLung: fhir.Coding;
        readonly AnteriorSclerotomy: fhir.Coding;
        readonly UnilateralExcisionOfHydrocele: fhir.Coding;
        readonly SutureOfCapsuleOfAnkle: fhir.Coding;
        readonly TransientHypothyroidism: fhir.Coding;
        readonly InfectionCausedByBacteroides: fhir.Coding;
        readonly NauseaVomitingAndDiarrhea: fhir.Coding;
        readonly EEGFinding: fhir.Coding;
        readonly ArterialOcclusion: fhir.Coding;
        readonly Pneumogynecography: fhir.Coding;
        readonly AntiasthmaticPoisoning: fhir.Coding;
        readonly IntrabasalVesicularDermatitis: fhir.Coding;
        readonly ExcisionalBiopsyOfJointStructureOfSpine: fhir.Coding;
        readonly MurderOfRelative: fhir.Coding;
        readonly UnilateralFemoralHerniaWithGangreneANDObstruction: fhir.Coding;
        readonly SuprapubicDiverticulectomyOfUrinaryBladder: fhir.Coding;
        readonly OsmoticDiarrhea: fhir.Coding;
        readonly TherapeuticCompoundMeasurement: fhir.Coding;
        readonly NonexcisionalDestructionOfCystOfCiliaryBody: fhir.Coding;
        readonly AtopicCataract: fhir.Coding;
        readonly ChronicUlcerativePulpitis: fhir.Coding;
        readonly ClosureOfFistulaOfUterineCervix: fhir.Coding;
        readonly NevoidCongenitalAlopecia: fhir.Coding;
        readonly NonComitantStrabismus: fhir.Coding;
        readonly CraniectomyWithTreatmentOfPenetratingWoundOfBrain: fhir.Coding;
        readonly MetacarpalLengtheningAndTransferOfLocalFlap: fhir.Coding;
        readonly AcuteMyringitis: fhir.Coding;
        readonly ClosureOfAcquiredUrethrovaginalFistula: fhir.Coding;
        readonly OcclusionOfAnteriorSpinalArtery: fhir.Coding;
        readonly PelvicOrganInjuryWithoutOpenWoundIntoAbdominalCavity: fhir.Coding;
        readonly ThrombectomyOfLowerLimbVein: fhir.Coding;
        readonly AneurysmOfConjunctiva: fhir.Coding;
        readonly PulsatileMassOfAbdomen: fhir.Coding;
        readonly ComplicationFollowingMolarANDOREctopicPregnancy: fhir.Coding;
        readonly LymphocyticLeukemoidReaction: fhir.Coding;
        readonly ParaffinomaOfSkin: fhir.Coding;
        readonly PigmentaryPallidalDegeneration: fhir.Coding;
        readonly BrainFag: fhir.Coding;
        readonly InjuryOfEarRegion: fhir.Coding;
        readonly TotalLobectomyWithBronchoplasty: fhir.Coding;
        readonly ThyroidHemorrhage: fhir.Coding;
        readonly CongenitalDilatationOfEsophagus: fhir.Coding;
        readonly AlteredConsciousness: fhir.Coding;
        readonly SolanumMalacoxylonPoisoning: fhir.Coding;
        readonly RemovalOfSilasticTubesFromEar: fhir.Coding;
        readonly OpenWoundOfEarDrumWithoutComplication: fhir.Coding;
        readonly Autoeczematization: fhir.Coding;
        readonly RemovalOfCrutchfieldTongsFromSkull: fhir.Coding;
        readonly PenetrationOfEyeballWithMagneticForeignBody: fhir.Coding;
        readonly ClosedAnteriorDislocationOfElbow: fhir.Coding;
        readonly NormalGastricAcidity: fhir.Coding;
        readonly AcutePepticUlcerWithoutHemorrhageWithoutPerforationANDWithoutObstruction: fhir.Coding;
        readonly CalcitoninMeasurement: fhir.Coding;
        readonly TibiotalarArthrodesis: fhir.Coding;
        readonly PeripheralNervousSystemDiseaseRehabilitation: fhir.Coding;
        readonly ApoplecticPancreatitis: fhir.Coding;
        readonly NonvenomousInsectBiteOfCheekWithoutInfection: fhir.Coding;
        readonly BoneANDORJointDisorderOfPelvisInMotherComplicatingPregnancyChildbirthANDORPuerperium: fhir.Coding;
        readonly AcuteLymphangitisOfUmbilicus: fhir.Coding;
        readonly RepairOfStomach: fhir.Coding;
        readonly VitreousProlapse: fhir.Coding;
        readonly UnilateralTraumaticAmputationOfLegWithComplication: fhir.Coding;
        readonly KowaFundusPhotography: fhir.Coding;
        readonly PoisoningCausedByNitroglycerin: fhir.Coding;
        readonly AcuteLymphangitisOfThigh: fhir.Coding;
        readonly ForequarterAmputationRight: fhir.Coding;
        readonly USKidneys: fhir.Coding;
        readonly CompleteExcisionOfNailANDNailMatrix: fhir.Coding;
        readonly GastroscopyThroughArtificialStoma: fhir.Coding;
        readonly WeakCPhenotype: fhir.Coding;
        readonly Widow: fhir.Coding;
        readonly HormoneInducedHypopituitarism: fhir.Coding;
        readonly RuvalcabaSyndrome: fhir.Coding;
        readonly NonoperativeRemovalOfProsthesisOfBileDuct: fhir.Coding;
        readonly EmbolectomyWithCatheterOfRenalArteryByAbdominalIncision: fhir.Coding;
        readonly PearlyPenilePapules: fhir.Coding;
        readonly RemovalOfDeviceFromThorax: fhir.Coding;
        readonly NonvenomousInsectBiteOfGumWithoutInfection: fhir.Coding;
        readonly AnesthesiaForEndoscopicProcedureOnUpperExtremity: fhir.Coding;
        readonly DisabilityEvaluationImpairmentClass7: fhir.Coding;
        readonly AneurysmectomyWithGraftReplacementOfLowerLimbArtery: fhir.Coding;
        readonly VomitingInInfantsANDORChildren: fhir.Coding;
        readonly InducedMalaria: fhir.Coding;
        readonly SuperficialInjuryOfLipWithInfection: fhir.Coding;
        readonly VentricularSeptalRupture: fhir.Coding;
        readonly PenileBoil: fhir.Coding;
        readonly Intron: fhir.Coding;
        readonly SecondaryDysthymiaEarlyOnset: fhir.Coding;
        readonly AOMAcuteOtitisMedia: fhir.Coding;
        readonly RestraintRemoval: fhir.Coding;
        readonly ClottingScreening: fhir.Coding;
        readonly BrainStemLacerationWithOpenIntracranialWoundANDLossOfConsciousness: fhir.Coding;
        readonly InfarctionOfOvary: fhir.Coding;
        readonly MonitoringOfCardiacOutputByElectrocardiogram: fhir.Coding;
        readonly DejaVu: fhir.Coding;
        readonly PatientDischargeDeceasedAutopsy: fhir.Coding;
        readonly OEOtitisExterna: fhir.Coding;
        readonly Replacement: fhir.Coding;
        readonly CitrullinemiaSubacuteType: fhir.Coding;
        readonly VisualFieldExaminationAndEvaluationIntermediate: fhir.Coding;
        readonly StaphylococcalPleurisy: fhir.Coding;
        readonly UnilateralInguinalHerniaWithGangrene: fhir.Coding;
        readonly PanicDisorderWithAgoraphobiaAgoraphobicAvoidanceInPartialRemissionANDPanicAttacksInPartialRemission: fhir.Coding;
        readonly InfertilityOfCervicalOrigin: fhir.Coding;
        readonly PartialDacryocystectomy: fhir.Coding;
        readonly GadoliniumMeasurement: fhir.Coding;
        readonly AcuteAdenoviralFollicularConjunctivitis: fhir.Coding;
        readonly OpenReductionOfClosedMandibularFractureWithInterdentalFixation: fhir.Coding;
        readonly IrrigationOfMuscleOfHand: fhir.Coding;
        readonly ClosureOfFistulaOfSalivaryGland: fhir.Coding;
        readonly ThrombophlebitisOfIntracranialVenousSinus: fhir.Coding;
        readonly ReactiveHypoglycemia: fhir.Coding;
        readonly InternalObstetricalVersion: fhir.Coding;
        readonly ClosureOfColostomy: fhir.Coding;
        readonly MoodCongruentDelusion: fhir.Coding;
        readonly ExcisionOfSkeneGland: fhir.Coding;
        readonly AntepartumMaternalDeath: fhir.Coding;
        readonly EpilationByForceps: fhir.Coding;
        readonly SprainOfShoulderJoint: fhir.Coding;
        readonly Sacrocoxalgia: fhir.Coding;
        readonly CervicalDilatation1cm: fhir.Coding;
        readonly LaparoscopicUnilateralRepairOfInguinalHerniaWithProsthesisOrGraft: fhir.Coding;
        readonly DestructiveProcedureOfNerve: fhir.Coding;
        readonly OpenWoundOfOssiclesWithoutComplication: fhir.Coding;
        readonly InvasivePulmonaryAspergillosis: fhir.Coding;
        readonly OpenDislocationOfSixthCervicalVertebra: fhir.Coding;
        readonly AsphyxiaByPlasticBag: fhir.Coding;
        readonly MycoticDisease: fhir.Coding;
        readonly DiseaseTypeANDORCategoryUnknown: fhir.Coding;
        readonly ClosedFractureOfTheRadialShaft: fhir.Coding;
        readonly TrachealUlcer: fhir.Coding;
        readonly IllegalTerminationOfPregnancyWithAfibrinogenemia: fhir.Coding;
        readonly Pericarditis: fhir.Coding;
        readonly LymphocyteDisorder: fhir.Coding;
        readonly PlasterUlcer: fhir.Coding;
        readonly CorrectionOfChordeeWithMobilizationOfUrethra: fhir.Coding;
        readonly SurgicalConstructionOfFiltrationBleb: fhir.Coding;
        readonly MayoOperationHerniorrhaphy: fhir.Coding;
        readonly Dyschromia: fhir.Coding;
        readonly InfectionCausedByStrongyloidesWesteri: fhir.Coding;
        readonly CervicalLymphangiogram: fhir.Coding;
        readonly EmptyAndMeasurePeritonealDialysisFluid: fhir.Coding;
        readonly CerebralArteriography: fhir.Coding;
        readonly HomeriaSpeciesPoisoning: fhir.Coding;
        readonly MigratoryOsteolysis: fhir.Coding;
        readonly Verumontanitis: fhir.Coding;
        readonly UnilateralIncompleteCleftLip: fhir.Coding;
        readonly TransplantationOfTissueOfPelvicRegion: fhir.Coding;
        readonly ImplantationOfNeurostimulatorInSpine: fhir.Coding;
        readonly Stomatocytosis: fhir.Coding;
        readonly FlatChest: fhir.Coding;
        readonly BehcetSyndromeVascularType: fhir.Coding;
        readonly ToadPoisoning: fhir.Coding;
        readonly TerminalMoodInsomnia: fhir.Coding;
        readonly LysisOfAdhesionsOfBursaOfHand: fhir.Coding;
        readonly ArcEye: fhir.Coding;
        readonly FeelingOfSandOrForeignBodyInEye: fhir.Coding;
        readonly PatientStatusDeterminationGreatlyImproved: fhir.Coding;
        readonly Cholecystogastrostomy: fhir.Coding;
        readonly Anisometropia: fhir.Coding;
        readonly ClosedFractureOfTwoRibs: fhir.Coding;
        readonly AmnesticSyndrome: fhir.Coding;
        readonly OccipitalHeadache: fhir.Coding;
        readonly DiseaseCausedByArenavirus: fhir.Coding;
        readonly FallOnSameLevel: fhir.Coding;
        readonly BronchialCompression: fhir.Coding;
        readonly DisorderOfLymphaticVessel: fhir.Coding;
        readonly AtrophicHyperplasticGastritis: fhir.Coding;
        readonly ForeignBodyGranulomaOfSkin: fhir.Coding;
        readonly UnilateralExcisionOfOvary: fhir.Coding;
        readonly AbtAutologousBloodTransfusion: fhir.Coding;
        readonly RenalAbscess: fhir.Coding;
        readonly LeukoplakiaOfPenis: fhir.Coding;
        readonly LaserBeamPhotocoagulation: fhir.Coding;
        readonly ExcisionOfExostosisOfHeadOfFifthMetatarsal: fhir.Coding;
        readonly AcquiredJerkNystagmus: fhir.Coding;
        readonly IncisionOfVeinOfHeadAndNeck: fhir.Coding;
        readonly OpenFractureOfNeckOfMetacarpalBone: fhir.Coding;
        readonly ApplicationOfShortArmSplintForearmToHandStatic: fhir.Coding;
        readonly OpenReductionOfOpenRadialShaftFracture: fhir.Coding;
        readonly PanorexExaminationOfMandible: fhir.Coding;
        readonly ToxicLabyrinthitis: fhir.Coding;
        readonly IdiopathicOsteoporosis: fhir.Coding;
        readonly Pylorospasm: fhir.Coding;
        readonly PTHParathyroidHormoneLevel: fhir.Coding;
        readonly UnilateralCongenitalDislocationOfHip: fhir.Coding;
        readonly AntiCommonColdDrugPoisoning: fhir.Coding;
        readonly IronKinetics: fhir.Coding;
        readonly LichenRuberMoniliformis: fhir.Coding;
        readonly BiliaryAnastomosis: fhir.Coding;
        readonly OnExaminationNoDiseasePresent: fhir.Coding;
        readonly DullChestPain: fhir.Coding;
        readonly Pseudoptyalism: fhir.Coding;
        readonly OpenFractureOfAstragalus: fhir.Coding;
        readonly AuditoryDiscriminationAphasia: fhir.Coding;
        readonly VerificationProcedure: fhir.Coding;
        readonly NegativeForTumorCells: fhir.Coding;
        readonly PhlebitisFollowingInfusionPerfusionANDORTransfusion: fhir.Coding;
        readonly CadmiumPoisoning: fhir.Coding;
        readonly ReductionOfTorsionOfOmentum: fhir.Coding;
        readonly DiseaseTypeANDORCategoryNotApplicable: fhir.Coding;
        readonly CercopithecusHerpesvirus1Disease: fhir.Coding;
        readonly CreationOfLesionOfSpinalCordByPercutaneousMethod: fhir.Coding;
        readonly ABOIncompatibilityReaction: fhir.Coding;
        readonly BloodCellMorphology: fhir.Coding;
        readonly Cyanosis: fhir.Coding;
        readonly ChondrectomyOfSpine: fhir.Coding;
        readonly AbsenceOfAura: fhir.Coding;
        readonly FaucialDiphtheria: fhir.Coding;
        readonly AmobarbitalInterview: fhir.Coding;
        readonly OpenBlowOutFractureOrbit: fhir.Coding;
        readonly HeartRateFast: fhir.Coding;
        readonly RetainedMagneticIntraocularForeignBody: fhir.Coding;
        readonly NonglucosuricMelituria: fhir.Coding;
        readonly PreventiveDentalService: fhir.Coding;
        readonly Myotonia: fhir.Coding;
        readonly SevereCombinedImmunodeficiencySCIDDueToAbsentPeripheralTCellMaturation: fhir.Coding;
        readonly DisorderOfSebaceousGland: fhir.Coding;
        readonly PulpCapping: fhir.Coding;
        readonly OpenFractureOfT7T12LevelWithSpinalCordInjury: fhir.Coding;
        readonly SuddenDeathOfUnknownCauseDuringThePuerperium: fhir.Coding;
        readonly FixationOfContralateralTestis: fhir.Coding;
        readonly FingerAgnosia: fhir.Coding;
        readonly LymphocytesTAndBCellEvaluation: fhir.Coding;
        readonly ChronicProgressiveNonHereditaryChorea: fhir.Coding;
        readonly ReferralProcedure: fhir.Coding;
        readonly MyositisOssificansAssociatedWithDermatoPolymyositis: fhir.Coding;
        readonly PeriodontalScalingAndRootPlaningPerQuadrant: fhir.Coding;
        readonly DeepThirdDegreeBurnOfThumb: fhir.Coding;
        readonly InfectionCausedByOesophagostomumDentatum: fhir.Coding;
        readonly NeonatalInfectiveMastitis: fhir.Coding;
        readonly PartialThicknessBurnOfThumb: fhir.Coding;
        readonly SpondylolisthesisGrade4: fhir.Coding;
        readonly GlycineMaxPoisoning: fhir.Coding;
        readonly RemovalOfHeartAssistSystemWithReplacement: fhir.Coding;
        readonly BurnOfWrist: fhir.Coding;
        readonly RadionuclideDynamicFunctionStudy: fhir.Coding;
        readonly PostoperativeEsophagitis: fhir.Coding;
        readonly ChronicPepticUlcerWithPerforation: fhir.Coding;
        readonly PulmonaryCandidiasis: fhir.Coding;
        readonly AbsentTendonReflex: fhir.Coding;
        readonly TotalExcisionOfPituitaryGlandByTranssphenoidalApproach: fhir.Coding;
        readonly AspirationOfVitreousWithReplacement: fhir.Coding;
        readonly OpenWoundOfOssiclesWithComplication: fhir.Coding;
        readonly CervicalLymphadenitis: fhir.Coding;
        readonly GenderIdentityDisorderOfAdolescencePreviouslyAsexual: fhir.Coding;
        readonly NonallopathicLesionOfTheArm: fhir.Coding;
        readonly StenosisOfRetinalArtery: fhir.Coding;
        readonly AbscessOfThigh: fhir.Coding;
        readonly StreptococcusVaccination: fhir.Coding;
        readonly UrinaryUndiversionOfUreteralAnastomosis: fhir.Coding;
        readonly InfectiousThyroiditis: fhir.Coding;
        readonly AngiographyOfArteriesOfExtremity: fhir.Coding;
        readonly PeribronchialFibrosisOfLung: fhir.Coding;
        readonly SuffocationByBedclothes: fhir.Coding;
        readonly ReplacementOfElectronicHeartDevicePulseGenerator: fhir.Coding;
        readonly RemovalOfForeignBodyOfPelvisFromSubcutaneousTissue: fhir.Coding;
        readonly AversivePsychotherapy: fhir.Coding;
        readonly DisorderOfSynovium: fhir.Coding;
        readonly ReagentRBCPreparationAntibodySensitizedPool: fhir.Coding;
        readonly AntibodyMeasurement: fhir.Coding;
        readonly RestrictedCarbohydrateFatControlledDiet: fhir.Coding;
        readonly InfectionCausedBySanguinicola: fhir.Coding;
        readonly Bipolar1DisorderSingleManicEpisodeFullRemission: fhir.Coding;
        readonly IVIrrigationMonitoring: fhir.Coding;
        readonly IntrapsychicConflict: fhir.Coding;
        readonly Hurricane: fhir.Coding;
        readonly AcutePalmoplantarPustularPsoriasis: fhir.Coding;
        readonly Enteromenia: fhir.Coding;
        readonly LacerationExtendingIntoParenchymaOfSpleenWithOpenWoundIntoAbdominalCavity: fhir.Coding;
        readonly HairSplitting: fhir.Coding;
        readonly DiastolicDysfunction: fhir.Coding;
        readonly CVGCoronaryVeinGraft: fhir.Coding;
        readonly CaughtCrushedJammedOrPinchedInOrBetweenObjects: fhir.Coding;
        readonly BrachialPlexusDisorder: fhir.Coding;
        readonly PancreaticAcinarAtrophy: fhir.Coding;
        readonly HemorrhagicShock: fhir.Coding;
        readonly MesentericInfarction: fhir.Coding;
        readonly InsertionOfUreteralStentWithUreterotomy: fhir.Coding;
        readonly BilateralRecurrentInguinalHernia: fhir.Coding;
        readonly RodneySmithOperationRadicalSubtotalPancreatectomy: fhir.Coding;
        readonly RemovalOfForeignBodyFromFallopianTube: fhir.Coding;
        readonly IncreasedBloodErythrocyteVolume: fhir.Coding;
        readonly ClosedFractureTrapezoid: fhir.Coding;
        readonly MegaloblasticAnemiaDueToPancreaticInsufficiency: fhir.Coding;
        readonly RepairOfFasciaWithGraftOfFascia: fhir.Coding;
        readonly LatticeRetinalDegeneration: fhir.Coding;
        readonly RemovalOfCalculusOfPharynx: fhir.Coding;
        readonly SmallpoxVaccinePoisoning: fhir.Coding;
        readonly Blinking: fhir.Coding;
        readonly PsychogenicFugue: fhir.Coding;
        readonly SyphiliticPericarditis: fhir.Coding;
        readonly EnteroentericFistula: fhir.Coding;
        readonly KernicterusDueToIsoimmunization: fhir.Coding;
        readonly MetabolicAcidosisNormalAnionGapBicarbonateLosses: fhir.Coding;
        readonly PartialRecentRetinalDetachmentWithSingleDefect: fhir.Coding;
        readonly AcuteRadiationDisease: fhir.Coding;
        readonly ReductionOfCiliaryBody: fhir.Coding;
        readonly TransplantationOfMesentericTissue: fhir.Coding;
        readonly DemetonPoisoning: fhir.Coding;
        readonly FirstKnownSuicideAttempt: fhir.Coding;
        readonly RedCellSurvivalStudyWithHepaticSequestration: fhir.Coding;
        readonly AnesthesiaForBrachialArteriogramsRetrograde: fhir.Coding;
        readonly AbscessOfHand: fhir.Coding;
        readonly LegalTerminationOfPregnancyComplicatedByMetabolicDisorder: fhir.Coding;
        readonly Glossoptosis: fhir.Coding;
        readonly LateEffectOfTraumaticAmputation: fhir.Coding;
        readonly AcuteLeftSidedHeartFailure: fhir.Coding;
        readonly InfectionCausedByCoenurosisSerialis: fhir.Coding;
        readonly SterylSulfateSulfohydrolaseDeficiency: fhir.Coding;
        readonly MaceratedSkin: fhir.Coding;
        readonly ContusionMultipleSitesOfTrunk: fhir.Coding;
        readonly CongenitalAbsenceOfLiverTotal: fhir.Coding;
        readonly MorphometricAnalysisNerve: fhir.Coding;
        readonly OverproductionOfGrowthHormone: fhir.Coding;
        readonly ExcisionOfLingula: fhir.Coding;
        readonly OsteospermumSpeciesPoisoning: fhir.Coding;
        readonly IncisionOfInnerEar: fhir.Coding;
        readonly LethalGlossopharyngealDefect: fhir.Coding;
        readonly Hidromeiosis: fhir.Coding;
        readonly RollingHiatusHernia: fhir.Coding;
        readonly ClosureOfScleralFistula: fhir.Coding;
        readonly RepairOfPeripheralNerveBySuturing: fhir.Coding;
        readonly FittingOfProsthesisOrProstheticDeviceOfUpperArm: fhir.Coding;
        readonly LeadbetterUrethralReconstruction: fhir.Coding;
        readonly AcademicProblem: fhir.Coding;
        readonly MonocephalusTripusDibrachius: fhir.Coding;
        readonly HeartValveDisorder: fhir.Coding;
        readonly ThrombophlebitisOfTorcularHerophili: fhir.Coding;
        readonly SeleniumMeasurementUrine: fhir.Coding;
        readonly ZancolliOperationForTendonTransferOfBiceps: fhir.Coding;
        readonly AnesthesiaForLensSurgery: fhir.Coding;
        readonly DeathDueToAssaultANDBattery: fhir.Coding;
        readonly ShuntOfLeftSubclavianToDescendingAortaByBlalockParkOperation: fhir.Coding;
        readonly NormalJugularVenousPressure: fhir.Coding;
        readonly WedgeOsteotomyOfTarsalsAndMetatarsals: fhir.Coding;
        readonly FunctionalDyspepsia: fhir.Coding;
        readonly TissueProcessingTechniqueRoutineEmbedCutAndStainPerAutopsy: fhir.Coding;
        readonly TransverseDeficiencyOfArm: fhir.Coding;
        readonly ErysophakeExtractionOfLens: fhir.Coding;
        readonly RemovalOfForeignBodyOfHipFromSubcutaneousTissue: fhir.Coding;
        readonly UnilateralIncisionOfFrontalSinusByTransorbitalApproachUnilateral: fhir.Coding;
        readonly IschiaticHerniaWithGangrene: fhir.Coding;
        readonly DiffuseEndocapillaryProliferativeGlomerulonephritis: fhir.Coding;
        readonly CongenitalMalformationOfAnteriorChamberOfEye: fhir.Coding;
        readonly DegeneratedEye: fhir.Coding;
        readonly ReleaseForDeQuervainTenosynovitisOfHand: fhir.Coding;
        readonly ThyroidGoiter: fhir.Coding;
        readonly Collision: fhir.Coding;
        readonly DiluteRussellViperVenomTime: fhir.Coding;
        readonly AbnormalPresenceOfHemoglobin: fhir.Coding;
        readonly JointInflammation: fhir.Coding;
        readonly CongenitalEventrationOfRightCrusOfDiaphragm: fhir.Coding;
        readonly SSGSplitSkinGraft: fhir.Coding;
        readonly CoproporphyrinIIIMeasurement: fhir.Coding;
        readonly OpenWoundOfThumbnailWithTendonInvolvement: fhir.Coding;
        readonly VHViralHepatitis: fhir.Coding;
        readonly ExposureToAttackByMammal: fhir.Coding;
        readonly RemovalOfForeignBodyOfCanthusByIncision: fhir.Coding;
        readonly CostosternoplastyForPectusExcavatumRepair: fhir.Coding;
        readonly Hyperlipoproteinemia: fhir.Coding;
        readonly SleepRhythmProblem: fhir.Coding;
        readonly ECEjectionClick: fhir.Coding;
        readonly BiopsyOfPerirenalTissue: fhir.Coding;
        readonly ReductionOfClosedIschialFracture: fhir.Coding;
        readonly Arteriospasm: fhir.Coding;
        readonly ContusionOfLabium: fhir.Coding;
        readonly InfectionByTrichuris: fhir.Coding;
        readonly DysplasiaOfVagina: fhir.Coding;
        readonly PRPPityriasisRubraPilaris: fhir.Coding;
        readonly StaticAtaxia: fhir.Coding;
        readonly ThrombectomyWithCatheterOfSubclavianArteryByNeckIncision: fhir.Coding;
        readonly InjuryOfHeartWithOpenWoundIntoThorax: fhir.Coding;
        readonly FamilialMultipleFactorDeficiencySyndromeTypeV: fhir.Coding;
        readonly BilateralRecurrentFemoralHerniaWithGangrene: fhir.Coding;
        readonly ExpectedBereavementDueToLifeEvent: fhir.Coding;
        readonly WardUrineDipStickTesting: fhir.Coding;
        readonly ScrotumManipulation: fhir.Coding;
        readonly RoutinePatientDispositionNoFollowUpPlanned: fhir.Coding;
        readonly MorquioSyndrome: fhir.Coding;
        readonly SuffocationByPressure: fhir.Coding;
        readonly EnamelPearls: fhir.Coding;
        readonly DelayedHypersensitivitySkinTestForStreptokinaseStreptodornase: fhir.Coding;
        readonly ExcisionOfLesionOfPharynx: fhir.Coding;
        readonly UltrasonicGuidanceForNeedleBiopsy: fhir.Coding;
        readonly FlashFlood: fhir.Coding;
        readonly PregnanetriolMeasurement: fhir.Coding;
        readonly ExcisionOfRedundantMucosaFromJejunostomy: fhir.Coding;
        readonly PeriodontalCyst: fhir.Coding;
        readonly PrematureBirthOfIdenticalTwinsBothStillborn: fhir.Coding;
        readonly RadiographyOfAdenoids: fhir.Coding;
        readonly TopicalApplicationOfToothMedicamentDesensitizingAgent: fhir.Coding;
        readonly CrohnDiseaseOfRectum: fhir.Coding;
        readonly EmbolizationOfThoracicArtery: fhir.Coding;
        readonly InnerEarConductiveHearingLoss: fhir.Coding;
        readonly LegalHistoryFindingRelatingToChild: fhir.Coding;
        readonly BlepharotomyWithDrainageOfAbscessOfEyelid: fhir.Coding;
        readonly AneurysmOfArteryOfNeck: fhir.Coding;
        readonly OpenBiopsyOfVertebralBodyOfThoracicRegion: fhir.Coding;
        readonly SubcutaneousEmphysema: fhir.Coding;
        readonly FindingOfPassiveRangeOfHipExtension: fhir.Coding;
        readonly ChiropracticApplicationOfIce: fhir.Coding;
        readonly BlisterOfCheekWithInfection: fhir.Coding;
        readonly RemovalOfForeignBodyFromFascia: fhir.Coding;
        readonly DuplicationOfIntestine: fhir.Coding;
        readonly SecondaryPeripheralNeuropathy: fhir.Coding;
        readonly DisorderOfPancreas: fhir.Coding;
        readonly EchographyOfThyroidAMode: fhir.Coding;
        readonly LateEffectOfOpenWoundOfExtremitiesWithoutTendonInjury: fhir.Coding;
        readonly NaturalDeath: fhir.Coding;
        readonly AneurysmectomyWithAnastomosisOfLowerLimbArtery: fhir.Coding;
        readonly TotalVitalCapacityMeasurement: fhir.Coding;
        readonly ExcisionalBiopsyOfScrotum: fhir.Coding;
        readonly Melanuria: fhir.Coding;
        readonly FailedAttemptedTerminationOfPregnancyWithAcuteNecrosisOfLiver: fhir.Coding;
        readonly ExcisionOfLesionOfFibula: fhir.Coding;
        readonly Blepharorrhaphy: fhir.Coding;
        readonly IncisionAndDrainageOfSubmentalSpaceByExtraoralApproach: fhir.Coding;
        readonly ABOIsoimmunizationInPregnancy: fhir.Coding;
        readonly CongenitalFecaliths: fhir.Coding;
        readonly WartLigation: fhir.Coding;
        readonly SutureOfLip: fhir.Coding;
        readonly UnilateralObstructedFemoralHernia: fhir.Coding;
        readonly TobramycinLevel: fhir.Coding;
        readonly ComprehensiveOrthodonticTreatmentPermanentDentitionForClassIMalocclusion: fhir.Coding;
        readonly Dressing: fhir.Coding;
        readonly NeutropenicTyphlitis: fhir.Coding;
        readonly MixedSensoryMotorPolyneuropathy: fhir.Coding;
        readonly NonDoseRelatedDrugInducedNeutropenia: fhir.Coding;
        readonly ClosedTraumaticPneumothorax: fhir.Coding;
        readonly IncisionAndDrainageOfRetroperitonealAbscess: fhir.Coding;
        readonly InfestationCausedByHaematopinus: fhir.Coding;
        readonly CoeurEnSabot: fhir.Coding;
        readonly FallInvolvingSportsEquipment: fhir.Coding;
        readonly TransplantationOfMuscle: fhir.Coding;
        readonly InjuryOfGastrointestinalTractWithOpenWoundIntoAbdominalCavity: fhir.Coding;
        readonly MentalDisorderInChildhood: fhir.Coding;
        readonly ExcisionOfArteryOfThoraxAndAbdomen: fhir.Coding;
        readonly ExcisionalBiopsyOfPhalangesOfFoot: fhir.Coding;
        readonly PlasticRepairWithLengthening: fhir.Coding;
        readonly LactateMeasurement: fhir.Coding;
        readonly SecondDegreeMurder: fhir.Coding;
        readonly ZikaVirusDisease: fhir.Coding;
        readonly PatientTransferInHospitalBedToBed: fhir.Coding;
        readonly MakingFosterBed: fhir.Coding;
        readonly ForcibleSexualAssault: fhir.Coding;
        readonly CerclageForRetinalReattachment: fhir.Coding;
        readonly BacterialColonyDensityTransparent: fhir.Coding;
        readonly NaturalDeathWithProbableCauseSuspected: fhir.Coding;
        readonly Cystopexy: fhir.Coding;
        readonly XLinkedPlacentalSterylSulfataseDeficiency: fhir.Coding;
        readonly HighOxygenAffinityHemoglobinPolycythemia: fhir.Coding;
        readonly Birth: fhir.Coding;
        readonly Proctitis: fhir.Coding;
        readonly AntibodyElutionFromRedBloodCells: fhir.Coding;
        readonly ArteriectomyOfThoracoabdominalAorta: fhir.Coding;
        readonly OperationOnSubmaxillaryGland: fhir.Coding;
        readonly FluorescencePolarizationImmunoassay: fhir.Coding;
        readonly ExcisionOfSpinalFacetJoint: fhir.Coding;
        readonly RemovalOfOsteocartilagenousLooseBodyFromJointStructures: fhir.Coding;
        readonly DuchenneMuscularDystrophyCarrierDetection: fhir.Coding;
        readonly IdiopathicInsomnia: fhir.Coding;
        readonly ContactWithSharpLeaves: fhir.Coding;
        readonly DeepThirdDegreeBurnOfLowerLimb: fhir.Coding;
        readonly AIHAWarmAutoimmuneHemolyticAnemia: fhir.Coding;
        readonly PartialExcisionOfEsophagus: fhir.Coding;
        readonly LeftAxisDeviationGreaterThan90DegreesByEKG: fhir.Coding;
        readonly CarrierDetectionMolecularGenetics: fhir.Coding;
        readonly StruckByExplosion: fhir.Coding;
        readonly AnesthesiaForProcedureOnArteriesOfLowerLegWithBypassGraft: fhir.Coding;
        readonly CongenitalAbsenceOfTrachea: fhir.Coding;
        readonly MRIOfPelvisProstateAndBladder: fhir.Coding;
        readonly InfectionCausedByMuellerius: fhir.Coding;
        readonly BoneImagingOfLimitedArea: fhir.Coding;
        readonly AcutePyelitisWithoutRenalMedullaryNecrosis: fhir.Coding;
        readonly AlphavirusDisease: fhir.Coding;
        readonly MonsterWithCranialAnomalies: fhir.Coding;
        readonly FoetalTachycardiaAffectingManagementOfMother: fhir.Coding;
        readonly AntiHumanGlobulinTestIndirectTiterNonGamma: fhir.Coding;
        readonly PhlebographyOfNeck: fhir.Coding;
        readonly LowerUrinaryTractInfection: fhir.Coding;
        readonly OophorectomyOfRemainingOvaryWithTube: fhir.Coding;
        readonly DistalSubtotalPancreatectomy: fhir.Coding;
        readonly FallInHome: fhir.Coding;
        readonly EmpyemaOfMastoid: fhir.Coding;
        readonly IncreasedStratumCorneumAdhesiveness: fhir.Coding;
        readonly UnilateralExcisionOfEpididymis: fhir.Coding;
        readonly VulvitisCircumscriptaPlasmacellularis: fhir.Coding;
        readonly InterstitialMastitisAssociatedWithChildbirth: fhir.Coding;
        readonly ImplantationOfElectronicStimulatorIntoPhrenicNerve: fhir.Coding;
        readonly LeDantecVirusDisease: fhir.Coding;
        readonly ClosedReductionOfFacialFractureExceptMandible: fhir.Coding;
        readonly RestorationResinTwoSurfacesPosteriorPermanent: fhir.Coding;
        readonly NonJudicialExecution: fhir.Coding;
        readonly ArthroscopyOfElbowWithExtensiveDebridement: fhir.Coding;
        readonly RemovalOfVascularGraftOrProsthesis: fhir.Coding;
        readonly Myrotheciotoxicosis: fhir.Coding;
        readonly MultipleVitaminDeficiencyDisease: fhir.Coding;
        readonly HassallHenleBodies: fhir.Coding;
        readonly CongenitalAnomalyOfMacula: fhir.Coding;
        readonly ConstructionOfPermanentColostomy: fhir.Coding;
        readonly DrainageOfCerebralVentricleByIncision: fhir.Coding;
        readonly DegenerativeSpondylolisthesis: fhir.Coding;
        readonly PlannedTracheostomy: fhir.Coding;
        readonly PercutaneousAspirationOfSpinalCordCyst: fhir.Coding;
        readonly ColdExposure: fhir.Coding;
        readonly FulgurationOfStomachLesion: fhir.Coding;
        readonly LumbosacralPlexusLesion: fhir.Coding;
        readonly Achillodynia: fhir.Coding;
        readonly SpecimenAliquoting: fhir.Coding;
        readonly RemovalOfVentricularReservoirWithSynchronousReplacement: fhir.Coding;
        readonly AnoxicBrainDamageDuringANDORResultingFromAProcedure: fhir.Coding;
        readonly CongenitalHepatomegaly: fhir.Coding;
        readonly Palinphrasia: fhir.Coding;
        readonly PeganumHarmalaPoisoning: fhir.Coding;
        readonly CarCrash: fhir.Coding;
        readonly ToothChattering: fhir.Coding;
        readonly SyphiliticMyocarditis: fhir.Coding;
        readonly FittingOfProsthesisOrProstheticDeviceOfLowerArm: fhir.Coding;
        readonly RepairOfTendonOfHandByGraftOrImplantOfMuscle: fhir.Coding;
        readonly AcquiredHydrocephalus: fhir.Coding;
        readonly Meningococcemia: fhir.Coding;
        readonly PartialUnilateralParesis: fhir.Coding;
        readonly ReplacementOfTransvenousAtrialAndVentricularPacemakerElectrodeLeads: fhir.Coding;
        readonly FoodAllergyDiet: fhir.Coding;
        readonly NonallopathicLesionOfCostovertebralRegion: fhir.Coding;
        readonly ReductionOfRetroversionOfUterusBySuppository: fhir.Coding;
        readonly Drowning: fhir.Coding;
        readonly RevisionOfSpinalPleurothecalShunt: fhir.Coding;
        readonly RootCanalTherapyAnteriorExcludingFinalRestoration: fhir.Coding;
        readonly ComplexPartialSeizure: fhir.Coding;
        readonly RotatorCuffRupture: fhir.Coding;
        readonly InfertileMaleSyndrome: fhir.Coding;
        readonly ArrestedHydrocephalus: fhir.Coding;
        readonly ParenteralChemotherapyForMalignantNeoplasm: fhir.Coding;
        readonly ConstructionOfWindow: fhir.Coding;
        readonly IntracranialPhlebectomyWithAnastomosis: fhir.Coding;
        readonly Bronchiolitis: fhir.Coding;
        readonly InsectBiteNonvenomousOfVaginaInfected: fhir.Coding;
        readonly ProstaticObstruction: fhir.Coding;
        readonly ArgyllRobertsonPupil: fhir.Coding;
        readonly UnilateralReconstructionOfBreastWithBipedicleTRAMFlapAndOppositeBreastReductionMastopexy: fhir.Coding;
        readonly ImplantationIntoPelvicRegion: fhir.Coding;
        readonly OperativeBlockAnesthesia: fhir.Coding;
        readonly VAL11pPartialMonosomySyndrome: fhir.Coding;
        readonly ChildConcubinage: fhir.Coding;
        readonly MacrodactyliaOfToes: fhir.Coding;
        readonly PosteriorSpinalCordotomy: fhir.Coding;
        readonly FallInvolvingPlaygroundEquipment: fhir.Coding;
        readonly MuscularAsthenopia: fhir.Coding;
        readonly InjectionIntoAnteriorChamberOfEye: fhir.Coding;
        readonly BoneHistomorphometryAluminumStain: fhir.Coding;
        readonly UnilateralDiagnosticRadiographicImagingWithContrastMedia: fhir.Coding;
        readonly AcquiredHypoprothrombinemia: fhir.Coding;
        readonly IncisionAndDrainageOfPenis: fhir.Coding;
        readonly CongenitalAnomalyOfUpperRespiratorySystem: fhir.Coding;
        readonly DelayedHypersensitivitySkinTestForStaphageLysate: fhir.Coding;
        readonly TibialPlateauChondromalacia: fhir.Coding;
        readonly EhlersDanlosSyndromeProcollagenProteinaseResistant: fhir.Coding;
        readonly HospitalReAdmission: fhir.Coding;
        readonly TripartitePlacenta: fhir.Coding;
        readonly InfestationByEstrus: fhir.Coding;
        readonly FothergillRepair: fhir.Coding;
        readonly DiseaseSuspected: fhir.Coding;
        readonly PartialRecentRetinalDetachmentWithMultipleDefects: fhir.Coding;
        readonly NormalPeakExpiratoryFlowRate: fhir.Coding;
        readonly CharcotMarieToothDiseaseTypeIC: fhir.Coding;
        readonly CongenitalMalformationOfTheEndocrineGlands: fhir.Coding;
        readonly ScaphoidHead: fhir.Coding;
        readonly ToxicologyTestingForOrganophosphateInsecticide: fhir.Coding;
        readonly DuplicationOfAnus: fhir.Coding;
        readonly DisabilityEvaluationImpairmentClass5: fhir.Coding;
        readonly VAL18pPartialTrisomySyndrome: fhir.Coding;
        readonly ClosedMultipleFracturesOfBothLowerLimbs: fhir.Coding;
        readonly OHOcularHypertension: fhir.Coding;
        readonly ImplantationOfOmmayaReservoir: fhir.Coding;
        readonly IntracardiacInjectionForCardiacResuscitation: fhir.Coding;
        readonly ParkinsonismCausedByDrug: fhir.Coding;
        readonly ComplicationOfInfusion: fhir.Coding;
        readonly NasalTuberculosis: fhir.Coding;
        readonly ExcisionOfLesionOfThoracicVein: fhir.Coding;
        readonly PhthisicalEye: fhir.Coding;
        readonly JudicialExecutionByFiringSquad: fhir.Coding;
        readonly ChronicVulvitis: fhir.Coding;
        readonly SuppurativePulpitis: fhir.Coding;
        readonly RuptureOfAorta: fhir.Coding;
        readonly ListeriaInfection: fhir.Coding;
        readonly VAL18qPartialMonosomySyndrome: fhir.Coding;
        readonly UrticariaNeonatorum: fhir.Coding;
        readonly SynovitisANDORTenosynovitisAssociatedWithAnotherDisease: fhir.Coding;
        readonly PoorPeripheralCirculation: fhir.Coding;
        readonly InternalEyeSign: fhir.Coding;
        readonly AneurysmectomyWithGraftReplacementByInterposition: fhir.Coding;
        readonly SacralSpinalCordInjuryWithoutBoneInjury: fhir.Coding;
        readonly SuperficialInjuryOfAnkleWithoutInfection: fhir.Coding;
        readonly PhlebitisOfSuperiorSagittalSinus: fhir.Coding;
        readonly BiopsyOfSoftTissueOfElbowAreaSuperficial: fhir.Coding;
        readonly ChronicPericoronitis: fhir.Coding;
        readonly PatientReferralForDrugAddictionRehabilitation: fhir.Coding;
        readonly ChronicGastrojejunalUlcerWithoutHemorrhageANDWithoutPerforation: fhir.Coding;
        readonly ClosedPosteriorDislocationOfElbow: fhir.Coding;
        readonly ConjugateGazeSpasm: fhir.Coding;
        readonly SuperficialForeignBodyOfAxillaWithoutMajorOpenWoundButWithInfection: fhir.Coding;
        readonly MirizziSyndrome: fhir.Coding;
        readonly InsertionOfBoneGrowthStimulatorIntoFemur: fhir.Coding;
        readonly ChordeeOfPenis: fhir.Coding;
        readonly ReductionOfIntussusceptionByLaparotomy: fhir.Coding;
        readonly IsosexualPrecociousPuberty: fhir.Coding;
        readonly UnilateralLossOfLabyrinthineReactivity: fhir.Coding;
        readonly DeepThirdDegreeBurnOfForearm: fhir.Coding;
        readonly AutoimmuneState: fhir.Coding;
        readonly ExcisionOfCuspOfTricuspidValve: fhir.Coding;
        readonly ClusterBPersonalityDisorder: fhir.Coding;
        readonly PregestationalDiabetesMellitusANDORImpairedGlucoseToleranceModifiedWhiteClassF: fhir.Coding;
        readonly RSISRepetitiveStrainInjurySyndrome: fhir.Coding;
        readonly ThirdDegreeBurnOfWristANDORHand: fhir.Coding;
        readonly HypertrophyOfScrotum: fhir.Coding;
        readonly AcardiacusAnceps: fhir.Coding;
        readonly Myometritis: fhir.Coding;
        readonly RebaseOfCompleteLowerDenture: fhir.Coding;
        readonly FactorVDeficiency: fhir.Coding;
        readonly BilateralLegArteriogram: fhir.Coding;
        readonly DestructionOfLesionOfSclera: fhir.Coding;
        readonly SubacuteCystitis: fhir.Coding;
        readonly VAL11qPartialMonosomySyndrome: fhir.Coding;
        readonly AnesthesiaForHerniaRepairInLowerAbdomen: fhir.Coding;
        readonly SubarachnoidHemorrhageFollowingInjuryWithoutOpenIntracranialWoundANDWithConcussion: fhir.Coding;
        readonly IncisionAndDrainageOfPerisplenicSpace: fhir.Coding;
        readonly LloydDaviesOperationAbdominoperinealResection: fhir.Coding;
        readonly HomogentisicAcidMeasurement: fhir.Coding;
        readonly ArnoldNerveReflexCoughSyndrome: fhir.Coding;
        readonly RepairOfNasolabialFistula: fhir.Coding;
        readonly AcrodermatitisChronicaAtrophicans: fhir.Coding;
        readonly CompleteSubmucousResectionOfTurbinate: fhir.Coding;
        readonly Cryopexy: fhir.Coding;
        readonly MusculoplastyOfHand: fhir.Coding;
        readonly OpenFractureOfMultipleSitesOfMetacarpus: fhir.Coding;
        readonly RemovalOfImplantOfCornea: fhir.Coding;
        readonly PulmonaryInhalationStudy: fhir.Coding;
        readonly OpenDislocationOfScapula: fhir.Coding;
        readonly GingivalSoftTissueRecession: fhir.Coding;
        readonly EarlyCongenitalSyphilis: fhir.Coding;
        readonly EndoscopicBrushBiopsyOfTrachea: fhir.Coding;
        readonly StructureOfAssociations: fhir.Coding;
        readonly SurgicalRepair: fhir.Coding;
        readonly HooverSign: fhir.Coding;
        readonly WaterTransportAccident: fhir.Coding;
        readonly AbnormalCompositionOfUrine: fhir.Coding;
        readonly ClubbingOfNail: fhir.Coding;
        readonly TVCongenitalTricuspidValveAbnormality: fhir.Coding;
        readonly TranspositionOfVulvarTissue: fhir.Coding;
        readonly VerbalParaphasia: fhir.Coding;
        readonly Bronchospasm: fhir.Coding;
        readonly ValvuloplastyOfPulmonaryValveInTotalRepairOfTetralogyOfFallot: fhir.Coding;
        readonly RepairOfSplenocolicFistula: fhir.Coding;
        readonly ChronicLithiumNephrotoxicity: fhir.Coding;
        readonly PartialCongenitalDuodenalObstruction: fhir.Coding;
        readonly AcuteHemorrhagicPancreatitis: fhir.Coding;
        readonly PersistentHyperphenylalaninemia: fhir.Coding;
        readonly ExclamationPointHair: fhir.Coding;
        readonly CongenitalAnomalyOfMaleGenitalSystem: fhir.Coding;
        readonly SlittingOfLacrimalCanaliculusForPassageOfTube: fhir.Coding;
        readonly CombinedMethylmalonicAcidemiaAndHomocystinuriaDueToDefectsInAdenosylcobalaminAndMethylcobalaminSynthesis: fhir.Coding;
        readonly RetroperitonealHerniaWithObstruction: fhir.Coding;
        readonly RemovalOfDeviceFromFemaleGenitalTract: fhir.Coding;
        readonly DigitalNerveInjury: fhir.Coding;
        readonly InfectionCausedBySetaria: fhir.Coding;
        readonly HeerfordtSyndrome: fhir.Coding;
        readonly FetalDeathFromAsphyxiaANDORAnoxiaBeforeOnsetOfLabor: fhir.Coding;
        readonly GangrenousErgotism: fhir.Coding;
        readonly FallInShower: fhir.Coding;
        readonly IncisionAndDrainageOfParapharyngealAbscessByExternalApproach: fhir.Coding;
        readonly SecondaryHypopituitarism: fhir.Coding;
        readonly MakingOrthopedicBed: fhir.Coding;
        readonly TenPreviousInducedTerminationsOfPregnancy: fhir.Coding;
        readonly CystoceleAffectingPregnancy: fhir.Coding;
        readonly Suicide: fhir.Coding;
        readonly BSBloomSyndrome: fhir.Coding;
        readonly MethylatableChemotaxisProteinMCPReceptorMeasurement: fhir.Coding;
        readonly VenographyOfVenaCava: fhir.Coding;
        readonly AxenfeldSchurenbergSyndrome: fhir.Coding;
        readonly UnilateralLymphangiographyOfUpperExtremity: fhir.Coding;
        readonly SevereBipolarDisorderWithPsychoticFeatures: fhir.Coding;
        readonly DecorticationOfOvary: fhir.Coding;
        readonly UnilateralIncompleteCleftPalate: fhir.Coding;
        readonly TBUrogenitalTuberculosis: fhir.Coding;
        readonly AutopsyGrossAndMicroscopicExaminationStillbornOrNewbornWithoutCentralNervousSystem: fhir.Coding;
        readonly UnilateralRepairOfFemoralHerniaWithProsthesisOrGraft: fhir.Coding;
        readonly AllergicHeadache: fhir.Coding;
        readonly ManipulationOfSpinalMeninges: fhir.Coding;
        readonly ApplicationOfKirschnerWire: fhir.Coding;
        readonly RepairOfMalunionOfTibia: fhir.Coding;
        readonly IllegalTerminationOfPregnancyWithRenalTubularNecrosis: fhir.Coding;
        readonly OpenReductionOfOpenElbowDislocation: fhir.Coding;
        readonly InsertionOfMoldIntoVagina: fhir.Coding;
        readonly ComplicationOfAdministrativeProcedure: fhir.Coding;
        readonly IndianaMarylandTypeAmyloidPolyneuropathy: fhir.Coding;
        readonly AccidentalDeathInPublicPlace: fhir.Coding;
        readonly RocioVirusDisease: fhir.Coding;
        readonly Spherophakia: fhir.Coding;
        readonly ExplorationOfUpperLimbArtery: fhir.Coding;
        readonly ExcisionOfTumorOfAnkleAreaDeepIntramuscular: fhir.Coding;
        readonly OppenheimGait: fhir.Coding;
        readonly BlanchingOfSkin: fhir.Coding;
        readonly CoachInSportsActivityAccident: fhir.Coding;
        readonly MigraineWithAura: fhir.Coding;
        readonly CyanideLevel: fhir.Coding;
        readonly JuvenileMyopathyANDLactateAcidosis: fhir.Coding;
        readonly MultipleFracturesOfUpperANDLowerLimbs: fhir.Coding;
        readonly AbnormalGastricSecretionRegulation: fhir.Coding;
        readonly SyphiliticPunchedOutUlcer: fhir.Coding;
        readonly NorepinephrineMeasurementSupine: fhir.Coding;
        readonly NeurolysisOfTrigeminalNerve: fhir.Coding;
        readonly MouthcareProcedure: fhir.Coding;
        readonly UlcerativeStomatitis: fhir.Coding;
        readonly RemovalOfForeignBodyOfScleraWithoutUseOfMagnet: fhir.Coding;
        readonly PotterObstetricalVersionWithExtraction: fhir.Coding;
        readonly TenolysisOfFlexorTendonOfForearm: fhir.Coding;
        readonly DecompressionFasciotomyOfWristFlexorAndExtensorCompartment: fhir.Coding;
        readonly RestorationInlayCompositeResinOneSurfaceLaboratoryProcessed: fhir.Coding;
        readonly MacLeodQuoteSUnilateralEmphysema: fhir.Coding;
        readonly IridencleisisAndIridotasis: fhir.Coding;
        readonly AnastomosisOfEsophagusAntesternalOrAntethoracicWithInsertionOfProsthesis: fhir.Coding;
        readonly BlisterOfGroinWithoutInfection: fhir.Coding;
        readonly FallFromCliff: fhir.Coding;
        readonly IatrogenicDeath: fhir.Coding;
        readonly StruckByMissile: fhir.Coding;
        readonly SeenByCasualtyService: fhir.Coding;
        readonly LigationOfArteryOfLowerLimb: fhir.Coding;
        readonly IncisionOfPelvirectalTissue: fhir.Coding;
        readonly ExcisionOfCystOfBronchus: fhir.Coding;
        readonly ClosedReductionOfFractureOfFoot: fhir.Coding;
        readonly ExcisionOfSubcutaneousTumorOfExtremities: fhir.Coding;
        readonly ExposureToVibration: fhir.Coding;
        readonly AnteriorResectionOfRectum: fhir.Coding;
        readonly TotalAbdominalColectomyWithIleostomy: fhir.Coding;
        readonly HospitalAdmissionTransferFromOtherHospitalOrHealthCareFacility: fhir.Coding;
        readonly Chemopallidectomy: fhir.Coding;
        readonly UnilateralInsertionOfBreastProsthesis: fhir.Coding;
        readonly CreationOfVentriculoatrialShunt: fhir.Coding;
        readonly Coreoplasty: fhir.Coding;
        readonly DecompressionOfTendonOfHand: fhir.Coding;
        readonly EpiphysiodesisOfDistalRadius: fhir.Coding;
        readonly CareRelatingToReproductionAndPregnancy: fhir.Coding;
        readonly ClosedCondylotomyOfMandible: fhir.Coding;
        readonly CauterizationOfScleraWithIridectomy: fhir.Coding;
        readonly CoproporphyrinIsomersSeriesIAndIIIUrine: fhir.Coding;
        readonly SquamousMetaplasiaOfProstateGland: fhir.Coding;
        readonly UnilateralWedgeResectionOfOvary: fhir.Coding;
        readonly Radioimmunoassay: fhir.Coding;
        readonly ApicalPulseTaking: fhir.Coding;
        readonly TakeDownOfArterialAnastomosis: fhir.Coding;
        readonly ClosedReductionOfCoxofemoralJointDislocationWithSplint: fhir.Coding;
        readonly DenkerOperationForRadicalMaxillaryAntrotomy: fhir.Coding;
        readonly LigationOfFallopianTubesByAbdominalApproach: fhir.Coding;
        readonly RemovalOfInflatablePenileProsthesisWithPumpReservoirAndCylinders: fhir.Coding;
        readonly UnilateralTraumaticAmputationOfLegAtORAboveKneeWithComplication: fhir.Coding;
        readonly DiagnosticProcedureOnPhalangesOfFoot: fhir.Coding;
        readonly CatheterizationOfBronchus: fhir.Coding;
        readonly OldLacerationOfPelvicFloorMuscle: fhir.Coding;
        readonly ExcisionOfLesionFromSphenoidSinus: fhir.Coding;
        readonly MedicalProcedureOnTheNervousSystem: fhir.Coding;
        readonly GlutathioneMeasurement: fhir.Coding;
        readonly ContactWithPlants: fhir.Coding;
        readonly IdentificationOfRotavirusAntigenInFeces: fhir.Coding;
        readonly TransplantationOfArteryOfUpperExtremity: fhir.Coding;
        readonly PercutaneousBiopsyOfMuscle: fhir.Coding;
        readonly AlphaNaphthylButyrateStainMethodBloodOrBoneMarrow: fhir.Coding;
        readonly VitreousTouchSyndrome: fhir.Coding;
        readonly ColonyFormingUnitGranulocyteMonocyteErythroidMegakaryocyteAssay: fhir.Coding;
        readonly Sinking: fhir.Coding;
        readonly PartialExcisionOfCalcaneus: fhir.Coding;
        readonly RemovalOfGardnerWellsTongsFromSkull: fhir.Coding;
        readonly EndoscopyAndPhotography: fhir.Coding;
        readonly PsychologicCognitiveTestingAndAssessment: fhir.Coding;
        readonly MurderOfStranger: fhir.Coding;
        readonly ContactWithPowerTool: fhir.Coding;
        readonly LipoproteinElectrophoresis: fhir.Coding;
        readonly IrrigationOfWoundCatheterOfIntegument: fhir.Coding;
        readonly UnilateralDestructionOfFallopianTube: fhir.Coding;
        readonly MycobacteriaCulture: fhir.Coding;
        readonly EsophagoentericAnastomosisIntrathoracic: fhir.Coding;
        readonly UnilateralExcisionOfOvotestis: fhir.Coding;
        readonly CryotherapyOfSubcutaneousTissue: fhir.Coding;
        readonly Incudostapediopexy: fhir.Coding;
        readonly JetVentilationProcedure: fhir.Coding;
        readonly InsertionOfOcularImplantFollowingOrSecondaryToEnucleation: fhir.Coding;
        readonly ColporrhaphyForRepairOfUrethrocele: fhir.Coding;
        readonly ReductionOfTorsionOfSpermaticCord: fhir.Coding;
        readonly UnilateralReconstructionOfBreastWithBipedicleTRAMFlap: fhir.Coding;
        readonly OperationOnSublingualGland: fhir.Coding;
        readonly GravesQuoteDiseaseWithPretibialMyxedemaANDWithThyrotoxicCrisis: fhir.Coding;
        readonly FallThroughWindow: fhir.Coding;
        readonly MicrobialIdentificationTest: fhir.Coding;
        readonly Cyclone: fhir.Coding;
        readonly ReconstructionOfDiaphragm: fhir.Coding;
        readonly AntibodyIdentificationRedBloodCellAntibodyPanelEnzyme2StageTechniqueIncludingAntiHumanGlobulin: fhir.Coding;
        readonly IncisionOfLabialFrenum: fhir.Coding;
        readonly ShowerHydrotherapy: fhir.Coding;
        readonly ExcisionOfSmallIntestineForInterposition: fhir.Coding;
        readonly AnesthesiaForCesareanSection: fhir.Coding;
        readonly OvarianBiopsy: fhir.Coding;
        readonly UnilateralImagingOfBronchusWithPositiveContrastMedia: fhir.Coding;
        readonly AcuteVascularInsufficiency: fhir.Coding;
        readonly RevisionOfAnastomosisOfLargeIntestine: fhir.Coding;
        readonly ExtracapsularExtractionOfLensWithIridectomy: fhir.Coding;
        readonly FibroidMyocarditis: fhir.Coding;
        readonly FerritinLevel: fhir.Coding;
        readonly Proctostomy: fhir.Coding;
        readonly ConstructionOfSigmoidBladder: fhir.Coding;
        readonly Parasuicide: fhir.Coding;
        readonly RenalHomotransplantationWithUnilateralRecipientNephrectomy: fhir.Coding;
        readonly UpperRespiratoryTractHypersensitivityReaction: fhir.Coding;
        readonly EthchlorvynolMeasurement: fhir.Coding;
        readonly SerumProteinElectrophoresis: fhir.Coding;
        readonly DilationOfAnalSphincterUnderNonlocalAnesthesia: fhir.Coding;
        readonly Landslide: fhir.Coding;
        readonly Blizzard: fhir.Coding;
        readonly TreatmentPlanningForTeletherapy: fhir.Coding;
        readonly StruckByBuildingCollapse: fhir.Coding;
        readonly Manslaughter: fhir.Coding;
        readonly LocalPerfusionOfKidney: fhir.Coding;
        readonly RepairOfThoracogastricFistula: fhir.Coding;
        readonly UrobilinogenMeasurement48HourFeces: fhir.Coding;
        readonly Salpingography: fhir.Coding;
        readonly AnestheticDeath: fhir.Coding;
        readonly ExcisionOfLesionOfTonsil: fhir.Coding;
        readonly CervicalSpinalFusionForPseudoarthrosis: fhir.Coding;
        readonly ClosedTraumaticDislocationOfThirdCervicalVertebra: fhir.Coding;
        readonly ExtracorporealPerfusion: fhir.Coding;
        readonly Venography: fhir.Coding;
        readonly ReplacementOfCochlearProsthesisMultipleChannels: fhir.Coding;
        readonly UnexpectedDeath: fhir.Coding;
        readonly LiverOperation: fhir.Coding;
        readonly AnesthesiaForEndoscopicProcedureOnLowerExtremity: fhir.Coding;
        readonly OsteoplastyOfCraniumWithFlapOfBone: fhir.Coding;
        readonly FallDownEmbankment: fhir.Coding;
        readonly CardiacCatheterizationLeftHeartRetrogradePercutaneous: fhir.Coding;
        readonly IschemicLimbExerciseWithElectromyographyAndLacticAcidDetermination: fhir.Coding;
        readonly AirCrash: fhir.Coding;
        readonly Battery: fhir.Coding;
        readonly UndeterminedMannerOfDeathNaturalCausesSuspected: fhir.Coding;
        readonly DrowningInFreshWater: fhir.Coding;
        readonly PonticResinWithHighNobleMetal: fhir.Coding;
        readonly DirectLaryngoscopyWithBiopsy: fhir.Coding;
        readonly AldosteroneMeasurementStandingNormalSaltDiet: fhir.Coding;
        readonly LysergicAcidDiethylamideMeasurement: fhir.Coding;
        readonly SemenAnalysisPresenceAndMotilityOfSperm: fhir.Coding;
        readonly CornealGluing: fhir.Coding;
        readonly LabialVeneerPorcelainLaminateLaboratory: fhir.Coding;
        readonly GraftToHairBearingSkin: fhir.Coding;
        readonly AsphyxiationByEnvironmentalToxicGas: fhir.Coding;
        readonly AndrogenDependentHirsutism: fhir.Coding;
        readonly UnilateralLymphangiographyOfLowerExtremity: fhir.Coding;
        readonly ExternalCephalicVersionWithTocolysis: fhir.Coding;
        readonly InstantaneousDeath: fhir.Coding;
        readonly UnisceptSystemTest: fhir.Coding;
        readonly RadicalOrbitomaxillectomy: fhir.Coding;
        readonly DeathByImmolation: fhir.Coding;
        readonly ReductionOfClosedTraumaticHipDislocationWithAnesthesia: fhir.Coding;
        readonly PeripheralVascularDiseaseStudy: fhir.Coding;
        readonly EndoscopyOfRenalPelvis: fhir.Coding;
        readonly UltrasoundPeripheralImagingRealTimeScan: fhir.Coding;
        readonly FT4FreeThyroxineLevel: fhir.Coding;
        readonly Epiglottidectomy: fhir.Coding;
        readonly WedgeOsteotomyOfPelvicBone: fhir.Coding;
        readonly AnesthesiaForProcedureOnPericardiumWithPumpOxygenator: fhir.Coding;
        readonly NeedlingOfLensForCataract: fhir.Coding;
        readonly RadiographyOfChestWall: fhir.Coding;
        readonly Incest: fhir.Coding;
        readonly DiagnosticProcedureOnScapula: fhir.Coding;
        readonly UnilateralImagingOfCoronaryArteryBypassGraft: fhir.Coding;
        readonly UnilateralTraumaticAmputationBelowElbowWithoutComplication: fhir.Coding;
        readonly ExcisionOfLesionOfAnkleJoint: fhir.Coding;
        readonly ManualReductionOfRectalHemorrhoids: fhir.Coding;
        readonly CommunicationEnhancementSpeechDeficit: fhir.Coding;
        readonly SpecialtyClinicAdmission: fhir.Coding;
        readonly ExcisionOfPressureUlcer: fhir.Coding;
        readonly DivisionOfThoracicArtery: fhir.Coding;
        readonly ForeignBodyInHypopharynx: fhir.Coding;
        readonly AssistedSuicide: fhir.Coding;
        readonly UnilateralCompleteParalysisOfVocalCords: fhir.Coding;
        readonly ThromboendarterectomyWithGraftOfRenalArtery: fhir.Coding;
        readonly MultipleAggregation: fhir.Coding;
        readonly TotalBodyPerfusion: fhir.Coding;
        readonly OsteotomyOfShaftOfFemurWithFixation: fhir.Coding;
        readonly ArthrotomyForSynovectomyOfGlenohumeralJoint: fhir.Coding;
        readonly CellFusion: fhir.Coding;
        readonly SurgicalTreatmentOfMissedMiscarriageOfSecondTrimester: fhir.Coding;
        readonly Lightning: fhir.Coding;
        readonly CongenitalBentNose: fhir.Coding;
        readonly UnilateralRecurrentInguinalHerniaWithGangreneANDObstruction: fhir.Coding;
        readonly ExcisionOfLesionOfLacrimalGlandByFrontalApproach: fhir.Coding;
        readonly IntraoperativeDeath: fhir.Coding;
        readonly ThreeDimensionalUltrasoundImagingOfHeart: fhir.Coding;
        readonly UnilateralInguinalHernia: fhir.Coding;
        readonly LateralFasciotomy: fhir.Coding;
        readonly JustifiableHomicide: fhir.Coding;
        readonly SutureOfAdenoidFossa: fhir.Coding;
        readonly TransplantationOfPeripheralVein: fhir.Coding;
        readonly BreakpointClusterRegionAnalysis: fhir.Coding;
        readonly TotalBileAcidsMeasurement: fhir.Coding;
        readonly AdrenalArteryLigation: fhir.Coding;
        readonly Assault: fhir.Coding;
        readonly BilateralDestructionOfFallopianTubes: fhir.Coding;
        readonly SpontaneousFetalEvolutionRoedererQuoteSMethod: fhir.Coding;
        readonly ManualReductionOfClosedFractureOfProximalEndOfUlna: fhir.Coding;
        readonly UnilateralParalysisOfTongue: fhir.Coding;
        readonly OperationOnOropharynx: fhir.Coding;
        readonly IncisionAndDrainageOfLudwigAngina: fhir.Coding;
        readonly IncisionAndDrainageOfDeepHematomaOfThighRegion: fhir.Coding;
        readonly DXTRadiotherapy: fhir.Coding;
        readonly OpenPulmonaryValveCommissurotomyWithInflowOcclusion: fhir.Coding;
        readonly ClosedOsteotomyOfMandibularRamus: fhir.Coding;
        readonly RadicalAmputationOfPenisWithBilateralPelvicLymphadenectomy: fhir.Coding;
        readonly AdministrationOfDermatologicFormulation: fhir.Coding;
        readonly ShorteningOfAchillesTendon: fhir.Coding;
        readonly RepairOfVesicocolicFistula: fhir.Coding;
        readonly PostoperativeDeath: fhir.Coding;
        readonly TrocarBiopsy: fhir.Coding;
        readonly NicotineMeasurement: fhir.Coding;
        readonly ProphylacticTreatmentOfTibiaWithMethylMethacrylate: fhir.Coding;
        readonly RepairOfEndocardialCushionDefect: fhir.Coding;
        readonly ClosureOfUreterovesicovaginalFistula: fhir.Coding;
        readonly DeathInLessThan24HoursFromOnsetOfSymptoms: fhir.Coding;
        readonly LeukocytePoorBloodPreparation: fhir.Coding;
        readonly GlissonianCirrhosis: fhir.Coding;
        readonly StressBreaker: fhir.Coding;
        readonly ExcisionOfPartOfFrontalCortex: fhir.Coding;
        readonly SuicideAttemptByAdequateMeans: fhir.Coding;
        readonly ConjunctivalArgyrosis: fhir.Coding;
        readonly ArtificialVoiceRehabilitation: fhir.Coding;
        readonly ExplorationOfParathyroidWithMediastinalExplorationBySternalSplitApproach: fhir.Coding;
        readonly AntibodyToSingleAndDoubleStrandedDNAMeasurement: fhir.Coding;
        readonly ManipulationOfThoracicArtery: fhir.Coding;
        readonly InjectionOfFallopianTube: fhir.Coding;
        readonly DestructionOfLesionOfLiver: fhir.Coding;
        readonly LysisOfAdhesionsOfTendonOfHand: fhir.Coding;
        readonly AmylaseMeasurementPeritonealFluid: fhir.Coding;
        readonly UnilateralCryptorchiectomy: fhir.Coding;
        readonly DiagnosticProcedureOnNipple: fhir.Coding;
        readonly CholedochostomyWithTransduodenalSphincteroplasty: fhir.Coding;
        readonly PercutaneousTransluminalAngioplasty: fhir.Coding;
        readonly SkeletalXRayOfLowerLimb: fhir.Coding;
        readonly ExcisionOfCervicalRibForOutletCompressionSyndromeWithSympathectomy: fhir.Coding;
        readonly Transfusion: fhir.Coding;
        readonly OperativeProcedureOnLowerLeg: fhir.Coding;
        readonly CoreNeedleBiopsyOfThymus: fhir.Coding;
        readonly GraftOfLymphaticStructure: fhir.Coding;
        readonly SerologicTestForRickettsiaConorii: fhir.Coding;
        readonly RemovalOfProsthesisFromFallopianTube: fhir.Coding;
        readonly BreastReconstructionUnilateralWithSinglePedicleTRAMFlap: fhir.Coding;
        readonly Slipping: fhir.Coding;
        readonly HypersecretionOfCalcitonin: fhir.Coding;
        readonly ExposureToHumanStampede: fhir.Coding;
        readonly SelectPictureAudiometry: fhir.Coding;
        readonly VAL13pPartialTrisomySyndrome: fhir.Coding;
        readonly SerologicTestForBlastomyces: fhir.Coding;
        readonly DelayedSutureOfTendonOfHand: fhir.Coding;
        readonly DiagnosticProcedureOnRadius: fhir.Coding;
        readonly UnilateralRepairOfDirectInIndirectInguinalHernia: fhir.Coding;
        readonly IncisionOfIntracranialVein: fhir.Coding;
        readonly ExcisionOfLesionOfAdenoids: fhir.Coding;
        readonly IncisionAndExplorationOfAbdominalWall: fhir.Coding;
        readonly RestorationInlayPorcelainCeramicPerToothInAdditionToInlay: fhir.Coding;
        readonly OpenReductionOfFractureOfPhalangesOfFoot: fhir.Coding;
        readonly NeonatalDeathOfFemaleWithin7DaysWorldHealthOrganization: fhir.Coding;
        readonly ArthrodesisOfCarpometacarpalJointOfDigitsOtherThanThumb: fhir.Coding;
        readonly VAL2pPartialTrisomySyndrome: fhir.Coding;
        readonly RepairOfCarotidBody: fhir.Coding;
        readonly UnilateralImagingOfCervicalCarotidArtery: fhir.Coding;
        readonly DicentraSpeciesPoisoning: fhir.Coding;
        readonly DirectLaryngoscopyWithArytenoidectomyWithOperatingMicroscope: fhir.Coding;
        readonly Parasuicide_55554002: fhir.Coding;
        readonly ManuallyAssistedSpontaneousDelivery: fhir.Coding;
        readonly AccidentalPhysicalContact: fhir.Coding;
        readonly UnilateralTraumaticAmputationOfLegWithoutComplication: fhir.Coding;
        readonly ArthrotomyForInfectionWithExplorationAndDrainageOfCarpometacarpalJoint: fhir.Coding;
        readonly ExcisionOfLesionOfAortaWithEndToEndAnastomosis: fhir.Coding;
        readonly IncisionOfKidneyPelvis: fhir.Coding;
        readonly UnilateralAgenesisOfKidney: fhir.Coding;
        readonly AminolevulinicAcidDehydrataseMeasurement: fhir.Coding;
        readonly ExcisionOfVaricoseVein: fhir.Coding;
        readonly UnilateralObstructedInguinalHernia: fhir.Coding;
        readonly ExcretionMeasurement: fhir.Coding;
        readonly NeonatalDeathOfFemaleWithin4WeeksUnitedStatesOfAmerica: fhir.Coding;
        readonly OsteoplastyOfTibia: fhir.Coding;
        readonly UnilateralEpididymovasostomy: fhir.Coding;
        readonly ExcisionOfMalignantLesionOfSkinOfExtremities: fhir.Coding;
        readonly Nystagmus: fhir.Coding;
        readonly FallFromTable: fhir.Coding;
        readonly OpenBiopsyOfBronchus: fhir.Coding;
        readonly UnilateralTraumaticAmputationAtORAboveElbowWithoutComplication: fhir.Coding;
        readonly FistulectomyOfBone: fhir.Coding;
        readonly CarbohydrateMeasurement: fhir.Coding;
        readonly SurgicalRepairAndRevisionOfShunt: fhir.Coding;
        readonly ArylsulfataseAMeasurement: fhir.Coding;
        readonly PhlebectomyOfVaricoseVeinOfHeadAndNeck: fhir.Coding;
        readonly PortableElectroencephalogramAwakeAndAsleepWithStimulation: fhir.Coding;
        readonly MagnetExtractionOfForeignBodyFromCiliaryBody: fhir.Coding;
        readonly HabitDisorder: fhir.Coding;
        readonly RemovalOfForeignBodyFromOvary: fhir.Coding;
        readonly IncisionOfSeminalVesicle: fhir.Coding;
        readonly CrisisInterventionWithFollowUp: fhir.Coding;
        readonly FallOnSnow: fhir.Coding;
        readonly VaccinationForArthropodBorneViralEncephalitis: fhir.Coding;
        readonly AccidentInvolvingLandTransportVehicle: fhir.Coding;
        readonly FHFamilyHistory: fhir.Coding;
        readonly RepairOfEyebrow: fhir.Coding;
        readonly SurgicalReanastomosisOfColon: fhir.Coding;
        readonly RemovalOfEpicardialElectrodes: fhir.Coding;
        readonly AnoscopyForRemovalOfForeignBody: fhir.Coding;
        readonly HemosiderinQuantitativeMeasurement: fhir.Coding;
        readonly FluorescentIdentificationOfAntiNuclearAntibody: fhir.Coding;
        readonly OilSpill: fhir.Coding;
        readonly BiopsyOfCulDeSac: fhir.Coding;
        readonly BenzodiazepineMeasurement: fhir.Coding;
        readonly ExcisionAmpullaOfVaterWithReimplantationOfCommonDuct: fhir.Coding;
        readonly OsteoplastyOfRadiusAndUlnaShortening: fhir.Coding;
        readonly UnilateralVasectomyForContraception: fhir.Coding;
        readonly PrimaryRepairOfCleftLipUnilateralPartial: fhir.Coding;
        readonly AccidentWhileEngagedInSportsActivity: fhir.Coding;
        readonly Blepharotomy: fhir.Coding;
        readonly FallFromBridge: fhir.Coding;
        readonly FlexorplastyOfElbow: fhir.Coding;
        readonly OperationOnNasalSeptum: fhir.Coding;
        readonly ForensicAutopsy: fhir.Coding;
        readonly ElevationOfBoneFragmentsOfOrbitOfSkullWithDebridement: fhir.Coding;
        readonly LysisOfAdhesionsOfIntestines: fhir.Coding;
        readonly ExcisionOfExternalThromboticHemorrhoid: fhir.Coding;
        readonly RevisionOfTracheostomyScar: fhir.Coding;
        readonly UnilateralPosteriorVestibuloplasty: fhir.Coding;
        readonly FenestrationOfInnerEarInitial: fhir.Coding;
        readonly SelectiveVagotomyWithPyloroplastyAndGastrostomy: fhir.Coding;
        readonly LaboratoryReportingFax: fhir.Coding;
        readonly FlocculationTest: fhir.Coding;
        readonly LigationDivisionAndCompleteStrippingOfLongAndShortSaphenousVeins: fhir.Coding;
        readonly DiagnosticRadiographyLeft: fhir.Coding;
        readonly PartialOstectomyOfThoraxRibsOrSternum: fhir.Coding;
        readonly EmulsificationProcedure: fhir.Coding;
        readonly DiagnosticRadiographyOfToes: fhir.Coding;
        readonly StrikingAgainstOrBumpedIntoByAnotherPerson: fhir.Coding;
        readonly ComplementMediatedCytotoxicityAssay: fhir.Coding;
        readonly ContactDermatitisDueToPrimrose: fhir.Coding;
        readonly OpenReductionOfDislocationOfToe: fhir.Coding;
        readonly PostpartumMaternalDeath: fhir.Coding;
        readonly TertiaryClosureOfAbdominalWall: fhir.Coding;
        readonly ClinicalExamination: fhir.Coding;
        readonly ExposureToAttackByAmphibian: fhir.Coding;
        readonly MastoidAntrotomy: fhir.Coding;
        readonly MethylRedTest: fhir.Coding;
        readonly RemovalOfScribnerShunt: fhir.Coding;
        readonly CongenitalAneurysmOfAnteriorCommunicatingArtery: fhir.Coding;
        readonly HistoryAndPhysicalExaminationComplete: fhir.Coding;
        readonly IncisionAndDrainageOfHematomaOfWrist: fhir.Coding;
        readonly SnowStorm: fhir.Coding;
        readonly MaternalMortality: fhir.Coding;
        readonly CardiacMonitorRemoval: fhir.Coding;
        readonly UnilateralPelvicLymphangiography: fhir.Coding;
        readonly GanglandStyleHomicide: fhir.Coding;
        readonly ConsultationForHearingAndOrSpeechProblem: fhir.Coding;
        readonly StruckByCaveIn: fhir.Coding;
        readonly PremenstrualDysphoricDisorder: fhir.Coding;
        readonly DivisionOfBloodVesselsOfCornea: fhir.Coding;
        readonly RemovalOfForeignBodyFromElbowAreaDeep: fhir.Coding;
        readonly IncisionAndDrainageOfAxilla: fhir.Coding;
        readonly UnilateralImagingOfPulmonaryArtery: fhir.Coding;
        readonly RepairOfSpermaticCord: fhir.Coding;
        readonly NonSensitizedSpontaneousSheepErythrocyteBindingERosette: fhir.Coding;
        readonly PersistentPneumothorax: fhir.Coding;
        readonly MidtarsalArthrodesisMultiple: fhir.Coding;
        readonly GasLiquidChromatographyFlamePhotometricType: fhir.Coding;
        readonly DrainageOfCerebralSubarachnoidSpaceByAspiration: fhir.Coding;
        readonly RadicalDissectionOfGroin: fhir.Coding;
        readonly Pyromania: fhir.Coding;
        readonly UnilateralSimpleFemoralHernia: fhir.Coding;
        readonly TransplantationOfVitreousByAnteriorApproach: fhir.Coding;
        readonly MagneticResonanceImagingOfChest: fhir.Coding;
        readonly EndoscopyOfLargeIntestine: fhir.Coding;
        readonly RossRiverFever: fhir.Coding;
        readonly LaparoscopicAppendectomy: fhir.Coding;
        readonly NeonatalDeathOfMaleWithin7DaysWHO: fhir.Coding;
        readonly RemovalOfCoronaryArteryObstructionByPercutaneousTransluminalBalloonWithThrombolyticAgent: fhir.Coding;
        readonly AugmentationOfOutflowTractOfPulmonaryValve: fhir.Coding;
        readonly Synchondrotomy: fhir.Coding;
        readonly ChartAbstracting: fhir.Coding;
        readonly VenographyOfAdrenalUnilateral: fhir.Coding;
        readonly FallWhileBeingCarried: fhir.Coding;
        readonly KanamycinMeasurement: fhir.Coding;
        readonly Panniculotomy: fhir.Coding;
        readonly DecreasedVitalCapacity: fhir.Coding;
        readonly AngiographyOfUpperExtremityArteriesUnilateral: fhir.Coding;
        readonly PerforationOfFootplate: fhir.Coding;
        readonly AspirationOfNasalSinusByPuncture: fhir.Coding;
        readonly SpasticAphonia: fhir.Coding;
        readonly FenestrationOfStapesFootplateWithVeinGraft: fhir.Coding;
        readonly SubduralTapThroughFontanelInfantInitial: fhir.Coding;
        readonly LocalDestructionOfLesionOfBonyPalate: fhir.Coding;
        readonly AortocoronaryArteryBypassGraftRepeated: fhir.Coding;
        readonly ChangeOfGastrostomyTube: fhir.Coding;
        readonly FitzgeraldFactorAssay: fhir.Coding;
        readonly ElectromyographyCranialNerveSuppliedMusclesUnilateral: fhir.Coding;
        readonly DiagnosticRadiographyOfAbdomenObliqueStandard: fhir.Coding;
        readonly SurgicalExposureOfImpactedOrUneruptedToothToAidEruption: fhir.Coding;
        readonly FRAXAFragileXSyndrome: fhir.Coding;
        readonly LymphokineAssay: fhir.Coding;
        readonly DiabeticEducation: fhir.Coding;
        readonly RepairOfHeartSeptumWithProsthesis: fhir.Coding;
        readonly ChondrectomyOfSemilunarCartilageOfKnee: fhir.Coding;
        readonly ObstructionDueToForeignBodyAccidentallyLeftInOperativeWoundANDORBodyCavityDuringAProcedure: fhir.Coding;
        readonly EndoscopicRetrogradeCholangiopancreatographyWithBiopsy: fhir.Coding;
        readonly GalactoseMeasurement: fhir.Coding;
        readonly SensorimotorDisorderOfEyelid: fhir.Coding;
        readonly ExcisionOfLesionOfCapsuleOfToes: fhir.Coding;
        readonly OsteoclasisOfClavicle: fhir.Coding;
        readonly Nephropyeloureterostomy: fhir.Coding;
        readonly BoneGraftOfMandible: fhir.Coding;
        readonly SouthernBlotAssay: fhir.Coding;
        readonly FrontalSinusectomy: fhir.Coding;
        readonly RepairOfAneurysmWithGraftOfCommonFemoralArtery: fhir.Coding;
        readonly ArthrotomyOfKnee: fhir.Coding;
        readonly ExcisionOfAberrantTissueOfBreast: fhir.Coding;
        readonly Colopexy: fhir.Coding;
        readonly UnilateralMammography: fhir.Coding;
        readonly TransurethralDrainageOfProstaticAbscess: fhir.Coding;
        readonly RepairOfFractureWithSofieldTypeProcedure: fhir.Coding;
        readonly ExcisionOfLesionOfFemalePerineum: fhir.Coding;
        readonly FluorescentAntigenTiter: fhir.Coding;
        readonly UnilateralRecurrentInguinalHernia: fhir.Coding;
        readonly PrescribingCorneoscleralContactLens: fhir.Coding;
        readonly SutureOfColon: fhir.Coding;
        readonly UnilateralRecurrentFemoralHerniaWithGangrene: fhir.Coding;
        readonly AntibodyDetectionRBCEnzyme2StageTechniqueIncludingAntiHumanGlobulin: fhir.Coding;
        readonly VisualRehabilitationEyeMotionDefect: fhir.Coding;
        readonly RelationshipPsychotherapy: fhir.Coding;
        readonly GraftOfPalate: fhir.Coding;
        readonly DiagnosticRadiographyOfSacroiliacJoints: fhir.Coding;
        readonly OperativeProcedureOnKnee: fhir.Coding;
        readonly UndeterminedMannerOfDeathAccidentalMeansSuspected: fhir.Coding;
        readonly RemovalOfSupernumeraryDigit: fhir.Coding;
        readonly ResectionOfAbdominalArteryWithReplacement: fhir.Coding;
        readonly HypercortisolismDueToNonpituitaryTumor: fhir.Coding;
        readonly CompleteUnilateralCleftLip: fhir.Coding;
        readonly EchographyImmersionBScan: fhir.Coding;
        readonly ExcisionOfAuralGlomusTumorExtendedExtratemporal: fhir.Coding;
        readonly SteinmanTest: fhir.Coding;
        readonly DestructiveProcedureOnOvariesAndFallopianTubes: fhir.Coding;
        readonly WhiteBloodCellHistogramEvaluation: fhir.Coding;
        readonly LysisOfAdhesionsOfUrethra: fhir.Coding;
        readonly SequestrectomyOfPelvicBone: fhir.Coding;
        readonly VenographyOfLowerExtremityUnilateral: fhir.Coding;
        readonly ExposedToNoise: fhir.Coding;
        readonly Keratophakia: fhir.Coding;
        readonly FecalFatDifferentialQuantitative: fhir.Coding;
        readonly TransfusionReactionDueToMinorIncompatibility: fhir.Coding;
        readonly Murder: fhir.Coding;
        readonly BetaLactamaseChromogenicCephalosporinSusceptibilityTest: fhir.Coding;
        readonly DiagnosticRadiographyWithContrastMediaByInjectionPositiveContrastUnilateral: fhir.Coding;
        readonly ChartReviewByPhysician: fhir.Coding;
        readonly LigationOfAorticArch: fhir.Coding;
        readonly ConditioningPlayAudiometry: fhir.Coding;
        readonly SaddleBoil: fhir.Coding;
        readonly StruckByFirearmDischarge: fhir.Coding;
        readonly ForensicBiteMarkComparisonTechnique: fhir.Coding;
        readonly MitsudaReactionToLepromin: fhir.Coding;
        readonly SedimentationRateWestergren: fhir.Coding;
        readonly RemovalOfInternalFixationDeviceOfRadius: fhir.Coding;
        readonly CapsulorrhaphyOfJoint: fhir.Coding;
        readonly AnesthesiaForPoplitealThromboendarterectomy: fhir.Coding;
        readonly DilationOfLacrimalPunctumWithIrrigation: fhir.Coding;
        readonly ChemosurgeryOfStomachLesion: fhir.Coding;
        readonly LysisOfAdhesionsOfNose: fhir.Coding;
        readonly RemovalOfDeviceFromDigestiveSystem: fhir.Coding;
        readonly ExplorationOfDiscSpace: fhir.Coding;
        readonly TdTStain: fhir.Coding;
        readonly GalactokinaseMeasurement: fhir.Coding;
        readonly MuscularStrengthDevelopmentExercise: fhir.Coding;
        readonly DivisionOfArteriovenousFistulaWithLigation: fhir.Coding;
        readonly InjuryOfPneumogastricNerve: fhir.Coding;
        readonly ExcisionOfCommonBileDuct: fhir.Coding;
        readonly LengtheningOfMuscleOfHand: fhir.Coding;
        readonly ExcisionOfTumorFromElbowAreaDeepSubfascial: fhir.Coding;
        readonly CerebralThermography: fhir.Coding;
        readonly HeteroautogenousTransplantation: fhir.Coding;
        readonly HypertrophyOfLip: fhir.Coding;
        readonly ClosedHeartValvotomyOfMitralValve: fhir.Coding;
        readonly SeminalFluidDetection: fhir.Coding;
        readonly ExplorationOfCiliaryBody: fhir.Coding;
        readonly DestructionOfLesionOfPeripheralNerve: fhir.Coding;
        readonly PonticPorcelainFusedToPredominantlyBaseMetal: fhir.Coding;
        readonly EnlargementOfEyeSocket: fhir.Coding;
        readonly DiagnosticProcedureOnVitreous: fhir.Coding;
        readonly IdiopathicCystOfAnteriorChamber: fhir.Coding;
        readonly ArthrotomyOfGlenohumeralJointForInfectionWithDrainage: fhir.Coding;
        readonly AdministrationOfRhImmuneGlobulin: fhir.Coding;
        readonly ExcisionOfCervixByElectroconization: fhir.Coding;
        readonly Laparoamnioscopy: fhir.Coding;
        readonly SutureOfOldObstetricalLacerationOfUterus: fhir.Coding;
        readonly DeathByElectrocution: fhir.Coding;
        readonly UrinaryBladderResidualUrineStudy: fhir.Coding;
        readonly CurettageOfSclera: fhir.Coding;
        readonly HandTendonPulleyReconstructionWithTendonProsthesis: fhir.Coding;
        readonly OpenFractureOfDistalEndOfUlna: fhir.Coding;
        readonly ProteinSFreeAssay: fhir.Coding;
        readonly TsugeOperationOnFingerForMacrodactylyRepair: fhir.Coding;
        readonly CompleteLowerDenture: fhir.Coding;
        readonly UndeterminedMannerOfDeath: fhir.Coding;
        readonly PlacingAPatientOnABedpan: fhir.Coding;
        readonly RootWork: fhir.Coding;
        readonly OperationOnMultipleExtraocularMusclesWithTemporaryDetachmentFromGlobe: fhir.Coding;
        readonly GangrenousTonsillitis: fhir.Coding;
        readonly Polytomography: fhir.Coding;
        readonly UchidaFimbriectomyWithTubalLigationByEndoscopy: fhir.Coding;
        readonly LhermitteQuoteSPhenomenon: fhir.Coding;
        readonly ExcisionOfCystOfHand: fhir.Coding;
        readonly ImplantationOfTricuspidValveWithTissueGraft: fhir.Coding;
        readonly ComplicatedCatheterizationOfBladder: fhir.Coding;
        readonly RepairWithClosureOfNonSurgicalWound: fhir.Coding;
        readonly AbnormalFetalHeartBeatNotedBeforeLaborInLivebornInfant: fhir.Coding;
        readonly InsertionOfInfusionPumpBeneathSkin: fhir.Coding;
        readonly ReticulinAntibodyMeasurement: fhir.Coding;
        readonly DestructionOfLesionOfTongue: fhir.Coding;
        readonly TranspositionOfMuscleOfHand: fhir.Coding;
        readonly PulmonaryValveCommissurotomyByTransvenousBalloonMethod: fhir.Coding;
        readonly DiagnosticProcedureOnEyelid: fhir.Coding;
        readonly OperationOnBursa: fhir.Coding;
        readonly InjuryOfColonWithoutOpenWoundIntoAbdominalCavity: fhir.Coding;
        readonly AccidentalDeathInHome: fhir.Coding;
        readonly ClosedReductionOfFractureOfTarsalOrMetatarsal: fhir.Coding;
        readonly AntibodyTitrationHighProtein: fhir.Coding;
        readonly RemovalOfForeignBodyFromSkinOfAxilla: fhir.Coding;
        readonly AntibodyToSingleStrandedDNAMeasurement: fhir.Coding;
        readonly ElectroretinographyWithMedicalEvaluation: fhir.Coding;
        readonly AddClaspToExistingPartialDenture: fhir.Coding;
        readonly PulmonaryEmbolismFollowingMolarANDOREctopicPregnancy: fhir.Coding;
        readonly PartialUnilateralVulvectomy: fhir.Coding;
        readonly DestructionOfHemorrhoidsInternal: fhir.Coding;
        readonly NaturalDeathWithProvedCause: fhir.Coding;
        readonly ReplacementOfObstructedValveInShuntSystem: fhir.Coding;
        readonly DelayedOvulation: fhir.Coding;
        readonly UndeterminedMannerOfDeathHomicideSuspected: fhir.Coding;
        readonly Asphyxiation: fhir.Coding;
        readonly RadionuclideLacrimalFlowStudy: fhir.Coding;
        readonly PartialMeniscectomyOfTemporomandibularJoint: fhir.Coding;
        readonly AcousticStimulationTest: fhir.Coding;
        readonly MaintenanceDrugTherapyForMentalDisorder: fhir.Coding;
        readonly RemovalOfForeignBodyFromAlveolus: fhir.Coding;
        readonly PoisoningByAntivaricoseDrugANDORSclerosingAgent: fhir.Coding;
        readonly KingSteelquistHindquarterOperation: fhir.Coding;
        readonly RestorationCrownPorcelainFusedToNobleMetal: fhir.Coding;
        readonly DiseaseTypeANDORCategoryNotAssigned: fhir.Coding;
        readonly FibrinogenAssayQuantitative: fhir.Coding;
        readonly ClosureOfExternalFistulaOfTrachea: fhir.Coding;
        readonly ElectrosurgicalEpilationOfEyebrow: fhir.Coding;
        readonly TransplantationOfTestis: fhir.Coding;
        readonly FallOnEscalator: fhir.Coding;
        readonly SuffocationByCaveIn: fhir.Coding;
        readonly IndirectExaminationOfLarynx: fhir.Coding;
        readonly FetalDeathDueToTerminationOfPregnancy: fhir.Coding;
        readonly AbductionTest: fhir.Coding;
        readonly TorsionOfIntestine: fhir.Coding;
        readonly PeritonealDialysisIncludingCannulation: fhir.Coding;
        readonly AsphyxiationByInjuryToAirPassages: fhir.Coding;
        readonly DeathByFire: fhir.Coding;
        readonly UndeterminedMannerOfDeathAccidentalCauseSuspected: fhir.Coding;
        readonly RadiationPhysicsConsultation: fhir.Coding;
        readonly UndeterminedMannerOfDeathSuicideSuspected: fhir.Coding;
        readonly UnilateralThyroidLobectomy: fhir.Coding;
        readonly FallAtConstructionSite: fhir.Coding;
        readonly ThrombosisComplicatingPregnancyANDORPuerperium: fhir.Coding;
        readonly FallIntoHole: fhir.Coding;
        readonly AcquiredTelangiectasiaOfSmallANDORLargeIntestines: fhir.Coding;
        readonly AlbuminGlobulinRatio: fhir.Coding;
        readonly StruckBySharpObject: fhir.Coding;
        readonly StruckByFallingEarth: fhir.Coding;
        readonly DestructiveProcedureOfLesionOnSkinOfTrunk: fhir.Coding;
        readonly HepatitisAVirusAntibodyMeasurement: fhir.Coding;
        readonly UnexpectedSuddenDeathOfAdult: fhir.Coding;
        readonly AdultOsteochondritisOfSpine: fhir.Coding;
        readonly NonIncestuousChildConcubinage: fhir.Coding;
        readonly AngiographyOfRenalArteryUnilateral: fhir.Coding;
        readonly CongenitalAdhesionOfTongue: fhir.Coding;
        readonly HomicideAttempt: fhir.Coding;
        readonly AbsenceOfNauseaAndVomiting: fhir.Coding;
        readonly ThromboendarterectomyWithGraftOfMesentericArtery: fhir.Coding;
        readonly UnilateralModifiedRadicalNeckDissection: fhir.Coding;
        readonly ClosedChestSuction: fhir.Coding;
        readonly AbrasionANDORFrictionBurnOfToeWithInfection: fhir.Coding;
        readonly NontraumaticRuptureOfUrethra: fhir.Coding;
        readonly PartialUnilateralParalysis: fhir.Coding;
        readonly AcuteBronchiolitisWithObstruction: fhir.Coding;
        readonly UnilateralSmallKidney: fhir.Coding;
        readonly StruckByFallingObject: fhir.Coding;
        readonly MedicalProcedureOnPeriurethralTissue: fhir.Coding;
        readonly FineNeedleBiopsyOfThymus: fhir.Coding;
        readonly ModifiedRadicalMastectomyUnilateral: fhir.Coding;
        readonly UnilateralTraumaticAmputationOfLegBelowKneeWithComplication: fhir.Coding;
        readonly PathologyConsultationComprehensiveRecordsAndSpecimenWithReport: fhir.Coding;
        readonly UnilateralRadicalNeckDissection: fhir.Coding;
        readonly FallFromCarousel: fhir.Coding;
        readonly IncisionOfSubcutaneousTissue: fhir.Coding;
        readonly SuperficialForeignBodyOfGroinWithoutMajorOpenWoundButWithInfection: fhir.Coding;
        readonly AngiographyOfCervicalVertebralArteryUnilateral: fhir.Coding;
        readonly UnilateralMastectomy: fhir.Coding;
        readonly Opocephalus: fhir.Coding;
        readonly UnilateralNephrotomography: fhir.Coding;
        readonly AbscessOfHip: fhir.Coding;
        readonly OperationOnProstate: fhir.Coding;
        readonly MurderByHiredKiller: fhir.Coding;
        readonly DeathUnattendedByPhysician: fhir.Coding;
        readonly DrowningInBrackishWater: fhir.Coding;
        readonly DeathByAsphyxiation: fhir.Coding;
        readonly DrowningInSaltWater: fhir.Coding;
        readonly DeathByCremation: fhir.Coding;
        readonly FallFromBench: fhir.Coding;
        readonly ChiropracticAdjustmentOfCoccyxSubluxation: fhir.Coding;
        readonly StruckByInstrumentOfAggression: fhir.Coding;
        readonly AccidentalDeathInIndustrialPlace: fhir.Coding;
        readonly StruckByFallingMachineEquipment: fhir.Coding;
        readonly SchistosomaMansoniInfection: fhir.Coding;
        readonly UnilateralVulvectomy: fhir.Coding;
        readonly ManipulationOfAnkleANDFoot: fhir.Coding;
        readonly FallOnIce: fhir.Coding;
        readonly TotalUrethrectomy: fhir.Coding;
        readonly PostgastrectomyPhytobezoar: fhir.Coding;
        readonly AngiographyOfInternalCarotidArteryUnilateral: fhir.Coding;
        readonly UnilateralRecurrentInguinalHerniaWithGangrene: fhir.Coding;
        readonly ChronicRheumaticMyopericarditis: fhir.Coding;
        readonly CystOfUterus: fhir.Coding;
        readonly DiagnosticRadiographyWithContrastMediaByInjectionPositiveAndNegativeContrastUnilateral: fhir.Coding;
        readonly IntracerebralElectroencephalogram: fhir.Coding;
        readonly Tripping: fhir.Coding;
        readonly PelvicAndAbdominalLymphangiographyUnilateral: fhir.Coding;
        readonly ComputerizedAxialTomographyOfCervicalSpineWithContrast: fhir.Coding;
        readonly ArthrodesisOfInterphalangealJointOfGreatToe: fhir.Coding;
        readonly WhiteBloodCellCountObservation: fhir.Coding;
        readonly Garrotment: fhir.Coding;
        readonly UnilateralTraumaticAmputationOfArmWithComplication: fhir.Coding;
        readonly CompleteUnilateralParesis: fhir.Coding;
        readonly OpenWoundOfHeadWithComplication: fhir.Coding;
        readonly ExposureToAnimateMechanicalForce: fhir.Coding;
        readonly PartialArterialRetinalOcclusion: fhir.Coding;
        readonly RadicalUnilateralOrchiectomy: fhir.Coding;
        readonly UnilateralOrchidectomy: fhir.Coding;
        readonly StruckByFallingTool: fhir.Coding;
        readonly ExposureToAttackByOtherPerson: fhir.Coding;
        readonly SuicideByMultipleMeans: fhir.Coding;
        readonly StruckByFallingLiquidMatter: fhir.Coding;
        readonly CestrumDiurnumPoisoning: fhir.Coding;
        readonly FallFromGymnasticBars: fhir.Coding;
        readonly EngagedInFalling: fhir.Coding;
        readonly AsphyxiationBySustainedCompressionOfChest: fhir.Coding;
        readonly OccupationalNoiseExposure: fhir.Coding;
        readonly Infanticide: fhir.Coding;
        readonly ClinicalStageIB: fhir.Coding;
        readonly JudicialExecutionByGasChamber: fhir.Coding;
        readonly USOUnilateralSalpingoOophorectomy: fhir.Coding;
        readonly RheumaticMitralStenosisWithRegurgitation: fhir.Coding;
        readonly AccidentalDeath: fhir.Coding;
        readonly DiseaseRelatedDiet: fhir.Coding;
        readonly NaturalDeathWithProvedCauseWithoutAutopsy: fhir.Coding;
        readonly CranialDecompressionSubtemporalSupratentorial: fhir.Coding;
        readonly DressingAndFixationProcedure: fhir.Coding;
        readonly CJDCreutzfeldtJakobDisease: fhir.Coding;
        readonly AccidentWhileEngagedInHouseholdActivity: fhir.Coding;
        readonly UnilateralRepairOfInguinalHerniaWithProsthesisOrGraft: fhir.Coding;
        readonly JudicialExecutionByElectricChair: fhir.Coding;
        readonly TrafficVehicularAccidentalDeath: fhir.Coding;
        readonly SigmoidColonUlcer: fhir.Coding;
        readonly InsectBiteNonvenomousOfFootInfected: fhir.Coding;
        readonly JudicialExecution: fhir.Coding;
        readonly PneumoconiosisDueToSilica: fhir.Coding;
        readonly ExposureToAttackByMarineAnimal: fhir.Coding;
        readonly ExcisionOfBrain: fhir.Coding;
        readonly FlailMotion: fhir.Coding;
        readonly UnilateralRadicalMastectomy: fhir.Coding;
        readonly AnkleInstability: fhir.Coding;
        readonly ElectrophoresisMeasurement: fhir.Coding;
        readonly Episcleritis: fhir.Coding;
        readonly UnilateralHypoactiveLabyrinth: fhir.Coding;
        readonly GeneticRecombination: fhir.Coding;
        readonly ExcisionOfCystOfSpleen: fhir.Coding;
        readonly NoPain: fhir.Coding;
        readonly ThirdDegreeBurnOfMultipleSitesOfLowerLimb: fhir.Coding;
        readonly NaturalDeathReportableToMedicolegalAuthority: fhir.Coding;
        readonly UnilateralCondylarHyperplasiaOfMandible: fhir.Coding;
        readonly BacterialGrowthAbsent: fhir.Coding;
        readonly Avalanche: fhir.Coding;
        readonly SuicideAttempt: fhir.Coding;
        readonly SuperficialInjuryOfAxillaWithInfection: fhir.Coding;
        readonly Stumbling: fhir.Coding;
        readonly NaturalDeathWithProvedCauseByAutopsy: fhir.Coding;
        readonly UnilateralBisectionOfOvary: fhir.Coding;
        readonly LateCongenitalSyphilisLatentPlusSeroCSF2YearsORMore: fhir.Coding;
        readonly FallFromTree: fhir.Coding;
        readonly DrawerTest: fhir.Coding;
        readonly ModerateMajorDepression: fhir.Coding;
        readonly ExposureToMechanicalForce: fhir.Coding;
        readonly ChairSeatedFacingCoitalPosition: fhir.Coding;
        readonly FallFromChair: fhir.Coding;
        readonly UnilateralExplorationOfAdrenal: fhir.Coding;
        readonly FallFromMovingVehicle: fhir.Coding;
        readonly CongenitalAbsenceOfSkullBone: fhir.Coding;
        readonly Consanguinity: fhir.Coding;
        readonly Poliomyelomalacia: fhir.Coding;
        readonly FindingRelatingToBehavior: fhir.Coding;
        readonly InferiorMesentericArteryInjury: fhir.Coding;
        readonly TrainDerailment: fhir.Coding;
        readonly StruckByProjectile: fhir.Coding;
        readonly TotalCataract: fhir.Coding;
        readonly RootCanalTherapyMolarExcludingFinalRestoration: fhir.Coding;
        readonly UnilateralRetrogradePyelography: fhir.Coding;
        readonly ContactWithPlantThorns: fhir.Coding;
        readonly FecalFatMeasurement72HourCollection: fhir.Coding;
        readonly ErythemaSimplex: fhir.Coding;
        readonly AnemiaDueToChlorate: fhir.Coding;
        readonly HyperalimentationFormulaForIleus: fhir.Coding;
        readonly FallFromLadder: fhir.Coding;
        readonly Afebrile: fhir.Coding;
        readonly HypoglossofacialAnastomosis: fhir.Coding;
        readonly UnilateralSalpingectomy: fhir.Coding;
        readonly UnilateralTraumaticAmputationOfFootWithoutComplication: fhir.Coding;
        readonly CarbamazepineMeasurement: fhir.Coding;
        readonly ContractedPelvis: fhir.Coding;
        readonly UnilateralAdrenalectomy: fhir.Coding;
        readonly DeathFromOverwork: fhir.Coding;
        readonly DeathCauseUnknown: fhir.Coding;
        readonly AngiographyOfLowerExtremityArteriesUnilateral: fhir.Coding;
        readonly TherapeuticDiuresis: fhir.Coding;
        readonly ChalcosisOfEye: fhir.Coding;
        readonly Earthquake: fhir.Coding;
        readonly SpecialBloodCoagulationTestExplainByReport: fhir.Coding;
        readonly ContactWithPlantSpines: fhir.Coding;
        readonly SeparationOfCiliaryBody: fhir.Coding;
        readonly UnilateralTraumaticAmputationOfLegAtORAboveKneeWithoutComplication: fhir.Coding;
        readonly Tornado: fhir.Coding;
        readonly CompleteUnilateralParalysis: fhir.Coding;
        readonly UnilateralMastectomyExtendedSimple: fhir.Coding;
        readonly FoetalOrNeonatalEffectOfMaternalBloodLoss: fhir.Coding;
        readonly ExposureToInanimateMechanicalForce: fhir.Coding;
        readonly UnilateralNephrectomy: fhir.Coding;
        readonly DeepThirdDegreeBurnOfElbow: fhir.Coding;
        readonly SuicideBySelfAdministeredDrug: fhir.Coding;
        readonly TumorAntigenMeasurement: fhir.Coding;
        readonly RadicalMaxillaryAntrotomy: fhir.Coding;
        readonly TendernessAbsent: fhir.Coding;
        readonly AxisIDiagnosis: fhir.Coding;
        readonly UnexplainedSuddenDeath: fhir.Coding;
        readonly UnilateralRecurrentFemoralHerniaWithObstructionButNoGangrene: fhir.Coding;
        readonly FirstDegreeMurder: fhir.Coding;
        readonly UnilateralRecurrentFemoralHerniaWithGangreneANDObstruction: fhir.Coding;
        readonly ChorioretinalInfarction: fhir.Coding;
        readonly PinardQuoteSSign: fhir.Coding;
        readonly Wind: fhir.Coding;
        readonly FallInBathtub: fhir.Coding;
        readonly FallFromWindow: fhir.Coding;
        readonly Patricide: fhir.Coding;
        readonly SuperficialInjuryOfInterscapularRegionWithoutInfection: fhir.Coding;
        readonly AbdominalLymphangiographyUnilateral: fhir.Coding;
        readonly VolcanicEruption: fhir.Coding;
        readonly MHPGMeasurementUrine: fhir.Coding;
        readonly RemovalOfSubarachnoidUreteralShunt: fhir.Coding;
        readonly ChiropracticPatientEducation: fhir.Coding;
        readonly DiagnosticRadiographyWithContrastMediaByInjectionUnilateral: fhir.Coding;
        readonly NeonatalDeathOfMaleWithin4WeeksUSA: fhir.Coding;
        readonly UnilateralTraumaticAmputationOfLegBelowKneeWithoutComplication: fhir.Coding;
        readonly PseudohomosexualState: fhir.Coding;
        readonly EmbolectomyWithCatheterOfRadialArteryByArmIncision: fhir.Coding;
        readonly MusculoskeletalDisorder: fhir.Coding;
        readonly GestationPeriod9Weeks: fhir.Coding;
        readonly FlatAffect: fhir.Coding;
        readonly ThalassemiaIntermedia: fhir.Coding;
        readonly ExcisionOfBulbourethralGland: fhir.Coding;
        readonly EndoscopyOfPituitaryGland: fhir.Coding;
        readonly CongenitalRetinalAneurysm: fhir.Coding;
        readonly ExcisionOfTibiaAndFibulaForGraft: fhir.Coding;
        readonly PhlebectomyOfIntracranialVaricoseVein: fhir.Coding;
        readonly UltrasonicGuidanceForEndomyocardialBiopsy: fhir.Coding;
        readonly UnilateralCartilaginousCentrumOfCervicalVertebra: fhir.Coding;
        readonly UnilateralCartilaginousCentrumOfLumbarVertebra: fhir.Coding;
        readonly UnilateralCartilaginousCentrumOfSacralVertebra: fhir.Coding;
        readonly UnilateralCartilaginousCentrumOfThoracicVertebra: fhir.Coding;
        readonly RenonDelilleSyndrome: fhir.Coding;
        readonly AnesthesiaForProcedureOnThoracicEsophagus: fhir.Coding;
        readonly UnilateralFacialParesis: fhir.Coding;
        readonly UnilateralSensoryLossOfFaceAndTrunkOppositeSides: fhir.Coding;
        readonly UnilateralCataract: fhir.Coding;
        readonly UnilateralHearingLoss: fhir.Coding;
        readonly ExposureToExtremeTemperatureNonOccupational: fhir.Coding;
        readonly ExposureToMercury: fhir.Coding;
        readonly ExposureToCarbonMonoxide: fhir.Coding;
        readonly HomicideByOverkill: fhir.Coding;
        readonly AbuseOfElderlyPerson: fhir.Coding;
        readonly ChildSexAbuse: fhir.Coding;
        readonly ErythemaNodosumAcuteForm: fhir.Coding;
        readonly DisabilityEvaluationDisability6Percent: fhir.Coding;
        readonly OpenWoundOfPharynxWithoutComplication: fhir.Coding;
        readonly ToxicAmblyopia: fhir.Coding;
        readonly DrugTreatmentEducation: fhir.Coding;
        readonly IncisionAndExplorationOfLarynx: fhir.Coding;
        readonly ProstheticConstructionAndFitting: fhir.Coding;
        readonly AnorectalAgenesis: fhir.Coding;
        readonly ChronicInfantileEczema: fhir.Coding;
        readonly HemorrhagicProctitis: fhir.Coding;
        readonly PerirectalCellulitis: fhir.Coding;
        readonly NaturalDeathWithUnknownCause: fhir.Coding;
        readonly CellulitisOfTempleRegion: fhir.Coding;
        readonly WideQRSComplex: fhir.Coding;
        readonly ChagasQuoteDiseaseWithHeartInvolvement: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Encounter.d.ts.map