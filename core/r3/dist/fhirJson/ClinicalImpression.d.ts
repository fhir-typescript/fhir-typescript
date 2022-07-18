import * as fhir from '../fhirJson.js';
/**
 * One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export interface ClinicalImpressionInvestigation extends fhir.BackboneElement {
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutitirional) history may be used.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Most investigations are observations of one kind of or another but some other specific types of data collection resources can also be used.
     */
    item?: (fhir.Reference | null)[] | undefined;
}
/**
 * Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
 */
export interface ClinicalImpressionFinding extends fhir.BackboneElement {
    /**
     * Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * Which investigations support finding or diagnosis.
     */
    basis?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.finding.basis
     */
    _basis?: fhir.FhirElement;
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
     * A unique identifier assigned to the clinical impression that remains consistent regardless of what server the impression is stored on.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
     */
    status: 'completed' | 'draft' | 'entered-in-error' | null;
    /**
     * Extended properties for primitive element: ClinicalImpression.status
     */
    _status?: fhir.FhirElement;
    /**
     * This is present as a place-holder only and may be removed based on feedback/work group opinion.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A summary of the context and/or cause of the assessment - why / where was it performed, and what patient events/status prompted it.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.description
     */
    _description?: fhir.FhirElement;
    /**
     * The patient or group of individuals assessed as part of this record.
     */
    subject: fhir.Reference | null;
    /**
     * The encounter or episode of care this impression was created as part of.
     */
    context?: fhir.Reference | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.effective[x]
     */
    _effectiveDateTime?: fhir.FhirElement;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Indicates when the documentation of the assessment was complete.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.date
     */
    _date?: fhir.FhirElement;
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhir.Reference | undefined;
    /**
     * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
     */
    previous?: fhir.Reference | undefined;
    /**
     * e.g. The patient is a pregnant, and cardiac congestive failure, ‎Adenocarcinoma, and is allergic to penicillin.
     */
    problem?: (fhir.Reference | null)[] | undefined;
    /**
     * One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigation?: (fhir.ClinicalImpressionInvestigation | null)[] | undefined;
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.protocol
     */
    _protocol?: (fhir.FhirElement | null)[];
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
     * Estimate of likely outcome.
     */
    prognosisCodeableConcept?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * RiskAssessment expressing likely outcome.
     */
    prognosisReference?: (fhir.Reference | null)[] | undefined;
    /**
     * Actions recommended as a result of the impression should not be captured using the 'action' element.
     */
    action?: (fhir.Reference | null)[] | undefined;
    /**
     * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
//# sourceMappingURL=ClinicalImpression.d.ts.map