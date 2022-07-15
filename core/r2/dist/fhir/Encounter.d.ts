import * as fhir from '../fhir.js';
import { EncounterStateCodeType } from '../fhirValueSets/EncounterStateCodes.js';
import { EncounterLocationStatusCodeType } from '../fhirValueSets/EncounterLocationStatusCodes.js';
import { EncounterClassCodeType } from '../fhirValueSets/EncounterClassCodes.js';
/**
 * Valid arguments for the EncounterStatusHistory type.
 */
export interface EncounterStatusHistoryArgs extends fhir.BackboneElementArgs {
    /**
     * planned | arrived | in-progress | onleave | finished | cancelled.
     */
    status: fhir.FhirCode<EncounterStateCodeType> | string | undefined;
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
 * The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
 */
export declare class EncounterStatusHistory extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * planned | arrived | in-progress | onleave | finished | cancelled.
     */
    status: fhir.FhirCode<EncounterStateCodeType> | null;
    /**
     * The time that the episode was in the specified status.
     */
    period: fhir.Period | null;
    /**
     * Default constructor for EncounterStatusHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterStatusHistoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EncounterParticipant type.
 */
export interface EncounterParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * Role of participant in encounter.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The period of time that the specified participant was present during the encounter. These can overlap or be sub-sets of the overall encounters period.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Persons involved in the encounter other than the patient.
     */
    individual?: fhir.ReferenceArgs | undefined;
}
/**
 * The list of people responsible for providing the service.
 */
export declare class EncounterParticipant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Role of participant in encounter.
     */
    type: fhir.CodeableConcept[];
    /**
     * The period of time that the specified participant was present during the encounter. These can overlap or be sub-sets of the overall encounters period.
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * The location from which the patient came before admission.
     */
    origin?: fhir.ReferenceArgs | undefined;
    /**
     * From where patient was admitted (physician referral, transfer).
     */
    admitSource?: fhir.CodeableConceptArgs | undefined;
    /**
     * The admitting diagnosis field is used to record the diagnosis codes as reported by admitting practitioner. This could be different or in addition to the conditions reported as reason-condition(s) for the encounter.
     */
    admittingDiagnosis?: fhir.ReferenceArgs[] | undefined;
    /**
     * Whether this hospitalization is a readmission and why if known.
     */
    reAdmission?: fhir.CodeableConceptArgs | undefined;
    /**
     * Used to track patient's diet restrictions and/or preference. For a complete description of the nutrition needs of a patient during their stay, one should use the nutritionOrder resource which links to Encounter.
     */
    dietPreference?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Wheelchair, translator, stretcher, etc.
     */
    specialArrangement?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Location to which the patient is discharged.
     */
    destination?: fhir.ReferenceArgs | undefined;
    /**
     * Category or kind of location after discharge.
     */
    dischargeDisposition?: fhir.CodeableConceptArgs | undefined;
    /**
     * The final diagnosis given a patient before release from the hospital after all testing, surgery, and workup are complete.
     */
    dischargeDiagnosis?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Details about the admission to a healthcare service.
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
     * The location from which the patient came before admission.
     */
    origin?: fhir.Reference | undefined;
    /**
     * From where patient was admitted (physician referral, transfer).
     */
    admitSource?: fhir.CodeableConcept | undefined;
    /**
     * The admitting diagnosis field is used to record the diagnosis codes as reported by admitting practitioner. This could be different or in addition to the conditions reported as reason-condition(s) for the encounter.
     */
    admittingDiagnosis: fhir.Reference[];
    /**
     * Whether this hospitalization is a readmission and why if known.
     */
    reAdmission?: fhir.CodeableConcept | undefined;
    /**
     * Used to track patient's diet restrictions and/or preference. For a complete description of the nutrition needs of a patient during their stay, one should use the nutritionOrder resource which links to Encounter.
     */
    dietPreference: fhir.CodeableConcept[];
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy: fhir.CodeableConcept[];
    /**
     * Wheelchair, translator, stretcher, etc.
     */
    specialArrangement: fhir.CodeableConcept[];
    /**
     * Location to which the patient is discharged.
     */
    destination?: fhir.Reference | undefined;
    /**
     * Category or kind of location after discharge.
     */
    dischargeDisposition?: fhir.CodeableConcept | undefined;
    /**
     * The final diagnosis given a patient before release from the hospital after all testing, surgery, and workup are complete.
     */
    dischargeDiagnosis: fhir.Reference[];
    /**
     * Default constructor for EncounterHospitalization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterHospitalizationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * The status of the participants' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.
     */
    status?: fhir.FhirCode<EncounterLocationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Encounter.location.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Time period during which the patient was present at the location.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * List of locations where  the patient has been during this encounter.
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
     * The status of the participants' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.
     */
    status?: fhir.FhirCode<EncounterLocationStatusCodeType> | undefined;
    /**
     * Time period during which the patient was present at the location.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for EncounterLocation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterLocationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * planned | arrived | in-progress | onleave | finished | cancelled.
     */
    status: fhir.FhirCode<EncounterStateCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Encounter.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
     */
    statusHistory?: fhir.EncounterStatusHistoryArgs[] | undefined;
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class?: fhir.FhirCode<EncounterClassCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Encounter.class
     */
    _class?: fhir.FhirElementArgs;
    /**
     * Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates the urgency of the encounter.
     */
    priority?: fhir.CodeableConceptArgs | undefined;
    /**
     * The patient present at the encounter.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care, and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
     */
    episodeOfCare?: fhir.ReferenceArgs[] | undefined;
    /**
     * The referral request this encounter satisfies (incoming referral).
     */
    incomingReferral?: fhir.ReferenceArgs[] | undefined;
    /**
     * The list of people responsible for providing the service.
     */
    participant?: fhir.EncounterParticipantArgs[] | undefined;
    /**
     * The appointment that scheduled this encounter.
     */
    appointment?: fhir.ReferenceArgs | undefined;
    /**
     * The start and end time of the encounter.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Quantity of time the encounter lasted. This excludes the time during leaves of absence.
     */
    length?: fhir.QuantityArgs | undefined;
    /**
     * Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     */
    indication?: fhir.ReferenceArgs[] | undefined;
    /**
     * Details about the admission to a healthcare service.
     */
    hospitalization?: fhir.EncounterHospitalizationArgs | undefined;
    /**
     * List of locations where  the patient has been during this encounter.
     */
    location?: fhir.EncounterLocationArgs[] | undefined;
    /**
     * An organization that is in charge of maintaining the information of this Encounter (e.g. who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location's Organization.
     */
    serviceProvider?: fhir.ReferenceArgs | undefined;
    /**
     * Another Encounter of which this encounter is a part of (administratively or in time).
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
     * planned | arrived | in-progress | onleave | finished | cancelled.
     */
    status: fhir.FhirCode<EncounterStateCodeType> | null;
    /**
     * The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
     */
    statusHistory: fhir.EncounterStatusHistory[];
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class?: fhir.FhirCode<EncounterClassCodeType> | undefined;
    /**
     * Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
     */
    type: fhir.CodeableConcept[];
    /**
     * Indicates the urgency of the encounter.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * The patient present at the encounter.
     */
    patient?: fhir.Reference | undefined;
    /**
     * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care, and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
     */
    episodeOfCare: fhir.Reference[];
    /**
     * The referral request this encounter satisfies (incoming referral).
     */
    incomingReferral: fhir.Reference[];
    /**
     * The list of people responsible for providing the service.
     */
    participant: fhir.EncounterParticipant[];
    /**
     * The appointment that scheduled this encounter.
     */
    appointment?: fhir.Reference | undefined;
    /**
     * The start and end time of the encounter.
     */
    period?: fhir.Period | undefined;
    /**
     * Quantity of time the encounter lasted. This excludes the time during leaves of absence.
     */
    length?: fhir.Quantity | undefined;
    /**
     * Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
     */
    reason: fhir.CodeableConcept[];
    /**
     * Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     */
    indication: fhir.Reference[];
    /**
     * Details about the admission to a healthcare service.
     */
    hospitalization?: fhir.EncounterHospitalization | undefined;
    /**
     * List of locations where  the patient has been during this encounter.
     */
    location: fhir.EncounterLocation[];
    /**
     * An organization that is in charge of maintaining the information of this Encounter (e.g. who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location's Organization.
     */
    serviceProvider?: fhir.Reference | undefined;
    /**
     * Another Encounter of which this encounter is a part of (administratively or in time).
     */
    partOf?: fhir.Reference | undefined;
    /**
     * Default constructor for Encounter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EncounterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Encounter.d.ts.map