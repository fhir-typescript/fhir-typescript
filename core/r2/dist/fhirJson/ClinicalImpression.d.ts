import * as fhir from '../fhirJson.js';
/**
 * One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export interface ClinicalImpressionInvestigations extends fhir.BackboneElement {
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutitirional) history may be used.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A record of a specific investigation that was undertaken.
     */
    item?: (fhir.Reference | null)[] | undefined;
}
/**
 * Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
 */
export interface ClinicalImpressionFinding extends fhir.BackboneElement {
    /**
     * Specific text of code for finding or diagnosis.
     */
    item: fhir.CodeableConcept | null;
    /**
     * Which investigations support finding or diagnosis.
     */
    cause?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.finding.cause
     */
    _cause?: fhir.FhirElement;
}
/**
 * Diagnosis considered not possible.
 */
export interface ClinicalImpressionRuledOut extends fhir.BackboneElement {
    /**
     * Specific text of code for diagnosis.
     */
    item: fhir.CodeableConcept | null;
    /**
     * Grounds for elimination.
     */
    reason?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.ruledOut.reason
     */
    _reason?: fhir.FhirElement;
}
/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export interface ClinicalImpression extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ClinicalImpression" | null;
    /**
     * The patient being assessed.
     */
    patient: fhir.Reference | null;
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhir.Reference | undefined;
    /**
     * Identifies the workflow status of the assessment.
     */
    status: 'completed' | 'entered-in-error' | 'in-progress' | null;
    /**
     * Extended properties for primitive element: ClinicalImpression.status
     */
    _status?: fhir.FhirElement;
    /**
     * The point in time at which the assessment was concluded (not when it was recorded).
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.date
     */
    _date?: fhir.FhirElement;
    /**
     * A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.description
     */
    _description?: fhir.FhirElement;
    /**
     * A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.
     */
    previous?: fhir.Reference | undefined;
    /**
     * This a list of the general problems/conditions for a patient.
     */
    problem?: (fhir.Reference | null)[] | undefined;
    /**
     * The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
     */
    triggerCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
     */
    triggerReference?: fhir.Reference | undefined;
    /**
     * One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigations?: (fhir.ClinicalImpressionInvestigations | null)[] | undefined;
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.protocol
     */
    _protocol?: fhir.FhirElement;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.summary
     */
    _summary?: fhir.FhirElement;
    /**
     * Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
     */
    finding?: (fhir.ClinicalImpressionFinding | null)[] | undefined;
    /**
     * Diagnoses/conditions resolved since the last assessment.
     */
    resolved?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Diagnosis considered not possible.
     */
    ruledOut?: (fhir.ClinicalImpressionRuledOut | null)[] | undefined;
    /**
     * Estimate of likely outcome.
     */
    prognosis?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.prognosis
     */
    _prognosis?: fhir.FhirElement;
    /**
     * Plan of action after assessment.
     */
    plan?: (fhir.Reference | null)[] | undefined;
    /**
     * Actions taken during assessment.
     */
    action?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=ClinicalImpression.d.ts.map