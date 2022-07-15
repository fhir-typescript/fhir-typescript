import * as fhir from '../fhirJson.js';
/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export interface ConditionStage extends fhir.BackboneElement {
    /**
     * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
     */
    summary?: fhir.CodeableConcept | undefined;
    /**
     * Reference to a formal record of the evidence on which the staging assessment is based.
     */
    assessment?: (fhir.Reference | null)[] | undefined;
}
/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export interface ConditionEvidence extends fhir.BackboneElement {
    /**
     * A manifestation or symptom that led to the recording of this condition.
     */
    code?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Links to other relevant information, including pathology reports.
     */
    detail?: (fhir.Reference | null)[] | undefined;
}
/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
export interface Condition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Condition" | null;
    /**
     * This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the condition as not currently valid or of concern.
     */
    clinicalStatus?: 'active' | 'inactive' | 'recurrence' | 'remission' | 'resolved' | undefined;
    /**
     * Extended properties for primitive element: Condition.clinicalStatus
     */
    _clinicalStatus?: fhir.FhirElement;
    /**
     * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
     * This element is labeled as a modifier because the status contains the code refuted and entered-in-error that mark the Condition as not currently valid.
     */
    verificationStatus?: 'confirmed' | 'differential' | 'entered-in-error' | 'provisional' | 'refuted' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: Condition.verificationStatus
     */
    _verificationStatus?: fhir.FhirElement;
    /**
     * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Coding of the severity with a terminology is preferred, where possible.
     */
    severity?: fhir.CodeableConcept | undefined;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodySite?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Indicates the patient or group who the condition record is associated with.
     */
    subject: fhir.Reference | null;
    /**
     * This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
     */
    context?: fhir.Reference | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.onset[x]
     */
    _onsetDateTime?: fhir.FhirElement;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetAge?: fhir.Age | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetPeriod?: fhir.Period | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetRange?: fhir.Range | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetString?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.onset[x]
     */
    _onsetString?: fhir.FhirElement;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.abatement[x]
     */
    _abatementDateTime?: fhir.FhirElement;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementAge?: fhir.Age | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Condition.abatement[x]
     */
    _abatementBoolean?: fhir.FhirElement;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementPeriod?: fhir.Period | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementRange?: fhir.Range | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementString?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.abatement[x]
     */
    _abatementString?: fhir.FhirElement;
    /**
     * The assertedDate represents the date when this particular Condition record was created in the EHR, not the date of the most recent update in terms of when severity, abatement, etc. were specified.  The date of the last record modification can be retrieved from the resource metadata.
     */
    assertedDate?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.assertedDate
     */
    _assertedDate?: fhir.FhirElement;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: fhir.Reference | undefined;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: fhir.ConditionStage | undefined;
    /**
     * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
     */
    evidence?: (fhir.ConditionEvidence | null)[] | undefined;
    /**
     * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
//# sourceMappingURL=Condition.d.ts.map