import * as fhir from '../fhirJson.js';
/**
 * The current status is always found in the current version of the resource, not the status history.
 */
export interface EncounterStatusHistory extends fhir.BackboneElement {
    /**
     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
     */
    status: 'arrived' | 'cancelled' | 'entered-in-error' | 'finished' | 'in-progress' | 'onleave' | 'planned' | 'triaged' | 'unknown' | null;
    /**
     * The time that the episode was in the specified status.
     */
    period: fhir.Period | null;
}
/**
 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
 */
export interface EncounterClassHistory extends fhir.BackboneElement {
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class: fhir.Coding | null;
    /**
     * The time that the episode was in the specified class.
     */
    period: fhir.Period | null;
}
/**
 * The list of people responsible for providing the service.
 */
export interface EncounterParticipant extends fhir.BackboneElement {
    /**
     * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
     */
    period?: fhir.Period | undefined;
    /**
     * Persons involved in the encounter other than the patient.
     */
    individual?: fhir.Reference | undefined;
}
/**
 * The list of diagnosis relevant to this encounter.
 */
export interface EncounterDiagnosis extends fhir.BackboneElement {
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
    rank?: number | undefined;
    /**
     * Extended properties for primitive element: Encounter.diagnosis.rank
     */
    _rank?: fhir.FhirElement;
}
/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 */
export interface EncounterHospitalization extends fhir.BackboneElement {
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
    dietPreference?: fhir.CodeableConcept[] | undefined;
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy?: fhir.CodeableConcept[] | undefined;
    /**
     * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
     */
    specialArrangement?: fhir.CodeableConcept[] | undefined;
    /**
     * Location/organization to which the patient is discharged.
     */
    destination?: fhir.Reference | undefined;
    /**
     * Category or kind of location after discharge.
     */
    dischargeDisposition?: fhir.CodeableConcept | undefined;
}
/**
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
export interface EncounterLocation extends fhir.BackboneElement {
    /**
     * The location where the encounter takes place.
     */
    location: fhir.Reference | null;
    /**
     * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
     */
    status?: 'active' | 'completed' | 'planned' | 'reserved' | undefined;
    /**
     * This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.
     * There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
     */
    physicalType?: fhir.CodeableConcept | undefined;
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
    resourceType: "Encounter";
    /**
     * Identifier(s) by which this encounter is known.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
     */
    status: 'arrived' | 'cancelled' | 'entered-in-error' | 'finished' | 'in-progress' | 'onleave' | 'planned' | 'triaged' | 'unknown' | null;
    /**
     * The current status is always found in the current version of the resource, not the status history.
     */
    statusHistory?: fhir.EncounterStatusHistory[] | undefined;
    /**
     * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
     */
    class: fhir.Coding | null;
    /**
     * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
     */
    classHistory?: fhir.EncounterClassHistory[] | undefined;
    /**
     * Since there are many ways to further classify encounters, this element is 0..*.
     */
    type?: fhir.CodeableConcept[] | undefined;
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
    episodeOfCare?: fhir.Reference[] | undefined;
    /**
     * The request this encounter satisfies (e.g. incoming referral or procedure request).
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * The list of people responsible for providing the service.
     */
    participant?: fhir.EncounterParticipant[] | undefined;
    /**
     * The appointment that scheduled this encounter.
     */
    appointment?: fhir.Reference[] | undefined;
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
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * The list of diagnosis relevant to this encounter.
     */
    diagnosis?: fhir.EncounterDiagnosis[] | undefined;
    /**
     * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
     */
    account?: fhir.Reference[] | undefined;
    /**
     * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
     * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
     */
    hospitalization?: fhir.EncounterHospitalization | undefined;
    /**
     * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
     */
    location?: fhir.EncounterLocation[] | undefined;
    /**
     * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
     */
    serviceProvider?: fhir.Reference | undefined;
    /**
     * This is also used for associating a child's encounter back to the mother's encounter.
     * Refer to the Notes section in the Patient resource for further details.
     */
    partOf?: fhir.Reference | undefined;
}
//# sourceMappingURL=Encounter.d.ts.map