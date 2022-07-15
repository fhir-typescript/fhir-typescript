import * as fhir from '../fhir.js';
import { ClinicalImpressionStatusCodeType } from '../fhirValueSets/ClinicalImpressionStatusCodes.js';
/**
 * Valid arguments for the ClinicalImpressionInvestigations type.
 */
export interface ClinicalImpressionInvestigationsArgs extends fhir.BackboneElementArgs {
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutitirional) history may be used.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * A record of a specific investigation that was undertaken.
     */
    item?: fhir.ReferenceArgs[] | undefined;
}
/**
 * One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export declare class ClinicalImpressionInvestigations extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutitirional) history may be used.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A record of a specific investigation that was undertaken.
     */
    item: fhir.Reference[];
    /**
     * Default constructor for ClinicalImpressionInvestigations - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalImpressionInvestigationsArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClinicalImpressionFinding type.
 */
export interface ClinicalImpressionFindingArgs extends fhir.BackboneElementArgs {
    /**
     * Specific text of code for finding or diagnosis.
     */
    item: fhir.CodeableConceptArgs | null;
    /**
     * Which investigations support finding or diagnosis.
     */
    cause?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.finding.cause
     */
    _cause?: fhir.FhirElementArgs;
}
/**
 * Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
 */
export declare class ClinicalImpressionFinding extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specific text of code for finding or diagnosis.
     */
    item: fhir.CodeableConcept | null;
    /**
     * Which investigations support finding or diagnosis.
     */
    cause?: fhir.FhirString | undefined;
    /**
     * Default constructor for ClinicalImpressionFinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalImpressionFindingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClinicalImpressionRuledOut type.
 */
export interface ClinicalImpressionRuledOutArgs extends fhir.BackboneElementArgs {
    /**
     * Specific text of code for diagnosis.
     */
    item: fhir.CodeableConceptArgs | null;
    /**
     * Grounds for elimination.
     */
    reason?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.ruledOut.reason
     */
    _reason?: fhir.FhirElementArgs;
}
/**
 * Diagnosis considered not possible.
 */
export declare class ClinicalImpressionRuledOut extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specific text of code for diagnosis.
     */
    item: fhir.CodeableConcept | null;
    /**
     * Grounds for elimination.
     */
    reason?: fhir.FhirString | undefined;
    /**
     * Default constructor for ClinicalImpressionRuledOut - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalImpressionRuledOutArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClinicalImpression type.
 */
export interface ClinicalImpressionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ClinicalImpression" | undefined;
    /**
     * The patient being assessed.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the workflow status of the assessment.
     */
    status: fhir.FhirCode<ClinicalImpressionStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The point in time at which the assessment was concluded (not when it was recorded).
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.
     */
    previous?: fhir.ReferenceArgs | undefined;
    /**
     * This a list of the general problems/conditions for a patient.
     */
    problem?: fhir.ReferenceArgs[] | undefined;
    /**
     * The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
     */
    trigger?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
     */
    triggerCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
     */
    triggerReference?: fhir.ReferenceArgs | undefined;
    /**
     * One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigations?: fhir.ClinicalImpressionInvestigationsArgs[] | undefined;
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.protocol
     */
    _protocol?: fhir.FhirElementArgs;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.summary
     */
    _summary?: fhir.FhirElementArgs;
    /**
     * Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
     */
    finding?: fhir.ClinicalImpressionFindingArgs[] | undefined;
    /**
     * Diagnoses/conditions resolved since the last assessment.
     */
    resolved?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Diagnosis considered not possible.
     */
    ruledOut?: fhir.ClinicalImpressionRuledOutArgs[] | undefined;
    /**
     * Estimate of likely outcome.
     */
    prognosis?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.prognosis
     */
    _prognosis?: fhir.FhirElementArgs;
    /**
     * Plan of action after assessment.
     */
    plan?: fhir.ReferenceArgs[] | undefined;
    /**
     * Actions taken during assessment.
     */
    action?: fhir.ReferenceArgs[] | undefined;
}
/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export declare class ClinicalImpression extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ClinicalImpression";
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
    status: fhir.FhirCode<ClinicalImpressionStatusCodeType> | null;
    /**
     * The point in time at which the assessment was concluded (not when it was recorded).
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.
     */
    description?: fhir.FhirString | undefined;
    /**
     * A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.
     */
    previous?: fhir.Reference | undefined;
    /**
     * This a list of the general problems/conditions for a patient.
     */
    problem: fhir.Reference[];
    /**
     * The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
     */
    trigger?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ClinicalImpression.trigger[x]
     */
    protected static readonly _fts_triggerIsChoice: true;
    /**
     * One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigations: fhir.ClinicalImpressionInvestigations[];
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: fhir.FhirUri | undefined;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: fhir.FhirString | undefined;
    /**
     * Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
     */
    finding: fhir.ClinicalImpressionFinding[];
    /**
     * Diagnoses/conditions resolved since the last assessment.
     */
    resolved: fhir.CodeableConcept[];
    /**
     * Diagnosis considered not possible.
     */
    ruledOut: fhir.ClinicalImpressionRuledOut[];
    /**
     * Estimate of likely outcome.
     */
    prognosis?: fhir.FhirString | undefined;
    /**
     * Plan of action after assessment.
     */
    plan: fhir.Reference[];
    /**
     * Actions taken during assessment.
     */
    action: fhir.Reference[];
    /**
     * Default constructor for ClinicalImpression - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalImpressionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ClinicalImpression.d.ts.map