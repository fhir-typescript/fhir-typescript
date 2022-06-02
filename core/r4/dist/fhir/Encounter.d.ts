import * as fhir from '../fhir.js';
import { EncounterStatusCodeType } from '../fhirValueSets/EncounterStatusCodes.js';
import { V3ActEncounterCodingType } from '../fhirValueSets/V3ActEncounterCodings.js';
import { EncounterParticipantTypeCodingType } from '../fhirValueSets/EncounterParticipantTypeCodings.js';
import { DiagnosisRoleCodingType } from '../fhirValueSets/DiagnosisRoleCodings.js';
import { EncounterAdmitSourceCodingType } from '../fhirValueSets/EncounterAdmitSourceCodings.js';
import { EncounterSpecialCourtesyCodingType } from '../fhirValueSets/EncounterSpecialCourtesyCodings.js';
import { EncounterSpecialArrangementsCodingType } from '../fhirValueSets/EncounterSpecialArrangementsCodings.js';
import { EncounterLocationStatusCodeType } from '../fhirValueSets/EncounterLocationStatusCodes.js';
import { EncounterReasonCodingType } from '../fhirValueSets/EncounterReasonCodings.js';
/**
 * Valid arguments for the EncounterStatusHistory type.
 */
export interface EncounterStatusHistoryArgs extends fhir.BackboneElementArgs {
    /**
     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
     */
    status: fhir.FhirCode<EncounterStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Encounter.statusHistory.status
     */
    _status?: fhir.FhirElementArgs;
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
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
    static get classExtensibleCodings(): V3ActEncounterCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
    static get typeExtensibleCodings(): EncounterParticipantTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
    /**
     * Extended properties for primitive element: Encounter.diagnosis.rank
     */
    _rank?: fhir.FhirElementArgs;
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
    static get usePreferredCodings(): DiagnosisRoleCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
    static get admitSourcePreferredCodings(): EncounterAdmitSourceCodingType;
    /**
     * Preferred-bound Value Set for specialCourtesy (Encounter.hospitalization.specialCourtesy)
     */
    static get specialCourtesyPreferredCodings(): EncounterSpecialCourtesyCodingType;
    /**
     * Preferred-bound Value Set for specialArrangement (Encounter.hospitalization.specialArrangement)
     */
    static get specialArrangementPreferredCodings(): EncounterSpecialArrangementsCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: Encounter.location.status
     */
    _status?: fhir.FhirElementArgs;
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
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: Encounter.status
     */
    _status?: fhir.FhirElementArgs;
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
    static get classExtensibleCodings(): V3ActEncounterCodingType;
    /**
     * Preferred-bound Value Set for reasonCode (Encounter.reasonCode)
     */
    static get reasonCodePreferredCodings(): EncounterReasonCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Encounter.d.ts.map