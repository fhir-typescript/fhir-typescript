import * as fhir from '../fhir.js';
import { ClinicalimpressionStatusCodingType } from '../fhirValueSets/ClinicalimpressionStatusCodings.js';
import { ClinicalimpressionStatusCodeType } from '../fhirValueSets/ClinicalimpressionStatusCodes.js';
/**
 * Valid arguments for the ClinicalImpressionInvestigation type.
 */
export interface ClinicalImpressionInvestigationArgs extends fhir.BackboneElementArgs {
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Most investigations are observations of one kind or another but some other specific types of data collection resources can also be used.
     */
    item?: fhir.ReferenceArgs[] | undefined;
}
/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export declare class ClinicalImpressionInvestigation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Most investigations are observations of one kind or another but some other specific types of data collection resources can also be used.
     */
    item?: fhir.Reference[];
    /**
     * Default constructor for ClinicalImpressionInvestigation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalImpressionInvestigationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClinicalImpressionFinding type.
 */
export interface ClinicalImpressionFindingArgs extends fhir.BackboneElementArgs {
    /**
     * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemReference?: fhir.ReferenceArgs | undefined;
    /**
     * Which investigations support finding or diagnosis.
     */
    basis?: fhir.FhirString | string | undefined;
}
/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export declare class ClinicalImpressionFinding extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * Which investigations support finding or diagnosis.
     */
    basis?: fhir.FhirString | undefined;
    /**
     * Default constructor for ClinicalImpressionFinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalImpressionFindingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
     */
    status: ClinicalimpressionStatusCodeType | null;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled".
     * [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * This is present as a place-holder only and may be removed based on feedback/work group opinion.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * The patient or group of individuals assessed as part of this record.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effective?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Indicates when the documentation of the assessment was complete.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhir.ReferenceArgs | undefined;
    /**
     * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
     */
    previous?: fhir.ReferenceArgs | undefined;
    /**
     * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
     */
    problem?: fhir.ReferenceArgs[] | undefined;
    /**
     * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigation?: fhir.ClinicalImpressionInvestigationArgs[] | undefined;
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: fhir.FhirUri[] | string[] | undefined;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: fhir.FhirString | string | undefined;
    /**
     * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
     */
    finding?: fhir.ClinicalImpressionFindingArgs[] | undefined;
    /**
     * Estimate of likely outcome.
     */
    prognosisCodeableConcept?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * RiskAssessment expressing likely outcome.
     */
    prognosisReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Information supporting the clinical impression.
     */
    supportingInfo?: fhir.ReferenceArgs[] | undefined;
    /**
     * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
     */
    note?: fhir.AnnotationArgs[] | undefined;
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
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
     */
    status: ClinicalimpressionStatusCodeType | null;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled".
     * [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * This is present as a place-holder only and may be removed based on feedback/work group opinion.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The patient or group of individuals assessed as part of this record.
     */
    subject: fhir.Reference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effective?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ClinicalImpression.effective[x]
     */
    protected static readonly _fts_effectiveIsChoice: true;
    /**
     * Indicates when the documentation of the assessment was complete.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhir.Reference | undefined;
    /**
     * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
     */
    previous?: fhir.Reference | undefined;
    /**
     * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
     */
    problem?: fhir.Reference[];
    /**
     * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigation?: fhir.ClinicalImpressionInvestigation[];
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: fhir.FhirUri[];
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: fhir.FhirString | undefined;
    /**
     * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
     */
    finding?: fhir.ClinicalImpressionFinding[];
    /**
     * Estimate of likely outcome.
     */
    prognosisCodeableConcept?: fhir.CodeableConcept[];
    /**
     * RiskAssessment expressing likely outcome.
     */
    prognosisReference?: fhir.Reference[];
    /**
     * Information supporting the clinical impression.
     */
    supportingInfo?: fhir.Reference[];
    /**
     * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
     */
    note?: fhir.Annotation[];
    /**
     * Default constructor for ClinicalImpression - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClinicalImpressionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (ClinicalImpression.status)
     */
    static statusRequiredCoding(): ClinicalimpressionStatusCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=ClinicalImpression.d.ts.map