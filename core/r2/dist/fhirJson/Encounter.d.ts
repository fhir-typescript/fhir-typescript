import * as fhir from '../fhirJson.js';
/**
 * The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
 */
export interface EncounterStatusHistory extends fhir.BackboneElement {
    /**
     * planned | arrived | in-progress | onleave | finished | cancelled.
     */
    status: 'arrived' | 'cancelled' | 'finished' | 'in-progress' | 'onleave' | 'planned' | null;
    /**
     * Extended properties for primitive element: Encounter.statusHistory.status
     */
    _status?: fhir.FhirElement;
    /**
     * The time that the episode was in the specified status.
     */
    period: fhir.Period | null;
}
/**
 * The list of people responsible for providing the service.
 */
export interface EncounterParticipant extends fhir.BackboneElement {
    /**
     * Role of participant in encounter.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The period of time that the specified participant was present during the encounter. These can overlap or be sub-sets of the overall encounters period.
     */
    period?: fhir.Period | undefined;
    /**
     * Persons involved in the encounter other than the patient.
     */
    individual?: fhir.Reference | undefined;
}
/**
 * Details about the admission to a healthcare service.
 */
export interface EncounterHospitalization extends fhir.BackboneElement {
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
    admittingDiagnosis?: (fhir.Reference | null)[] | undefined;
    /**
     * Whether this hospitalization is a readmission and why if known.
     */
    reAdmission?: fhir.CodeableConcept | undefined;
    /**
     * Used to track patient's diet restrictions and/or preference. For a complete description of the nutrition needs of a patient during their stay, one should use the nutritionOrder resource which links to Encounter.
     */
    dietPreference?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Wheelchair, translator, stretcher, etc.
     */
    specialArrangement?: (fhir.CodeableConcept | null)[] | undefined;
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
    dischargeDiagnosis?: (fhir.Reference | null)[] | undefined;
}
/**
 * List of locations where  the patient has been during this encounter.
 */
export interface EncounterLocation extends fhir.BackboneElement {
    /**
     * The location where the encounter takes place.
     */
    location: fhir.Reference | null;
    /**
     * The status of the participants' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.
     */
    status?: 'active' | 'completed' | 'planned' | 'reserved' | undefined;
    /**
     * Extended properties for primitive element: Encounter.location.status
     */
    _status?: fhir.FhirElement;
    /**
     * Time period during which the patient was present at the location.
     */
    period?: fhir.Period | undefined;
}
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
export interface Encounter extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Encounter" | null;
    /**
     * Identifier(s) by which this encounter is known.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * planned | arrived | in-progress | onleave | finished | cancelled.
     */
    status: 'arrived' | 'cancelled' | 'finished' | 'in-progress' | 'onleave' | 'planned' | null;
    /**
     * Extended properties for primitive element: Encounter.status
     */
    _status?: fhir.FhirElement;
    /**
     * The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
     */
    statusHistory?: (fhir.EncounterStatusHistory | null)[] | undefined;
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class?: 'ambulatory' | 'daytime' | 'emergency' | 'field' | 'home' | 'inpatient' | 'other' | 'outpatient' | 'virtual' | undefined;
    /**
     * Extended properties for primitive element: Encounter.class
     */
    _class?: fhir.FhirElement;
    /**
     * Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
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
    episodeOfCare?: (fhir.Reference | null)[] | undefined;
    /**
     * The referral request this encounter satisfies (incoming referral).
     */
    incomingReferral?: (fhir.Reference | null)[] | undefined;
    /**
     * The list of people responsible for providing the service.
     */
    participant?: (fhir.EncounterParticipant | null)[] | undefined;
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
    reason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     */
    indication?: (fhir.Reference | null)[] | undefined;
    /**
     * Details about the admission to a healthcare service.
     */
    hospitalization?: fhir.EncounterHospitalization | undefined;
    /**
     * List of locations where  the patient has been during this encounter.
     */
    location?: (fhir.EncounterLocation | null)[] | undefined;
    /**
     * An organization that is in charge of maintaining the information of this Encounter (e.g. who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location's Organization.
     */
    serviceProvider?: fhir.Reference | undefined;
    /**
     * Another Encounter of which this encounter is a part of (administratively or in time).
     */
    partOf?: fhir.Reference | undefined;
}
//# sourceMappingURL=Encounter.d.ts.map